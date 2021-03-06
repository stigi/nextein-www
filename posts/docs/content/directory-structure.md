---
title: Directory Structure
page: docs
order: 1
---

Nextein follows `Next` directory structure. As an overview, these are the relevant files and folders on a `Nextein` project:

```bash
├── pages
│   ├── index.js
│   └── post.js
├── posts
│   └── hello.md
├── static
│   └── hello.png
├── .babelrc
├── next.config.js
└── package.json

```

## /pages _folder_

The `/pages` folder contains all Page Components. These components will be used as either the page that list a set of posts or render a single post. 

### Examples

`index.js`, `post.js`, `about.js`, `contact.js`

## /posts _folder_

Stores all posts in markdown format. There is no need for an specific name convention. You can use whatever you want. In case you decide to use a date prefix it will be used and removed from the name property.

### Examples

`hello-world.md`, `2017-08-10-post-with-date.md`, `01-first-post.md`

## /static _folder_

The static folder serves as a repository for any static content such as images, css, videos, etc.

### Examples

`image.png`, `custom.css`

## .babelrc _hidden file_

This file is used by Next to define customized configuration for `babel`. This is optional.

## next.config.js _js file_

The config file for `Next`. It is mandatory and it should be defined with the `Nextein` config wrapper.

### Examples

```js
const { default: config } = require('nextein/config')

module.exports = config({
  // place your next config in here!
})
```

## package.json _json file_

This file is generated by `npm`. It will define the scripts to run `nextein` binaries for development, build and export among others.

```json
{
    //...

    "scripts": {
        "dev": "nextein",
        "export": "nextein build && nextein export"
    }
    //...
}

```


  
