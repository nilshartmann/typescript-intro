// hack: make sure this module is "private"
export default undefined;
function readPerson() {
    return fetchApi().then(candidate => {
        assertIsPerson(candidate);
        return candidate;
    });
}
function assertIsPerson(candidate) {
    if (typeof candidate.name === "string" && typeof candidate.age === "number") {
        return;
    }
    throw new Error("This is not a Person");
}
function fetchApi() {
    return fetch("/api")
        .then(res => res.json())
        .then(something => {
        return something;
    });
}
export function write(p) { }
//# sourceMappingURL=useApi.js.map