import { Component } from '@angular/core';
import { HlmInputDirective, HlmLabelDirective, HlmButtonDirective } from 'ds';

@Component({
  selector: 'app-input-demo',
  imports: [HlmInputDirective, HlmLabelDirective, HlmButtonDirective],
  template: `
    <section class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold">Input</h1>
        <p class="mt-2 text-muted-foreground">Displays a form input field.</p>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Default</h2>
        <div class="grid w-full max-w-sm gap-1.5">
          <label hlmLabel>Email</label>
          <input hlmInput type="email" placeholder="Email" />
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Sizes</h2>
        <div class="flex flex-col gap-3 max-w-sm">
          <input hlmInput size="sm" placeholder="Small" />
          <input hlmInput placeholder="Default" />
          <input hlmInput size="lg" placeholder="Large" />
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

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">With Button</h2>
        <div class="flex w-full max-w-sm items-center gap-2">
          <input hlmInput type="email" placeholder="Email" />
          <button hlmBtn>Subscribe</button>
        </div>
      </div>
    </section>
  `,
})
export class InputDemoComponent {}
