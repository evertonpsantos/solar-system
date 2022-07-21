import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div data-testid="mission-card" className="mission-card">
        <div className="card-title">
          <p data-testid="mission-name">{ name }</p>
        </div>
        <p data-testid="mission-year" className="mission-info">{ year }</p>
        <p data-testid="mission-country" className="mission-info">{ country }</p>
        <p data-testid="mission-destination" className="mission-info">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default MissionCard;
