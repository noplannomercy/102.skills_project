# Component Specifications

Complete component library for the Vegerly design system. Each component follows our design principles and uses design tokens.

---

## Table of Contents

1. [Button](#button)
2. [Card](#card)
3. [Input](#input)
4. [Badge](#badge)
5. [Avatar](#avatar)
6. [Rating](#rating)
7. [Price Tag](#price-tag)
8. [Dropdown](#dropdown)
9. [Modal](#modal)
10. [Toast Notification](#toast-notification)

---

## Button

Primary interactive element for CTAs and actions.

### Variants

#### Primary
- **Purpose**: Main CTAs, important actions
- **Style**: Solid primary green background
- **Colors**: `bg-primary-400`, `hover:bg-primary-500`, `active:bg-primary-600`
- **Text**: White, medium weight (500)

#### Secondary
- **Purpose**: Less prominent actions
- **Style**: Transparent with border
- **Colors**: `border-neutral-300`, `hover:bg-neutral-100`, `text-neutral-900`

#### Ghost
- **Purpose**: Subtle actions, navigation
- **Style**: No background or border
- **Colors**: `text-neutral-700`, `hover:bg-neutral-100`

#### Danger
- **Purpose**: Destructive actions
- **Style**: Red solid background
- **Colors**: `bg-error-500`, `hover:bg-error-600`, `text-white`

### Sizes

```tsx
sm:  h-9  px-4  text-sm     // 36px height, 14px text
md:  h-11 px-6  text-body-md // 44px height, 16px text (default)
lg:  h-12 px-8  text-body-lg // 48px height, 18px text
```

### States

- **Default**: Base styling
- **Hover**: Darker background, `transition-all duration-200`
- **Active**: Even darker, slightly scale down `scale-[0.98]`
- **Disabled**: `opacity-50`, `cursor-not-allowed`, no hover effects
- **Loading**: Show spinner, disable interaction

### Accessibility

- Use `<button>` element
- Include `aria-label` for icon-only buttons
- Support keyboard focus with visible ring
- Disable during loading/disabled states

### Code Example

```tsx
<button className="h-11 px-6 rounded-lg bg-primary-400 text-white font-medium
  hover:bg-primary-500 active:bg-primary-600 active:scale-[0.98]
  transition-all duration-200
  focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary-400 focus-visible:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed">
  Get Started
</button>
```

---

## Card

Container for content grouping with optional hover effects.

### Variants

#### Default
- **Background**: White
- **Border**: None or subtle `border-neutral-200`
- **Shadow**: `shadow-sm`, `hover:shadow-md`
- **Radius**: `rounded-xl` (16px)

#### Product Card
- **Image**: Top, aspect ratio 4/3 or 1/1
- **Content**: Padding `p-6`
- **Hover**: Lift effect with shadow and subtle scale
- **Elements**: Image, title, description, price, rating

#### Feature Card
- **Style**: More prominent, larger
- **Icon/Image**: At top
- **Text**: Centered or left-aligned
- **Background**: White or subtle gradient

### Spacing

- **Padding**: `p-6` (24px) default
- **Gap**: `gap-4` between elements
- **Image margin**: `mb-4` below images

### Hover Effect

```css
transition: all 200ms ease-out
hover: shadow-md, transform scale-[1.02]
```

### Code Example

```tsx
<div className="bg-white rounded-xl shadow-sm hover:shadow-md
  transition-all duration-200 hover:scale-[1.02] overflow-hidden">
  <img src="/dish.jpg" alt="Green Salad" className="w-full aspect-square object-cover" />
  <div className="p-6">
    <h3 className="text-h4 font-semibold text-neutral-900 mb-2">Green Salad</h3>
    <p className="text-body-sm text-neutral-600 mb-4">
      Fresh greens with premium ingredients
    </p>
    <div className="flex items-center justify-between">
      <span className="text-h4 font-bold text-primary-600">$10.50</span>
      <div className="flex items-center gap-1">
        <span className="text-warning-500">★</span>
        <span className="text-body-sm text-neutral-600">4.5</span>
      </div>
    </div>
  </div>
</div>
```

---

## Input

Form input fields for user data entry.

### Variants

#### Text Input
- **Height**: `h-11` (44px)
- **Padding**: `px-4`
- **Border**: `border border-neutral-300`
- **Radius**: `rounded-lg`
- **Focus**: `ring-3 ring-primary-400`

#### Textarea
- **Min height**: `min-h-[120px]`
- **Padding**: `p-4`
- **Resize**: `resize-y` or `resize-none`

#### Search
- **Icon**: Magnifying glass on left
- **Padding**: `pl-10` to accommodate icon
- **Clear button**: On right when has value

### States

- **Default**: `border-neutral-300`
- **Hover**: `border-neutral-400`
- **Focus**: `border-primary-400`, `ring-3 ring-primary-400 ring-offset-2`
- **Error**: `border-error-500`, `ring-error-500`
- **Disabled**: `bg-neutral-100`, `cursor-not-allowed`

### Labels

- **Position**: Above input
- **Text**: `text-body-sm font-medium text-neutral-700`
- **Margin**: `mb-2`
- **Required**: Red asterisk

### Helper Text

- **Position**: Below input
- **Default**: `text-body-xs text-neutral-600`
- **Error**: `text-error-600`

### Code Example

```tsx
<div>
  <label className="block text-body-sm font-medium text-neutral-700 mb-2">
    Email Address
  </label>
  <input
    type="email"
    placeholder="you@example.com"
    className="w-full h-11 px-4 rounded-lg border border-neutral-300
      text-body-md text-neutral-900 placeholder:text-neutral-400
      hover:border-neutral-400
      focus:outline-none focus:border-primary-400 focus:ring-3 focus:ring-primary-400 focus:ring-offset-2
      disabled:bg-neutral-100 disabled:cursor-not-allowed
      transition-all duration-200"
  />
  <p className="mt-2 text-body-xs text-neutral-600">
    We'll never share your email.
  </p>
</div>
```

---

## Badge

Small label for status, categories, or counts.

### Variants

#### Solid
- **Background**: Colored background
- **Text**: White or contrasting color
- **Colors**: Primary, success, warning, error, neutral

#### Soft
- **Background**: Light tint (50/100 shade)
- **Text**: Dark shade (600/700)
- **Example**: `bg-primary-100 text-primary-700`

#### Outlined
- **Background**: Transparent
- **Border**: `border` with color
- **Text**: Matching color

### Sizes

```tsx
sm: px-2 py-0.5 text-xs    // 8px padding, 12px text
md: px-3 py-1   text-sm    // 12px padding, 14px text (default)
lg: px-4 py-1.5 text-body-md // 16px padding, 16px text
```

### Styles

- **Radius**: `rounded-full` for pills
- **Font**: `font-medium`
- **Icon**: Optional leading icon

### Code Example

```tsx
{/* Solid variant */}
<span className="inline-flex items-center px-3 py-1 rounded-full
  bg-primary-400 text-white text-sm font-medium">
  New
</span>

{/* Soft variant */}
<span className="inline-flex items-center px-3 py-1 rounded-full
  bg-success-50 text-success-700 text-sm font-medium">
  ✓ Available
</span>

{/* Outlined variant */}
<span className="inline-flex items-center px-3 py-1 rounded-full
  border border-neutral-300 text-neutral-700 text-sm font-medium">
  Organic
</span>
```

---

## Avatar

Profile images and user representations.

### Sizes

```tsx
sm: w-8 h-8     // 32px
md: w-12 h-12   // 48px (default)
lg: w-16 h-16   // 64px
xl: w-24 h-24   // 96px
```

### Variants

#### Image
- **Radius**: `rounded-full`
- **Border**: Optional `border-2 border-white`
- **Object fit**: `object-cover`

#### Initials
- **Background**: `bg-primary-400`
- **Text**: White, centered, uppercase
- **Font**: Bold

#### Icon
- **Background**: `bg-neutral-200`
- **Icon**: User icon, neutral color

### States

- **Online**: Green dot overlay (bottom-right)
- **Offline**: Gray dot or no indicator
- **Loading**: Skeleton or shimmer effect

### Code Example

```tsx
{/* Image avatar */}
<img
  src="/avatar.jpg"
  alt="User name"
  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
/>

{/* Initials avatar */}
<div className="w-12 h-12 rounded-full bg-primary-400
  flex items-center justify-center text-white font-bold text-sm">
  JD
</div>

{/* With online status */}
<div className="relative">
  <img src="/avatar.jpg" alt="User" className="w-12 h-12 rounded-full" />
  <span className="absolute bottom-0 right-0 w-3 h-3 bg-success-500
    border-2 border-white rounded-full"></span>
</div>
```

---

## Rating

Star rating display for reviews and feedback.

### Display Modes

#### Read-only
- **Stars**: Filled/half/empty based on rating
- **Color**: `text-warning-500` (gold)
- **Number**: Display rating value next to stars

#### Interactive
- **Hover**: Preview rating
- **Click**: Set rating
- **States**: Default, hover, selected

### Sizes

```tsx
sm: text-sm    // 14px stars
md: text-lg    // 18px stars (default)
lg: text-xl    // 20px stars
```

### Code Example

```tsx
{/* Read-only rating */}
<div className="flex items-center gap-1">
  <div className="flex text-warning-500">
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span className="text-neutral-300">★</span>
  </div>
  <span className="text-body-sm text-neutral-600 ml-1">4.5</span>
</div>

{/* With count */}
<div className="flex items-center gap-2">
  <div className="flex text-warning-500 text-lg">
    <span>★★★★</span>
    <span className="text-neutral-300">★</span>
  </div>
  <span className="text-body-sm text-neutral-600">4.8 (124 reviews)</span>
</div>
```

---

## Price Tag

Display pricing with optional comparison and discount.

### Variants

#### Simple
- **Price**: Large, bold, primary color
- **Currency**: Same size or slightly smaller

#### With Original
- **Current**: Large, bold, primary or error (sale)
- **Original**: Smaller, strikethrough, neutral color
- **Savings**: Optional badge showing discount

#### Range
- **Format**: "From $10.50" or "$10.50 - $15.99"
- **Style**: Same as simple

### Code Example

```tsx
{/* Simple price */}
<span className="text-h4 font-bold text-primary-600">$10.50</span>

{/* Sale price */}
<div className="flex items-center gap-2">
  <span className="text-h4 font-bold text-error-600">$12.80</span>
  <span className="text-body-md text-neutral-400 line-through">$15.99</span>
  <span className="px-2 py-0.5 bg-error-100 text-error-700 text-xs font-medium rounded">
    -20%
  </span>
</div>

{/* Price range */}
<span className="text-h4 font-semibold text-neutral-800">
  <span className="text-body-sm font-normal text-neutral-600">From </span>
  $10.50
</span>
```

---

## Dropdown

Select menus and dropdown lists.

### Structure

- **Trigger**: Button that opens menu
- **Panel**: Floating panel with options
- **Options**: Clickable items
- **Divider**: Optional separators

### Styling

#### Trigger
- Same as button (usually secondary or ghost)
- Down arrow icon on right
- Rotate arrow when open

#### Panel
- **Background**: White
- **Border**: `border border-neutral-200`
- **Shadow**: `shadow-lg`
- **Radius**: `rounded-lg`
- **Max height**: `max-h-60` with scroll

#### Option
- **Padding**: `px-4 py-2.5`
- **Hover**: `bg-neutral-100`
- **Selected**: `bg-primary-50 text-primary-700`
- **Disabled**: `opacity-50 cursor-not-allowed`

### Animation

```tsx
Enter: fade-in + slide-in-down
Exit: fade-out + slide-out-up
Duration: 200ms
```

### Code Example

```tsx
{/* Dropdown trigger */}
<button className="h-11 px-4 rounded-lg border border-neutral-300
  flex items-center justify-between gap-2 bg-white
  hover:bg-neutral-50 transition-colors">
  <span>Select option</span>
  <svg className="w-4 h-4 text-neutral-600" /* down arrow icon */>
</button>

{/* Dropdown panel */}
<div className="absolute mt-2 w-full bg-white border border-neutral-200
  rounded-lg shadow-lg max-h-60 overflow-auto
  animate-slide-in-down">
  <button className="w-full px-4 py-2.5 text-left text-body-md
    hover:bg-neutral-100 transition-colors">
    Option 1
  </button>
  <button className="w-full px-4 py-2.5 text-left text-body-md
    bg-primary-50 text-primary-700">
    Option 2 (selected)
  </button>
  <button className="w-full px-4 py-2.5 text-left text-body-md
    hover:bg-neutral-100 transition-colors">
    Option 3
  </button>
</div>
```

---

## Modal

Overlay dialogs for focused interactions.

### Structure

- **Overlay**: Dark background
- **Panel**: Centered white container
- **Header**: Title and close button
- **Body**: Main content
- **Footer**: Actions (buttons)

### Styling

#### Overlay
- **Background**: `bg-black/40` (40% opacity)
- **Blur**: `backdrop-blur-sm`
- **Position**: Fixed, full screen

#### Panel
- **Background**: White
- **Shadow**: `shadow-2xl`
- **Radius**: `rounded-2xl`
- **Max width**: `max-w-md` or `max-w-lg`
- **Padding**: `p-6`

#### Header
- **Border**: `border-b border-neutral-200`
- **Padding**: `pb-4`
- **Title**: `text-h3 font-semibold`

#### Footer
- **Border**: `border-t border-neutral-200`
- **Padding**: `pt-4`
- **Buttons**: Right-aligned, gap between

### Animation

```tsx
Overlay: fade-in
Panel: fade-in + scale-in
Duration: 300ms
```

### Accessibility

- Trap focus inside modal
- Close on Escape key
- Close on overlay click
- Return focus on close

### Code Example

```tsx
{/* Modal overlay */}
<div className="fixed inset-0 bg-black/40 backdrop-blur-sm
  flex items-center justify-center z-modal animate-fade-in">

  {/* Modal panel */}
  <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md
    animate-scale-in">

    {/* Header */}
    <div className="p-6 border-b border-neutral-200">
      <div className="flex items-center justify-between">
        <h2 className="text-h3 font-semibold text-neutral-900">
          Confirm Order
        </h2>
        <button className="text-neutral-400 hover:text-neutral-600">
          {/* Close icon */}
        </button>
      </div>
    </div>

    {/* Body */}
    <div className="p-6">
      <p className="text-body-md text-neutral-600">
        Are you sure you want to place this order?
      </p>
    </div>

    {/* Footer */}
    <div className="p-6 border-t border-neutral-200 flex justify-end gap-3">
      <button className="h-11 px-6 rounded-lg border border-neutral-300
        hover:bg-neutral-100 transition-colors">
        Cancel
      </button>
      <button className="h-11 px-6 rounded-lg bg-primary-400 text-white
        hover:bg-primary-500 transition-colors">
        Confirm
      </button>
    </div>
  </div>
</div>
```

---

## Toast Notification

Temporary messages for feedback and alerts.

### Variants

- **Success**: Green with checkmark
- **Error**: Red with X
- **Warning**: Orange with exclamation
- **Info**: Blue with i icon

### Positioning

- **Desktop**: Top-right, stacked
- **Mobile**: Top-center, full width

### Styling

- **Background**: White
- **Border left**: 4px colored accent
- **Shadow**: `shadow-lg`
- **Radius**: `rounded-lg`
- **Padding**: `p-4`
- **Max width**: `max-w-sm`

### Animation

```tsx
Enter: slide-in-right + fade-in
Exit: slide-out-right + fade-out
Duration: 300ms
Auto-dismiss: 5 seconds (configurable)
```

### Code Example

```tsx
{/* Success toast */}
<div className="bg-white rounded-lg shadow-lg p-4 max-w-sm
  border-l-4 border-success-500 animate-slide-in-right
  flex items-start gap-3">
  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success-100
    flex items-center justify-center text-success-600">
    ✓
  </div>
  <div className="flex-1">
    <h4 className="text-body-md font-semibold text-neutral-900 mb-1">
      Order Confirmed
    </h4>
    <p className="text-body-sm text-neutral-600">
      Your order has been placed successfully.
    </p>
  </div>
  <button className="flex-shrink-0 text-neutral-400 hover:text-neutral-600">
    ✕
  </button>
</div>

{/* Error toast */}
<div className="bg-white rounded-lg shadow-lg p-4 max-w-sm
  border-l-4 border-error-500 flex items-start gap-3">
  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-error-100
    flex items-center justify-center text-error-600">
    ✕
  </div>
  <div className="flex-1">
    <h4 className="text-body-md font-semibold text-neutral-900 mb-1">
      Error
    </h4>
    <p className="text-body-sm text-neutral-600">
      Something went wrong. Please try again.
    </p>
  </div>
</div>
```

---

## Best Practices

### Consistency
- Always use design tokens (no hardcoded values)
- Follow spacing system (8px grid)
- Use consistent border radius (usually `rounded-lg`)

### Accessibility
- Maintain color contrast ratios (WCAG AA)
- Include proper ARIA labels
- Support keyboard navigation
- Provide focus indicators

### Performance
- Use CSS transitions over JavaScript
- Minimize re-renders
- Lazy load heavy components
- Optimize images

### Responsiveness
- Mobile-first approach
- Test on multiple screen sizes
- Adjust spacing/sizing for small screens
- Stack elements vertically on mobile

---

*Last updated: 2026-02-02*
