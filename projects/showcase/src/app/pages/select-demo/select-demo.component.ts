import { Component } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports, HlmLabelDirective } from 'ds';

@Component({
  selector: 'app-select-demo',
  imports: [BrnSelectImports, ...HlmSelectImports, HlmLabelDirective],
  template: `
    <section class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold">Select</h1>
        <p class="mt-2 text-muted-foreground">Displays a list of options for the user to pick from — triggered by a button.</p>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Default</h2>
        <div class="max-w-sm">
          <label hlmLabel>Favorite fruit</label>
          <brn-select class="mt-1.5 block" placeholder="Select a fruit">
            <button brnSelectTrigger hlm>
              <brn-select-value hlmSelectValue />
            </button>
            <brn-select-content hlm>
              <div brnSelectGroup>
                <label brnSelectLabel hlmSelectLabel>Fruits</label>
                <div brnOption hlmSelectOption value="apple">Apple</div>
                <div brnOption hlmSelectOption value="banana">Banana</div>
                <div brnOption hlmSelectOption value="blueberry">Blueberry</div>
                <div brnOption hlmSelectOption value="grapes">Grapes</div>
                <div brnOption hlmSelectOption value="pineapple">Pineapple</div>
              </div>
            </brn-select-content>
          </brn-select>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Disabled</h2>
        <div class="max-w-sm">
          <brn-select class="block" placeholder="Select a fruit" disabled>
            <button brnSelectTrigger hlm>
              <brn-select-value hlmSelectValue />
            </button>
            <brn-select-content hlm>
              <div brnOption hlmSelectOption value="apple">Apple</div>
              <div brnOption hlmSelectOption value="banana">Banana</div>
            </brn-select-content>
          </brn-select>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">With Groups</h2>
        <div class="max-w-sm">
          <brn-select class="block" placeholder="Select a timezone">
            <button brnSelectTrigger hlm>
              <brn-select-value hlmSelectValue />
            </button>
            <brn-select-content hlm>
              <div brnSelectGroup>
                <label brnSelectLabel hlmSelectLabel>North America</label>
                <div brnOption hlmSelectOption value="est">Eastern Standard Time (EST)</div>
                <div brnOption hlmSelectOption value="cst">Central Standard Time (CST)</div>
                <div brnOption hlmSelectOption value="pst">Pacific Standard Time (PST)</div>
              </div>
              <div hlmSelectSeparator></div>
              <div brnSelectGroup>
                <label brnSelectLabel hlmSelectLabel>Europe</label>
                <div brnOption hlmSelectOption value="gmt">Greenwich Mean Time (GMT)</div>
                <div brnOption hlmSelectOption value="cet">Central European Time (CET)</div>
              </div>
            </brn-select-content>
          </brn-select>
        </div>
      </div>
    </section>
  `,
})
export class SelectDemoComponent {}
