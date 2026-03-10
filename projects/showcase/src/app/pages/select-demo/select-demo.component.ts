import { Component } from '@angular/core';
import { HlmSelectImports } from 'ds';
import { HlmLabelDirective } from 'ds';

@Component({
  selector: 'app-select-demo',
  imports: [...HlmSelectImports, HlmLabelDirective],
  template: `
    <section class="space-y-8">
      <h1 class="text-3xl font-bold">Select</h1>
      <p class="text-muted-foreground">Displays a list of options for the user to pick from — triggered by a button.</p>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Usage Note</h2>
        <p class="text-sm text-muted-foreground">
          The Select component uses the brain select directives from
          <code class="rounded bg-muted px-1 py-0.5 text-sm">&#64;spartan-ng/brain/select</code>
          along with the helm styling directives from the design system library.
        </p>
        <p class="text-sm text-muted-foreground">
          Import <code class="rounded bg-muted px-1 py-0.5 text-sm">BrnSelectImports</code> from
          <code class="rounded bg-muted px-1 py-0.5 text-sm">&#64;spartan-ng/brain/select</code> and
          <code class="rounded bg-muted px-1 py-0.5 text-sm">HlmSelectImports</code> from
          <code class="rounded bg-muted px-1 py-0.5 text-sm">ds</code>.
        </p>
      </div>
    </section>
  `,
})
export class SelectDemoComponent {}
