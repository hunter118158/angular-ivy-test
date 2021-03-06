import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ name }}!</h1>
    <button (click)="onEditClick()">子组件</button>
    <div *ngIf="canEdit; else noEdit">
      <p>You can edit the following paragraph.</p>
    </div>
    <ng-template #noEdit>
      <p>The following paragraph is read only. Try clicking the button!</p>
    </ng-template>
    <p [contentEditable]="canEdit">{{ message }}</p>
    <button *ngFor="let i of arr">{{ i.name }}</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  message = "I'm read only!";
  canEdit = false;
  arr = [
    { name: 'xiao1' },
    { name: 'xiao2' },
    { name: 'xiao3' },
    { name: 'xiao4' }
  ];

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
}
