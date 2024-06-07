// src/app/home/home.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home Page</h1>
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/users">Users</a>
    </nav>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
