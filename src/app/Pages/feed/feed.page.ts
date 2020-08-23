import { async } from '@angular/core/testing';
import { element } from 'protractor';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalViewServiceComponent } from './../../Components/modal-view-service/modal-view-service.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../services/auth.service';
import { ModalEditServiceComponent } from './../../Components/modal-edit-service/modal-edit-service.component';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, AlertController, IonSlides } from '@ionic/angular';
import { FirebaseServiceService } from '../../services/firebase-service.service';
import { NgZone } from "@angular/core";
import { ModalAddServiceComponent } from 'src/app/Components/modal-add-service/modal-add-service.component';
import { AlertsComponent } from './../../Components/alerts/alerts.component'
import { MarkerInterface } from 'src/app/models/markers';
import { Geolocation } from '@capacitor/core';
import { runInThisContext } from 'vm';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  e: MarkerInterface[];

  constructor(
    private alertCntrl: AlertController,
    private router: Router,
    private firebaseServiceService: FirebaseServiceService,
    private modalController: ModalController,
    private authSvc: AuthService,
    private afAuth: AngularFireAuth,
    private ngZone: NgZone,
    private afs: AngularFirestore
  ) { }

  public services = [];
  public isAdmin: any = null;
  public SegmentIndex: any = null;
  public userUid: string = null;
  public selectedSlides: any;
  public segment;
  public alrt = new AlertsComponent(this.alertCntrl);
  public locations: MarkerInterface[] = [];
  public markersId = [];
  public loc: any;
  public Center: Number[];
  public ClientLat: Number;
  public ClientLng: Number;

  ngOnInit() {
    this.getServices();
    this.getCurrentUser();

  }


  getServices() {
    this.services = [];
    this.firebaseServiceService.getServices().subscribe((service) => {

      service.forEach((service: any) => {

        this.services.push({
          id: service.payload.doc.id,
          data: service.payload.doc.data(),
          markerid: service.payload.doc.data()['markerId']
        });

        this.markersId.push(service.payload.doc.data()['markerId'])

      });

      console.log("markers: " + this.markersId)

      var features = []

      this.markersId.forEach((markerId: any) => {
        console.log("Recorriendo markers: " + markerId)

        this.afs.collection('locations').doc(markerId).snapshotChanges().subscribe(markerItem => {
          console.log("Locaciones: " + markerItem.payload.id)

          this.locations.push({
            address: markerItem.payload.data()['address'],
            position: markerItem.payload.data()['position'],
            title: markerItem.payload.data()['title'],
            userUid: markerItem.payload.data()['userUid'],
            serviceId: markerItem.payload.data()['serviceId']
          })

          features.push({
            'type': 'Feature',
            'properties': {
              'description':
                '<strong>' + markerItem.payload.data()['title'] + '</strong>' +
                '<p><a href="http://www.mtpleasantdc.com/makeitmtpleasant"' +
                'target="_blank" title="Opens in a new window">Url de prueba</a><br>' +
                markerItem.payload.data()['address'] + '</p>',
              'icon': 'rocket'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [markerItem.payload.data()['position'].lng, markerItem.payload.data()['position'].lat]
            }
          })

        });
      })

      this.initMap(features)
    });
  }

  getCurrentUser() {
    this.authSvc.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authSvc.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles);
          this.isAdmin = this.isAdmin.hasOwnProperty('professional');
        }
        )
      }
    })
  }

  searchServices($event) {
    const value = $event.target.value;
    console.log("La busqueda es:" + value);
    this.services = [];
    this.firebaseServiceService.getService(value).subscribe((service) => {
      this.services.push({
        id: service.payload.id,
        data: service.payload.data()
      });
    });
  }

  async editService(docId: any) {
    const modal = await this.modalController.create({
      component: ModalEditServiceComponent,
      componentProps: { documentid: docId }
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.getServices();
    });
    modal.present();
  }

  async getViewServices(docId: any) {
    const modal = await this.modalController.create({
      component: ModalViewServiceComponent,
      componentProps: { documentid: docId }
    });
    modal.present();
  }

  async addService() {
    const modal = await this.modalController.create({
      component: ModalAddServiceComponent,
      componentProps: { userUid: this.userUid }
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.getServices();
    });
    modal.present();
  }

  async segmentChanged(ev: any) {
    await this.selectedSlides.slideTo(this.segment)
  } 

  async slidesChanged(slides: IonSlides) {
    this.selectedSlides = slides;
    slides.getActiveIndex().then(selectedIndex => {
      this.segment = selectedIndex
    })
  }



  public async removeService(docId: any) {

    let header = 'Suave chatel!'
    let message = 'Seguro querés borrar este servicio prix?'

    const confirm = await this.alrt.presentAlertConfirm(header, message);
    if (confirm) {
      await this.firebaseServiceService.deleteService(docId).then(() => {
        this.getServices();
        console.log('Deleted');
      })
    } else {
      console.log('Canceled');
    }
  };


  public async getcurrentposition() {

    var coords = (await Geolocation.getCurrentPosition()).coords
    var coordinates = [coords.longitude, coords.latitude]

    return coordinates;
  }




  public initMap(features) {

    var center;


    this.getcurrentposition().then(coords => {
      center = coords;
      console.log('Coordenadas: ' + center)
      var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
      mapboxgl.accessToken = 'pk.eyJ1IjoiY2F0c29mdCIsImEiOiJja2Q1MWc1Mm8yMnY4MzNxeTdlcjFpN3J1In0.KccsnE6wfp5DKhl_blRvog';
      var map = new mapboxgl.Map({
        container: 'mapHome',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 12
      });


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
                'features': features
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
    });


    let element = document.createElement('div')
    element.className = 'marker'



  }

  logOut() {
    console.log('Hasta pronto!');
    this.authSvc.logout();
  }
}
