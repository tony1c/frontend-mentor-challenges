import { inject, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { ImageType } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  #breakpointObserver = inject(BreakpointObserver);
  getCurrentBreakpoint(): Observable<ImageType> {
    return this.#breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .pipe(
        map((result) => {
          if (
            result.breakpoints[Breakpoints.XSmall] ||
            result.breakpoints[Breakpoints.Small]
          ) {
            return 'mobile';
          } else if (result.breakpoints[Breakpoints.Medium]) {
            return 'tablet';
          }
          return 'desktop';
        }),
      );
  }
}
