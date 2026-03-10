import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import type { ClassValue } from 'clsx';

@Directive({
  selector: '[hlmAccordion]',
  host: { '[class]': '_computedClass()' },
})
export class HlmAccordionDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('block', this.userClass()),
  );
}

@Directive({
  selector: '[hlmAccordionItem]',
  host: { '[class]': '_computedClass()' },
})
export class HlmAccordionItemDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('block border-b', this.userClass()),
  );
}

@Directive({
  selector: '[hlmAccordionTrigger]',
  host: { '[class]': '_computedClass()' },
})
export class HlmAccordionTriggerDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm(
      'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
      this.userClass(),
    ),
  );
}

@Directive({
  selector: '[hlmAccordionContent]',
  host: { '[class]': '_computedClass()' },
})
export class HlmAccordionContentDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm(
      'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      this.userClass(),
    ),
  );
}

export const HlmAccordionImports = [
  HlmAccordionDirective,
  HlmAccordionItemDirective,
  HlmAccordionTriggerDirective,
  HlmAccordionContentDirective,
] as const;
