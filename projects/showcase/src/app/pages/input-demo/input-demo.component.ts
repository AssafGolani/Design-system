import { Component } from '@angular/core';
import { HlmInputDirective } from 'ds';
import { HlmLabelDirective } from 'ds';

@Component({
  selector: 'app-input-demo',
  imports: [HlmInputDirective, HlmLabelDirective],
  template: `
    <section class="space-y-8">
      <h1 class="text-3xl font-bold">Input</h1>
      <p class="text-muted-foreground">Displays a form input field.</p>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Default</h2>
        <div class="grid w-full max-w-sm gap-1.5">
          <label hlmLabel>Email</label>
          <input hlmInput type="email" placeholder="Email" />
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Disabled</h2>
        <input hlmInput disabled type="email" placeholder="Email" class="max-w-sm" />
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">With Label</h2>
        <div class="grid w-full max-w-sm gap-1.5">
          <label hlmLabel for="picture">Picture</label>
          <input hlmInput id="picture" type="file" />
        </div>
      </div>
    </section>
  `,
})
export class InputDemoComponent {}
