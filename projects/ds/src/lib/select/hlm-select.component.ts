import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import type { ClassValue } from 'clsx';

@Directive({
  selector: '[hlmSelectTrigger],[brnSelectTrigger][hlm]',
  host: { '[class]': '_computedClass()' },
})
export class HlmSelectTriggerDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm(
      'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      this.userClass(),
    ),
  );
}

@Directive({
  selector: 'hlm-select-content, brn-select-content[hlm]',
  host: { '[class]': '_computedClass()' },
})
export class HlmSelectContentDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm(
      'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      this.userClass(),
    ),
  );
}

@Directive({
  selector: '[hlmSelectLabel]',
  host: { '[class]': '_computedClass()' },
})
export class HlmSelectLabelDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('py-1.5 pl-8 pr-2 text-sm font-semibold', this.userClass()),
  );
}

@Directive({
  selector: '[hlmSelectOption],[brnOption][hlm]',
  host: { '[class]': '_computedClass()' },
})
export class HlmSelectOptionDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      this.userClass(),
    ),
  );
}

@Directive({
  selector: '[hlmSelectSeparator]',
  host: { '[class]': '_computedClass()' },
})
export class HlmSelectSeparatorDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('-mx-1 my-1 h-px bg-muted', this.userClass()),
  );
}

@Directive({
  selector: 'hlm-select-scroll-up',
  host: { '[class]': '_computedClass()' },
})
export class HlmSelectScrollUpDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('flex cursor-default items-center justify-center py-1', this.userClass()),
  );
}

@Directive({
  selector: 'hlm-select-scroll-down',
  host: { '[class]': '_computedClass()' },
})
export class HlmSelectScrollDownDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('flex cursor-default items-center justify-center py-1', this.userClass()),
  );
}

@Directive({
  selector: '[hlmSelectValue]',
  host: { '[class]': '_computedClass()' },
})
export class HlmSelectValueDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('overflow-hidden text-ellipsis whitespace-nowrap', this.userClass()),
  );
}

export const HlmSelectImports = [
  HlmSelectTriggerDirective,
  HlmSelectContentDirective,
  HlmSelectLabelDirective,
  HlmSelectOptionDirective,
  HlmSelectSeparatorDirective,
  HlmSelectScrollUpDirective,
  HlmSelectScrollDownDirective,
  HlmSelectValueDirective,
] as const;
