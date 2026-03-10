import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import type { ClassValue } from 'clsx';

@Directive({
  selector: '[hlmDialogOverlay],brn-dialog-overlay[hlm]',
  host: { '[class]': '_computedClass()' },
})
export class HlmDialogOverlayDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      this.userClass(),
    ),
  );
}

@Directive({
  selector: '[hlmDialogContent],brn-dialog-content[hlm]',
  host: { '[class]': '_computedClass()' },
})
export class HlmDialogContentDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm(
      'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
      this.userClass(),
    ),
  );
}

@Directive({
  selector: '[hlmDialogHeader]',
  host: { '[class]': '_computedClass()' },
})
export class HlmDialogHeaderDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('flex flex-col space-y-1.5 text-center sm:text-left', this.userClass()),
  );
}

@Directive({
  selector: '[hlmDialogFooter]',
  host: { '[class]': '_computedClass()' },
})
export class HlmDialogFooterDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', this.userClass()),
  );
}

@Directive({
  selector: '[hlmDialogTitle]',
  host: { '[class]': '_computedClass()' },
})
export class HlmDialogTitleDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('text-lg font-semibold leading-none tracking-tight', this.userClass()),
  );
}

@Directive({
  selector: '[hlmDialogDescription]',
  host: { '[class]': '_computedClass()' },
})
export class HlmDialogDescriptionDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('text-sm text-muted-foreground', this.userClass()),
  );
}

export const HlmDialogImports = [
  HlmDialogOverlayDirective,
  HlmDialogContentDirective,
  HlmDialogHeaderDirective,
  HlmDialogFooterDirective,
  HlmDialogTitleDirective,
  HlmDialogDescriptionDirective,
] as const;
