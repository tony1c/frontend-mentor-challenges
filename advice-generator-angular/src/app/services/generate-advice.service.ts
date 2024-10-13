import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SlipResponse } from '../models/slip.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenerateAdviceService {
  #apiUrl = 'https://api.adviceslip.com/advice';
  #http = inject(HttpClient);

  public fetchAdvice(): Observable<SlipResponse> {
    return this.#http.get<SlipResponse>(this.#apiUrl);
  }
}
