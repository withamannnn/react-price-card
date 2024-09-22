import React from 'react';

const App = () => {
  return (
    <div className='w-full h-screen bg-[rgb(230,210,210)] flex items-center justify-center'>
      <div className='overflow-hidden relative w-[80%] lg:w-[25%] md:w-[55%] sm:w[55%] h-[60%] bg-white rounded-[30px] flex flex-col justify-center lg:h-[65%] items-center'>
        <div className='absolute -left-11 top-8 w-44 h-7 text-white text-[12px] flex items-center justify-center bg-[#b13ed4] -rotate-45'>Special offer!</div>
        <p className='text-center mb-[15px] text-[26px] text-[#131212] font-bold lg:mb-[20px]' >Platinium Plus <br />Content</p>
        <p className='text-center text-[25px] mb-[15px] text-[#b13ed4] font-bold'>$59<span className='text-[14px]'>/month</span></p>
        <p className='text-center text-[14px] font-medium text-[#8a8787] mb-[10px] px-[20px] sm:px-[90px] md:px-[70px] lg:px-[30px]'>Access our exclusive premium content library and enjoy high quality videos on any device<br/>you prefer.</p>
        <p className='text-center text-[16px] text-[#5c5c5c] font-bold mt-3'>Hurry! Offer expires June 20, 2024</p>
        <button className='w-[60%] text-white py-[10px] cursor-pointer bg-[#b13ed4] rounded-3xl mt-8'>Purchase Now</button>
      </div>
    </div>
  );
};

export default App;
