import { Component } from '@angular/core';
import { BrnSwitchImports } from '@spartan-ng/brain/switch';
import { HlmSwitchImports } from 'ds';
import { HlmLabelDirective } from 'ds';

@Component({
  selector: 'app-switch-demo',
  imports: [BrnSwitchImports, ...HlmSwitchImports, HlmLabelDirective],
  template: `
    <section class="space-y-8">
      <h1 class="text-3xl font-bold">Switch</h1>
      <p class="text-muted-foreground">A control that allows the user to toggle between on and off.</p>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Default</h2>
        <div class="flex items-center space-x-2">
          <brn-switch hlm id="airplane-mode">
            <brn-switch-thumb hlm />
          </brn-switch>
          <label hlmLabel for="airplane-mode">Airplane Mode</label>
        </div>
      </div>
    </section>
  `,
})
export class SwitchDemoComponent {}
