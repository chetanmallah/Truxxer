import React from 'react';



import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';


import Testimonials from '../../components/Testimonials/Testimonials';
import Shippers  from '../../components/Shippers/Shippers';

import Screenshot from '../../components/Screenshot/Screenshot';
import WhatWeOffer from '../../components/WhatWeOffer/WhatWeOffer';


const Home = () => {
  return (
    <div>
     
      <Hero />
      <WhatWeOffer/>
      

      
      <Screenshot/>
      <Shippers/>
      <Testimonials />
      
      
      <Footer/>
    </div>
  );
};

export default Home;
