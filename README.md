# React Iframe Resizer With Super-Powers (cross domain, resize, etc)

This is a versatile [React](https://facebook.github.io/react/) Component
which renders an iframe and wires in the excellent
[Iframe Resizer](http://davidjbradshaw.github.io/iframe-resizer/) library.


This Component was created with the
[React CDK](https://github.com/kadirahq/react-cdk)
by the great folks at [Kadira](https://github.com/kadirahq).

NOTE: Renamed to `react-iframe-resizer-super` because there is already a `react-iframe-resier` npm package.

## Installation
```sh
npm install --save react-iframe-resizer-super iframe-resizer
```

## Usage

```jsx
import ReactIframeResizer from 'react-iframe-resizer-super';


const iframeResizerOptions = { checkOrigin: false };

const MyComponent = props => (
  <div>
    <p>Content Before Iframe (style unaffected by iframe)</p>
    <ReactIframeResizer iframeResizerOptions={iframeResizerOptions}>
      <style>p { color: green; }</style>
      <p>Here is some green text, inside an iframe</p>
    </ReactIframeResizer>
    <p>Content After Iframe (style unaffected by iframe)</p>
  </div>
);
```

### Props supported

- `content` (string) iframe document option 1. - content of HTML to load in the iframe
- `src` (string) iframe document option 2. - src to a URL to load in the iframe
- `iframeResizerEnable` (bool) [true]
- `iframeResizerOptions` (object) see all supported
  [iframe-resizer](http://davidjbradshaw.github.io/iframe-resizer/) options.
- `iframeResizerUrl` (string || bool) URL to the client JS for injecting into the
  iframe.  This only works for `content` type, at the moment.  The default URL
  is `https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.8/iframeResizer.contentWindow.min.js`. If you wanted to disable this, you could set it to {false}
- `frameBorder` (number) [0] optionally set a frameBorder
- `id` (string) optionally set an id property
- `className` (string) optionally set a className property
- `style` (object) optionally set a style property
  default `{ width: '100%', minHeight: 20 }`

## Examples

See our stories/demos at
[zeroasterisk.github.io/react-iframe-resizer-super](https://zeroasterisk.github.io/react-iframe-resizer-super)
and the
[source of the stories/demo](https://github.com/zeroasterisk/react-iframe-resizer-super/blob/master/src/stories/index.js).
and of course, more about
[iframe-resizer](http://davidjbradshaw.github.io/iframe-resizer/)
which is where most of the iframe magic happens.

## Acknowledgements

* [Iframe Resizer](http://davidjbradshaw.com/iframe-resizer/) library is
  excellent and deals well with crappy browsers.
  _(caution: do not try to roll your own)_
* [React CDK](https://github.com/kadirahq/react-cdk) makes react Components
  easy to create, document, test, and share.

