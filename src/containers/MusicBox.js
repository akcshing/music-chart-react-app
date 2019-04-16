import React, {Component} from "react";
import MusicList from "../components/MusicList";

class MusicBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      musisChart: []
    }
  }

  render(){
    return(
      <MusicList />
    )
  }

}

export default MusicBox;
