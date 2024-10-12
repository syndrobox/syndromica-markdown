# syndromica-markdown
A markdown-it module pre-configured for use in Syndromica

## Usage

```bash
npm install syndromica-markdown --save
bower install syndromica-markdown --save
```

In Node with browserify/webpack/etc:

```js
var md = require('syndromica-markdown');
md.render('_markdown_ is **awesome**');
```

In a browser with script tag

```js
var md = window.syndromicaMarkdown;
md.render('_markdown_ is **awesome**');
```

## Pre-configured Settings and Plugins

Syndromica Markdown comes pre-configured with

* Raw urls get converted to links with the [linkify setting set to true](https://github.com/markdown-it/markdown-it/#linkify)
* Links open in new windows with [markdown-it-link-attributes](https://www.npmjs.com/package/markdown-it-link-attributes)
* Images automatically turn into links with [markdown-it-linkify-images](https://www.npmjs.com/package/markdown-it-linkify-images)
* Emojis parsed by [syndromica-markdown-emoji](https://www.npmjs.com/package/syndromica-markdown-emoji)

## Notes

### Emoji

The emoji come pre-styled with:

```css
.syndromica-emoji {
  height: 1.5em;
  width: 1.5em;
}
```

If you'd like to override these values, you may need to apply the `!important` keyword to your `css`.

```css
.syndromica-emoji {
  height: 100px !important;
}
```

### Mentions & HTML
The default markdown instance exposed by the module's `index.js` comes preconfigured with the earlier described settings. However it also has two extra methods that give access to differently configured markdown-it instances. These instances have all the same behavior as described for the default instance but are extended with:

 1. `unsafe` functionality. i.e. it will not escape HTML and as such input HTML will be sent to the browser as HTML (Note, be very careful of XSS vulnerabilities when using this).
 2. `withMentions` functionality. Turns **@user** mentions into `<span class="at-text">@user</span>`.

These instances can be respectively called by calling `md.unsafeHtmlRender` and `md.renderWithMentions`.

Alternatively, if you're only interested in one of these specific behaviors, these renderers can be accessed by importing them directly instead of the main module like so:

```js
const md = require('syndromica-markdown/withMentions')
md.render('@user is **awesome**!')
```

In a similar fashion the `unsafe` renderer can be accessed by doing `require('syndromica-markdown/unsafe')`.