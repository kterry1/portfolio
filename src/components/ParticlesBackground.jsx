import React, {Component} from 'react';
import Particles from "react-tsparticles";
class ParticlesBackground extends Component {
    constructor(props) {
      super(props);
  
      this.particlesInit = this.particlesInit.bind(this);
      this.particlesLoaded = this.particlesLoaded.bind(this);
    }
  
    particlesInit(main) {
    }
  
    particlesLoaded(container) {
    }
  
    render() {
      return (
        <Particles
        height="98vh"
        width="100vw"
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
            background: {
              color: {
                value: "#1d1d1d",
              },
            },
            backgroundMode: {
              enable: true,
              zIndex: -1
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
            },
            particles: {
              color: {
                value: "#5f5f5f",
              },
              links: {
                color: "#ff2253",
                distance: 150,
                enable: true,
                opacity: .5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
          }}
        />
      );
    }
  };

  export default ParticlesBackground;