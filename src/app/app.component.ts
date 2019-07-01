import { Component } from '@angular/core';
import { MainComponentComponent } from './main-component/main-component.component';
import { ItemService } from './item.service';
import { ListComponent} from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myProgect';
}
