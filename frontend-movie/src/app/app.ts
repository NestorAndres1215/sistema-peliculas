import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  Titulo: string = "TITULO";

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.Titulo);
  }


  protected title = 'frontend-movie';
}
