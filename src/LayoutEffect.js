import React, { useState, useLayoutEffect, useRef } from "react";

//So what's going on here?
//It renders the component. When you click on the component, it will trigger setWidth(0)
//which will re-render the component, which through the useLayoutEffect will set the element
//whidth and height, which will basically change the el, which will re-render everything once
//again, which will be a final stage, where we know the width and height of the element

//this useRef is a possibility to add a reference to any DOM element, in our case, to the
//textarea, which means, that el will store a reference to the textarea, and through the
// .current.clientWidth we have the element width

//const batman=useRef() is in pair with ref={batman}

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();

  //useLayoutEffect happens right after the render, and it's synchronous
  //useEffect happens asynchronous and basically it's the same

  useLayoutEffect(() => {
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  });

  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      <h2>textarea width: {width}px</h2>
      <h2>textarea height: {height}px</h2>
      <textarea
        onClick={() => {
          setWidth(0);
        }}
        ref={el}
      />
    </div>
  );
};

export default LayoutEffectComponent;
