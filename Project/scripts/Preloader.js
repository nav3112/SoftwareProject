class Preloader extends Phaser.Scene {
    constructor() {
        super({ key: 'Preloader' });
    }

    preload() {
        this.load.image('loading', 'assets/loading.png');
    }

    create() {
        let loadingImage = this.add.image(400, 300, 'loading').setOrigin(0.5);

        let startButton = this.add.text(400, 500, 'Start Game', {
            fontSize: '32px',
            fill: '#fff',
            backgroundColor: '#000'
        }).setOrigin(0.5).setInteractive();

        startButton.on('pointerdown', () => {
            loadingImage.setVisible(false); // can also use loadingImage.destroy();
            this.scene.start('GameLevel');
        });
    }
}