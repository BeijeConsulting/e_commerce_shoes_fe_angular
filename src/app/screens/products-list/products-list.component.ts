
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  options1: string[] = ['productsList.newShoes'];
  options3: string[] = [
    'ASICS',
    'BEAR',
    'BELLASCARPA',
    'CONVERSE',
    'FILA',
    'GLOBE',
    'HERMES',
    'HOKA',
    'NEW BALANCE',
    'NIKE',
    'PUMA',
    'REEBOK',
    'SAUCONY',
    'UNDER ARMOUR',
    'VANS'];
  options4: string[] = [
    'colors.green',
    'colors.blue',
    'colors.grey',
    'colors.liliac',
    'colors.multicolor',
    'colors.black',
    'colors.pink',
    'colors.red',
    'colors.white'];

  productsManCategory: any[] = [];
  isDataReady: boolean = false;
  type: string = '';
  category: string = '';

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initial execution
    this.updateCategoryAndType();

    // Subscribe to router navigation events
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateCategoryAndType();
      });
  }

  updateCategoryAndType(): void {
    const url = window.location.href;
    console.log("URL: ", url);
    const urlParts = url.split('/');
    console.log("URL-PARTS: ", urlParts);

    if (urlParts.length > 0) {
      const categoryParts = urlParts[5].split('-');
      console.log("CATEGORY :", categoryParts);
      const gender = urlParts[4];
      console.log("GENDER : ", gender);

      if (gender === 'donna') {
        this.type = 'w';
      } else if (gender === 'uomo') {
        this.type = 'm';
      }

      this.category = categoryParts.join(' ');
      console.log("FINAL CATEGORY", this.category);
    }

    console.log('Type:', this.type);
    console.log('Category:', this.category);

    const productsManCategory = this.productsService.getProducts(
      1,
      "it",
      `?type=${this.type}&category=${this.category}`,
      8
    );

    productsManCategory.subscribe((data) => {
      this.productsManCategory = data.products;
      this.isDataReady = true;

      console.log("PRODUCTSMAN-CATEGORY-LIST", this.productsManCategory);
    });
  }
}



// import { Component, OnInit } from '@angular/core';
// import { ProductsService } from 'src/app/services/products.service';
// import { Router, NavigationEnd } from '@angular/router';
// import { filter } from 'rxjs/operators';

// @Component({
//   selector: 'app-products-list',
//   templateUrl: './products-list.component.html',
//   styleUrls: ['./products-list.component.scss']
// })
// export class ProductsListComponent implements OnInit {
//   options1: string[] = ['productsList.newShoes'];
//   options3: string[] = [
//     'ASICS',
//     'BEAR',
//     'BELLASCARPA',
//     'CONVERSE',
//     'FILA',
//     'GLOBE',
//     'HERMES',
//     'HOKA',
//     'NEW BALANCE',
//     'NIKE',
//     'PUMA',
//     'REEBOK',
//     'SAUCONY',
//     'UNDER ARMOUR',
//     'VANS'];
//   options4: string[] = [
//     'colors.green',
//     'colors.blue',
//     'colors.grey',
//     'colors.liliac',
//     'colors.multicolor',
//     'colors.black',
//     'colors.pink',
//     'colors.red',
//     'colors.white'];

//   productsManCategory: any[] = [];
//   isDataReady: boolean = false;
//   type: string = '';
//   category: string = '';

//   constructor(
//     private productsService: ProductsService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     // Initial execution
//     this.updateCategoryAndType();

//     // Subscribe to router navigation events
//     this.router.events.pipe(filter(event => event instanceof NavigationEnd))
//       .subscribe(() => {
//         this.updateCategoryAndType();
//       });

//     const productsManCategory = this.productsService.getProducts(
//       1,
//       "it",
//       `?type=${this.type}&category=${this.category}`,
//       8
//     );

//     productsManCategory.subscribe((data) => {
//       this.productsManCategory = data.products;
//       this.isDataReady = true;

//       console.log("PRODUCTSMAN-CATEGORY-LIST", this.productsManCategory);
//     });
//   }

//   updateCategoryAndType(): void {
//     const url = window.location.href;
//     console.log("URL: ", url);
//     const urlParts = url.split('/');
//     console.log("URL-PARTS: ", urlParts);

//     if (urlParts.length > 0) {
//       const categoryParts = urlParts[5].split('-');
//       console.log("CATEGORY :", categoryParts);
//       const gender = urlParts[4];
//       console.log("GENDER : ", gender);

//       if (gender === 'donna') {
//         this.type = 'w';
//       } else if (gender === 'uomo') {
//         this.type = 'm';
//       }

//       this.category = categoryParts.join(' ');
//       console.log("FINAL CATEGORY", this.category);
//     }

//     console.log('Type:', this.type);
//     console.log('Category:', this.category);
//   }
// }
