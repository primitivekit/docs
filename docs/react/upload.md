# Upload

# Upload

A file upload component with drag-and-drop support and file previews.

## Import

```tsx
import { Upload } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Upload 
  label="Upload File"
  onChange={(files) => console.log(files)}
/>
```

## Multiple Files

```tsx
<Upload 
  label="Upload Files"
  multiple
  onChange={(files) => console.log(files)}
/>
```

## Accept Types

```tsx
// Images only
<Upload 
  label="Upload Image"
  accept="image/*"
/>

// PDFs only
<Upload 
  label="Upload PDF"
  accept=".pdf"
/>

// Multiple types
<Upload 
  label="Upload Document"
  accept=".pdf,.doc,.docx"
/>
```

## Max File Size

```tsx
<Upload 
  label="Upload File"
  maxSize={5 * 1024 * 1024} // 5MB
  onError={(error) => alert(error)}
/>
```

## With Preview

```tsx
<Upload 
  label="Upload Image"
  accept="image/*"
  showPreview
  onChange={(files) => console.log(files)}
/>
```

## Drag and Drop

```tsx
<Upload 
  label="Drop files here"
  dragAndDrop
  multiple
  onChange={(files) => console.log(files)}
/>
```

## Controlled Upload

```tsx
import { useState } from 'react';

function ControlledUpload() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div>
      <Upload 
        label="Upload Files"
        multiple
        onChange={setFiles}
        showPreview
      />
      <p>Selected: {files.length} files</p>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Upload label |
| `accept` | `string` | - | Accepted file types |
| `multiple` | `boolean` | `false` | Allow multiple files |
| `maxSize` | `number` | - | Max file size (bytes) |
| `maxFiles` | `number` | - | Max number of files |
| `dragAndDrop` | `boolean` | `false` | Enable drag and drop |
| `showPreview` | `boolean` | `false` | Show file previews |
| `onChange` | `function` | - | File change handler |
| `onError` | `function` | - | Error handler |
| `disabled` | `boolean` | `false` | Disable upload |

## Customization

```tsx
<Upload
  label="Custom upload"
  style={{
    '--upload-border-color': 'rgba(100, 100, 200, 1)',
    '--upload-border-style': 'dashed',
    '--upload-border-radius': '12px',
    '--upload-bg-color': 'rgba(240, 240, 255, 1)',
    '--upload-padding': '32px',
  }}
/>
```

## Accessibility

- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus indicators
- ✅ Error announcements

## Related Components

- [Input](/docs/react/input) - Text input
- [Form](/docs/react/form) - Form wrapper
- [Button](/docs/react/button) - Action button

