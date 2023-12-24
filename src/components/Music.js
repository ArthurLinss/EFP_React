import React, { useState } from 'react';
import MusicTrack from './MusicTrack';
import frenchhouse from "./FUnkFrench.wav";
import norma_jeane from "./Norma Jeane.wav";
import { Component } from "react";

class Music extends Component {
    render() {
      return (
        <section id="music">
          <h2>Music</h2>
          <div className="music-list">
            <div className="music-item">
              <MusicTrack
                trackSrc={frenchhouse}
                trackTitle="French House"
              />
            </div>
            <div className="music-item">
              <MusicTrack
                trackSrc={norma_jeane}
                trackTitle="Norma Jeane"
              />
            </div>
          </div>
        </section>
      );
    }
  }
  

export default Music;
