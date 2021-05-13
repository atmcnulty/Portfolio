

import Navigation from './Navigation.js';


import { useContext, useRef, useState, useEffect } from 'react';
import { } from 'react-router-dom';

import { PageTwo } from './PageTwo.js';
import { PageThree } from './PageThree.js';
import { useSpring, useTransition, animated } from 'react-spring';
import { __RouterContext, Switch, Route } from 'react-router';
import { Resume } from './Resume.js';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';


import Image from './Mountains.png';


const App = (props) => {

  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" },

  })

  const ref = useRef();


  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));


  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = ref.pageYOffset - posY;
    console.log(offset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });






  const styleOne = {
    background: ' #12c2e9',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to bottom, #f64f59, #c471ed, #12c2e9)', /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to bottom, #f64f59, #c471ed, #12c2e9)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
  }

 



  return (

    <>


      <Parallax pages={2} scrolling={true}   >




        <ParallaxLayer factor={2} offset={0} speed={.5} style={styleOne}
        />





        <ParallaxLayer factor={1} offset={1} speed={.6} style={{ backgroundColor: '#8aab93', zIndex: -1,  }}

        />

        <ParallaxLayer factor={1} offset={1.6} speed={1} style={{ backgroundColor: '#383e4a', zIndex: 10 }}

        >
          <div className='container container-fluid text-center' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <br ></br>
            <h2 className='text-light'> Andrew McNulty</h2>
            <p className='text-light'> Curry College</p>
            <a className='text-light'> Amcnulty2020@students.curry.edu</a>
            <br></br>
            <a className='text-light' href="https://github.com/atmcnulty?tab=repositories">GitHub</a>
            <br></br>
            <a className='text-light' href="https://www.linkedin.com/in/andrew-mcnulty-705915209/">Linkdin</a>
            <br></br>



            <p className='text-light'> Thanks for visiting</p>

          </div>

        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={1} speed={-1.3}  >
          <img src={Image} style={{ width: '100%', height: '200%', opacity: 1, zIndex: -50, marginLeft: 'auto', marginRight: 'auto' }} />

        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={.4} speed={0}  >


          <div className="container-fluid p-4 m-2 " style={{ zIndex: 90 }} >
            <switch >
              <Route exact path='/' >
                <PageTwo />
              </Route>
              <Route exact path='/resume'>
                <Resume />
              </Route>


              <Route exact path='/projects'>
                <PageThree />
              </Route>


            </switch>




          </div>


        </ParallaxLayer>







      </Parallax>


      <Navigation />



    </>
  );
}


export default App;
