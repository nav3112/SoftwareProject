class TrashSortingScene extends Phaser.Scene {
    constructor() {
        super({ key: 'TrashSortingScene' });
    }

    create() {
        this.add.image(400, 300, 'background2');
        // Add bins and implement drag-and-drop
    }
}