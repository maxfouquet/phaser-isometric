import { Scene } from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH, GRID, TILES, TILE_WIDTH, TILE_HEIGHT } from '../config';
import GrassBlock from '../assets/scenes/blocks/grass_block.png';
  
export default class Ground {
    scene: Scene;

    constructor(scene: Scene){
        this.scene = scene;
    }

    loadAssets(): void{
        this.scene.load.image('GrassBlock', GrassBlock);
    }

    cartesianToIsometric(x: number, y: number): {x: number, y: number}{
        let tmpX = x - y;
        let tmpY = (x + y) / 2;
        return { x: tmpX, y: tmpY };
    }

    placeTiles(): void{
        for (let i = 0; i < GRID.length; i += 1) {
            for (let j = 0; j < GRID[i].length; j += 1) {
                let x = j * TILE_WIDTH;
                let y = i * TILE_HEIGHT;
                let type =  TILES[GRID[i][j]];
                let isometricPoint = this.cartesianToIsometric(x, y);
                this.scene.add.sprite(
                    isometricPoint.x + GAME_WIDTH / 2,
                    isometricPoint.y + GAME_HEIGHT / 4,
                    type
                );
            }
        }
    }
}