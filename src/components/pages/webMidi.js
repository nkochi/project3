import React, { Component } from 'react';
import WebMidi from 'webmidi';


class webMidi extends Component {


  midiTest = () => {
    /*
    WebMidi.enable(function (err) {
      if (err) {
        console.log("WebMidi could not be enabled.", err);
      } else {
        console.log("WebMidi enabled!");
      }
    });
    */
    WebMidi.enable(function (err) {
      console.log(WebMidi.inputs);
      console.log(WebMidi.outputs);
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <button onClick={this.midiTest} >Midi Test Button</button>
      </div>
    );
  }
};

export default webMidi;