import { gatos } from './interfaces/gatos.interface';
import { Component, OnInit } from '@angular/core';
import { RestService } from './services/rest.service/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex-mod';
  
}
