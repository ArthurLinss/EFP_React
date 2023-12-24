import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import frenchhouse from "./FUnkFrench.wav";
import norma_jeane from "./Norma Jeane.wav";
import ruetmus_saxo from "./rütmus2023_saxo_part1.wav";
import "./music_track_style.css";

class MusicTrack extends Component {
  render() {
    const { trackTitle, onPlay, isCurrentTrack } = this.props;
    const trackClassName = isCurrentTrack ? "music-track playing" : "music-track";

    return (
      <div className={trackClassName}>
        <h3>{trackTitle}</h3>
        <button onClick={() => onPlay(this.props.trackSrc)}>Play</button>
      </div>
    );
  }
}

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: null,
      isPlaying: false,
    };
  }

  handleTrackPlay = (trackSrc) => {
    if (this.state.currentTrack !== trackSrc) {
      this.setState({ currentTrack: trackSrc, isPlaying: true });
    } else {
      this.setState((prevState) => ({ isPlaying: !prevState.isPlaying }));
    }
  };

  render() {
    return (
      <section id="music">
        <div className="music-header">
          <h2>Music</h2>
        </div>
        <div className="music-content">
          <div className="music-list">
            <MusicTrack
              trackSrc={frenchhouse}
              trackTitle="French House"
              onPlay={this.handleTrackPlay}
              isCurrentTrack={this.state.currentTrack === frenchhouse}
            />
            <MusicTrack
              trackSrc={norma_jeane}
              trackTitle="Norma Jeane"
              onPlay={this.handleTrackPlay}
              isCurrentTrack={this.state.currentTrack === norma_jeane}
            />
            <MusicTrack
              trackSrc={ruetmus_saxo}
              trackTitle="Rütmus Saxo"
              onPlay={this.handleTrackPlay}
              isCurrentTrack={this.state.currentTrack === ruetmus_saxo}
            />
            {/* Add more MusicTrack components with different tracks */}
          </div>
          <div className="music-content-footer">
            <div className="music-player">
              <AudioPlayer
                src={this.state.currentTrack}
                autoPlay={this.state.isPlaying}
                onPlay={() => this.setState({ isPlaying: true })}
                onPause={() => this.setState({ isPlaying: false })}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Music;
