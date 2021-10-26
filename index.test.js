const {jest:requiredJest } = require("@jest/globals")
const { Card, UnitCard, EffectCard } = require("./index")

test("Card Class Initialize types", () =>{
    const card = new Card(2);
    expect(card.cost).toBe(2);
    expect(card.power).toBe(undefined);
    expect(card.resilience).toBe(undefined);
})

test("Unit Cards Initialize with attributes", () =>{
    const card = new UnitCard(2,3,4)
    expect(card.cost).toBe(2);
    expect(card.power).toBe(3);
    expect(card.resilience).toBe(4);
    expect(typeof card.attack).toBe(typeof function(){})
})

test("Attack Method on Unit Cards", () =>{
    const card1 = new UnitCard(2,3,4);
    const card2 = new UnitCard(2,3,4);
    card1.attack(card2);
    expect(card1.cost).toBe(2);
    expect(card1.power).toBe(3);
    expect(card1.resilience).toBe(4);
    expect(card2.cost).toBe(2);
    expect(card2.power).toBe(3);
    expect(card2.resilience).toBe(1);
})

test("Effect Cards Initialzes with attributes", () =>{
    const card = new EffectCard(2, "resilience", 3)
    expect(card.cost).toBe(2);
    expect(card.text).toBe("increase target's resilience by 3");
    expect(card.stat).toBe("resilience");
    expect(card.magnitude).toBe(3);
    expect(typeof card.play).toBe(typeof function(){})
    expect(card.power).toBe(undefined);
    expect(card.resilience).toBe(undefined);
})

test("EffectCard resilience stat Effect Test", () =>{
    const unitCard = new UnitCard(2,3,4)
    const effectCard = new EffectCard(2, "resilience", 3)
    effectCard.play(unitCard)
    expect(unitCard.resilience).toBe(7)
})
test("EffectCard power stat Effect Test", () =>{
    const unitCard = new UnitCard(2,3,4)
    const effectCard = new EffectCard(3, "power", -2)
    effectCard.play(unitCard)
    expect(unitCard.power).toBe(1)
})
