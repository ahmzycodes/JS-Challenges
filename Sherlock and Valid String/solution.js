function isValid(str) {
	//abcdd
    let entries=[];let result=[]; let counter = 0;
	str = str.split("");
    str.forEach((val)=>{
        entries.push(str.indexOf(val));
    });

    const aCount = new Map([...new Set(entries)].map(
    x => [x, entries.filter(y => y === x).length]));

    let unique = new Set(entries);
    unique.forEach((val)=>{
      result.push(aCount.get(val));
    });
    result = result.join("");
    if(result.match(/^(\d)\1+.?\1*$/gmi)){
        result = result.split("").map((x) =>parseInt(x));
        console.log(result);
            result.forEach((val,ind,arr)=>{if(Math.abs(val-arr[ind+1])>1 || Math.abs(arr[ind-1]-val)>1)
        {counter =2;}
                           });
    }else
        counter = 2;
    return (counter > 1)?"NO":"YES";
}