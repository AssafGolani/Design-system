import { Component } from '@angular/core';
import { HlmButtonDirective } from 'ds';

@Component({
  selector: 'app-button-demo',
  imports: [HlmButtonDirective],
  template: `
    <section class="space-y-8">
      <h1 class="text-3xl font-bold">Button</h1>
      <p class="text-muted-foreground">Displays a button or a component that looks like a button.</p>

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
          <button hlmBtn size="icon">+</button>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Disabled</h2>
        <button hlmBtn disabled>Disabled</button>
      </div>
    </section>
  `,
})
export class ButtonDemoComponent {}
