import { Component } from '@angular/core';
import { BrnCheckboxImports } from '@spartan-ng/brain/checkbox';
import { HlmCheckboxComponent, HlmCheckboxCheckIconComponent } from 'ds';
import { HlmLabelDirective } from 'ds';

@Component({
  selector: 'app-checkbox-demo',
  imports: [BrnCheckboxImports, HlmCheckboxComponent, HlmCheckboxCheckIconComponent, HlmLabelDirective],
  template: `
    <section class="space-y-8">
      <h1 class="text-3xl font-bold">Checkbox</h1>
      <p class="text-muted-foreground">A control that allows the user to toggle between checked and not checked.</p>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Default</h2>
        <div class="flex items-center space-x-2">
          <brn-checkbox id="terms" class="group inline-flex shrink-0 items-center justify-center rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground h-4 w-4">
            <hlm-checkbox-checkicon />
          </brn-checkbox>
          <label hlmLabel for="terms">Accept terms and conditions</label>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Disabled</h2>
        <div class="flex items-center space-x-2">
          <brn-checkbox id="terms2" disabled class="group inline-flex shrink-0 items-center justify-center rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground h-4 w-4">
            <hlm-checkbox-checkicon />
          </brn-checkbox>
          <label hlmLabel for="terms2">Disabled checkbox</label>
        </div>
      </div>
    </section>
  `,
})
export class CheckboxDemoComponent {}
