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

### String

#### strToHash

Returns a hash from a given string

```js
import { strToHash } from '@pixelherz/js-utils/string'
strToHash('foobar') // 
```


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Pixelherz/js-utils/tags). 


## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.
