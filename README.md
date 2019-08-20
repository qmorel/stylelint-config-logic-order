# stylelint-config-logic-order
This [stylelint] configuration validates the order of CSS properties according to Logic CSS. It's highly recommended that you use this **in addition to** your own rules (or rules from a shareable configuration), since it is only concerned with ordering.
The configuration works with both `stylelint --fix` and [stylefmt] to automatically sort your CSS properties.

This package is inspired by [Stylelint Concentric Order](https://github.com/chaucerbao/stylelint-config-concentric-order).

## Installation
```sh
npm install --save-dev stylelint-config-logic-order
```

## Usage
Add this configuration to the end of your `extends` array inside `.stylelintrc`

```javascript
{
  "extends": [
    // ...some other shareable Stylelint configuration
    "stylelint-config-logic-order"
  ],

  "rules": {
    // ...your own custom rules and overrides
  }
}
```

## Explanations : about Logic CSS
Logic CSS doen't really exist, but I havn't found any good name for this ordering logic… I encourage you to see `./src/ index.js` for full order list.

The purpose : order the CSS properties with a certains logic :

### 1/ External styles
When using Sass, `@include` and `@extend` should be on top, so we directly see what they herited from mixin, placeholder, included styles. It's easier to override them right after. The only exeption are for mediaqueries with `@include`, they should be at the end.

### 2/ Positioning
Beacause position affect directly the render of the styled component/item, it's on top of the properties. For example, `position: absolute` can completly change the CSS flow.

### 3/ Flex and grid self positionning
All proporties that the parent induced for the component. Typically: `flex` proporties for flex-iems, or self positionning in grid/flex context.

### 4/ Self display
Set the component display method before all other style can avoid miss understaning display when debugging.

### 4/ From inside to outsite
Content styles first: fonts styles, paddings, border, background, decorative box elements, margins

### 5/ Effects
Then, all other styles: opacity, cursor,… And to finish transforms and animations.


[Concentric CSS]: http://rhodesmill.org/brandon/2011/concentric-css/
[stylelint]: https://stylelint.io/
[stylefmt]: https://github.com/morishitter/stylefmt/
