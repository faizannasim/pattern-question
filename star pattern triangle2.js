let i, j, k,l;
for (let i = 1; i <= 10; i++) { // i=value 1 so it wil be true
    for (let k = 1; k <= 10 - i; k++) {  // k=1,i=1,
        process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {// j=1 so it will print one
        process.stdout.write("* ")
    }
    for(let l=1;l<=i;l++){
        process.stdout.write("")
    }

    process.stdout.write("\n")


}
