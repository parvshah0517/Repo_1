import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Planet {
  id: number;
  name: string;
  type: string;
  diameterKm: number;
  distanceFromSunAU: number;
  moons: number;
  color: string;
  fact: string;
}

export interface Mission {
  id: number;
  name: string;
  agency: string;
  year: number;
  status: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(`${this.baseUrl}/planets`);
  }

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.baseUrl}/missions`);
  }
}
