## Component features and behavior

This section documents accessibility-related behavoirs of spin buttons.

### Keyboarding

#### Tab Order
1. Value field

#### States
1. Rest (Focused)
2. Editing (Focused and editing)

#### Keyboard State Diagram

| Starting state | Transition | Resulting state |
| ---------- | ------------ | ------- |
| Content before spin button | Tab | Rest |
| Rest  | Tab | Content after spin button |
| Editing  | Tab | Content after spin button (Value committed) |
| Editing  | Enter | Rest (Value committed)|
| Rest  | Any Edit Key (that results in a change) | Editing |
| Editing  | Any Edit Key | Editing |
| Content after spin button (Value committed) | Shift + Tab | Rest |

##### Edit keys
| Edit Key | Result |
| ---------- | ------------ |
| Home | First item in defined range |
| End | Last item in defined range |
| Up arrow | Increments value higher, based on the step prop (defaulting to 1) |
| Down arrow | Increments value lower, based on the step prop (defaulting to 1) |
| Page up | Increments value higher, based on the stepPage prop (defaulting to 1) |
| Page down | Increments value lower, based on the stepPage prop (defaulting to 1) |
| Typing valid value | Valid value |

### High contrast mode

Be careful about visibility of the spin button arrows in high contrast mode.
TODO: Either add specifics about SVGs in high contrast and how to customize the icon color without messing up HCM or (ideally) link to the Icon section on high contrast, when it exists.

### Motion and animation

There is an animation when this element receives focus. This respects reduced-motion media queries.

When a user holds down an edit key or mouse click, there is an animation of spinning numbers to provide a sense of how fast the value is changing. This animation is an interaction cue and therefore is acceptable even when a user has set a preference for reduced motion.

### Semantics

## Known issues

Mouse press quick changes to value are not announced to screen readers.

[NVDA does not read the value of spinbuttons in Chromium](https://github.com/nvaccess/nvda/issues/13195)

[Narrator defaults to reading min/max as 0 when they're (intentionally) undefined](https://microsoft.visualstudio.com/Edge/_workitems/edit/39070743)

### Narrator + Edge
When no min or max values are set Narrator announces "minimum 0" and "maximum 0". This is misleading because when these values are not set SpinButton does not enforce a min or max value.

### NVDA + Edge/Chrome
When focused on the SpinButton input field pressing up/down arrows announces "blank". NVDA + Firefox announces the correct value.

## Usage



### When to choose Spin button

SpinButtons allow someone to incrementally adjust a value in small steps.

SpinButtons are a better choice than Input and Input with type: number when clear indication is needed that there are maximum and minimum allowed values.

SpinButtons are a better choice than Slider when there are many valid values and Slider would not provide enough granularity to choose a precise value.

### Required props

Authors must provide a label for SpinButton. The recommended pattern for Fluent inputs is to use the Label component like this:
```
<Label htmlFor="example-spinbutton">A SpinButton</Label>
<SpinButton id="example-spinbutton" defaultValue={10} />
```

How the SpinButton is read depends on the screen reader used but generally it reads:

1. Label
2. "spin button"
3. "value" where "value" is the current displayed value

Prefixes, postfixes and other display formatting (e.g., mapping the numbers 1-12 to January-December) is handled by setting the `displayValue` prop which, internally to `SpinButton` sets the `aria-valuetext` attribute.

How this is read also depends on the screen reader used but a screen reader should read the displayed text consistently with how it would read it in other contexts (i.e., "$1" should be read as "one dollar").

### Styling



### Advanced usage

Placeholder: Cover potential use cases not included in our storybook examples here (or even included storybook examples, if they're complex require a notable amout of work or nuanced understanding from authors)

#### Child content restrictions

The component has the following structure:
* Input field
* Up button
  * Increment icon
* Down button
  * Decrement icon


#### Component-specific usage warnings



## Extending [component name]


