import { Component } from '@angular/core';
import { BrnSwitchImports } from '@spartan-ng/brain/switch';
import { HlmSwitchImports, HlmLabelDirective } from 'ds';

@Component({
  selector: 'app-switch-demo',
  imports: [BrnSwitchImports, ...HlmSwitchImports, HlmLabelDirective],
  template: `
    <section class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold">Switch</h1>
        <p class="mt-2 text-muted-foreground">A control that allows the user to toggle between on and off.</p>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Default</h2>
        <div class="flex items-center space-x-2">
          <brn-switch hlm id="airplane-mode">
            <brn-switch-thumb hlm />
          </brn-switch>
          <label hlmLabel for="airplane-mode">Airplane Mode</label>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Disabled</h2>
        <div class="flex items-center space-x-2">
          <brn-switch hlm id="disabled-switch" disabled>
            <brn-switch-thumb hlm />
          </brn-switch>
          <label hlmLabel for="disabled-switch" class="opacity-50">Disabled</label>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Settings Example</h2>
        <div class="space-y-4 rounded-lg border p-4 max-w-md">
          <div class="flex items-center justify-between">
            <div>
              <label hlmLabel for="wifi">Wi-Fi</label>
              <p class="text-sm text-muted-foreground">Connect to wireless networks</p>
            </div>
            <brn-switch hlm id="wifi">
              <brn-switch-thumb hlm />
            </brn-switch>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <label hlmLabel for="bluetooth">Bluetooth</label>
              <p class="text-sm text-muted-foreground">Enable Bluetooth connectivity</p>
            </div>
            <brn-switch hlm id="bluetooth">
              <brn-switch-thumb hlm />
            </brn-switch>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <label hlmLabel for="notifications">Notifications</label>
              <p class="text-sm text-muted-foreground">Receive push notifications</p>
            </div>
            <brn-switch hlm id="notifications">
              <brn-switch-thumb hlm />
            </brn-switch>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SwitchDemoComponent {}
