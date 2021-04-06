

import Navigation from './Navigation.js';


import { useContext, useRef, useState, useEffect } from 'react';
import { } from 'react-router-dom';

import { PageTwo } from './PageTwo.js';
import { PageThree } from './PageThree.js';
import { useSpring, useTransition, animated } from 'react-spring';
import { __RouterContext, Switch, Route } from 'react-router';
import { Resume } from './Resume.js';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'




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
    background:' #12c2e9',  /* fallback for old browsers */
background: '-webkit-linear-gradient(to bottom, #f64f59, #c471ed, #12c2e9)', /* Chrome 10-25, Safari 5.1-6 */
background: 'linear-gradient(to bottom, #f64f59, #c471ed, #12c2e9)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }

  const styleThree = {
    background: '#334d50',  /* fallback for old browsers */
    background: '-webkit - linear - gradient(to bottom, #cbcaa5, #334d50)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear - gradient(to bottom, #cbcaa5, #334d50)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    opacity: .8


  }

  const backgroundStyle = {
    background: '#00416A',  /* fallback for old browsers */
    background: '-webkit - linear - gradient(to bottom, #FFE000, #799F0C, #00416A)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear - gradient(to bottom, #FFE000, #799F0C, #00416A)',
    opacity: .5
  }



  return (

    <>


      <Parallax pages={2} scrolling={true}   >




        <ParallaxLayer factor={1.5} offset={0} speed={.4} style={styleOne}
        />





        <ParallaxLayer factor={1} offset={1.2} speed={.8} style={{ backgroundColor: '#8aab93', zIndex: -1, opacity: .9 }}

        />

        <ParallaxLayer factor={1} offset={2} speed={1} style={{ backgroundColor: '#383e4a', zIndex: 2 }}

        >
          <div className='container container-fluid text-center' style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <br ></br>
          <h2 className= 'text-light'> Andrew McNulty</h2>
          <p className='text-light'> Curry College</p>
          <p className= 'text-light'> Amcnulty2020@students.curry.edu</p>
          <a className= 'text-light' href="https://github.com/atmcnulty?tab=repositories">GitHub</a>
          


          <p className= 'text-light'> Thanks for visiting</p>
            
            </div>

          </ParallaxLayer>
        <ParallaxLayer factor={1} offset={-0.5} speed={-1.5}  >
          <img src='./Mountains.png' style={{ width: 'auto', height: '200%', opacity: .5, zIndex: -50, marginLeft: 'auto', marginRight: 'auto' }} />

        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={.2} speed={.1} style={styleThree} >


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
