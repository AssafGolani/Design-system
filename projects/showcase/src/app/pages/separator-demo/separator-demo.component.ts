import { Component } from '@angular/core';
import { BrnSeparatorImports } from '@spartan-ng/brain/separator';
import { HlmSeparatorDirective } from 'ds';

@Component({
  selector: 'app-separator-demo',
  imports: [BrnSeparatorImports, HlmSeparatorDirective],
  template: `
    <section class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold">Separator</h1>
        <p class="mt-2 text-muted-foreground">Visually or semantically separates content.</p>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Horizontal</h2>
        <div class="max-w-md">
          <div class="space-y-1">
            <h4 class="text-sm font-medium leading-none">Spartan UI</h4>
            <p class="text-sm text-muted-foreground">An open-source UI component library for Angular.</p>
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

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">In a List</h2>
        <div class="max-w-md rounded-lg border">
          <div class="p-4">
            <p class="text-sm font-medium">Getting Started</p>
            <p class="text-xs text-muted-foreground">Learn the basics of the design system.</p>
          </div>
          <brn-separator hlm />
          <div class="p-4">
            <p class="text-sm font-medium">Components</p>
            <p class="text-xs text-muted-foreground">Browse all available components.</p>
          </div>
          <brn-separator hlm />
          <div class="p-4">
            <p class="text-sm font-medium">Theming</p>
            <p class="text-xs text-muted-foreground">Customize the look and feel.</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SeparatorDemoComponent {}
