import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import type { ClassValue } from 'clsx';

@Directive({
  selector: 'brn-switch[hlm], hlm-switch',
  host: { '[class]': '_computedClass()' },
})
export class HlmSwitchDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm(
      'group inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      this.userClass(),
    ),
  );
}

@Directive({
  selector: 'brn-switch-thumb[hlm]',
  host: { '[class]': '_computedClass()' },
})
export class HlmSwitchThumbDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm(
      'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      this.userClass(),
    ),
  );
}

export const HlmSwitchImports = [HlmSwitchDirective, HlmSwitchThumbDirective] as const;
