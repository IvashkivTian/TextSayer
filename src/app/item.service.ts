import { Injectable } from '@angular/core';
import { MainComponentComponent } from './main-component/main-component.component';
import { ListComponent} from './list/list.component';
import { ItemComponent} from './item/item.component';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  listItems : Array<{id: number, name: string, isBtnShow: boolean, comments: string[]}> =[];

 set(listItems:Array<{id: number, name: string, isBtnShow: boolean, comments: string[]}>)
 {
  localStorage.setItem('listItems',JSON.stringify(this.listItems));
 }
 get(listItems:{id: number, name: string, isBtnShow: boolean, comments: string[]}){
   return this.listItems = JSON.parse(localStorage.getItem('listItems'));
 }
  constructor() { }
}
