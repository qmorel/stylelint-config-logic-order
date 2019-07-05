# stylelint-config-logic-order
This [stylelint] configuration validates the order of CSS properties according to Logic CSS. It's highly recommended that you use this **in addition to** your own rules (or rules from a shareable configuration), since it is only concerned with ordering.
The configuration works with both `stylelint --fix` and [stylefmt] to automatically sort your CSS properties.

This package is inspired by [Stylelint Concentric Order](https://github.com/chaucerbao/stylelint-config-concentric-order).

## Installation
```sh
npm install --save-dev https://bitbucket.org/minimo_0/stylelint-config-logic-order
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

[Concentric CSS]: http://rhodesmill.org/brandon/2011/concentric-css/
[stylelint]: https://stylelint.io/
[stylefmt]: https://github.com/morishitter/stylefmt/
