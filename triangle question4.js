for(let i=5;i>=1;i--){
    for(k=1;k<=5-i;k++){
        process.stdout.write(" ")
    }

    for(let j=1;j<=i;j++){
        process.stdout.write("*")
    }
    for(let l=1;l<=i-1;l++){
        process.stdout.write("*")
    }
   
    process.stdout.write("\n")
} 




// in this first i created a Right-Angled Triangle Pyramid or a Reversed Pyramid  and then add stars to the right space of the pyramid\
// So finally, our pyramid is created

// first it will print like this
/*  *****
     ****
      ***
       **
        *  */

//and  Then final output appears as follows:"
/* *********
    *******
     *****
      ***
       *   */



//Wherever there is a value of 5, we store it in a variable and then call it through the variable.
// Wherever I find 5, I replace it with 'x'.r


/*
var x = 10;
for(let i=x;i>=1;i--){
    for(k=1;k<=x-i;k++){
        process.stdout.write(" ")
    }

    for(let j=1;j<=i;j++){
        process.stdout.write("*")
    }
    for(let l=1;l<=i-1;l++){
        process.stdout.write("*")
    }
    process.stdout.write("\n")
} */