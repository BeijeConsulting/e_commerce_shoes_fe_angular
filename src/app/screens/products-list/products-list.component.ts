import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
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
}
