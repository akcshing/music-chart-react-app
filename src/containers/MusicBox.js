import React, {Component} from "react";
import MusicList from "../components/MusicList";

class MusicBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      musicChart: null
    }
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", ()=>{
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({musicChart: data.feed.entry})
    });
    request.send();
  }

  render(){
    console.log("rendering", this.state.musicChart);
    return(
      <MusicList musicChart={this.state.musicChart} />
    )
  }

}

export default MusicBox;
