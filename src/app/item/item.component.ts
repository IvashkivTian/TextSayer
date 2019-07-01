import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ListComponent} from '../list/list.component';
import { MainComponentComponent } from '../main-component/main-component.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item: {id: number, name: string, isBtnShow: boolean,comments: string[]};

 
  constructor(public itemService: ItemService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getItem()
  }

  getItem(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.item = this.itemService.listItems.find(x => x.id == id);
  }
 
  addComment (name: string){
    this.item.comments.push(name);
    console.log(this.itemService.listItems)
    this.itemService.set(this.itemService.listItems);
  }
}
 

