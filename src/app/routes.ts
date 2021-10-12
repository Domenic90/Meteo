//definzione delle rotte
import { Routes } from "@angular/router";
import { WeatherComponent } from "./weather-app/weather-app.component";

export const allAppRoutes: Routes = [
  {path: '', component: WeatherComponent}
];
