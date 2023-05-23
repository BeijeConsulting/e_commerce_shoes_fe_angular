
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { GlobalStateService } from 'src/app/services/global-state.service';

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

  productsCategory: any[] = [];
  isDataReady: boolean = false;
  type: string = '';
  category: string = '';
  currentLanguage: string | undefined;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private globalStateService: GlobalStateService
  ) {}

  ngOnInit(): void {
    // Initial execution
    this.updateCategoryAndType();

    // Subscribe to router navigation events
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateCategoryAndType();
      });

      this.globalStateService.lang$.subscribe((lang) => {
      this.currentLanguage = lang;
      console.log('Global state:', this.currentLanguage);
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


    // API del prodotto per categoria
    const productsCategory = this.productsService.getProducts(
      1,
      `${this.currentLanguage}`,
      `?type=${this.type}&category=${this.category}`,
      8
    );

    productsCategory.subscribe((data) => {
      this.productsCategory = data.products;
      this.isDataReady = true;

      console.log("PRODUCTSMAN-CATEGORY-LIST", this.productsCategory);
    });

  }

  getProductLink(id: string): string {
    return `/scarpa/${id}/`;
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
