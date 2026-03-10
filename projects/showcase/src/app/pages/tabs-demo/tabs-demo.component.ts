import { Component } from '@angular/core';
import { BrnTabsImports } from '@spartan-ng/brain/tabs';
import { HlmTabsImports } from 'ds';
import { HlmCardImports } from 'ds';
import { HlmButtonDirective } from 'ds';
import { HlmInputDirective } from 'ds';
import { HlmLabelDirective } from 'ds';

@Component({
  selector: 'app-tabs-demo',
  imports: [BrnTabsImports, ...HlmTabsImports, ...HlmCardImports, HlmButtonDirective, HlmInputDirective, HlmLabelDirective],
  template: `
    <section class="space-y-8">
      <h1 class="text-3xl font-bold">Tabs</h1>
      <p class="text-muted-foreground">A set of layered sections of content — known as tab panels — that are displayed one at a time.</p>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Default</h2>
        <div brnTabs="account" hlm class="w-[400px]">
          <div hlmTabsList class="grid w-full grid-cols-2">
            <button hlmTabsTrigger brnTabsTrigger="account">Account</button>
            <button hlmTabsTrigger brnTabsTrigger="password">Password</button>
          </div>
          <div hlmTabsContent brnTabsContent="account">
            <div hlmCard>
              <div hlmCardHeader>
                <h3 hlmCardTitle>Account</h3>
                <p hlmCardDescription>Make changes to your account here.</p>
              </div>
              <div hlmCardContent class="space-y-2">
                <div class="space-y-1">
                  <label hlmLabel for="name">Name</label>
                  <input hlmInput id="name" value="Pedro Duarte" />
                </div>
                <div class="space-y-1">
                  <label hlmLabel for="username">Username</label>
                  <input hlmInput id="username" value="@peduarte" />
                </div>
              </div>
              <div hlmCardFooter>
                <button hlmBtn>Save changes</button>
              </div>
            </div>
          </div>
          <div hlmTabsContent brnTabsContent="password">
            <div hlmCard>
              <div hlmCardHeader>
                <h3 hlmCardTitle>Password</h3>
                <p hlmCardDescription>Change your password here.</p>
              </div>
              <div hlmCardContent class="space-y-2">
                <div class="space-y-1">
                  <label hlmLabel for="current">Current password</label>
                  <input hlmInput id="current" type="password" />
                </div>
                <div class="space-y-1">
                  <label hlmLabel for="new">New password</label>
                  <input hlmInput id="new" type="password" />
                </div>
              </div>
              <div hlmCardFooter>
                <button hlmBtn>Save password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TabsDemoComponent {}
