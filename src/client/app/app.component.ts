import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import { UserService } from './shared/services/user.service';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  constructor(private userService: UserService) {
    console.log('Environment config', Config);

    this.userService.populate();
  }
}
