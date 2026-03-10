import { Component } from '@angular/core';
import { BrnSeparatorImports } from '@spartan-ng/brain/separator';
import { HlmSeparatorDirective } from 'ds';

@Component({
  selector: 'app-separator-demo',
  imports: [BrnSeparatorImports, HlmSeparatorDirective],
  template: `
    <section class="space-y-8">
      <h1 class="text-3xl font-bold">Separator</h1>
      <p class="text-muted-foreground">Visually or semantically separates content.</p>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Horizontal</h2>
        <div>
          <div class="space-y-1">
            <h4 class="text-sm font-medium leading-none">Radix Primitives</h4>
            <p class="text-sm text-muted-foreground">An open-source UI component library.</p>
          </div>
          <brn-separator hlm class="my-4" />
          <div class="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <brn-separator hlm orientation="vertical" />
            <div>Docs</div>
            <brn-separator hlm orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SeparatorDemoComponent {}
