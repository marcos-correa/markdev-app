import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  responseBook:any

  constructor(
    private homeservice:HomeService
  ) { }

  ngOnInit(): void {
    this.getBook()
  }
 
  getBook(){
    this.homeservice.getBook().subscribe((res: any) => {
      this.responseBook = res
    })
  }

}
