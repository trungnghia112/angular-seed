import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { AboutService } from './about.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    AboutRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [AboutComponent],
  exports: [AboutComponent],
  providers: [AboutService]
})
export class AboutModule {
}
