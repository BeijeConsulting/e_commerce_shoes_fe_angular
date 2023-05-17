import { Component, ViewEncapsulation } from "@angular/core";
// Libraries
import { SwiperSlideDirective } from "swiper/angular";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: "app-slider-homepage",
  templateUrl: "./slider-homepage.component.html",
  styleUrls: ["./slider-homepage.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SliderHomepageComponent {
  constructor() {}
}
