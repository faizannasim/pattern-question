let i,j,k;
for(let i=1;i<=3;i++)
    for(let k=1;k<=3;k++)
{
    for(let j=1;j<=i;j++){
        process.stdout.write("*  ")
    }
    process.stdout.write("\n ")
}