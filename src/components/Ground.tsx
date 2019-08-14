import { Scene, Geom } from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH, GRID, TILES, TILE_WIDTH, TILE_HEIGHT } from '../config';
import GrassBlock from '../assets/scenes/blocks/grass_block.png';
  
export default class Ground {
    scene: Scene;

    constructor(scene: Scene){
        this.scene = scene;
    }

    loadTiles(): void{
        this.scene.load.image('GrassBlock', GrassBlock);
    }

    cartesianToIsometric(cartPt: Geom.Point): Geom.Point{
        let tmpPt = new Geom.Point();
        tmpPt.x = cartPt.x - cartPt.y;
        tmpPt.y = (cartPt.x + cartPt.y) / 2;
        return (tmpPt);
    }

    placeTiles(): void{
        for (let i = 0; i < GRID.length; i += 1) {
            for (let j = 0; j < GRID[i].length; j += 1) {
                let cartPt = new Geom.Point();
                let isoPt = new Geom.Point();
                cartPt.x = j * TILE_WIDTH;
                cartPt.y = i * TILE_HEIGHT;
                let type =  TILES[GRID[i][j]];
                isoPt = this.cartesianToIsometric(cartPt);
                this.scene.add.sprite(
                    isoPt.x + GAME_WIDTH / 2,
                    isoPt.y + GAME_HEIGHT / 4,
                    type
                );
            }
        }
    }
}