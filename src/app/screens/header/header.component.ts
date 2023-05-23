import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { GlobalStateService } from "src/app/services/global-state.service";
import { TranslateService } from "@ngx-translate/core";
import { formatCategoryCode } from "src/assets/utils/utils";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  isVisible: boolean = false;
  inputFocused: boolean = false;
  categories: Observable<any>;
  currentLanguage: string | undefined;

  constructor(private productsService: ProductsService, 
    private router: Router,
    private globalStateService: GlobalStateService, 
    private translateService : TranslateService) {
    this.categories = this.productsService.getCategories();
    this.categories.subscribe((data) => {
      console.log("CATEGORIES AAAA", data);
    });
  }

    ngOnInit(): void {

      this.currentLanguage = this.translateService.currentLang;

  }

  getCategoryLink(categoryCode: string, path: string): string {
    const formattedCode = formatCategoryCode(categoryCode);
    return `/scarpe/${path}/${formattedCode}/`;
  }

  toggleSideNav() {
    this.isVisible = !this.isVisible;
  }

  wideInput() {
    this.inputFocused = true;
  }

  smallInput() {
    this.inputFocused = false;
  }

  goToCart() {
    this.router.navigate(["cart"]);
  }
}
