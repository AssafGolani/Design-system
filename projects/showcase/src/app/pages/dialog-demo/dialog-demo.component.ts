import { Component } from '@angular/core';
import { BrnDialogImports } from '@spartan-ng/brain/dialog';
import { HlmDialogImports, HlmButtonDirective, HlmInputDirective, HlmLabelDirective } from 'ds';

@Component({
  selector: 'app-dialog-demo',
  imports: [BrnDialogImports, ...HlmDialogImports, HlmButtonDirective, HlmInputDirective, HlmLabelDirective],
  template: `
    <section class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold">Dialog</h1>
        <p class="mt-2 text-muted-foreground">A window overlaid on either the primary window or another dialog window.</p>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Edit Profile</h2>
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
                  <input hlmInput class="col-span-3" value="&#64;peduarte" />
                </div>
              </div>
              <div hlmDialogFooter>
                <button hlmBtn brnDialogClose>Save changes</button>
              </div>
            </div>
          </ng-template>
        </brn-dialog>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Confirmation</h2>
        <brn-dialog>
          <button brnDialogTrigger hlmBtn variant="destructive">Delete Account</button>
          <ng-template brnDialogContent>
            <div hlmDialogContent>
              <div hlmDialogHeader>
                <h3 hlmDialogTitle brnDialogTitle>Are you sure?</h3>
                <p hlmDialogDescription brnDialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </p>
              </div>
              <div hlmDialogFooter class="gap-2">
                <button hlmBtn variant="outline" brnDialogClose>Cancel</button>
                <button hlmBtn variant="destructive" brnDialogClose>Delete</button>
              </div>
            </div>
          </ng-template>
        </brn-dialog>
      </div>
    </section>
  `,
})
export class DialogDemoComponent {}
