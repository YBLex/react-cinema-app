export const extend = (a, b) => Object.assign({}, a, b);

export const getArrayOfUniqueProps = (obj, propName) => Array.from(new Set(
    obj.map((el) => (el[propName]))
));
