// // Phaser Game Configuration
// const config = {
//     type: Phaser.AUTO,
//     width: 800,
//     height: 600,
//     scene: [BootScene, GameScene1, GameScene2, TrashSortingScene],
//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: { y: 0 },
//             debug: false
//         }
//     }
// };

// const game = new Phaser.Game(config);

// // Boot Scene - Preloading Assets
// class BootScene extends Phaser.Scene {
//     constructor() {
//         super({ key: 'BootScene' });
//     }

//     preload() {
//         this.load.image('startButton', 'assets/startButton.png');
//         this.load.image('background1', 'assets/bg.jpg');
//         this.load.image('background2', 'assets/bg2.jpg');
//         this.load.image('rocket', 'assets/rocket.png');
//         this.load.image('crashedRocket', 'assets/crashedrocket.png');
//         this.load.audio('backgroundMusic', 'assets/background.mp3');
//         this.load.audio('explosionSound', 'assets/spaceexplosion.mp3');
//         this.load.spritesheet('astronaut', 'assets/astronaut.png', { frameWidth: 50, frameHeight: 50 });
//     }

//     create() {
//         this.scene.start('GameScene1');
//     }
// }