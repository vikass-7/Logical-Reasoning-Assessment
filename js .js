let n =4;
let count =0;
let string ="";
let num =1;
for(let i= 1; i <=n; i++){
    for(let j =1; j <=n -i; j++){
        string +=" ";
    }
    if(i%2!=0){
        for(let j=1; j<=i; j++){
            let x = String.fromCharCode(count + 65)
            string +="  "+x.toLowerCase();
            count++
        }
    }
    else{
        for(let k=1; k<=i; k++){
            string+="  "+ num
            num++
        }
    }
    string +="\n";
}
document.write(`<pre>${string}</pre>`);