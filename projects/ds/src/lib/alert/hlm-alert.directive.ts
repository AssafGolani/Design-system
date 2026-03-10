import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ClassValue } from 'clsx';

export const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type AlertVariants = VariantProps<typeof alertVariants>;

@Directive({
  selector: '[hlmAlert]',
  host: { '[class]': '_computedClass()', role: 'alert' },
})
export class HlmAlertDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  readonly variant = input<AlertVariants['variant']>('default');

  protected readonly _computedClass = computed(() =>
    hlm(alertVariants({ variant: this.variant() }), this.userClass()),
  );
}

@Directive({
  selector: '[hlmAlertTitle]',
  host: { '[class]': '_computedClass()' },
})
export class HlmAlertTitleDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('mb-1 font-medium leading-none tracking-tight', this.userClass()),
  );
}

@Directive({
  selector: '[hlmAlertDescription]',
  host: { '[class]': '_computedClass()' },
})
export class HlmAlertDescriptionDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('text-sm [&_p]:leading-relaxed', this.userClass()),
  );
}

export const HlmAlertImports = [
  HlmAlertDirective,
  HlmAlertTitleDirective,
  HlmAlertDescriptionDirective,
] as const;
