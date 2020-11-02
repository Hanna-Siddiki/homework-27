//TASK-1
class Food {
    constructor(params = {}) {
        Object.assign(this, {
            Name: null,
            amount: 1,
            bought: false
        }, { ...params });
    }

    static sortDefault(a, b) {
        return (a.bought - b.bought) * 10 + a.Name.localeCompare(b.Name);
    };
}

    Food.prototype.toString = function () {
    return `${this.Name
} (x$ {
    this.amount
}), $ {
    this.bought?'куплено': 'не куплено'
}`;
};


const shopList = [
    { Name: 'Хлеб', amount: 2 },
    { Name: 'Яйца', amount: 20, bought: true },
    { Name: 'Молоко', bought: true },
    { Name: 'Масло', amount: 2 }
]
    .map(foodDef => new Food(foodDef));

const addToShopList = foodDef => {
    const food = shopList.find(food => food.Name === foodDef.Name);
    if (!food) return shopList.push(new Food(foodDef));
    food.amount += foodDef.amount;
};

const printShopList = () => shopList.forEach(
    (food, i) => console.log(`${i + 1}. ${food}`)
);

shopList.sort(Food.sortDefault);
printShopList();
console.log('---');
addToShopList({ Name: 'Хлеб', amount: 2 });
addToShopList({ Name: 'Торт' });
shopList.sort(Food.sortDefault);
printShopList();
