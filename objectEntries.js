function objectEntries(obj){
    const entries = [];

    for(const key in obj){
        if(typeof obj[key] === "object"){
            entries.push(key,objectEntries(obj[key]));
        }else{
            entries.push([key, obj[key]]);
        }
    }

    return entries;
}

const data = require("./countries_1.json")
console.log(JSON.stringify(objectEntries(data[0].name),null,2));