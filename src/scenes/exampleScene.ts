import { Scene } from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH } from '../config';
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
    this.ground.loadTiles();
  }

  create() {
    this.add.image(GAME_WIDTH / 2,  GAME_HEIGHT / 2, 'Background');
    this.ground.placeTiles();
    this.hero.add();
  }

}