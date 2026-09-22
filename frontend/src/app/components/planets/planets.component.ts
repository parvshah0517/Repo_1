import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Planet } from '../../services/data.service';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];
  loading = true;
  error = false;
  selected: Planet | null = null;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getPlanets().subscribe({
      next: (planets) => { this.planets = planets; this.loading = false; },
      error: () => { this.error = true; this.loading = false; }
    });
  }

  select(planet: Planet): void {
    this.selected = this.selected?.id === planet.id ? null : planet;
  }
}
