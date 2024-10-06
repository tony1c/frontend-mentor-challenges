import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  accordions = [
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
  expandedIdx: number | null = null;

  public toggleAccordion(id: number): void {
    if (this.expandedIdx === id) {
      this.expandedIdx = null;
    } else {
      this.expandedIdx = id;
    }
  }
}
