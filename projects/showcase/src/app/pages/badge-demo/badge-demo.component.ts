import { Component } from '@angular/core';
import { HlmBadgeDirective, HlmButtonDirective } from 'ds';

@Component({
  selector: 'app-badge-demo',
  imports: [HlmBadgeDirective, HlmButtonDirective],
  template: `
    <section class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold">Badge</h1>
        <p class="mt-2 text-muted-foreground">Displays a badge or a component that looks like a badge.</p>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Variants</h2>
        <div class="flex flex-wrap gap-4">
          <span hlmBadge>Default</span>
          <span hlmBadge variant="secondary">Secondary</span>
          <span hlmBadge variant="destructive">Destructive</span>
          <span hlmBadge variant="outline">Outline</span>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Use Cases</h2>
        <div class="flex flex-wrap gap-4 items-center">
          <span hlmBadge>New</span>
          <span hlmBadge variant="secondary">In Progress</span>
          <span hlmBadge variant="destructive">Urgent</span>
          <span hlmBadge variant="outline">v1.0.0</span>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">With Button</h2>
        <div class="flex items-center gap-2">
          <button hlmBtn variant="outline">
            Notifications
            <span hlmBadge class="ml-2">3</span>
          </button>
        </div>
      </div>
    </section>
  `,
})
export class BadgeDemoComponent {}
