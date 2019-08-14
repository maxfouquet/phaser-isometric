import { Scene } from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH } from '../config';

export default class Hero {
    
    scene: Scene;

    constructor(scene: Scene){
        this.scene = scene;
    }

    add(): void{
        let character = this.scene.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, '1');
        character.scaleX = 0.5;
        character.scaleY = 0.5;
    }

}