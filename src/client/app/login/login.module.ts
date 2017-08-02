import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    LoginRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
