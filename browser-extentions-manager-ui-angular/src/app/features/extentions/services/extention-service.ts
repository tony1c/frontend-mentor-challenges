import { computed, Injectable, signal } from '@angular/core';

import extentionList from '../../../../../public/assets/data.json';
import { ExtentionInterface, FilterType } from '../../../../models/extention';

@Injectable({
  providedIn: 'root',
})
export class ExtentionService {
  #extentions = signal<ExtentionInterface[]>(extentionList);
  #filter = signal<FilterType>('all');

  extentions = computed(() => {
    const extentions = this.#extentions();
    const filter = this.#filter();

    switch (filter) {
      case 'active':
        return extentions.filter(ext => ext.isActive);
      case 'inactive':
        return extentions.filter(ext => !ext.isActive);
      default:
        return extentions;
    }
  });

  currentFilter = this.#filter.asReadonly();

  toggleActive(ext: ExtentionInterface): void {
    this.#extentions.update(exts =>
      exts.map(e => (e.name === ext.name ? { ...e, isActive: !e.isActive } : e)),
    );
  }

  setFilter(filter: FilterType): void {
    this.#filter.set(filter);
  }

  removeExt(extToRemove: ExtentionInterface): void {
    this.#extentions.update(exts => exts.filter(ext => ext.name !== extToRemove.name));
  }
}
