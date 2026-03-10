import { Component } from '@angular/core';
import { BrnCheckboxImports } from '@spartan-ng/brain/checkbox';
import { HlmCheckboxComponent, HlmCheckboxCheckIconComponent, HlmLabelDirective } from 'ds';

@Component({
  selector: 'app-checkbox-demo',
  imports: [BrnCheckboxImports, HlmCheckboxComponent, HlmCheckboxCheckIconComponent, HlmLabelDirective],
  template: `
    <section class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold">Checkbox</h1>
        <p class="mt-2 text-muted-foreground">A control that allows the user to toggle between checked and not checked.</p>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Default</h2>
        <div class="flex items-center space-x-2">
          <hlm-checkbox>
            <brn-checkbox id="terms">
              <hlm-checkbox-checkicon />
            </brn-checkbox>
          </hlm-checkbox>
          <label hlmLabel for="terms">Accept terms and conditions</label>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Disabled</h2>
        <div class="flex items-center space-x-2">
          <hlm-checkbox>
            <brn-checkbox id="terms2" disabled>
              <hlm-checkbox-checkicon />
            </brn-checkbox>
          </hlm-checkbox>
          <label hlmLabel for="terms2" class="opacity-50">Disabled checkbox</label>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Multiple Options</h2>
        <div class="space-y-3 rounded-lg border p-4 max-w-md">
          <div class="flex items-start space-x-2">
            <hlm-checkbox>
              <brn-checkbox id="email-notif">
                <hlm-checkbox-checkicon />
              </brn-checkbox>
            </hlm-checkbox>
            <div class="leading-none">
              <label hlmLabel for="email-notif">Email notifications</label>
              <p class="text-sm text-muted-foreground mt-1">Receive emails about account activity.</p>
            </div>
          </div>
          <div class="flex items-start space-x-2">
            <hlm-checkbox>
              <brn-checkbox id="push-notif">
                <hlm-checkbox-checkicon />
              </brn-checkbox>
            </hlm-checkbox>
            <div class="leading-none">
              <label hlmLabel for="push-notif">Push notifications</label>
              <p class="text-sm text-muted-foreground mt-1">Receive push notifications on your device.</p>
            </div>
          </div>
          <div class="flex items-start space-x-2">
            <hlm-checkbox>
              <brn-checkbox id="sms-notif">
                <hlm-checkbox-checkicon />
              </brn-checkbox>
            </hlm-checkbox>
            <div class="leading-none">
              <label hlmLabel for="sms-notif">SMS notifications</label>
              <p class="text-sm text-muted-foreground mt-1">Receive text messages for important updates.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CheckboxDemoComponent {}
