let n = prompt("enter value") // you can take input from prompt or change the value
    let string = "";
    // External loop
    for (let i = 1; i <= n; i++) {
      // printing spaces
      for (let j = n; j > i; j--) {
        string += "   ";
      }
      // printing star
      for (let k = 0; k < i ; k++) {
        //string += "0";
        if(i%2==0){
            string +='  1  ';
        }
        else{
            string +='  0  ';
        }
      }
      string += "<br>";
    }
    document.write(`<pre>${string}</pre>`);