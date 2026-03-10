import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ClassValue } from 'clsx';

export const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full',
  {
    variants: {
      size: {
        default: 'h-10 w-10',
        sm: 'h-6 w-6',
        lg: 'h-14 w-14',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export type AvatarVariants = VariantProps<typeof avatarVariants>;

@Directive({
  selector: 'brn-avatar[hlm], hlm-avatar',
  host: { '[class]': '_computedClass()' },
})
export class HlmAvatarDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  readonly size = input<AvatarVariants['size']>('default');

  protected readonly _computedClass = computed(() =>
    hlm(avatarVariants({ size: this.size() }), this.userClass()),
  );
}

@Directive({
  selector: 'img[hlmAvatarImage]',
  host: { '[class]': '_computedClass()' },
})
export class HlmAvatarImageDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('aspect-square h-full w-full', this.userClass()),
  );
}

@Directive({
  selector: '[hlmAvatarFallback]',
  host: { '[class]': '_computedClass()' },
})
export class HlmAvatarFallbackDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('flex h-full w-full items-center justify-center rounded-full bg-muted', this.userClass()),
  );
}

export const HlmAvatarImports = [
  HlmAvatarDirective,
  HlmAvatarImageDirective,
  HlmAvatarFallbackDirective,
] as const;
