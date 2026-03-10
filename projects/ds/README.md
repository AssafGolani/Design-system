# Design System (`ds`)

Angular component library built on [spartan-ng](https://www.spartan.ng/) patterns. Provides styled UI primitives using Tailwind CSS, class-variance-authority for variants, and `@spartan-ng/brain` for accessible behavior.

## Installation

The library is consumed as a local Angular library within this workspace. No separate install is needed.

```bash
npm install
```

## Building

```bash
ng build ds
```

Build output is placed in `dist/ds/`.

## Usage

Import components directly from `ds`:

```typescript
import { HlmButtonDirective } from 'ds';

@Component({
  imports: [HlmButtonDirective],
  template: `<button hlmBtn variant="outline">Click me</button>`,
})
export class MyComponent {}
```

For components that require brain (behavior) + helm (styling) pairing:

```typescript
import { BrnSwitchImports } from '@spartan-ng/brain/switch';
import { HlmSwitchImports } from 'ds';

@Component({
  imports: [BrnSwitchImports, ...HlmSwitchImports],
  template: `
    <brn-switch hlm id="toggle">
      <brn-switch-thumb hlm />
    </brn-switch>
  `,
})
export class MyComponent {}
```

## Components

### Standalone (helm styling only)

| Component  | Directive/Import        | Selector       | Variants                                          |
| ---------- | ----------------------- | -------------- | ------------------------------------------------- |
| Button     | `HlmButtonDirective`    | `[hlmBtn]`     | default, secondary, destructive, outline, ghost, link / sm, default, lg, icon |
| Input      | `HlmInputDirective`     | `[hlmInput]`   | sm, default, lg / error states                    |
| Label      | `HlmLabelDirective`     | `[hlmLabel]`   | default / error states                            |
| Badge      | `HlmBadgeDirective`     | `[hlmBadge]`   | default, secondary, destructive, outline          |
| Card       | `HlmCardImports`        | `[hlmCard]`, `[hlmCardHeader]`, etc. | -                       |
| Alert      | `HlmAlertImports`       | `[hlmAlert]`   | default, destructive                              |
| Separator  | `HlmSeparatorDirective` | `[hlmSeparator]` | horizontal, vertical                            |

### Brain + Helm (behavior + styling)

These require importing both `Brn*Imports` from `@spartan-ng/brain/*` and `Hlm*Imports` from `ds`.

| Component  | Brain Package                    | Helm Import          |
| ---------- | -------------------------------- | -------------------- |
| Checkbox   | `@spartan-ng/brain/checkbox`     | `HlmCheckboxImports` |
| Switch     | `@spartan-ng/brain/switch`       | `HlmSwitchImports`   |
| Select     | `@spartan-ng/brain/select`       | `HlmSelectImports`   |
| Avatar     | `@spartan-ng/brain/avatar`       | `HlmAvatarImports`   |
| Dialog     | `@spartan-ng/brain/dialog`       | `HlmDialogImports`   |
| Tabs       | `@spartan-ng/brain/tabs`         | `HlmTabsImports`     |
| Accordion  | `@spartan-ng/brain/accordion`    | `HlmAccordionImports`|
| Separator  | `@spartan-ng/brain/separator`    | `HlmSeparatorDirective` |

## Theming

The library uses CSS custom properties with oklch colors. Define your theme tokens in your application's `styles.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  /* ... see showcase/src/styles.css for full token list */
}
```

Dark mode is supported via the `.dark` class on a parent element.

## Dependencies

- `@angular/core` ^21.x
- `@angular/cdk` ^21.x
- `@spartan-ng/brain` ^0.0.1-alpha.648
- `@spartan-ng/ui-core` ^0.0.1-alpha.380
- `class-variance-authority` ^0.7.x
- `clsx` ^2.x
- `tailwind-merge` ^3.x

## Project Structure

```
projects/ds/src/
├── lib/
│   ├── accordion/    # HlmAccordionImports
│   ├── alert/        # HlmAlertImports
│   ├── avatar/       # HlmAvatarImports
│   ├── badge/        # HlmBadgeDirective
│   ├── button/       # HlmButtonDirective
│   ├── card/         # HlmCardImports
│   ├── checkbox/     # HlmCheckboxImports
│   ├── dialog/       # HlmDialogImports
│   ├── input/        # HlmInputDirective
│   ├── label/        # HlmLabelDirective
│   ├── select/       # HlmSelectImports
│   ├── separator/    # HlmSeparatorDirective
│   ├── switch/       # HlmSwitchImports
│   └── tabs/         # HlmTabsImports
└── public-api.ts     # Re-exports everything
```
