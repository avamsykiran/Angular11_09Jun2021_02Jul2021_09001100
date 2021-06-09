console.log("This is my first node project");

function f1(x) {
    console.log("Hello " +x)
    console.log(x.length)
}

f1("Vamsy");
f1(123);
f1(true);
f1('@');
f1(() => "some return");