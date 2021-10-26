class Card {
    constructor(cost){
        this.cost = cost;
    }
}
class UnitCard extends Card {
    constructor(cost, power, resilience){
        super(cost)
        this.power = power;
        this.resilience = resilience;
    }
    attack(Card){
        Card.resilience -= this.power
    }
}

class EffectCard extends Card {
    constructor(cost, stat, magnitude){
        super(cost)
        this.stat = stat;
        this.magnitude = magnitude;
        this.magnitude > 0?
            this.text = `increase target's ${this.stat} by ${this.magnitude}`
            :this.text = `decrease target's ${this.stat} by ${this.magnitude}`;
    }
    play(Card){
        Card[this.stat] += this.magnitude
    }
}

let redBeltNinja = new UnitCard(3,3,4)
let blackBeltNinja = new UnitCard(4,5,4)

let hardAlgorithm = new EffectCard(2, "resilience", 3)
let unhandledPromiseRejection = new EffectCard(1, "resilience", -2)
let pairProgramming = new EffectCard(3, "power", 2)

hardAlgorithm.play(redBeltNinja)
unhandledPromiseRejection.play(blackBeltNinja)
pairProgramming.play(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)
console.log(redBeltNinja)
console.log(blackBeltNinja)


module.exports = {Card, UnitCard, EffectCard}