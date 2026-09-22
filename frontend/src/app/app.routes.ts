import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { MissionsComponent } from './components/missions/missions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Space Explorer — Home' },
  { path: 'planets', component: PlanetsComponent, title: 'Space Explorer — Planets' },
  { path: 'missions', component: MissionsComponent, title: 'Space Explorer — Missions' },
  { path: '**', redirectTo: '' }
];
