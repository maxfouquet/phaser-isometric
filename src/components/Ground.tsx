import { Scene } from 'phaser';
import GrassBlock from '../assets/1-Grass_Block01@0.5x.png';

let tiles = [];
tiles[0] = 'GrassBlock';
  
export default class Ground {
    scene: Scene;
    grid: number[][];
    offsetX: number;
    offsetY: number;

    constructor(scene: Scene){
        this.scene = scene;
        this.grid = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ];
        this.offsetX = 350;
        this.offsetY = 80;
    }

    loadAssets() {
        this.scene.load.image('GrassBlock', GrassBlock);
    }

    placeTiles() {
        for (let y = 0; y < this.grid.length; y += 1) {
          for (let x = 0; x < this.grid[y].length; x += 1) {
            this.scene.add.sprite(
              (x - y) * 52 + this.offsetX,
              ((x + y) / 2) * 52 + this.offsetY,
              tiles[this.grid[x][y]]
            );
          }
        }
    }
}