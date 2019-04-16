import React from "react";
import Music from "./Music";

const MusicList = ({musicChart}) => {
  console.log("hi", musicChart);

  if (!musicChart) return null;
  // console.log("listing", musicChart);
  const entries = musicChart.map((entry, index) => {
    return <Music key={index} id={index}>{entry.title.label}</Music>
  });
  return(
    <div>
    {entries}
    </div>
  )
}

export default MusicList;
