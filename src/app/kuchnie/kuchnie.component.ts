import { Component } from '@angular/core';
import { Model1 } from '../Model/Model1';
import { KuchnieService } from '../kuchnie.service';

@Component({
  selector: 'app-kuchnie',
  templateUrl: './kuchnie.component.html',
  styleUrls: ['./kuchnie.component.css']
})
export class KuchnieComponent {

  Kuchnie: Model1[] = [];

  constructor(private KuchnieService: KuchnieService) {}

  getKuchnie(): void {
    this.Kuchnie = this.KuchnieService.getKuchnie();
  }

  ngOnInit(): void {
    this.getKuchnie();
  }

  itemsPerPage = 3;
  p = 1;

  searchText: string = '';

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
  }

}

