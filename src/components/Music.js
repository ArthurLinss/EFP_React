import React, { useState } from "react";
import MusicTrack from "./MusicTrack";
import frenchhouse from "./FUnkFrench.wav";
import norma_jeane from "./Norma Jeane.wav";
import { Component } from "react";

class Music extends Component {
  render() {
    return (
      <section id="music">
        <div class="music-header">
          <h2>Music</h2>
        </div>
        <div class="music-content">
          <div className="music-list">
            <div className="music-item">
              <MusicTrack trackSrc={frenchhouse} trackTitle="French House" />
            </div>
            <div className="music-item">
              <MusicTrack trackSrc={norma_jeane} trackTitle="Norma Jeane" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Music;
