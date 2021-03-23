import React, {useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';

const PortHome = () => {

    useEffect(() => {
        var relativeEl = document.querySelector('.el.relative-values');
        
        anime({
          targets: '.el.relative-values',
          translateX: {
            value: '50vw', // 100px * 2.5 = '250px'
            duration: 2000
          },
          rotate: {
            value: '+=5turn', // 0 + 2 = '2turn'
            duration: 1800,
            easing: 'easeInOutSine'
          },
          direction: 'alternate'
        });
    }, [])
    return (
        <div className="porthome_container">
          <h1 class="heading heading--stroke-shadow">Welcome to my portfolio!</h1>
          <div class="circle el relative-values" ><i class="fas fa-location-arrow"></i></div>
          <p>Feel free to browse, relax, and enjoy. Hey, maybe we will end up building something together!</p>
          <a target="_blank" href="https://www.linkedin.com/in/kevin-terry-065019134/"><i class="fab fa-linkedin"></i></a>
        </div>
    )
}

export default PortHome;