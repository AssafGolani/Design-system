import { Component } from '@angular/core';
import { BrnDialogImports } from '@spartan-ng/brain/dialog';
import { HlmDialogImports } from 'ds';
import { HlmButtonDirective } from 'ds';
import { HlmInputDirective } from 'ds';
import { HlmLabelDirective } from 'ds';

@Component({
  selector: 'app-dialog-demo',
  imports: [BrnDialogImports, ...HlmDialogImports, HlmButtonDirective, HlmInputDirective, HlmLabelDirective],
  template: `
    <section class="space-y-8">
      <h1 class="text-3xl font-bold">Dialog</h1>
      <p class="text-muted-foreground">A window overlaid on either the primary window or another dialog window.</p>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Default</h2>
        <brn-dialog>
          <button brnDialogTrigger hlmBtn>Edit Profile</button>
          <ng-template brnDialogContent>
            <div hlmDialogContent>
              <div hlmDialogHeader>
                <h3 hlmDialogTitle brnDialogTitle>Edit profile</h3>
                <p hlmDialogDescription brnDialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </p>
              </div>
              <div class="grid gap-4 py-4">
                <div class="grid grid-cols-4 items-center gap-4">
                  <label hlmLabel class="text-right">Name</label>
                  <input hlmInput class="col-span-3" value="Pedro Duarte" />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                  <label hlmLabel class="text-right">Username</label>
                  <input hlmInput class="col-span-3" value="@peduarte" />
                </div>
              </div>
              <div hlmDialogFooter>
                <button hlmBtn brnDialogClose>Save changes</button>
              </div>
            </div>
          </ng-template>
        </brn-dialog>
      </div>
    </section>
  `,
})
export class DialogDemoComponent {}
