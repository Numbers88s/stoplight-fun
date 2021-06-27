// modules
import React, {useEffect, useState} from 'react';

// local
import {Traffic, Container, Light} from './Stoplight.styles';
import {config} from './Stoplight.config';

export default function Stoplight() {
  const [lightColor, setLightColor] = useState(config.GO);

  useEffect(() => {
    const lightInterval = setInterval(() => {
      switch (lightColor) {
        case config.STOP:
          return setLightColor(config.GO);
        case config.GO:
          return setLightColor(config.YIELD);
        case config.YIELD:
          return setLightColor(config.STOP);
        default:
          return setLightColor(config.OFF);
      }
    }, 2000);

    return () => clearInterval(lightInterval);
  }, [lightColor]);

  return (
    <Traffic>
      <Container>
        <Light backgroundColor={lightColor.top} />
        <Light backgroundColor={lightColor.middle} />
        <Light backgroundColor={lightColor.bottom} />
      </Container>
    </Traffic>
  );
}
