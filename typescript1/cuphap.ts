// string, number, boolean, array
function TypeScript(name: string, age: number, free: boolean, ...source: string[]): string {
    return `Tên:${name}, Tuổi: ${age} , free: ${free} , source: ${source}`;

}
console.log(TypeScript("An", 18,false,"Javascipt","PHP","Laravel"))


// tuple
let student: [string, number, boolean];
student = ["An", 18, true];
console.log(student);

//enum
enum codegym {"javascript", "php", "laravel"};
let objCodegym = codegym.javascript;
console.log(codegym);

//any
let students: any = 18;
students = "An"
students = true
let std: any[] = [18, "An", true]
console.log(std)

//void
function showInfo01(): void{
    console.log("Hello void")
}

showInfo01();

//interface object
interface student {
    name: string
    age: number
    free?: boolean
}
let student01: student ;
student01 = {

    name:"An",
    age: 18,
    free: false
}
console.log(student01);

//interface array
interface courseList {
    [index: number]: number
}

let courses: courseList = [1,3];
console.log(courses);

//type assertion
let assertion: any = "TypeScript"
let type = (assertion as string).length
console.log(type)