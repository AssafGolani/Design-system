import { Component } from '@angular/core';
import { HlmAlertImports } from 'ds';

@Component({
  selector: 'app-alert-demo',
  imports: [...HlmAlertImports],
  template: `
    <section class="space-y-8">
      <h1 class="text-3xl font-bold">Alert</h1>
      <p class="text-muted-foreground">Displays a callout for user attention.</p>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Default</h2>
        <div hlmAlert class="max-w-lg">
          <h5 hlmAlertTitle>Heads up!</h5>
          <p hlmAlertDescription>You can add components to your app using the CLI.</p>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Destructive</h2>
        <div hlmAlert variant="destructive" class="max-w-lg">
          <h5 hlmAlertTitle>Error</h5>
          <p hlmAlertDescription>Your session has expired. Please log in again.</p>
        </div>
      </div>
    </section>
  `,
})
export class AlertDemoComponent {}
