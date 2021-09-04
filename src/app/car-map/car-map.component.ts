import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.services';

@Component({
  selector: 'app-car-map',
  templateUrl: './car-map.component.html',
  styleUrls: ['./car-map.component.scss'],
})
export class CarMapComponent implements OnInit {
  constructor(private map: MapService) {}

  ngOnInit(): void {
    this.map.buildMap();
  }
}
