import { MarkerInterface } from 'src/app/models/markers';
import { Observable, empty } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Geolocation } from '@capacitor/core';
declare var google;

@Component({
  selector: 'app-modal-add-service',
  templateUrl: './modal-add-service.component.html',
  styleUrls: ['./modal-add-service.component.scss'],
})
export class ModalAddServiceComponent {

  //variables para la geolocalizacion:
  locations: Observable<any>;
  locationsCollection: AngularFirestoreCollection;

  //Variables para cargar el servicio en el formulario de la modal:
  public serviceForm: FormGroup;
  public documentId = null;
  public isTracking = null;
  public watch = null;
  public myLatLng = null;

  //variables para el mapa:
  public infoWindows: any[];
  public map: any = null;
  public markers: MarkerInterface[];



  //variable con la que la modal recibe parametro de entrada:
  @Input() userUid: string;



  constructor(
    private ModalController: ModalController,
    private firebaseServiceService: FirebaseServiceService,
    public router: Router,
    public formBuilder: FormBuilder,
    private afs: AngularFirestore) { }


  ngOnInit() {

    //Construye el formulario para poder llamarlo en el HTML:
    this.serviceForm = this.formBuilder.group({
      userUid: [this.userUid, Validators.required],
      nombreServicio: ['', Validators.required],
      descripcionServicio: ['', Validators.required],
      idProfesional: ['', Validators.required]
    });

    this.locationsCollection = this.afs.collection('locations');

   this.getMarkers();

    //Carga el mapa.
    this.loadMap();
  }

  //Agregar un servicio
  public addService(form, documentId = this.documentId) {

    //Obtiene la informacion del formulario y la seigna a un array que contendra todos los datos del nuevo servicio
    let data = {
      userUid: form.userUid,
      nombreServicio: form.nombreServicio,
      idProfesional: form.idProfesional,
      descripcionServicio: form.descripcionServicio
    }

    //Crea el servicio en la BD con el metodo "createService" y manda a limpiar el formulario con el "form.setValue"
    this.firebaseServiceService.createService(data).then(() => {
      this.serviceForm.setValue({
        userUid: '',
        nombreServicio: '',
        idProfesional: '',
        descripcionServicio: ''
      });
      console.log('Documento creado exitósamente!');
    });

    //Cierra la modal
    this.dismissModal();
  }

  getMarkers() {
    this.markers = [];

    this.afs.collection('locations').snapshotChanges().subscribe((locations) => {
      locations.forEach(res => {

        let marker: MarkerInterface = {
          position: res.payload.doc.data()["position"],
          title: res.payload.doc.data()["title"],
          address: res.payload.doc.data()["address"],
          userUid: res.payload.doc.data()["userUid"]
        }

        this.markers.push(marker);
      })
    });
  }


  //este metodo crea un marker con la info que se le pasa como parametro.
  addMarker(pMarker: MarkerInterface) {

    let marker = new google.maps.Marker({
      position: pMarker.position,
      map: this.map,
      title: pMarker.title
    });

    let infoWindowContent = '<div id="content">' +
      '<h2 id="firstHeading" class="firstHeading">' + pMarker.title + '</h2>' +
      '<p>Direccion:' + pMarker.address + '</p>' +
      '<p>Coordenadas:' + marker.position + '</p>' +
      '</div>';

    var info = new google.maps.InfoWindow({
      content: infoWindowContent
    })

    marker.addListener('click', function () {
      info.open(this.map, marker)
    });

    return pMarker;
  }

  /* Este metodo renderiza/muestra todos los markers que tengamos en la coleccion de markers 
  la cual aun no esta en la BD para mientras la trabajamos aqui en el codigo como un array*/
  renderMarkers() {

    console.log("Estos son los markers que se van a renderizar: " + this.markers)

    this.markers.forEach(marker => {
      this.addMarker(marker);
      console.log(marker)
    });
  }

  //Este metodo carga el mapa, lo mandamos a llamar en el metodo de inicio ngOnInit
  loadMap() {
    // Esta linea crea el mapa y se lo pasa al elemento html.
    const mapEle: HTMLElement = document.getElementById('map');

    // Esta linea obtiene las coordenadas de la posicion actual.
    Geolocation.getCurrentPosition().then(res => {
      //Esta linea centra el mapa en la posicion actual
      this.map = new google.maps.Map(mapEle, {
        center: { lat: res.coords.latitude, lng: res.coords.longitude },
        zoom: 12
      });
      //Esta agrega la posicion actual como un marcador a la coleccion de marcadores para que el renderizador lo muestre.
      this.markers.push(
        {
          position: {
            lat: res.coords.latitude,
            lng: res.coords.longitude,
          },
          title: 'Mi posicion',
          address: 'Tu te encuentras aqui.',
          userUid: this.userUid
        });

        //Muestra todos los marcadores en pantalla si existen en la coleccion de marcadores.
        google.maps.event.addListenerOnce(this.map, 'idle', () => {
          mapEle.classList.add('show-map');
          this.renderMarkers();
      }
      );

      });
  }

  //Este metodo es el que guarda la posicion actual
  async saveCurrentPosition() {
    await Geolocation.getCurrentPosition().then(res => {

      let markersActualPosition: MarkerInterface =
      {
        position: {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        },
        title: 'Mi posicion',
        address: 'Este Marcador debe apuntar mi posicion actual (deberia ser em BERLIN).',
        userUid: this.userUid
      }

      this.addNewLocation(
        markersActualPosition);
    });
  }

  /* este metodo es para grabar los cambios en tu posicion y asi hacer un track confrome a eso 
  (falta implementarlo, debemos hablar de en que forma nos puede servir). */

  /* startTracking() {
    this.isTracking = true;
    this.watch = Geolocation.watchPosition({}, (position, err) => {
      if (position) {
        this.addNewLocation(
          this.markersActualPosition.title,
          position.coords.latitude,
          position.coords.longitude,
          this.markersActualPosition.address,
          this.userUid, position.timestamp);
      }
    });
  } */

  //Este metodo guarda en la BD la locacion que le pases.
  addNewLocation(marker: MarkerInterface) {
    this.locationsCollection.add(
      {
          position: {
            lat: marker.position.lat,
            lng: marker.position.lng,
          },
          title: marker.title,
          address: marker.address,
          userUid: marker.userUid
      }
    );
    this.map.setCenter(marker.position.lat, marker.position.lng);
    this.map.setZoom(15);
  }

  dismissModal() {
    this.ModalController.dismiss();
  }

}
