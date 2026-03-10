import { Component } from '@angular/core';
import { HlmLabelDirective, HlmInputDirective } from 'ds';

@Component({
  selector: 'app-label-demo',
  imports: [HlmLabelDirective, HlmInputDirective],
  template: `
    <section class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold">Label</h1>
        <p class="mt-2 text-muted-foreground">Renders an accessible label associated with controls.</p>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Default</h2>
        <label hlmLabel>Your email address</label>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">With Input</h2>
        <div class="grid w-full max-w-sm gap-1.5">
          <label hlmLabel for="email-label">Email</label>
          <input hlmInput id="email-label" type="email" placeholder="you&#64;example.com" />
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Disabled</h2>
        <div class="grid w-full max-w-sm gap-1.5">
          <label hlmLabel for="disabled-input" class="opacity-50">Disabled field</label>
          <input hlmInput id="disabled-input" disabled placeholder="Cannot edit" />
        </div>
      </div>
    </section>
  `,
})
export class LabelDemoComponent {}
