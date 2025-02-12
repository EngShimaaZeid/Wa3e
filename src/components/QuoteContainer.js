import React,{useRef }from "react";
import VariableProximity from '../bits/VariableProximity';

const QuoteContainerr = () => {
  const containerRef = useRef(null);

  return (
    <div className="container mx-auto px-16 py-16">
      <div className="flex flex-wrap justify-center gap-3">
        <div
          ref={containerRef}
          style={{position: 'relative'}}
        >
          <VariableProximity
  label={'Great companies are built on strong teams, relentless innovation, and a shared vision. Together, we rise higher and achieve the impossible.'}
  className="variable-proximity-demo text-4xl font-bold p-50px leading-2.75"  // ⬅️ Makes it H1 size
  fromFontVariationSettings="'wght' 7000, 'opsz' 9"
  toFontVariationSettings="'wght' 10000, 'opsz' 40"
  containerRef={containerRef}
  radius={100}
  falloff="linear"
/>

      </div> 
    </div>
  </div>
  );
};

export default QuoteContainerr;
