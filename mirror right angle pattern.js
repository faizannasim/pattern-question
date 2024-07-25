for(let i=5;i>=1;i--){
    for(let j=1;j<=i;j++){
        process.stdout.write(" ")
    }
    for(let k=5;k>=i;k--){
        process.stdout.write("*")
    }
    process.stdout.write("\n")
}