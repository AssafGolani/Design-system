import { Component } from '@angular/core';
import { HlmBadgeDirective } from 'ds';

@Component({
  selector: 'app-badge-demo',
  imports: [HlmBadgeDirective],
  template: `
    <section class="space-y-8">
      <h1 class="text-3xl font-bold">Badge</h1>
      <p class="text-muted-foreground">Displays a badge or a component that looks like a badge.</p>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Variants</h2>
        <div class="flex flex-wrap gap-4">
          <span hlmBadge>Default</span>
          <span hlmBadge variant="secondary">Secondary</span>
          <span hlmBadge variant="destructive">Destructive</span>
          <span hlmBadge variant="outline">Outline</span>
        </div>
      </div>
    </section>
  `,
})
export class BadgeDemoComponent {}
