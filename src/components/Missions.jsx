import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map(({ name, year, destination, country }) => (
          <MissionCard
            name={ name }
            year={ year }
            destination={ destination }
            country={ country }
            key={ name }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
