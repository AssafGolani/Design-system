import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import type { ClassValue } from 'clsx';

@Directive({
  selector: '[hlmSeparator],brn-separator[hlm]',
  host: { '[class]': '_computedClass()' },
})
export class HlmSeparatorDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  readonly orientation = input<'horizontal' | 'vertical'>('horizontal');

  protected readonly _computedClass = computed(() =>
    hlm(
      'shrink-0 bg-border',
      this.orientation() === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      this.userClass(),
    ),
  );
}

export const HlmSeparatorImports = [HlmSeparatorDirective] as const;
