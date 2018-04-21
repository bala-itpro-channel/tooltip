import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  onSubmit(f: NgForm) {
    alert('Work in progress. comming soon...');
  }

  langClick(lang) {
    if (localStorage.getItem('localeId') && lang !== localStorage.getItem('localeId')) {
      localStorage.removeItem('localeId');
      localStorage.setItem('localeId', lang);
    } else {
      localStorage.setItem('localeId', lang);
    }

    location.reload(true);
  }
}
