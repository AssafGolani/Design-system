import { Component } from '@angular/core';
import { HlmLabelDirective } from 'ds';

@Component({
  selector: 'app-label-demo',
  imports: [HlmLabelDirective],
  template: `
    <section class="space-y-8">
      <h1 class="text-3xl font-bold">Label</h1>
      <p class="text-muted-foreground">Renders an accessible label associated with controls.</p>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Default</h2>
        <label hlmLabel>Your email address</label>
      </div>
    </section>
  `,
})
export class LabelDemoComponent {}
