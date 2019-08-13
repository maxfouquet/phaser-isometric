import { Scene } from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH } from '../config';
import Background from '../assets/scenes/backgrounds/background_1.jpg';
import Ground from '../components/Ground';

export default class ExampleScene extends Scene {

  ground: Ground = new Ground(this);

  preload() {
    this.load.image('Background', Background);
    this.ground.loadAssets();
  }

  create() {
    this.add.image(GAME_WIDTH / 2,  GAME_HEIGHT / 2, 'Background');
    this.ground.placeTiles();
  }

}