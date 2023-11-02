import { Component } from '@angular/core';
import { Model } from '../Model/Model';
import { SchodyService } from '../schody.service';

@Component({
  selector: 'app-schody',
  templateUrl: './schody.component.html',
  styleUrls: ['./schody.component.css']
})
export class SchodyComponent {

  Schody: Model[] = [];

  constructor(private SchodyService: SchodyService) {}

  getSchody(): void {
    this.Schody = this.SchodyService.getSchody();
  }

  ngOnInit(): void {
    this.getSchody();
  }

  searchText: string = '';

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
  }


  itemsPerPage = 3;
  p = 1;
}
