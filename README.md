# Design System

Angular monorepo containing a reusable UI component library and an interactive showcase application.

## Projects

| Project     | Type        | Path                 | Description                                      |
| ----------- | ----------- | -------------------- | ------------------------------------------------ |
| `ds`        | Library     | `projects/ds`        | 14 UI components built on spartan-ng + Tailwind   |
| `showcase`  | Application | `projects/showcase`  | Interactive demo app to browse and preview components |

## Quick Start

```bash
# Install dependencies
npm install

# Run the showcase app
ng serve showcase
```

Open [http://localhost:4200](http://localhost:4200) to browse all components.

## Available Components

Button, Input, Label, Checkbox, Switch, Select, Card, Separator, Alert, Badge, Avatar, Dialog, Tabs, Accordion.

See [projects/ds/README.md](projects/ds/README.md) for usage details and API reference.

## Building

```bash
# Build the library
ng build ds

# Build the showcase app
ng build showcase
```

## Tech Stack

- **Angular** 21.x (standalone components, signals)
- **Tailwind CSS** 4.x with oklch design tokens
- **spartan-ng** brain (behavior) + helm (styling) pattern
- **class-variance-authority** for component variants
- **Vitest** for unit testing
