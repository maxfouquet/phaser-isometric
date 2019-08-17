import Phaser from "phaser";
import ExampleScene from "../scenes/Scene";

import * as React from "react";

import { GAME_HEIGHT, GAME_WIDTH } from "../config";

export default class IGame extends React.Component<any, any> {

  componentDidMount() {
    const config: GameConfig = {
      type: Phaser.AUTO,
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
      parent: "phaser",
      scene: [ExampleScene]
    };

    new Phaser.Game(config);
  }

  shouldComponentUpdate() {
    return false;
  }

  public render() {
    return (
      <div id="phaser">
   
      </div>
    )
  }
  
}
