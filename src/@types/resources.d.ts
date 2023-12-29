interface Resources {
  "ns1": {
    "greeting": " Hello $t(name)",
    "name": "{{name}}",
    "headlines": {
      "interpolation": "Interpolation",
      "numbers": "Numbers",
      "currency": "Currency",
      "date": "Date",
      "plurals": "Plurals",
      "intervalPlurals": "IntervalPlurals"
    },
    "minimal": {
      "simpleText": "Simple text",
      "todaysDate": "{{val, datetime}}",
      "currencyNumber": "{{val, currency(currency: USD)}}",
      "plurals": {
        "key_one": "cat",
        "key_other": "cats",
        "keyWithCount_one": "{{count}} cat",
        "keyWithCount_other": "{{count}} cats"
      }
    },
    "title": "Welcome to react using <1>react-i18next</1> fully type-safe",
    "description": {
      "part1": "This is a simple example.",
      "part2": "😉"
    },
    "interpolation": "{{name}} default text",
    "numbers": {
      "intlNumber": "Some {{val, number}} normal intl number.",
      "intlNumberWithOptions": "Some {{val, number(minimumFractionDigits: 2)}}. Intl number with predefined option of minimum 2 fraction digits."
    },
    "currency": {
      "intlCurrencyWithOptions": "The value is {{val, currency(currency: USD)}}",
      "intlCurrencyWithOptionsSimplified": "The value is {{val, currency(USD)}}",
      "twoIntlCurrencyWithUniqueFormatOptions": "The value is {{localValue, currency}} or {{altValue, currency}}"
    },
    "dates": {
      "intlDateTime": "Todays date {{val, datetime}}"
    },
    "rating": {
      "key_one": "rating",
      "key_other": "ratings",
      "keyWithCount_one": "{{count}} rating",
      "keyWithCount_other": "{{count}} ratings"
    },
    "intervalPlurals": {
      "key1_one": "{{count}} item",
      "key1_other": "{{count}} items",
      "key1_interval": "(1)[one item];(2-7)[a few items];(7-inf)[a lot of items];",
      "key2_one": "{{count}} item",
      "key2_other": "{{count}} items",
      "key2_interval": "(1)[one item];(2-7)[a few items];"
    }
  }
}

export default Resources;
