# React Iframe Resizer Component

This is a versatile [React](https://facebook.github.io/react/) Component
which renders an iframe and wires in the excellent
[Iframe Resizer](http://davidjbradshaw.com/iframe-resizer/) library.

This Component was created with the
[React CDK](https://github.com/kadirahq/react-cdk)
by the great folks at [Kadira](https://github.com/kadirahq).

## Installation

    npm install --save react-iframe-resizer iframe-resizer

## Usage

    import ReactIframeResizer from 'react-iframe-resizer';

    const MyComponent = props => (
      <div>
        <p>Content Before Iframe (style unaffected by iframe)</p>
        <IframeResizer
          content={`
            <style>p { color: green; }</style>
            <p>Here is some green text, inside an iframe</p>
          `}
        >No Support For Iframes</IframeResizer>
        <p>Content After Iframe (style unaffected by iframe)</p>
      </div>
    );

### Props supported

- `content` (string) iframe document option 1. - content of HTML to load in the iframe
- `src` (string) iframe document option 2. - src to a URL to load in the iframe
- `iframeResizerEnable` (bool) [true]
- `iframeResizerOptions` (object) see all supported
  [iframe-resizer](http://davidjbradshaw.github.io/iframe-resizer/) options.
- `iframeResizerUrl` (string) URL to the client JS for injecting into the
  iframe.  This only works for `content` type, at the moment.  The default URL
  is `https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.8/iframeResizer.contentWindow.min.js`. If you wanted to disable this, you could set it to an empty string `''`
- `frameBorder` (number) [0] optionally set a frameBorder
- `id` (string) optionally set an id property
- `className` (string) optionally set a className property
- `style` (object) optionally set a style property
  default `{ width: '100%', minHeight: 20 }`

## Examples

See [react-storybook]() and the code for our stories [here]().

## Acknowledgements

* [Iframe Resizer](http://davidjbradshaw.com/iframe-resizer/) library is
  excellent and deals with crappy browsers.
* [React CDK](https://github.com/kadirahq/react-cdk) makes react Components
  easy to create, document, test, and share.

