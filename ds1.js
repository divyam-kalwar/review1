import complexData from "./dataset.js";

function itemDetails(complexData){
    return complexData.items.reduce((acc, item) => {
        if(item.details.topics){
            acc.push(item.details.topics)
        }
        return acc;
    }, []);
}

function flatTopics(complexData){
    return itemDetails(complexData).flat();
}

function filteredTopics(complexData){
    return flatTopics(complexData).filter(topic => topic.length < 5);
}

console.log(itemDetails(complexData));
console.log(flatTopics(complexData));
console.log(filteredTopics(complexData));

