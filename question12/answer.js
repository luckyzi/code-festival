const Wizard = class Wizard {
  // 클래스 생성
  constructor(health, mana, armor) {
    // 생성자 초기화
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    // attack함수 생성
    console.log("파이어볼");
  }
};

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
