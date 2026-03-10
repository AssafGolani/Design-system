import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ClassValue } from 'clsx';

export const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      variant: {
        default: '',
      },
      error: {
        auto: '[&.ng-invalid.ng-touched]:text-destructive',
        true: 'text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
      error: 'auto',
    },
  },
);

export type LabelVariants = VariantProps<typeof labelVariants>;

@Directive({
  selector: '[hlmLabel]',
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmLabelDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  readonly variant = input<LabelVariants['variant']>('default');
  readonly error = input<LabelVariants['error']>('auto');

  protected readonly _computedClass = computed(() =>
    hlm(labelVariants({ variant: this.variant(), error: this.error() }), this.userClass()),
  );
}

export const HlmLabelImports = [HlmLabelDirective] as const;
