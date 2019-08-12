import { Scene } from 'phaser';
import Background from '../assets/1-Background_scene_8@0.5x.jpg';
import GrassBlock from '../assets/1-Grass_Block01@0.5x.png';

export default class ExampleScene extends Scene {
  state = {
    grid: [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ],
    blocks: ['GrassBlock'],
    offsetX: 350,
    offsetY: 80
  }
  preload() {
    this.load.image('Background', Background);
    this.load.image('GrassBlock', GrassBlock);
  }
  create() {
    this.add.image(this.state.offsetX, this.state.offsetY + 60, 'Background');

    for (let y = 0; y < this.state.grid.length; y += 1) {
      for (let x = 0; x < this.state.grid[y].length; x += 1) {
        this.add.sprite(
          (x - y) * 52 + this.state.offsetX,
          ((x + y) / 2) * 52 + this.state.offsetY,
          this.state.blocks[this.state.grid[x][y]]
        );
      }
    }
  }
}