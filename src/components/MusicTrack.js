import React, { Component } from "react";

import AudioPlayer from "react-h5-audio-player";
//import "react-h5-audio-player/lib/styles.css";
import './music_track_style.css';


class MusicTrack extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isPlaying: false
      };
    }
  
    handlePlay = () => {
      this.setState({ isPlaying: !this.state.isPlaying });
    };
  
    render() {
      const { trackSrc, trackTitle } = this.props;
      const { isPlaying } = this.state;
  
      return (
        <div className="music-track">
          <h3>{trackTitle}</h3>
          <AudioPlayer
            autoPlay={isPlaying}
            src={trackSrc}
            onPlay={this.handlePlay}
            onPause={this.handlePlay}
            // other props here
          />
        </div>
      );
    }
  }
  
export default MusicTrack;
