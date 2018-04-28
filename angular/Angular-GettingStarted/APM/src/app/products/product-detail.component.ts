import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;  

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id'); //the + at the beginning of this assinment is a shortcut to cast string to number.
    this.pageTitle += `: ${id}`;
    this.product = {
        "productId": id,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  }

  onBack(): void{
    this._router.navigate(['/products']);
  }

}
