import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';;
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {


  constructor(private router:Router,private announcer: LiveAnnouncer) {
      
   }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.announcer.announce("Hello world!", "assertive");
    this.router.navigate(['/products/create'])
  }

}
