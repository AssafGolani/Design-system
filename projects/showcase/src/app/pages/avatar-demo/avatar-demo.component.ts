import { Component } from '@angular/core';
import { BrnAvatarImports } from '@spartan-ng/brain/avatar';
import { HlmAvatarImports } from 'ds';

@Component({
  selector: 'app-avatar-demo',
  imports: [BrnAvatarImports, ...HlmAvatarImports],
  template: `
    <section class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold">Avatar</h1>
        <p class="mt-2 text-muted-foreground">An image element with a fallback for representing the user.</p>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Sizes</h2>
        <div class="flex items-center gap-4">
          <brn-avatar hlm size="sm">
            <span brnAvatarFallback hlmAvatarFallback>SM</span>
          </brn-avatar>
          <brn-avatar hlm>
            <span brnAvatarFallback hlmAvatarFallback>MD</span>
          </brn-avatar>
          <brn-avatar hlm size="lg">
            <span brnAvatarFallback hlmAvatarFallback>LG</span>
          </brn-avatar>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">With Fallback</h2>
        <div class="flex items-center gap-4">
          <brn-avatar hlm>
            <span brnAvatarFallback hlmAvatarFallback>CN</span>
          </brn-avatar>
          <brn-avatar hlm>
            <span brnAvatarFallback hlmAvatarFallback>JD</span>
          </brn-avatar>
          <brn-avatar hlm>
            <span brnAvatarFallback hlmAvatarFallback>AB</span>
          </brn-avatar>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">User List Example</h2>
        <div class="space-y-3 max-w-sm">
          <div class="flex items-center gap-3 rounded-lg border p-3">
            <brn-avatar hlm>
              <span brnAvatarFallback hlmAvatarFallback>CN</span>
            </brn-avatar>
            <div>
              <p class="text-sm font-medium">Cody Newman</p>
              <p class="text-xs text-muted-foreground">cody&#64;example.com</p>
            </div>
          </div>
          <div class="flex items-center gap-3 rounded-lg border p-3">
            <brn-avatar hlm>
              <span brnAvatarFallback hlmAvatarFallback>JD</span>
            </brn-avatar>
            <div>
              <p class="text-sm font-medium">Jane Doe</p>
              <p class="text-xs text-muted-foreground">jane&#64;example.com</p>
            </div>
          </div>
          <div class="flex items-center gap-3 rounded-lg border p-3">
            <brn-avatar hlm>
              <span brnAvatarFallback hlmAvatarFallback>AB</span>
            </brn-avatar>
            <div>
              <p class="text-sm font-medium">Alice Brown</p>
              <p class="text-xs text-muted-foreground">alice&#64;example.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AvatarDemoComponent {}
