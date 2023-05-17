import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  selectedLanguage: string = 'it';

  menu = [
    {
      header: 'Belle Scarpe',
      list: [
        {
          anchor: "footer.whoWeAre",
          path: 'assistenza'
        },
        {
          anchor: 'userMenuNav.logIn',
          path: 'accedi'
        },
        {
          anchor: 'footer.registration',
          path: 'accedi/registrati'
        }
      ]
    },
    {
      header: 'footer.privacyAndCookies',
      list: [
        {
          anchor: 'Privacy Policy',
          path: 'assistenza/privacy-policy'
        },
        {
          anchor: 'Cookie Policy',
          path: 'assistenza/cookie-policy'
        }
      ]
    },
    {
      header: 'footer.contacts',
      list: [
        {
          anchor: 'footer.serviceClient',
          path: 'assistenza'
        },
        {
          anchor: 'FAQ',
          path: 'assistenza/faq'
        },
        {
          anchor: 'footer.termAndConditions',
          path: 'assistenza/termini-condizioni'
        },
        {
          anchor: 'footer.returns',
          path: 'assistenza/resi'
        }
      ]
    }
  ];

  constructor(private translateService: TranslateService){
    this.translateService.setDefaultLang('it');
  }

  goTo(path: string): void {
    // Implement your navigation logic here
  }

  changeLanguageIt() {
    this.translateService.use("it");
    console.log("Language chosen: It")
  }
  changeLanguageEn() {
    console.log("Language chosen: En")
    this.translateService.use("en");
  }
}
