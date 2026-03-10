import { Component } from '@angular/core';
import { BrnAvatarImports } from '@spartan-ng/brain/avatar';
import { HlmAvatarImports } from 'ds';

@Component({
  selector: 'app-avatar-demo',
  imports: [BrnAvatarImports, ...HlmAvatarImports],
  template: `
    <section class="space-y-8">
      <h1 class="text-3xl font-bold">Avatar</h1>
      <p class="text-muted-foreground">An image element with a fallback for representing the user.</p>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">With Fallback</h2>
        <div class="flex gap-4">
          <brn-avatar hlm>
            <span brnAvatarFallback hlmAvatarFallback>CN</span>
          </brn-avatar>
          <brn-avatar hlm>
            <span brnAvatarFallback hlmAvatarFallback>JD</span>
          </brn-avatar>
          <brn-avatar hlm size="lg">
            <span brnAvatarFallback hlmAvatarFallback>LG</span>
          </brn-avatar>
          <brn-avatar hlm size="sm">
            <span brnAvatarFallback hlmAvatarFallback>SM</span>
          </brn-avatar>
        </div>
      </div>
    </section>
  `,
})
export class AvatarDemoComponent {}
