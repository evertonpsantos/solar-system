import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="section">
        <Title headline="Planetas" cssClass="section-title" />
        <div className="planet-card-section">
          {
            planets.map(({ name, image }) => (
              <PlanetCard planetName={ name } planetImage={ image } key={ name } />
            ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
