import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/core';
import { MarkerInterface } from 'src/app/models/markers';
import { AngularFirestore } from '@angular/fire/firestore';
import { title } from 'process';
import { ModalPurchaseServiceComponent } from 'src/app/modal-purchase-service/modal-purchase-service.component';

@Component({
  selector: 'app-modal-view-service',
  templateUrl: './modal-view-service.component.html',
  styleUrls: ['./modal-view-service.component.scss'],
})
export class ModalViewServiceComponent implements OnInit {

  price = '100'
  public documentid: any;
  public viewServiceForm: FormGroup;
  lat: number;
  lng: number;
  public markers: MarkerInterface[];
  public markersOfthisuser: MarkerInterface[];
  public marker: MarkerInterface;
  @Input() userUid: string;

  constructor(
    private ModalController: ModalController,
    private firebaseServiceService: FirebaseServiceService,
    public router: Router,
    public formBuilder: FormBuilder,
    private afs: AngularFirestore) {
  }

  ngOnInit() {

    this.viewServiceForm = this.formBuilder.group({
      id: ['', Validators.required],
      idProfesional: ['', Validators.required],
      markerId: ['', Validators.required],
      serviceDescription: ['', Validators.required],
      serviceName: ['', Validators.required],
      userUid: ['', Validators.required],
      direccionServicio: ['', Validators.required]
    });

    let editSubscribe = this.firebaseServiceService.getService(this.documentid).subscribe((service) => {

      let markerAddress = this.afs.collection('locations').doc(service.payload.data()['markerId']).snapshotChanges().subscribe((markerItem) => {
        this.viewServiceForm.setValue({
          id: this.documentid,
          userUid: service.payload.data()['userUid'],
          serviceName: service.payload.data()['serviceName'],
          idProfesional: service.payload.data()['idProfesional'],
          serviceDescription: service.payload.data()['serviceDescription'],
          direccionServicio: markerItem.payload.data()['address'],
          markerId: markerItem.payload.id
        });

        let marker: MarkerInterface = {
          address: markerItem.payload.data()['address'],
          position: markerItem.payload.data()['position'],
          title: markerItem.payload.data()['title'],
          userUid: markerItem.payload.data()['userUid'],
          serviceId: markerItem.payload.data()['serviceId']
        }

        this.initMap(marker);

        markerAddress.unsubscribe();
      });
      editSubscribe.unsubscribe();
    });
  }


  initMap(marker: MarkerInterface) {

    console.log(marker)

    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    mapboxgl.accessToken = 'pk.eyJ1IjoiY2F0c29mdCIsImEiOiJja2Q1MWc1Mm8yMnY4MzNxeTdlcjFpN3J1In0.KccsnE6wfp5DKhl_blRvog';

    var map = new mapboxgl.Map({
      container: 'mapid',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: {
        lng: marker.position.lng,
        lat: marker.position.lat
      },
      zoom: 10
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
                      marker.address + '</p>',
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

  async openPurchaseModal(docId: any) {
    const modal = await this.ModalController.create({
      component: ModalPurchaseServiceComponent,
      componentProps: { paymentAmount: this.price }
    });
    
    modal.present();
  }

  dismissModal() {
    this.ModalController.dismiss();
  }
}
