# styling-react-repo# Styled Button Practical Activity

This React component demonstrates how to:

- Toggle a button's disabled state using `useState`
- Pass state between components via props
- Dynamically style a button based on its state
- Simulate hover effects using JavaScript

## Components

### `ChangeIsDisabled`

Parent component that manages the `isDisabled` state and renders:

- A toggle button to enable/disable the styled button
- A status message reflecting the current state
- The `StyledButton` component with props

### `StyledButton`

Receives `isDisabled` as a prop and renders:

- A styled button that is conditionally disabled
- Dynamic background color based on hover state
- Inline styles merged from multiple objects

## Features

- ✅ State lifting and prop passing
- 🎨 Dynamic styling with hover simulation
- ♻️ Reusable layout and button logic

## Example Output
Styled Button Practical Activity 
Styled Button 
Toggle Disable 
Status: Enabled

## How to Run

```bash
npm install
npm start

