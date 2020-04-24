# js-utils

Some JS utils we frequently use in our projects.


## Getting Started

### Installing

Install using npm:

```
npm install --save @pixelherz/js-utils
```

For usage examples see section [Utilities](#utilities) below. 


## Utilities

### Array

#### arrToClassName

Returns string values from a given array as space separated string to be used as class names. Empty items in the array are ignored.

```js
import { arrToClassName } from '@pixelherz/js-utils/array'
// Usage sample taken from a react component
const hostClasses = ['host', isActive && 'host--active']
<div className={arrToClassName(hostClasses)}></div>
```

#### randItem

Returns a random item from a given array

```js
import { randItem } from '@pixelherz/js-utils/array'
randItem(['a', 'b', 'c'])
```

### Fun

#### signConsole

Prints a project signature to the console. Pass data from `package.json` or a custom data object. 

```js
import { signConsole } from '@pixelherz/js-utils/fun'
// Pass data from package.json..
signConsole(require('./package.json'))
// .. or use a custom data object
const projectInfo = {
  name: 'project name',
  version: '1.4.1',
  description: 'project description',
  author: {
    name: 'author name',
    email: 'author@email.com',
    url: 'https://author.url',
  },
}
signConsole(projectInfo)
```

### Prismic

Utils tailored to work with [Prismic](https://prismic.io/).

#### wordbreakTruncateRichText

Truncates a given Prismic richtext to a given max length and appends a given string at the end.  
**NOTE:** Only the first element in the richtext object is truncated and returned.

```js
import { wordbreakTruncateRichText } from '@pixelherz/js-utils/prismic'
const prismicRichText = [{
  spans: [
    { start: 2, end: 5, type: 'strong' },
    { start: 8, end: 25, type: 'strong' },
    { start: 26, end: 30, type: 'strong' },
  ],
  text: 'the quick brown fox jumps over the lazy dog.',
  type: 'paragraph',
}]
wordbreakTruncateRichText(prismicRichText, 18, '…')
/*
[{
  spans:[
    { start: 2, end: 5, type: 'strong' },
    { start: 8, end: 15, type: 'strong' },
  ]
  text: 'the quick brown…',
  type: 'paragraph',
}]
*/

```


### String

#### strToHash

Returns a hash from a given string

```js
import { strToHash } from '@pixelherz/js-utils/string'
strToHash('foo') // 101574
```

#### wordbreakTruncate

Truncates a given string to a given max length and appends a given string at the end.

```js
import { wordbreakTruncate } from '@pixelherz/js-utils/string'
wordbreakTruncate('the quick brown fox jumps over', 24, '…') 
// the quick brown fox…
```


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Pixelherz/js-utils/tags). 


## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.
