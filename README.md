# ripple-button

```code
npm i ripple-button
```

or

```code
yarn add ripple-button
```

```tsx
import Ripple from 'ripple-button'
<Ripple>
  <h1>hello ripple</h1>
</Ripple>
```

### props
- color  【String】 ripple color  default: rgba(0, 0, 0, 0.3);
- duration 【Number】 Animation time  default: 800ms 

```tsx
import Ripple from 'ripple-button'
<Ripple color="rgba(12, 33, 124, 0.3)" duration={500}>
  <h1>hello ripple</h1>
</Ripple>
```

### useRipple
you can bind ripple on DOM element

```tsx
import { useRipple } from 'ripple-button'
useRipple(document.body, 'rgba(12, 232, 44, 0.1)', 600)
```
