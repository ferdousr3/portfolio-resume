import React from 'react';

const HeroRight = () => {
  const data = {
    title1: "class person {",
    title2: "constructor() {",
    title3: "this.name =",
    title4: "MD Ferdous",
    title5: "this.traits =",
    title6: " DESIGN",
    title8: "this.age = 28 ;",
    title9: " }",
    title10: "}",
  };
  return (
    <>
      <div className="text-primary font-display py-6 rounded-md px-8">
        <ul className="text-md">
          <li className="text-lg py-1 block">
            <h1 className="text-lg block">
              <span className="pr-1">1</span>
              {data.title1}
            </h1>
          </li>
          <li className="lg:text-lg text-sm py-1 block ">
            <h2>
              <span className="pr-5">2</span>
              {data.title2}
            </h2>
          </li>
          <li className="lg:text-lg text-sm py-1 block">
            <h3>
              <span className="pr-7">3</span>
              {data.title3} &#34;
              <span>{data.title4}</span>
              &#34; ;
            </h3>
          </li>
          <li className="lg:text-lg text-sm py-1 block">
            <h3>
              <span className="pr-7">4</span>
              {data.title5} [ &#34;
              <span className="font-bold">DESIGN</span>
              &#34; &sbquo; &#34;
              <span className="font-bold">DEV</span>
              &#34; ] ;
            </h3>
          </li>
          <li className="lg:text-lg text-sm py-1 block">
            <span className="pr-6">5</span>
            {data.title8}
          </li>
          <li className="lg:text-lg text-sm py-1 block">
            <span className="pr-5">6</span>
            {data.title9}
          </li>
          <li className="lg:text-lg text-sm py-1 block">
            <span className="pr-1">7</span>
            {data.title10}
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeroRight;