class GameScene1 extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene1' });
    }

    preload() {
        this.load.image('startButton', 'assets/startButton.png');
        this.load.image('background1', 'assets/bg.jpg');
        this.load.image('background2', 'assets/bg2.jpg');
        this.load.image('rocket', 'assets/rocket.png');
        this.load.image('crashedRocket', 'assets/crashedrocket.png');
        this.load.audio('backgroundMusic', 'assets/background.mp3');
        this.load.audio('explosionSound', 'assets/spaceexplosion.mp3');
        this.load.spritesheet('astronaut', 'assets/astronaut.png', { frameWidth: 50, frameHeight: 50 });
    }
    create() {
        this.add.image(400, 300, 'background1');
        this.rocket = this.add.sprite(400, 100, 'rocket');

        this.bgMusic = this.sound.add('backgroundMusic', { loop: true, volume: 0.5 });
        this.bgMusic.play();

        this.tweens.add({
            targets: this.rocket,
            y: 300,
            duration: 2000,
            onComplete: () => {
                this.rocket.setTexture('crashedRocket');
                this.sound.play('explosionSound');
                this.showDialogues([
                    "Oh no, what just happened?!",
                    "Where are we? This place is a mess!",
                    "Why am I surrounded by all this trash?",
                    "Hmm, let’s explore and find out more!"
                ]);
            }
        });
    }

    showDialogues(dialogues) {
        let index = 0;
        const text = this.add.text(50, 550, dialogues[index], { fontSize: '20px', fill: '#fff' });

        const interval = this.time.addEvent({
            delay: 3000,
            callback: () => {
                index++;
                if (index < dialogues.length) {
                    text.setText(dialogues[index]);
                } else {
                    interval.remove();
                    this.scene.start('GameScene2');
                }
            },
            loop: true
        });
    }

    update() {
        
    }
}