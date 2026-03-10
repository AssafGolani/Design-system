import { Component } from '@angular/core';
import { HlmAlertImports } from 'ds';

@Component({
  selector: 'app-alert-demo',
  imports: [...HlmAlertImports],
  template: `
    <section class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold">Alert</h1>
        <p class="mt-2 text-muted-foreground">Displays a callout for user attention.</p>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Default</h2>
        <div hlmAlert class="max-w-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
          <h5 hlmAlertTitle>Heads up!</h5>
          <p hlmAlertDescription>You can add components to your app using the CLI.</p>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Destructive</h2>
        <div hlmAlert variant="destructive" class="max-w-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
          <h5 hlmAlertTitle>Error</h5>
          <p hlmAlertDescription>Your session has expired. Please log in again.</p>
        </div>
      </div>
    </section>
  `,
})
export class AlertDemoComponent {}
