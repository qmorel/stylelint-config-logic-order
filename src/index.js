// Groups of CSS properties in Concentric order
const groups = [
  ['all', 'appearance'],
  [
    'direction',
    'wrinting-mode',
    'text-orientation',
  ],
  ['position'],
  [
    'inset',
    'inset-inline',
    'inset-inline-start',
    'inset-inline-end',
    'inset-block',
    'inset-block-start',
    'inset-block-end'
  ],
  ['top', 'right', 'bottom', 'left'],
  [
    'flex',
    'flex-grow',
    'flex-shrink',
    'flex-basis',
  ],
  [
    'grid-area',
    'grid-row',
    'grid-row-start',
    'grid-row-end',
    'grid-column',
    'grid-column-start',
    'grid-column-end'
  ],
  ['justify-self', 'align-self'],
  ['order'],
  ['display'],
  ['content', 'quotes'],

  [
    'flex-direction',
    'flex-flow',
    'flex-wrap'
  ],
  ['float', 'clear'],
  [
    'grid',
    'grid-template',
    'grid-template-areas',
    'grid-template-rows',
    'grid-template-columns',
    'grid-auto-rows',
    'grid-auto-columns',
    'grid-auto-flow',
    'grid-gap',
    'row-gap',
    'grid-row-gap',
    'column-gap',
    'grid-column-gap'
  ],
  [
    'columns',
    'column-fill',
    'column-rule',
    'column-rule-width',
    'column-rule-style',
    'column-rule-color',
    'column-span',
    'column-count',
    'column-width'
  ],
  ['vertical-align'],
  ['justify-content', 'justify-items'],
  ['align-content', 'align-items'],
  ['inline-size'],
  ['height', 'min-height', 'max-height'],
  ['width', 'min-width', 'max-width'],
  [
    'font',
    'font-family',
    'font-kerning',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-weight',
    'font-smoothing',
    'osx-font-smoothing',
    'font-variant',
    'font-style'
  ],
  [
    'text-align',
    'text-align-last',
    'text-justify',
    'text-indent',
    'text-transform',
    'text-decoration',
    'text-decoration-color',
    'text-decoration-line',
    'text-decoration-style',
    'text-emphasis',
    'text-emphasis-color',
    'text-emphasis-position',
    'text-emphasis-style',
    'text-rendering',
    'text-shadow',
    'text-overflow'
  ],
  [
    'line-height',
    'word-spacing',
    'letter-spacing',
    'white-space',
    'word-break',
    'word-wrap',
    'color'
  ],
  [
    'tab-size',
  ],
  [
    'padding-block',
    'padding-block-start',
    'padding-block-end',
  ],
  [
    'padding-inline',
    'padding-inline-start',
    'padding-inline-end',
  ],
  ['padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
  [
    'background',
    'background-attachment',
    'background-clip',
    'background-color',
    'background-image',
    'background-origin',
    'background-position',
    'background-repeat',
    'background-size',
    'background-blend-mode'
  ],
  [
    'border',
  ],
  [
    'border-block',
    'border-block-color',
    'border-block-style',
    'border-block-width',
  ],
  [
    'border-block-start',
    'border-block-start-color',
    'border-block-start-style',
    'border-block-start-width',
    'border-top',
    'border-top-color',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-top-style',
    'border-top-width',
  ],
  [
    'border-block-end',
    'border-block-end-color',
    'border-block-end-style',
    'border-block-end-width',
    'border-end-end-radius',
    'border-end-start-radius',
    'border-bottom',
    'border-bottom-color',
    'border-bottom-left-radius',
    'border-bottom-right-radius',
    'border-bottom-style',
    'border-bottom-width',
    'border-inline',
    'border-inline-color',
    'border-inline-style',
    'border-inline-width',
    'border-inline-start',
    'border-inline-start-color',
    'border-inline-start-style',
    'border-inline-start-width',
    'border-left',
    'border-left-color',
    'border-left-style',
    'border-left-width',
    'border-inline-end',
    'border-inline-end-color',
    'border-inline-end-style',
    'border-inline-end-width',
    'border-right',
    'border-right-color',
    'border-right-style',
    'border-right-width',
    'border-spacing',
    'border-radius',
    'border-start-start-radius',
    'border-start-end-radius',
    'border-end-start-radius',
    'border-end-end-radius',
    'border-style',
    'border-width',
  ]
  ['box-sizing'],
  [
    'outline',
    'outline-offset',
    'outline-width',
    'outline-style',
    'outline-color'
  ],
  ['box-shadow'],
  ['overflow', 'overflow-x', 'overflow-y', 'resize'],
  ['margin-block', 'margin-block-start', 'margin-block-end'],
  ['margin-inline', 'margin-inline-start', 'margin-inline-end'],
  ['margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
  [
    'list-style',
    'list-style-type',
    'list-style-position',
    'list-style-image',
    'caption-side'
  ],
  ['table-layout', 'border-collapse', 'border-spacing', 'empty-cells'],
  ['opacity', 'mix-blend-mode', 'isolation', 'visibility'],
  ['cursor'],
  [
    'backface-visibility',
    'perspective',
    'perspective-origin',
    'transform',
    'transform-origin',
    'transform-style'
  ],
  [
    'transition',
    'transition-delay',
    'transition-duration',
    'transition-property',
    'transition-timing-function'
  ],
  [
    'animation',
    'animation-name',
    'animation-duration',
    'animation-timing-function',
    'animation-delay',
    'animation-iteration-count',
    'animation-direction',
    'animation-fill-mode',
    'animation-play-state'
  ],
  ['counter-reset', 'counter-increment'],
  ['page-break-before', 'page-break-after', 'page-break-inside'],
  ['z-index'],
  ['pointer-events', 'will-change'],
  [
    'scroll-behavior',
    'scroll-margin',
    'scroll-margin-block',
    'scroll-margin-block-end',
    'scroll-margin-block-start',
    'scroll-margin-bottom',
    'scroll-margin-inline',
    'scroll-margin-inline-end',
    'scroll-margin-inline-start',
    'scroll-margin-left',
    'scroll-margin-right',
    'scroll-margin-top',
    'scroll-padding',
    'scroll-padding-block',
    'scroll-padding-block-end',
    'scroll-padding-block-start',
    'scroll-padding-bottom',
    'scroll-padding-inline',
    'scroll-padding-inline-end',
    'scroll-padding-inline-start',
    'scroll-padding-left',
    'scroll-padding-right',
    'scroll-padding-top',
    'scroll-snap-align',
    'scroll-snap-stop',
    'scroll-snap-type',
    'scrollbar-color',
    'scrollbar-width',
  ]
]

// Export the Stylelint configuration
module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    "order/properties-alphabetical-order": null,
    'order/order': [
      // Imports
      { type: 'at-rule', name: 'import' },

      // Variables
      'dollar-variables',
      'custom-properties',

      // Inheritance
      { type: 'at-rule', name: 'extend' },

      // Mixins
      { type: 'at-rule', name: 'include' },
      { type: 'at-rule', name: 'mixin' },
      { type: 'at-rule', name: 'add-mixin' },

      // Declarations
      'declarations',

      // Pseudo-elements
      {
        type: 'rule',
        selector: /^&::[\w-]+/,
        hasBlock: true
      },

      // Pseudo-classes
      {
        type: 'rule',
        selector: /^&:[\w-]+/,
        hasBlock: true
      },

      // Nested Rules
      'rules',

      // Breakpoint Mixins
      {
        type: 'at-rule',
        name: 'include',
        parameter: /breakpoints?/i,
        hasBlock: true
      },
      {
        type: 'at-rule',
        name: 'mixin',
        parameter: /breakpoints?/i,
        hasBlock: true
      },
      {
        type: 'at-rule',
        name: 'add-mixin',
        parameter: /breakpoints?/i,
        hasBlock: true
      },

      // Media Queries
      { type: 'at-rule', name: 'media', hasBlock: true }
    ],
    'order/properties-order': [
      groups.map(group => ({
        properties: group
      }))
    ]
  }
}
