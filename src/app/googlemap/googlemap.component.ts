import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  lat: number = -36.852701;
  lng: number = 174.7699;
  zoom: number = 17;
  locationChosen: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  chooseLocation(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }

}
