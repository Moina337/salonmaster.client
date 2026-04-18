import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {}
