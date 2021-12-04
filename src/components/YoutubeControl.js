import React, { Component } from "react";
import YouTube from "react-youtube";
import "../style/youtubeApi.css";

export class YoutubeControl extends Component {
  render() {
    const opts = {
      height: "390",
      width: "80%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    return (
      <div className="youtubeApi">
        <YouTube videoId="bk6kISiRVOA" opts={opts} onReady={this._onReady} />
      </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default YoutubeControl;
