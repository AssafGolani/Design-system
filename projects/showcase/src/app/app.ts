import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="flex min-h-screen">
      <nav class="w-64 border-r bg-muted/40 p-6">
        <h2 class="mb-6 text-xl font-bold tracking-tight">Design System</h2>
        <ul class="space-y-1">
          @for (item of components; track item.path) {
            <li>
              <a
                [routerLink]="item.path"
                routerLinkActive="bg-accent font-medium"
                class="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                {{ item.label }}
              </a>
            </li>
          }
        </ul>
      </nav>
      <main class="flex-1 overflow-auto p-8">
        <router-outlet />
      </main>
    </div>
  `,
})
export class App {
  readonly components = [
    { path: 'button', label: 'Button' },
    { path: 'input', label: 'Input' },
    { path: 'label', label: 'Label' },
    { path: 'checkbox', label: 'Checkbox' },
    { path: 'switch', label: 'Switch' },
    { path: 'select', label: 'Select' },
    { path: 'card', label: 'Card' },
    { path: 'separator', label: 'Separator' },
    { path: 'alert', label: 'Alert' },
    { path: 'badge', label: 'Badge' },
    { path: 'avatar', label: 'Avatar' },
    { path: 'dialog', label: 'Dialog' },
    { path: 'tabs', label: 'Tabs' },
    { path: 'accordion', label: 'Accordion' },
  ];
}
