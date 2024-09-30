import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SignalsGraphComponent} from "./signals-graph/signals-graph.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalsGraphComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled2';



}
