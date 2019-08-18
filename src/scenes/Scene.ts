import { Scene, Geom } from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH, GRID, TILES, TILE_WIDTH, TILE_HEIGHT } from '../config';
import GrassBlock from '../assets/scenes/blocks/grass_block.png';
import WaterBlock from '../assets/scenes/blocks/water_block.png';
import DirtBlock from '../assets/scenes/blocks/dirt_block.png';
import Background from '../assets/scenes/backgrounds/background_1.jpg';
import Ground from '../components/Ground';
import Hero from '../components/Hero';
import pack from '../assets/packs/character';


export default class ExampleScene extends Scene {

  ground: Ground = new Ground(this);
  hero: Hero = new Hero(this);

  constructor() {
    super({
        pack: pack
    } as any);
  }

  preload() {
    this.load.image('Background', Background);
    this.load.image('GrassBlock', GrassBlock);
    this.load.image('WaterBlock', WaterBlock);
    this.load.image('DirtBlock', DirtBlock);
  }

  create() {
    this.add.image(GAME_WIDTH / 2,  GAME_HEIGHT / 2, 'Background');
    this.renderScene();
    this.hero.add();
  }

  cartesianToIsometric(cartPt: Geom.Point): Geom.Point{
      let tmpPt = new Geom.Point();
      tmpPt.x = cartPt.x - cartPt.y;
      tmpPt.y = (cartPt.x + cartPt.y) / 2;
      return (tmpPt);
  }

  drawTile(type: string, i: number, j:number):void{
      let isoPt = new Geom.Point();
      let cartPt = new Geom.Point();
      cartPt.x = j * TILE_WIDTH;
      cartPt.y = i * TILE_HEIGHT;
      isoPt = this.cartesianToIsometric(cartPt);
      let tile = this.add.sprite(
          isoPt.x + GAME_WIDTH / 2,
          isoPt.y + GAME_HEIGHT / 4,
          type
      );
  }

  renderScene(): void{
      for (let i = 0; i < GRID.length; i += 1) {
          for (let j = 0; j < GRID[i].length; j += 1) {
              let type =  TILES[GRID[i][j]];
              this.drawTile(type, i, j);
          }
      }
  }

}