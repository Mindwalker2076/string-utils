# string-utils

## Synopsis

Contains some basic utilities for formatting and manipulating strings:
* StringUtils.format works similar to the String.Format found in .Net.

## Code Example

```
s1 = StringUtils.format("The {0} is against the {1}.", "chair", "wall");
// s1 == "The chair is against the wall."

s2 = StringUtils.format("{0}: Getting ready to publish", new Date());
// s2 == "Mon Aug 05 2013 21:21:11 GMT-0500 (CDT): Getting ready to publish"
```

## Motivation

Author needed Javascrpt functionality similar to the String.Format() function found in .Net.

## Installation

**For client side use:**

Copy string-utils.js to your scripts folder. If your scripts folder *js* is one level below your html folder, then the following example should work:

    <script type='text/javascript' src='js/string-utils.js'></script>
    <script type='text/javascript'>
    window.alert(StringUtils.format('Hello, {0}', 'World'));
    </script>

**For server-side (NOde.js) use:**

npm install git+https://github.com/Mindwalker2076/string-utils

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

No tests have been added to this project yet.

## Contributors

Mindwalker2076

## License

Licensed under standard MIT license
