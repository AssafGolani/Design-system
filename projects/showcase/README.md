# Showcase App

Interactive demo application for the Design System library. Browse and preview all available components with live examples.

## Getting Started

```bash
# From the repository root
npm install

# Start the dev server
ng serve showcase
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

## Features

- Sidebar navigation to browse all 14 components
- Dark mode toggle in the header
- Multiple examples per component showing variants, sizes, states, and real-world usage patterns

## Component Demos

| Component   | Route         | Highlights                                         |
| ----------- | ------------- | -------------------------------------------------- |
| Button      | `/button`     | Variants, sizes, icon buttons, disabled state      |
| Input       | `/input`      | Sizes, disabled, file input, input with button     |
| Label       | `/label`      | Standalone, paired with input, disabled             |
| Checkbox    | `/checkbox`   | Default, disabled, notification preferences form   |
| Switch      | `/switch`     | Default, disabled, settings panel                  |
| Select      | `/select`     | Default, disabled, grouped options with separators |
| Card        | `/card`       | Create project form, notifications card            |
| Separator   | `/separator`  | Horizontal, vertical, in-list usage                |
| Alert       | `/alert`      | Default with icon, destructive variant             |
| Badge       | `/badge`      | Variants, use cases, badge inside button           |
| Avatar      | `/avatar`     | Sizes, fallback initials, user list example        |
| Dialog      | `/dialog`     | Edit profile form, destructive confirmation        |
| Tabs        | `/tabs`       | Account/password tabs with card content            |
| Accordion   | `/accordion`  | FAQ-style with animated chevron icons              |

## Building

```bash
ng build showcase
```

Build output is placed in `dist/showcase/`.

## Project Structure

```
projects/showcase/src/
├── app/
│   ├── app.ts              # Root component with header, sidebar, router
│   ├── app.config.ts       # Application config
│   ├── app.routes.ts       # Lazy-loaded routes for each demo
│   └── pages/              # One demo component per UI component
│       ├── button-demo/
│       ├── input-demo/
│       ├── ...
│       └── accordion-demo/
├── styles.css              # Tailwind CSS + design tokens (light/dark)
├── index.html
└── main.ts
```
