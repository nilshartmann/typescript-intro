export default undefined;

import "reflect-metadata";

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Point {
    constructor(protected readonly x: number = 0,
        protected readonly y: number = 0) {
    }
}

// class is sealed, will throw at runtime
// (Point.prototype as any).add = function() { }

function f() {
    console.log("f(): evaluated");
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("f(): called");
    };
}

function g() {
    console.log("g(): evaluated");
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("g(): called");
    };
}

function h(target: any,
    propertyKey: string,
    descriptor?: PropertyDescriptor
) {
    console.log("h(): called");
    console.log(target === C.prototype);
    console.log(propertyKey);
    if (descriptor) {
        console.log(descriptor.value);
    }
}

const formatMetadataKey = Symbol("format");

function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
  }
class C {
    @f()
    @g()
    @h
    method() { }

    @h
    a: number = -1;

    @format("Hello, %s")
    name: string = 'Olli';

    printFormatted() {
        const formatString = getFormat(this, "name");
        return formatString.replace("%s", this.name);
    }
}

const c = new C();
console.log(c.printFormatted())

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

const line: any = new Line();
line.p0 = new Point(); // cool
// line.p1 = 'not a point'; // will throw at runtime

// https://www.typescriptlang.org/docs/handbook/decorators.html#metadata
// https://rbuckton.github.io/reflect-metadata/