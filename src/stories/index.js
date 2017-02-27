import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import loremipsum from './loremipsum';
import loremipsumAsReact from './loremipsumAsReact';
import IframeResizer from '../index';

// need to pass in checkOrigin=false for our tests
const iframeResizerOptions = {
  // log: true,
  // autoResize: true,
  checkOrigin: false,
  // resizeFrom: 'parent',
  // heightCalculationMethod: 'max',
  // initCallback: () => { console.log('ready!'); },
  // resizedCallback: () => { console.log('resized!'); },
};

storiesOf('IframeResizer', module)
  .add('defaults with lorem ipsum REACT as content, set as children', () => (
    <div>
      <p>Content Before Iframe (style unaffected by iframe)</p>
      <IframeResizer iframeResizerOptions={iframeResizerOptions}>
        {loremipsumAsReact}
      </IframeResizer>
      <p>Content After Iframe (style unaffected by iframe)</p>
    </div>
  ))
  .add('defaults with lorem ipsum REACT as content, set via prop', () => (
    <div>
      <p>Content Before Iframe (styleeunaffected by iframe)</p>
      <IframeResizer iframeResizerOptions={iframeResizerOptions} content={loremipsumAsReact} />
      <p>Content After Iframe (style unaffected by iframe)</p>
    </div>
  ))
  .add('defaults with lorem ipsum HTML as content, set as children (RAW HTML)', () => (
    <div>
      <p>Content Before Iframe (style unaffected by iframe)</p>
      <IframeResizer iframeResizerOptions={iframeResizerOptions}>
        {loremipsum}
      </IframeResizer>
      <p>Content After Iframe (style unaffected by iframe)</p>
    </div>
  ))
  .add('defaults with lorem ipsum HTML as content, set via prop', () => (
    <div>
      <p>Content Before Iframe (style unaffected by iframe)</p>
      <IframeResizer iframeResizerOptions={iframeResizerOptions} content={loremipsum} />
      <p>Content After Iframe (style unaffected by iframe)</p>
    </div>
  ))
  .add('defaults with example URL as src (mis-matched domains with content JS work)', () => (
    <div>
      <p>Content Before Iframe (style unaffected by iframe)</p>
      <IframeResizer
        iframeResizerOptions={iframeResizerOptions}
        iframeResizerUrl={false}
        src="http://davidjbradshaw.com/iframe-resizer/example/frame.content.html"
      />
      <p>Content After Iframe (style unaffected by iframe)</p>
      <p>
        This <strong>works</strong> <em>because</em> the content <a
          href="http://davidjbradshaw.com/iframe-resizer/example/frame.content.html"
          target="_blank"
        >URL</a> already has the <a
          href="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.8/iframeResizer.contentWindow.min.js"
          target="_blank"
        >iframeResizer.contentWindow.js</a> loaded
      </p>
      <p>We are setting <code>iframeResizerUrl=false</code> so it doesn't try to inject again</p>
    </div>
  ))
  .add('does NOT work with example.com src (mis-matched domains without content JS fail)', () => (
    <div>
      <p>Content Before Iframe (style unaffected by iframe)</p>
      <IframeResizer
        iframeResizerOptions={iframeResizerOptions}
        frameBorder={1}
        src="http://example.com"
      />
      <p>Content After Iframe (style unaffected by iframe)</p>
      <p><em>
          Resize <strong>did not work</strong>,
          because the iframe content did not have the <a
          href="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.8/iframeResizer.contentWindow.min.js"
          target="_blank"
        >iframeResizer.contentWindow.js</a> loaded, and it is in a different domain so we could not inject it.
      </em></p>
      <p>Your console should show an error like the following:</p>
      <pre style={{ color: 'darkred' }}>
        Uncaught DOMException: Failed to read the 'contentDocument' property from 'HTMLIFrameElement':<br/>
        Blocked a frame with origin "http://&lt;hostname&gt;" from accessing a cross-origin frame.
      </pre>
      <p><em>Solutions:</em></p>
      <p><em>Option 1: Write an iframe and inject via <code>content</code> prop</em></p>
      <p><em>Option 2: Edit the iframe src page, and add the iframe helper script <a
          href="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.8/iframeResizer.contentWindow.min.js"
          target="_blank"
        >iframeResizer.contentWindow.js</a> in a script tag.</em></p>
    <p><em>Option 3: Proxy the src to a URL on the same domain as the page hosting the iframe; then we should be able to inject the helper script.</em></p>
    </div>
  ))
  .add('custom iframe styles', () => {
    const style = {
      width: 150,
      backgroundColor: '#f2f2f2',
      textTransform: 'uppercase',
      color: '#FF8833',
      marginLeft: 30,
    };
    return (
      <div>
        <p>Content Before Iframe (style unaffected by iframe)</p>
        <IframeResizer
          iframeResizerOptions={iframeResizerOptions}
          content={loremipsum}
          frameBorder={1}
          style={style}
        >No Support For Iframes</IframeResizer>
        <p>Content After Iframe (style unaffected by iframe)</p>
      </div>
    );
  });


// <IframeResizer
//   style={style}
// />
