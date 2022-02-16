type ColorfulAndNamed = {
    color: 'red' | 'green' | 'blue';
    name: string;
};

type ColorfulAndShaped = {
    color: 'red' | 'green' | 'blue';
    shape: 'box' | 'ball';
};

type CoriosObject = ColorfulAndNamed & ColorfulAndShaped;

const x: CoriosObject = {
    name: 'name',
    color: 'green',
    shape: 'box',
};

type A = string | number;
type B = number | boolean;

type Test = A & B extends A | B ? 'yes' : 'no'; //yes

type C = string;
type D = boolean;

type Test4 = C & D extends C | D ? 'yes' : 'no'; //yes
