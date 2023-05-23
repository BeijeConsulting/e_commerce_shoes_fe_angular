import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GlobalStateService {
  private langSubject = new BehaviorSubject<string>('it');
  lang$ = this.langSubject.asObservable();

  setLanguage(lang: string): void {
    this.langSubject.next(lang);
  }
}
