import { Injectable } from '@angular/core';
import { AccordionModel } from '../models/accordion.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccordionService {
  private expandedIdxSubject = new BehaviorSubject<number | null>(null);
  expandedIdx$ = this.expandedIdxSubject.asObservable();

  accordions: AccordionModel[] = [
    {
      id: 0,
      question: 'What is Frontend Mentor, and how will it help me?',
      response:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      id: 1,
      question: 'Is Frontend Mentor free?',
      response:
        'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
    },
    {
      id: 2,
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      response:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      id: 3,
      question:
        "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      response:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  getAccordions() {
    return this.accordions;
  }

  public toggleAccordion(id: number): void {
    const currentIdx = this.expandedIdxSubject.getValue();
    this.expandedIdxSubject.next(currentIdx === id ? null : id);
  }
}
