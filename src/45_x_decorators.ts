export default undefined;

import "reflect-metadata";

class Point {
    x: number = 0;
    y: number = 0;
}

class Line {
    private _p0: Point = new Point();
    private _p1: Point = new Point();

    @validate
    set p0(value: Point) {
        this._p0 = value;
    }
    get p0() {
        return this._p0;
    }

    @validate
    set p1(value: Point) {
        this._p1 = value;
    }
    get p1() {
        return this._p1;
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

const line:any = new Line();
line.p0 = new Point(); // cool
// line.p1 = 'not a point'; // will throw at runtime


// https://www.typescriptlang.org/docs/handbook/decorators.html#metadata
// https://github.com/DJCordhose/inversify-playground
// https://github.com/inversify/InversifyJS