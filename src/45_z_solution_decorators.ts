export default undefined;

import "reflect-metadata";

// AUFGABEN 🤔:
// 1. Benutze den gezeigten "validate" Decorator, wende ihn auf eine eigene Klasse an. Die überprüften Typen dürfen keine primitiven Datentypen sein. 
//    Benutze die Klasse so, dass sie einen Runtime-Error wirft. 

class Order {
    private _type: String;
    private _amount: Number;

    constructor(type: String, amount: Number) {
        this._type = type;
        this._amount = amount;
    }

    @validate
    set type(value: String) {
        this._type = value
    }

    @validate
    set amount(value: Number) {
        this._amount = value
    }

}

function validate<T>(
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<T>
) {
    let set = descriptor.set;
    descriptor.set = function (value: T) {
        let type = Reflect.getMetadata("design:type", target, propertyKey);
        if (!(value instanceof type)) {
            throw new TypeError("Invalid type.");
        }
        set!.call(target, value);
    };
}

const order: any = new Order('beer', 10);
order.type = new String("ale");
// order.type = false // throws at runtime


// 2. Schreibe einen "frozen" Decorator, der Object.freeze auf eine Klasse anwendet. Benutze die Klasse so, dass sie einen Runtime-Error wirft.

function frozen(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

@frozen
class Point {
    constructor(protected readonly x: number = 0,
        protected readonly y: number = 0) {
    }
}

// class is frozen, will throw at runtime
(Point.prototype as any).add = function() { }

// Links
// https://www.typescriptlang.org/docs/handbook/decorators.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze