---
title: Angular (Coming Soon)
weight: 4
---

# Angular Components

PrimitiveKit for Angular is coming soon! 🚀

## What to Expect

We're working on bringing the same great experience to Angular developers:

- ✅ **38 Components** - All components from React version
- ✅ **Angular 17+** - Built for modern Angular
- ✅ **TypeScript** - Full type definitions
- ✅ **Accessible** - WCAG 2.1 AA compliant
- ✅ **Customizable** - Same 600+ design tokens
- ✅ **Standalone Components** - No NgModule required

## Planned Features

### Standalone Components

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@primitivekit/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <pk-button variant="primary">
      Click me
    </pk-button>
  `
})
export class AppComponent {}
```

### TypeScript Support

```typescript
import { ButtonComponent, ButtonVariant } from '@primitivekit/angular';

@Component({
  // ...
})
export class MyComponent {
  variant: ButtonVariant = 'primary';
}
```

### Reactive Forms Integration

```typescript
import { FormControl } from '@angular/forms';
import { InputComponent } from '@primitivekit/angular';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule],
  template: `
    <pk-input 
      [formControl]="emailControl"
      label="Email"
      type="email"
    />
  `
})
export class FormComponent {
  emailControl = new FormControl('');
}
```

## Timeline

We're aiming to release the Angular version in **Q4 2026**.

## Stay Updated

- ⭐ Star us on [GitHub](https://github.com/primitivekit/react)
- 📧 Subscribe to our newsletter (coming soon)
- 🐦 Follow us on Twitter (coming soon)

## In the Meantime

Check out our [React components](/docs/react) which are available now!

## Interested in Contributing?

We'd love your help! If you're interested in contributing to the Angular version:

- Join the discussion on [GitHub Discussions](https://github.com/primitivekit/react/discussions)
- Check out our [Contributing Guide](https://github.com/primitivekit/react/blob/main/CONTRIBUTING.md)
- Reach out to the team

## Questions?

Have questions about the Angular version? Open an issue on [GitHub](https://github.com/primitivekit/react/issues) with the `angular` label.
