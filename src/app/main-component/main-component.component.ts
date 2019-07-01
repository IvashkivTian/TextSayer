import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item.service';
import { ListComponent} from '../list/list.component';
import { ItemComponent} from '../item/item.component';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  

  constructor(public itemService: ItemService) { }

  ngOnInit() {
    
  }

  deleteItem(id: number){
    console.log(id);

    return this.itemService.listItems = 
          this.itemService.listItems.filter(x => x.id !== id )
    }
    
    isBtnShow = true;   
  buttonDel(){
    this.isBtnShow = !this.isBtnShow;
  }
  
}
   
  
