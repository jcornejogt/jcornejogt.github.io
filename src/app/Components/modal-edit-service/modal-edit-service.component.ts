import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Geolocation } from '@capacitor/core';
import { MarkerInterface } from 'src/app/models/markers';


@Component({
  selector: 'app-modal-edit-service',
  templateUrl: './modal-edit-service.component.html',
  styleUrls: ['./modal-edit-service.component.scss'],
})

export class ModalEditServiceComponent implements OnInit {

  locationsCollection: AngularFirestoreCollection;
  public documentid: any;
  public editServiceForm: FormGroup;
  lat: number;
  lng: number;
  public marker: MarkerInterface;

  constructor(
    private ModalController: ModalController,
    private firebaseServiceService: FirebaseServiceService,
    public router: Router,
    public formBuilder: FormBuilder,
    private afs: AngularFirestore) {
  }

  ngOnInit() {

    this.editServiceForm = this.formBuilder.group({
      userUid: ['', Validators.required],
      id: ['', Validators.required],
      nombreServicio: ['', Validators.required],
      descripcionServicio: ['', Validators.required],
      idProfesional: ['', Validators.required],
      direccionServicio: ['', Validators.required],
      markerId: ['', Validators.required]
    });


    let editSubscribe = this.firebaseServiceService.getService(this.documentid).subscribe((service) => {
      let markerAddress = this.afs.collection('locations').doc(service.payload.data()['markerId']).snapshotChanges().subscribe((markerItem) => {
        this.editServiceForm.setValue({
          id: this.documentid,
          userUid: service.payload.data()['userUid'],
          nombreServicio: service.payload.data()['serviceName'],
          idProfesional: service.payload.data()['idProfesional'],
          descripcionServicio: service.payload.data()['serviceDescription'],
          direccionServicio: markerItem.payload.data()['address'],
          markerId: markerItem.payload.id
        });

        this.initMap(markerItem.payload.id, this.editServiceForm)
        markerAddress.unsubscribe();
      });
      editSubscribe.unsubscribe();
    });
  }

  public editService(form, documentId = this.documentid) {

    debugger;
    this.marker.address = form.direccionServicio;
    this.marker.title = form.nombreServicio;
    this.marker.userUid = form.userUid;

    console.log(this.marker)

    this.locationsCollection = this.afs.collection('locations');
    this.locationsCollection.doc(form.markerId).update(this.marker)

    let data = {
      userUid: form.userUid,
      serviceName: form.nombreServicio,
      idProfesional: form.idProfesional,
      serviceDescription: form.descripcionServicio,
      markerId: form.markerId
    }


    this.firebaseServiceService.updateService(documentId, data).then(() => {
      this.editServiceForm.setValue({
        id: '',
        userUid: '',
        nombreServicio: '',
        idProfesional: '',
        descripcionServicio: '',
        direccionServicio: '',
        markerId: ''
      });

      console.log('Documento editado exitósamente');

      this.dismissModal();

    }, (error) => {
      console.log(error);
    });


  }


  async initMap(markerId: string, form) {

    const coordinates = await Geolocation.getCurrentPosition()
    this.lat = coordinates.coords.latitude
    this.lng = coordinates.coords.longitude


    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    mapboxgl.accessToken = 'pk.eyJ1IjoiY2F0c29mdCIsImEiOiJja2Q1MWc1Mm8yMnY4MzNxeTdlcjFpN3J1In0.KccsnE6wfp5DKhl_blRvog';

    this.afs.collection('locations').doc(markerId).snapshotChanges().subscribe((markerItem) => {

      let marker: MarkerInterface = {
        address: markerItem.payload.data()['address'],
        position: markerItem.payload.data()['position'],
        title: markerItem.payload.data()['title'],
        userUid: markerItem.payload.data()['userUid'],
        serviceId: markerItem.payload.data()['serviceId']
      }

      console.log(marker)

      var map = new mapboxgl.Map({
        container: 'mapid',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: marker.position,
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
                        marker.address+'</p>',
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
    });
  }




  dismissModal() {
    this.ModalController.dismiss();
  }
}

