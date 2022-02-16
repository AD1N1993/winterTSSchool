type Option = true | false | 'suppress-warning' ;

//100500 строк кода и мы явно забудем поменять processOption

function processOption(o: Option): string {
    if (o === true) {
        return 'Yes';
    } else if (o === false) {
        return 'False';
    } else if (o === 'suppress-warning') {
        return 'warning';
    } else {
        const wtf: never = o
        return 'never';
    }
}

processOption('throw-error'); //=> 'warning'
//about any
type Test1 = {x: number} extends unknown ? 'yes' : 'no'; // yes
type Test2 = unknown extends unknown ? 'yes' : 'no'; // yes
type Test3 = number extends unknown ? 'yes' : 'no'; // yes
type TestAny1 = {x: number}  extends any ? 'yes' : 'no'; // yes
type TestAny2 = unknown extends any ? 'yes' : 'no'; // yes
type TestAny3 = number extends any ? 'yes' : 'no'; // yes
type WTF1 = unknown extends never ? 'yes' : 'no'; // no
type WTF2 = any extends number ? 'yes' : 'no'; // yes | no
type WTF3 = any extends never ? 'yes' : 'no'; // yes | no
type WTF4 = any extends void ? 'yes' : 'no'; // yes | no
