class GameScene2 extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene2' });
    }

    create() {
        this.add.image(400, 300, 'background2');

        // Add rover and make it movable
        this.rover = this.physics.add.sprite(100, 300, 'astronaut');
        this.cursors = this.input.keyboard.createCursorKeys();

        // Trash items
        this.trashItems = this.physics.add.group({
            key: 'trash',
            repeat: 5,
            setXY: { x: 150, y: 200, stepX: 100 }
        });

        this.physics.add.overlap(this.rover, this.trashItems, this.collectTrash, null, this);
    }

    update() {
        if (this.cursors.left.isDown) {
            this.rover.setVelocityX(-200);
        } else if (this.cursors.right.isDown) {
            this.rover.setVelocityX(200);
        } else {
            this.rover.setVelocityX(0);
        }

        if (this.cursors.up.isDown) {
            this.rover.setVelocityY(-200);
        } else if (this.cursors.down.isDown) {
            this.rover.setVelocityY(200);
        } else {
            this.rover.setVelocityY(0);
        }
    }

    collectTrash(rover, trash) {
        trash.disableBody(true, true);
        // Increment score and update UI
    }
}