export default undefined;

type Person = {
  name: string;
  age: number;
  address: {
    city: string;
  };
  hobbies: String[];
};

type ReadonlyPerson = Readonly<Person>;

const klaus: Person = {
  name: "Klaus",
  age: 32,
  address: {
    city: "Hamburg"
  },
  hobbies: ["JavaScript", "TypeSciprt"]
};

// type RecursiveReadOnly<O> = {
//   readonly [P in keyof O]: O[P] extends
// }

type ImmutablePrimitive = undefined | null | boolean | string | number | Function;

export type Immutable<T> = T extends ImmutablePrimitive
  ? T
  : T extends Array<infer U>
  ? ImmutableArray<U>
  : T extends Map<infer K, infer V>
  ? ImmutableMap<K, V>
  : T extends Set<infer M>
  ? ImmutableSet<M>
  : ImmutableObject<T>;

export type ImmutableArray<T> = ReadonlyArray<Immutable<T>>;
export type ImmutableMap<K, V> = ReadonlyMap<Immutable<K>, Immutable<V>>;
export type ImmutableSet<T> = ReadonlySet<Immutable<T>>;
export type ImmutableObject<T> = { readonly [K in keyof T]: Immutable<T[K]> };

function updatePerson(p: ImmutableObject<Person>) {
  // p.name = ""; // ERROR; FINE!
  p.address.city = ""; // 😬
  // p.address = { city: "Norderstedt" }; // ... FINE!
  p.hobbies.push("Making mistakes"); // ups...
  // p.hobbies = []; // ERROR: FINE!
}

updatePerson(klaus);
