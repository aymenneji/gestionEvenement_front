import { Component } from '@angular/core';

@Component({
  /*selector: 'app-root',n
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']*/
  selector:'body', template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'PidevFront';
}
