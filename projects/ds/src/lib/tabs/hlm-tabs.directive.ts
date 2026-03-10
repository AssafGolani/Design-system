import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import type { ClassValue } from 'clsx';

@Directive({
  selector: '[hlmTabs],[brnTabs][hlm]',
  host: { '[class]': '_computedClass()' },
})
export class HlmTabsDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm('block', this.userClass()),
  );
}

@Directive({
  selector: '[hlmTabsList]',
  host: { '[class]': '_computedClass()' },
})
export class HlmTabsListDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      this.userClass(),
    ),
  );
}

@Directive({
  selector: '[hlmTabsTrigger]',
  host: { '[class]': '_computedClass()' },
})
export class HlmTabsTriggerDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      this.userClass(),
    ),
  );
}

@Directive({
  selector: '[hlmTabsContent]',
  host: { '[class]': '_computedClass()' },
})
export class HlmTabsContentDirective {
  readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() =>
    hlm(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      this.userClass(),
    ),
  );
}

export const HlmTabsImports = [
  HlmTabsDirective,
  HlmTabsListDirective,
  HlmTabsTriggerDirective,
  HlmTabsContentDirective,
] as const;
