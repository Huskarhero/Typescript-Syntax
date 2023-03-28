/* 1. Using Angular <> brackets */

// var numer:any = 1111;
// var assertedNum = <number> numer;

/* 2. Using as Keyword */

//  var numer:any = 1111;
//  var assertedNum = numer as number;

/* 3. Type Assertion with Objects */

interface Employee {
    Name: string;
    RegNo: number;
}

let employee = <Employee> {};
employee.Name = "ninja";
employee.RegNo = 123;

interface Rectangle {
    height: number,
    width: number
};

const rectangle: Rectangle = {
    height: 20,
    width: 10
};