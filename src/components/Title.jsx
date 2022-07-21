import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline, cssClass } = this.props;

    return (
      <h2 className={ cssClass }>{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
  cssClass: PropTypes.string.isRequired,
};

export default Title;
