import { Component } from '@angular/core';
import { HlmButtonDirective } from 'ds';

@Component({
  selector: 'app-button-demo',
  imports: [HlmButtonDirective],
  template: `
    <section class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold">Button</h1>
        <p class="mt-2 text-muted-foreground">Displays a button or a component that looks like a button.</p>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Variants</h2>
        <div class="flex flex-wrap gap-4">
          <button hlmBtn>Default</button>
          <button hlmBtn variant="secondary">Secondary</button>
          <button hlmBtn variant="destructive">Destructive</button>
          <button hlmBtn variant="outline">Outline</button>
          <button hlmBtn variant="ghost">Ghost</button>
          <button hlmBtn variant="link">Link</button>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Sizes</h2>
        <div class="flex flex-wrap items-center gap-4">
          <button hlmBtn size="sm">Small</button>
          <button hlmBtn size="default">Default</button>
          <button hlmBtn size="lg">Large</button>
          <button hlmBtn size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </button>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">With Icon</h2>
        <div class="flex flex-wrap gap-4">
          <button hlmBtn>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Download
          </button>
          <button hlmBtn variant="outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            Copy
          </button>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Disabled</h2>
        <div class="flex flex-wrap gap-4">
          <button hlmBtn disabled>Disabled</button>
          <button hlmBtn variant="outline" disabled>Disabled</button>
        </div>
      </div>
    </section>
  `,
})
export class ButtonDemoComponent {}
