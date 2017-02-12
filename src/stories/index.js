import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import loremipsum from './loremipsum';
import IframeResizer from '../index';

storiesOf('IframeResizer', module)
  .add('defaults with lorem ipsum HTML as content', () => (
    <div>
      <p>Content Before Iframe (style unaffected by iframe)</p>
      <IframeResizer
        content={loremipsum}
      >No Support For Iframes</IframeResizer>
      <p>Content After Iframe (style unaffected by iframe)</p>
    </div>
  ))
  .add('defaults with example URL as src', () => (
    <div>
      <p>Content Before Iframe (style unaffected by iframe)</p>
      <IframeResizer
        src="http://davidjbradshaw.com/iframe-resizer/example/frame.content.html"
      >No Support For Iframes</IframeResizer>
      <p>Content After Iframe (style unaffected by iframe)</p>
    </div>
  ))
  .add('custom styles', () => {
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
          content={loremipsum}
          frameBorder={1}
          style={style}
        >No Support For Iframes</IframeResizer>
        <p>Content After Iframe (style unaffected by iframe)</p>
      </div>
    );
  })
  .add('does not work with example.com src', () => (
    <div>
      <p>Content Before Iframe (style unaffected by iframe)</p>
      <IframeResizer
        frameBorder={1}
        src="http://example.com"
      >No Support For Iframes</IframeResizer>
      <p>Content After Iframe (style unaffected by iframe)</p>
      <p><em>Resize did not work, because the iframe content did not have the iframe helper script and it is in a different domain.</em></p>
      <p><em>Option 1: Write an iframe and inject via <code>content</code> prop</em></p>
      <p><em>Option 2: Edit the iframe src page, and add the iframe helper script <code>https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.8/iframeResizer.contentWindow.min.js</code></em></p>
    </div>
  ));


// <IframeResizer
//   style={style}
// />
