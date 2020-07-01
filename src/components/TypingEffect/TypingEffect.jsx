import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class TypingEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      index: 0,
      displayText: '',
    };
    this.typing = true;
    this.getRawText = this.getRawText.bind(this);
    this.type = this.type.bind(this);

    this.startTyping = this.startTyping.bind(this);
  }

  componentDidMount() {
    this.startTyping();
  }

  componentDidUpdate() {
    if (this.typing === false) {
      this.startTyping();
      this.typing = true;
      if (
        this.state.displayText.length < this.props.text.length &&
        this.props.text.length > 0 &&
        this.props.text.substr(0, this.state.displayText.length) ===
          this.state.displayText
      ) {
      } else {
        this.setState({ displayText: '' });
      }
    }
  }

  componentWillUnmount() {
    this._timeout && clearTimeout(this._timeout);
  }

  startTyping() {
    this._timeout = setTimeout(() => {
      this.type();
    }, this.props.typingDelay);
  }

  getRawText() {
    const { text } = this.props;
    return typeof text === 'string' ? [text] : [...text];
  }

  type() {
    let { index, displayText } = this.state;
    let text = this.getRawText()[index];

    if (text !== displayText) {
      this.typing = true;

      displayText = text.substr(0, displayText.length + 1);
      this.setState({ displayText }, () => {
        this._timeout = setTimeout(() => {
          this.type();
        }, this.props.speed);
      });
    } else {
      this.typing = false;
    }
  }

  render() {
    const {
      speed,
      typingDelay,
      staticText,
      text,
      className,
      ...otherProps
    } = this.props;
    const { displayText } = this.state;
    const classes = cx(className, 'lfm__typing_effect');
    return (
      <span {...otherProps} className={classes}>
        {staticText ? (
          <span className='lfm__typing_effect_static_text'>
            {staticText}&nbsp;
          </span>
        ) : null}

        <span className='lfm__typing_effect_text'>{displayText}</span>
      </span>
    );
  }
}

TypingEffect.defaultProps = {
  speed: 200,
  typingDelay: 2500,
};

TypingEffect.propTypes = {
  speed: PropTypes.number.isRequired,
  typingDelay: PropTypes.number.isRequired,
  staticText: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  className: PropTypes.string,
};
