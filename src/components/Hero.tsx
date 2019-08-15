import { Scene } from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH } from '../config';

export default class Hero {
    
    scene: Scene;

    constructor(scene: Scene){
        this.scene = scene;
    }

    add(): void{
        this.scene.add.sprite(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'southeast-1').setScale(0.4);
    }

}