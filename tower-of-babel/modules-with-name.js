export const PI = 3.141592;

export const square = function square(x) {
    return x * x;
};

export const sqrt = function sqrt(s){
    return _sqrt(s, s/2.0, 0.0);
};

function _sqrt(s, x, last){
    return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
