import { Component } from '@angular/core';
import { BrnSwitchImports } from '@spartan-ng/brain/switch';
import { HlmCardImports, HlmButtonDirective, HlmInputDirective, HlmLabelDirective, HlmSwitchImports } from 'ds';

@Component({
  selector: 'app-card-demo',
  imports: [...HlmCardImports, HlmButtonDirective, HlmInputDirective, HlmLabelDirective, BrnSwitchImports, ...HlmSwitchImports],
  template: `
    <section class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold">Card</h1>
        <p class="mt-2 text-muted-foreground">Displays a card with header, content, and footer.</p>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Default</h2>
        <div hlmCard class="w-[350px]">
          <div hlmCardHeader>
            <h3 hlmCardTitle>Create project</h3>
            <p hlmCardDescription>Deploy your new project in one-click.</p>
          </div>
          <div hlmCardContent>
            <div class="grid w-full gap-1.5">
              <label hlmLabel for="name">Name</label>
              <input hlmInput id="name" placeholder="Name of your project" />
            </div>
          </div>
          <div hlmCardFooter class="flex justify-between">
            <button hlmBtn variant="outline">Cancel</button>
            <button hlmBtn>Deploy</button>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Notifications</h2>
        <div hlmCard class="w-[380px]">
          <div hlmCardHeader>
            <h3 hlmCardTitle>Notifications</h3>
            <p hlmCardDescription>Choose what you want to be notified about.</p>
          </div>
          <div hlmCardContent class="space-y-4">
            <div class="flex items-center justify-between rounded-lg border p-3">
              <div class="space-y-0.5">
                <p class="text-sm font-medium">Push Notifications</p>
                <p class="text-xs text-muted-foreground">Send notifications to device.</p>
              </div>
              <brn-switch hlm>
                <brn-switch-thumb hlm />
              </brn-switch>
            </div>
            <div class="flex items-center justify-between rounded-lg border p-3">
              <div class="space-y-0.5">
                <p class="text-sm font-medium">Email Notifications</p>
                <p class="text-xs text-muted-foreground">Receive emails about activity.</p>
              </div>
              <brn-switch hlm>
                <brn-switch-thumb hlm />
              </brn-switch>
            </div>
          </div>
          <div hlmCardFooter>
            <button hlmBtn class="w-full">Save preferences</button>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CardDemoComponent {}
