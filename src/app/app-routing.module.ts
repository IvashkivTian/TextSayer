import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { ListComponent} from './list/list.component';
import { ItemComponent} from './item/item.component';

const routes: Routes = [
  { path: 'main', component: MainComponentComponent},
  { path: '', redirectTo:'main', pathMatch:'full'},
  { path: 'createItem', component: ListComponent},
  { path: 'item/:id', component: ItemComponent}
  
]


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
