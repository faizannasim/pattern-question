let i, j, k;
for (let i = 1; i <= 5; i++) {
    for (let k = 1; k <= 5 - i; k++) {
        process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    process.stdout.write("\n")
}
