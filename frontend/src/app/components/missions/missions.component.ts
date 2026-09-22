import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Mission } from '../../services/data.service';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.scss'
})
export class MissionsComponent implements OnInit {
  missions: Mission[] = [];
  loading = true;
  error = false;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getMissions().subscribe({
      next: (missions) => { this.missions = missions.sort((a, b) => a.year - b.year); this.loading = false; },
      error: () => { this.error = true; this.loading = false; }
    });
  }
}
