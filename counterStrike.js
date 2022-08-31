function Team() {
    this.team1 = contri;
    this.team2 = teroristi;
}

function Player(name, health, weapon) {
    this.name = name;
    this.health = health;
    this.accuracy = (Math.ceil(Math.random() * 100)) / 100;
    this.defence = (Math.floor(Math.random() * 51)) / 100;
    this.weapon = new Weapon();
}

function Weapon() {
    this.calliber = Math.ceil(Math.random() * 50);
    this.misfireChance = Math.ceil(Math.random() * 50);
    this.cartirdgeCount = Math.floor(Math.random() * 16) + 5;
}

let contri = []
contri.push(new Player("soldier1", 100));
contri.push(new Player("soldier2", 100));
contri.push(new Player("soldier3", 100));


let teroristi = []
teroristi.push(new Player("terorist1", 100));
teroristi.push(new Player("terorist2", 100));
teroristi.push(new Player("terorist3", 100));



let hit = 0;
function hitCalculation(player) {
    if (player.weapon.cartirdgeCount <= 0) {
        return 0;

    } else if (player.weapon.misfireChance > Math.ceil(Math.random() * 100)) {
        player.weapon.misfireChance > Math.ceil(Math.random() * 50);
        console.log(`The weapon of ${player.name} misfired.`);
        return 0;
    }
    else {
        player.weapon.cartirdgeCount--;
        return player.weapon.calliber * player.accuracy;
    }
}

function calcAfterHit(player1, player2) {
    return player2.health = Math.floor(player2.health - (hitCalculation(player1) * player2.defence))
}

let afterHit;
function battleRound(player1, player2) {
    while (player1.health > 0 && player2.health > 0) {
        if (player1.weapon.cartirdgeCount === 0 && player2.weapon.cartirdgeCount === 0) {
            if (player1.health > player2.health) {
                console.log(`${player1.name} win`);
                return 1;
            } else {
                console.log(`${player2.name} win`);
                return 2;
            }
        }
        else if (player1.weapon.cartirdgeCount === 0 || player2.weapon.cartirdgeCount === 0) {
            if (player1.weapon.cartirdgeCount === 0) {
                afterHit = calcAfterHit(player2, player1);
            } else {
                afterHit = calcAfterHit(player1, player2);
            }
        }
        else {
            afterHit = calcAfterHit(player1, player2);
            console.log(`${player2.name} ostava sus ${afterHit} health sled strelbata`);
            afterHit = calcAfterHit(player2, player1);
            console.log(`${player1.name} ostava sus ${afterHit} health sled strelbata`);
            if (player1.health <= 0 || player2.health <= 0) {
                if (player1.health > player2.health) {
                    console.log(`${player1.name} win`);
                    return 1;
                } else {
                    console.log(`${player2.name} win`);
                    return 2;
                }
            }
        }
    }
}

let soldier1;
let soldier2;
let round = 0;

while (contri.length > 0 && teroristi.length > 0) {
    round++;
    console.log(`Round ${round}`);
    let indexSoldier1 = Math.floor(Math.random() * contri.length);
    let indexSoldier2 = Math.floor(Math.random() * teroristi.length);
    soldier1 = contri[indexSoldier1];
    soldier2 = teroristi[indexSoldier2];
    let resultFroBattle = battleRound(soldier1, soldier2)
    if (resultFroBattle === 1) {
        teroristi.splice(indexSoldier2, 1);
    } else {
        contri.splice(indexSoldier1, 1);
    }
}

if (contri.length === 0) {
    console.log("Terorist win");
} else {
    console.log("Counter-terorist win");
}


