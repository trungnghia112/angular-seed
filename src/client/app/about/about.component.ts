import { Component } from '@angular/core';
import { AboutService } from './about.service';
import { Article } from '../shared/models/article.model';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
  articles: Article[] = [];

  constructor(private aboutService: AboutService) {
    this.aboutService.get().subscribe((res: any)=> {
      this.articles = res.articles;
    });
  }
}
