import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Settings from "./Settings";
import * as actions from "../actions";
import { showHideSettings } from "../utils/showHideSettings";

const Interface = ({ isPlaying, startGame, stopGame }) => {
  const handleRunStopGame = () => {
    if (isPlaying) {
      stopGame();
    } else {
      startGame();
    }
  };

  return (
    <div>
      <Settings />
      <div className="interface">
        <button
          className="interface__button"
          title="Settings"
          onClick={showHideSettings}
        >
          <i className="interface__icon ion-navicon-round" />
        </button>
        {isPlaying ? (
          <button
            className="interface__button"
            title="Pause"
            onClick={handleRunStopGame}
          >
            <i className="interface__icon ion-pause" />
          </button>
        ) : (
          <button
            className="interface__button"
            title="Play"
            onClick={handleRunStopGame}
          >
            <i className="interface__icon ion-play" />
          </button>
        )}
        <button className="interface__button" title="Clear">
          <i className="interface__icon ion-trash-a" />
        </button>
        <button className="interface__button" title="Random">
          <i className="interface__icon ion-shuffle" />
        </button>
      </div>
    </div>
  );
};

Interface.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  stopGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired
};

const mapStateToProps = ({ isPlaying }) => ({
  isPlaying
});

export default connect(mapStateToProps, actions)(Interface);
