import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-canasta',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgClass],
  templateUrl: './canasta.component.html',
  styleUrl: './canasta.component.css'
})
export class CanastaComponent {
  @Input()
  producto;
}
