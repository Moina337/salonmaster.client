import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { SessionService } from '../../services/session-service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  isMobileMenuOpen = false;

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }

  Deconnecter() {
    this.sessionService.logout(); 
    this.router.navigate(['/connexion']);
  }
}