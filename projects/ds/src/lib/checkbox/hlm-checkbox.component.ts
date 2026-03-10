import { Component, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import type { ClassValue } from 'clsx';

@Component({
  selector: 'hlm-checkbox',
  host: { '[class]': '_computedClass()' },
  template: `<ng-content />`,
})
export class HlmCheckboxComponent {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm(
      'group inline-flex shrink-0 items-center justify-center rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground h-4 w-4',
      this.userClass(),
    ),
  );
}

export const HlmCheckboxImports = [HlmCheckboxComponent] as const;
