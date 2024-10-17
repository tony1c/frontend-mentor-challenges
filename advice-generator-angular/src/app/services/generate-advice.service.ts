import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Slip } from '../models/slip.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenerateAdviceService {
  #apiUrl = 'https://api.adviceslip.com/advice';
  #http = inject(HttpClient);

  fetchAdvice(): Observable<Slip> {
    return this.#http
      .get<{ slip: Slip }>(this.#apiUrl)
      .pipe(map((res) => res.slip));
  }
}
