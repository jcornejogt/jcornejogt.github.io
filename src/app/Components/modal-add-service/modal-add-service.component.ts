import { MarkerInterface } from './../../models/markers';
import { ServiceInterface, PersonInterface } from './../../models/user';
import { Observable } from 'rxjs';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, Input } from '@angular/core';
import { Geolocation } from '@capacitor/core';

//declare var google;

@Component({
  selector: 'app-modal-add-service',
  templateUrl: './modal-add-service.component.html',
  styleUrls: ['./modal-add-service.component.scss'],
})

export class ModalAddServiceComponent implements OnInit {

  //variables para la geolocalizacion:
  locations: Observable<any>;
  locationsCollection: AngularFirestoreCollection;

  //Variables para cargar el servicio en el formulario de la modal:
  public serviceForm: FormGroup;
  public markerDocId = null;

  //variables para el mapa:
  public infoWindows: any[];
  public map: any = null;
  public markers: MarkerInterface[];
  public marker: MarkerInterface;
  public personInfo: PersonInterface;
  public personsRef: PersonInterface;
  public position: any;
  public lat: number;
  public lng: number;

  //variable con la que la modal recibe parametro de entrada:
  @Input() userUid: string;

  constructor(
    private ModalController: ModalController,
    private firebaseServiceService: FirebaseServiceService,
    public router: Router,
    public formBuilder: FormBuilder,
    private afs: AngularFirestore) { }

  ngOnInit() {

    this.serviceForm = this.formBuilder.group({
      userUid: ['', Validators.required],
      nombreServicio: ['', Validators.required],
      descripcionServicio: ['', Validators.required],
      idProfesional: ['', Validators.required],
      direccionServicio: ['', Validators.required]
    });

    let suscribePerson = this.afs.collection('persons', ref => ref.where("userUid", "==", this.userUid)).snapshotChanges().subscribe((person) => {
      person.forEach(element => {

        this.personInfo = {
          userUid: element.payload.doc.data()['userUid'],
          firstName: element.payload.doc.data()['firstName'],
          lastName: element.payload.doc.data()['lastName'],
          professions: element.payload.doc.data()['professions']
        };

        this.serviceForm.setValue({
          userUid: this.userUid,
          nombreServicio: '',
          idProfesional: this.personInfo.firstName + " " + this.personInfo.lastName,
          descripcionServicio: '',
          direccionServicio: ''
        });

      });

      suscribePerson.unsubscribe();
    });

    this.initMap();

    //Estas dos lineas deberian ser solo para los clientes, para que vean todas las ubicaciones disponibles
    this.locationsCollection = this.afs.collection('locations');
    //this.getMarkers();

    //Carga el mapa de google.
    //this.loadMap();
  }


  //Agregar un servicio
  public addService(form) {

    this.marker.address = form.direccionServicio;
    this.marker.title = form.nombreServicio;

    this.locationsCollection.add(this.marker).then((res) => {

      //Obtiene la informacion del formulario y la asigna a un array que contendra todos los datos del nuevo servicio
      const serviceData: ServiceInterface = {
        serviceName: form.nombreServicio,
        serviceDescription: form.descripcionServicio,
        idProfesional: form.idProfesional,
        userUid: form.userUid,
        markerId: res.id
      }

      //Crea el servicio en la BD con el metodo "createService" y manda a limpiar el formulario con el "form.setValue"
      this.firebaseServiceService.createService(serviceData).then(() => {
        this.serviceForm.setValue({
          userUid: '',
          nombreServicio: '',
          idProfesional: '',
          descripcionServicio: '',
          direccionServicio: ''
        });
        console.log('Documento creado exitósamente!');
      });

      //Cierra la modal
      this.dismissModal();

    });
  }


  /* getMarkers() {
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
  } */



  //este metodo crea un marker con la info que se le pasa como parametro LOGICA GOOGLE MAPS.
  /*   addMarker(pMarker: MarkerInterface) {
  
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
    } */


  /* Este metodo renderiza/muestra todos los markers que tengamos en la coleccion de markers 
  la cual aun no esta en la BD para mientras la trabajamos aqui en el codigo como un array LOGICA GOOGLE MAPS.
  
  renderMarkers() {
  
      console.log("Estos son los markers que se van a renderizar: " + this.markers)
  
      this.markers.forEach(marker => {
        this.addMarker(marker);
        console.log(marker)
      });
    } */




  //Este metodo carga el mapa, lo mandamos a llamar en el metodo de inicio ngOnInit LOGICA GOOGLE MAPS.
  /*  loadMap() {
     // Esta linea crea el mapa y se lo pasa al elemento html.
     const mapEle: HTMLElement = document.getElementById('map');
 
     // Esta linea obtiene las coordenadas de la posicion actual.
     Geolocation.getCurrentPosition().then(res => {
       //Esta linea centra el mapa en la posicion actual
       this.map = new google.maps.Map(mapEle, {
         center: { lat: res.coords.latitude, lng: res.coords.longitude },
         zoom: 12
       }); 
 
 
 
       //Esta agrega la posicion actual como un marcador a la coleccion de marcadores para que el renderizador lo muestre. LOGICA GOOGLE MAPS.
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
  
       //Muestra todos los marcadores en pantalla si existen en la coleccion de marcadores.LOGICA GOOGLE MAPS.
       google.maps.event.addListenerOnce(this.map, 'idle', () => {
         mapEle.classList.add('show-map');
         this.renderMarkers();
       }
       );
 
     });
   }*/

  /* //Este metodo es el que guarda la posicion actual
  async saveCurrentPosition(markerTitle, mAdress) {
    await Geolocation.getCurrentPosition().then(res => {

      let markerActualPosition: MarkerInterface =
      {
        position: {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        },
        title: markerTitle,
        address: mAdress,
        userUid: this.userUid,
        serviceId: 
      }
      this.addNewLocation(markerActualPosition);
    });
  } */

  //Este metodo guarda en la BD la locacion que le pases.
  addNewLocation(marker: MarkerInterface) {
    this.locationsCollection.add(marker).then((res) => {
      this.markerDocId = res.id
      console.log("imprimiendo marker id:" + this.markerDocId)
    });


  }

  async initMap() {

    const coordinates = await Geolocation.getCurrentPosition()
    this.lat = coordinates.coords.latitude
    this.lng = coordinates.coords.longitude

    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    mapboxgl.accessToken = 'pk.eyJ1IjoiY2F0c29mdCIsImEiOiJja2Q1MWc1Mm8yMnY4MzNxeTdlcjFpN3J1In0.KccsnE6wfp5DKhl_blRvog';

    let marker = {
      position: {
        lat: this.lat,
        lng: this.lng
      },
      title: 'Tu posicion actual.',
      address: 'Direcccion se ingresa o se trae de BD?',
      userUid: this.userUid,
      serviceId: ''
    };

    this.marker = marker;

console.log(marker)

    var map = new mapboxgl.Map({
      container: 'mapid',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [marker.position.lng, marker.position.lat],
      zoom: 13
    });


    let element = document.createElement('div')
    element.className = 'marker'

    map.on('load', () => {

      map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        // Add an image to use as a custom marker
        function (error, image) {
          if (error) throw error;
          map.addImage('custom-marker', image);

          map.addSource('places', {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [
                {
                  'type': 'Feature',
                  'properties': {
                    'description':
                      '<strong>' + marker.title + '</strong>' +
                      '<p><a href="http://www.mtpleasantdc.com/makeitmtpleasant"' +
                      'target="_blank" title="Opens in a new window">Url de prueba</a>' +
                      'Esta es la ubicacion de tu servicio que se va mostrar a los clientes.</p>',
                    'icon': 'rocket'
                  },
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [marker.position.lng, marker.position.lat]
                  }
                }
              ]
            }
          });

          // Add a layer showing the places.
          map.addLayer({
            'id': 'places',
            'type': 'symbol',
            'source': 'places',
            'layout': {
              'icon-image': 'custom-marker',
              'icon-allow-overlap': true
            }
          });

          // When a click event occurs on a feature in the places layer, open a popup at the
          // location of the feature, with description HTML from its properties.
          map.on('click', 'places', function (e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(description)
              .addTo(map);
          });

          // Change the cursor to a pointer when the mouse is over the places layer.
          map.on('mouseenter', 'places', function () {
            map.getCanvas().style.cursor = 'pointer';
          });

          // Change it back to a pointer when it leaves.
          map.on('mouseleave', 'places', function () {
            map.getCanvas().style.cursor = '';
          });

          map.resize();
        })


    });
  }

  dismissModal() {
    this.ModalController.dismiss();
  }

}
