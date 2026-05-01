import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private router = inject(Router);

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isConnected(): boolean {
    const token = this.getToken();
    if (!token) return false;

    return !this.isTokenExpired(token); // Vérifie si le token existe ET n'est pas expiré
  }

  private isTokenExpired(token: string): boolean {
    try {
      const decoded: any = jwtDecode(token);
      const expirationDate = decoded.exp * 1000; // Le exp est en secondes, JS utilise des millisecondes
      return Date.now() > expirationDate;
    } catch (err) {
      return true; // Si le token est malformé, on considère qu'il est expiré
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/connexion']);
  }
}
