import { Scene } from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH } from '../config';

export default class Hero {
    
    scene: Scene;
    keys: any;
    charater: any;

    constructor(scene: Scene){
        this.scene = scene;
    }

    add(): void{
        this.keys = this.scene.input.keyboard.addKeys({
            up: 'up',
            down: 'down',
            left: 'left',
            right: 'right'
        }); 
        this.scene.anims.create({ key: 'north', frames: [
            { frame: 0, key: 'north-1' },
            { frame: 1, key: 'north-2' },
            { frame: 2, key: 'north-3' }], 
            frameRate: 10, repeat: 1 
        });
        this.charater = this.scene.add.sprite(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'north-1').setScale(0.4).play('north');
    }

}