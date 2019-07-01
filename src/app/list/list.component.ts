import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 

  constructor(public itemService: ItemService) { }

  ngOnInit() {
    
  }
  addItem(name: string, isBtnShow: boolean){
    if(name !== ''){
     
      this.itemService.listItems.push(
        {id: this.itemService.listItems.length,
        name: name,
        isBtnShow: isBtnShow,
        comments: []}
      )
      this.itemService.set(this.itemService.listItems);
      console.log(this.itemService.listItems)
        }else{
          return false;
        }

  }

}
