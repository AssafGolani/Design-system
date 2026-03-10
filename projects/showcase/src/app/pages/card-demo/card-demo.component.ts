import { Component } from '@angular/core';
import { HlmCardImports } from 'ds';
import { HlmButtonDirective } from 'ds';
import { HlmInputDirective } from 'ds';
import { HlmLabelDirective } from 'ds';

@Component({
  selector: 'app-card-demo',
  imports: [...HlmCardImports, HlmButtonDirective, HlmInputDirective, HlmLabelDirective],
  template: `
    <section class="space-y-8">
      <h1 class="text-3xl font-bold">Card</h1>
      <p class="text-muted-foreground">Displays a card with header, content, and footer.</p>

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
    </section>
  `,
})
export class CardDemoComponent {}
