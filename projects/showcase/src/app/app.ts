import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="flex min-h-screen flex-col" [class.dark]="darkMode()">
      <!-- Header -->
      <header class="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div class="flex h-14 items-center px-6">
          <h1 class="text-lg font-semibold">Design System</h1>
          <div class="ml-auto flex items-center gap-2">
            <button
              class="inline-flex h-8 w-8 items-center justify-center rounded-md border bg-background text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              (click)="toggleDarkMode()"
              [attr.aria-label]="darkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
            >
              @if (darkMode()) {
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              } @else {
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              }
            </button>
          </div>
        </div>
      </header>

      <div class="flex flex-1">
        <!-- Sidebar -->
        <aside class="hidden w-64 shrink-0 border-r bg-muted/30 md:block">
          <nav class="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto p-4">
            <div class="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Components</div>
            <ul class="space-y-0.5">
              @for (item of components; track item.path) {
                <li>
                  <a
                    [routerLink]="item.path"
                    routerLinkActive="bg-accent text-accent-foreground font-medium"
                    class="flex items-center rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {{ item.label }}
                  </a>
                </li>
              }
            </ul>
          </nav>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 overflow-auto">
          <div class="mx-auto max-w-4xl p-8">
            <router-outlet />
          </div>
        </main>
      </div>
    </div>
  `,
})
export class App {
  readonly darkMode = signal(false);

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

  toggleDarkMode(): void {
    this.darkMode.update((v) => !v);
  }
}
