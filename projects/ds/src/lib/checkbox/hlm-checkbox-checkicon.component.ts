import { Component, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import type { ClassValue } from 'clsx';

@Component({
  selector: 'hlm-checkbox-checkicon',
  host: { '[class]': '_computedClass()' },
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="currentColor"
      class="h-4 w-4"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  `,
})
export class HlmCheckboxCheckIconComponent {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('h-4 w-4 leading-none', this.userClass()),
  );
}
