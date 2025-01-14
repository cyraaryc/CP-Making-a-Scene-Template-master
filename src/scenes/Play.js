class Play extends Phaser.Scene {
    constructor(){
        super('Play')
        console.log('Play: constructor');
    }

    init(playerstats) {
        console.log('Play: init');
        this.HP = playerstats.HP;
        this.EXP = playerstats.EXP;

    }
    create(){
        console.log('Play: create')
        console.log(`HP: ${this.HP} EXP:${this.EXP}`)

    }
}