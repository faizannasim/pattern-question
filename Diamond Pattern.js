var x = 5;
for (let i = 1; i <= x; i++) {
    for (j = 1; j <= x - i; j++) {
        process.stdout.write(" ")
    }
    for (k = 1; k <= i; k++) {
        process.stdout.write("*")
    }
    for (let l = 1; l <= i - 1; l++) {
        process.stdout.write("*")
    }

    process.stdout.write("\n")

}
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




