import { Scene } from 'phaser';
import Ground from '../components/Ground';
import Background from '../assets/1-Background_scene_8@0.5x.jpg';

export default class ExampleScene extends Scene {

  offsetX: 350;
  offsetY: 80;

  preload() {
    this.load.image('Background', Background);
    new Ground(this).loadAssets();
  }
  create() {
    this.add.image(this.offsetX, this.offsetY + 60, 'Background');
    new Ground(this).placeTiles();
  }

}