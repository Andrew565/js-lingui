
Import `i18n` object and load message catalog:

```js
import { i18n } from 'lingui-i18n'

// Required for development only
i18n.development(require('lingui-i18n/dev'))

// load messages
i18n.load({
  fr: {
    messages: {
      "Hello World!": "Salut le monde!",
      "My name is {name}": "Je m'appelle {name}",
      "{count, plural, one {# book} other {# books}}": "{count, plural, one {# livre} other {# livres}}"
    }
  }
})

// set active language
i18n.use('fr')

```

Wrap you text in `i18n.t` template literal tag so it's translated into active
language:

```js
i18n.t`Hello World!`
// becomes "Salut le monde!"

const name = "Fred"
i18n.t`My name is ${ name }`
// becomes "Je m'appelle Fred"
```

Plurals and selections are possible using `plural` and `select` methods:

```js
const count = 42

i18n.plural({
  value: count,
  one: "# book",
  other: "# books"
})
// becomes "42 livres"
```

It's also possible to nest message formats. Each message format method in `i18n` has a standalone companion, which only returns message without performing the translation:

```js
import { t, plural } from 'lingui-i18n'

// use i18n.select here, to translate message format
i18n.select({
  value: gender,
  offset: 1,
  // plural, instead of i18n.plural
  female: plural({
    value: numOfGuests,
    offset: 1,
    // t, instead of i18n.t
    0: t`${host} does not give a party.`,
    1: t`${host} invites ${guest} to her party.`,
    2: t`${host} invites ${guest} and one other person to her party.`,
    other: t`${host} invites ${guest} and # other people to her party.`
  }),
  male: plural({...}), 
  other: plural({...}), 
})
```
