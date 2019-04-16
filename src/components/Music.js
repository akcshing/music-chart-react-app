import React from "react";

const Music = ({id, children}) => {
    if (!children) return null;
    return(
    <h4>{id+1}, {children}</h4>
  )
}

export default Music;
