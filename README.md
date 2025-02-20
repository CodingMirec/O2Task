# InputComponent

## Overview
`InputComponent` is a reusable input field component designed for team-wide use. It supports validation, labels, descriptions, and error messages while ensuring consistent styling using CSS modules and global design tokens.

## Features
- Customizable label, optional label, and description
- Supports required fields with an asterisk
- Email validation with error messages
- Disabled state support
- Fully controlled component using `value` and `onChange`

## Installation
To use this component, import it into your project:

```jsx
import InputComponent from "./InputComponent";
```

## Props
| Prop Name       | Type     | Required | Description |
|----------------|----------|----------|-------------|
| `label`        | `string` | ✅        | The label text displayed above the input field. |
| `optionalLabel` | `string` | ❌       | Displays optional label text next to the main label. |
| `isMandatory`  | `boolean` | ❌       | Adds an asterisk (*) to indicate a required field. |
| `description`  | `string` | ❌       | A short description displayed below the label. |
| `placeholder`  | `string` | ❌       | Placeholder text for the input field. |
| `value`        | `string` | ✅        | The input value (controlled component). |
| `onChange`     | `function` | ✅        | Function called when the input value changes. |
| `type`         | `string` | ❌       | Input type (e.g., `email`, `text`). Defaults to `text`. |
| `disabled`     | `boolean` | ❌       | Disables the input field when set to `true`. |
| `errorMessage` | `string` | ❌       | Displays an error message below the input. |

## Usage Example
```jsx
import { useState } from "react";
import InputComponent from "./InputComponent";

export default function ExampleForm() {
  const [email, setEmail] = useState("");

  return (
    <form>
      <InputComponent
        label="Email"
        optionalLabel="Optional"
        description="Enter a valid email address."
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        errorMessage={!emailRegex.test(value2) && value2.length > 0 
        ? 'Invalid email format' 
        : ''}
      />
    </form>
  );
}
```

## Styling
This component uses CSS Modules for scoped styling. It also references global design tokens for consistency with the company's design system.

## Notes
- The component is **fully controlled**, meaning it requires `value` and `onChange` to function properly.
- Teams using this component should pass error handling logic via the `errorMessage` prop.

## License
This component is proprietary to the company and should be used within internal projects only.

