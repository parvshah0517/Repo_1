import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  planetCount = 0;
  missionCount = 0;
  apiOnline = false;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getPlanets().subscribe({
      next: (planets) => { this.planetCount = planets.length; this.apiOnline = true; },
      error: () => { this.apiOnline = false; }
    });
    this.data.getMissions().subscribe({
      next: (missions) => { this.missionCount = missions.length; }
    });
  }
}
