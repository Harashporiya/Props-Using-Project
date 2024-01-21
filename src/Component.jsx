import React from 'react';
import './index.css';

export function Component(props) {
  const { username, img, paragraph, href} = props;

  return(  
    <>
   
    <div id="src">
      <p>Movies</p>
      <img id="img" src={img} alt="My image"/>
      <p>{username}</p>
      <p>
       {paragraph}
      </p>
      {/* <button id="btn" onClick={href}>Click me</button> */}
      <a id="btn" href={href}>Click me</a>
    </div>
    
    </>
  );
}
