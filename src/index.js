/**
 *
 * inject script to facilitate iframe resizing
 * https://github.com/davidjbradshaw/iframe-resizer
 *
 */
import React from 'react';
import { iframeResizer as iframeResizerLib } from 'iframe-resizer';

// get content from props & optionally inject an iframe controller script
const getInjectableContent = (props) => (
  `
    ${props.content}
    ${props.iframeResizerUrl
    ? `<script type="text/javascript" src="${props.iframeResizerUrl}"></script>`
    : ''}
  `
);

class IframeResizer extends React.Component {
  constructor(props) {
    super(props);
    this.updateIframe = this.updateIframe.bind(this);
    this.resizeIframe = this.resizeIframe.bind(this);
  }
  componentDidMount() {
    // can't update until we have a mounted iframe
    this.updateIframe(this.props);
    this.resizeIframe(this.props);
  }
  componentWillReceiveProps(nextProps) {
    // can replace content if we got new props
    this.updateIframe(nextProps);
    this.resizeIframe(nextProps);
  }
  updateIframe(props) {
    const frame = this.refs.frame;
    if (!frame) return;
    const doc = frame.contentDocument;
    if (doc && props.content) {
      doc.open();
      doc.write(getInjectableContent(props));
      doc.close();
    }
  }
  resizeIframe(props) {
    const frame = this.refs.frame;
    if (!frame) return;
    if (props.iframeResizerEnable) {
      iframeResizerLib(props.iframeResizerOptions, frame);
    }
  }
  render() {
    return (
      <iframe
        ref="frame"
        src={this.props.src}
        id={this.props.id}
        frameBorder={this.props.frameBorder}
        className={this.props.className}
        style={this.props.style}
      />
    );
  }
}
IframeResizer.propTypes = {
  // iframe content/document
  // option 1. content of HTML to load in the iframe
  content: React.PropTypes.string,
  // option 2. src to a URL to load in the iframe
  src: React.PropTypes.string,
  // iframe-resizer controls and helpers
  iframeResizerEnable: React.PropTypes.bool,
  iframeResizerOptions: React.PropTypes.object,
  iframeResizerUrl: React.PropTypes.string,
  // misc props to pass through to iframe
  id: React.PropTypes.string,
  frameBorder: React.PropTypes.number,
  className: React.PropTypes.string,
  style: React.PropTypes.object,

};
IframeResizer.defaultProps = {
  // resize iframe
  iframeResizerEnable: true,
  iframeResizerOptions: {
    // log: true,
    autoResize: true,
    checkOrigin: false,
    // resizeFrom: 'parent',
    // heightCalculationMethod: 'max',
    // initCallback: () => { console.log('ready!'); },
    // resizedCallback: () => { console.log('resized!'); },
  },
  iframeResizerUrl: 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.8/iframeResizer.contentWindow.min.js',
  // misc props to pass through to iframe
  frameBorder: 0,
  style: {
    width: '100%',
    minHeight: 20,
  },
};

export default IframeResizer;
