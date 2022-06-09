import React from 'react';

const SectionTitle = ({ serial,title, position }) => {
  return (
    <>
      <div className="flex items-center pb-10">
        <span className='text-primary text-2xl font-display font-normal mr-2 ' >{serial}.</span>
        <h1 className='text-accent text-3xl font-body font-[600]' >{title}</h1>
        <span className=' bg-primary w-10 h-[1px] ml-2 '></span>
      </div>
    </>
  );
};

export default SectionTitle;