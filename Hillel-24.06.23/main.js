let n = 3;
let d = 10;
    function pow(num, degree) {
        if (degree == 0) {
        return 1;
        } 
        else {
        return num * pow(num, degree - 1);
        }
    }
let degreeNum = pow(n, d);
console.log(degreeNum);
