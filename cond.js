//Question-1:-
for (var a = 1; a <= 10; a++) { //condition statement...
    console.log(a);
}

var a = 1; //while statement...
while (a <= 10) {
    console.log(a);
    a++
}

var a=1; //do while statement...
do{
    console.log(a);
    a++;
}
while(a<=10);

//Question-2:-
for (var a = 1; a <= 10; a++) { //conditional statement...
    if (a % 2 == 0) {
        console.log(a + "is even number");
    }
}

var a = 1; //while statement...
var b=10;
while (a<=b) {
    if(a%2==0){
        console.log(a+"is even number");   
    }
    a++
}

var a=1; //do while statement...
do{
    if(a%2==0){
        console.log(a+"is even number");  
    }
    a++;
}
while(a<=1);

//Question-3:-
for (var a = 1; a >= 10; a++) { //conditional statement...
    if (a % 2 == 1) {
        console.log(a+ "this is odd number");
    }
}

var a=1; //while statement...
var b=10;
while(a<=b){
    if(a%2==1){
        console.log(a+"is odd number");
    }
    a++
}

var a=1; //do while statement....
do{
    if(a%2==1){
        console.log(a+"is odd number");
    }
    a++;
}
while(a<=10);

//Question-4:-
var a=35;
var b=45;
while(a<=b){
    console.log(a+ "this is D-grade marks");
    a++
}