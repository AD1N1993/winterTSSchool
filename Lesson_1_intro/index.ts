//1. Структурная типизация
export class USD {
    // private notUsed!: never;
    constructor(public amount: number) {}
}

class EUR {
    // private notUsed!: never;
    constructor(public amount: number) {}
}

const wallet1: USD = new USD(100);
const wallet2: EUR = wallet1;

//2. Aliasing (передача по ссылке)

type Version = {
    value: number;
};

type RelaxedVersion = {
    value: string | number;
};

const ver: Version = {
    value: 1,
};

const ver2: RelaxedVersion = ver;

ver2.value = 'somestring';
//Error toFixed only if value - number
console.log(ver.value.toFixed(2));

//3 Mutable
//4 Иерархия типов
