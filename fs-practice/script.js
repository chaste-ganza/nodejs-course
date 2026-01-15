const fs = require("fs")
//This is the function that contains info to be pushed in the json file
function addChaste(list){
    list.name.push("Chaste")
    list.gender.push("male")
    list.specilialization.push("AI-engineer")
}

//This is the line that read the content of the file
fs.readFile("studentList.json","utf-8",(err,data)=>{  
    if(err){console.log("Error occured while reading the file")}
    console.log("\n\nThe list we received from JSON file: ",data)
    //data come as string, so we need to turn it into an object
    let receivedList = JSON.parse(data)
    console.log("\n\nAs you can see, there is nothing in this array: ",receivedList.name)
    addChaste(receivedList)
    console.log("\n\nThe list after adding values: ",receivedList)

    //I declared a variable that stores the converted list to send to JSON file
    let finalList = JSON.stringify(receivedList)

    fs.writeFile("studentList.json",finalList,(err)=>{
        if(err){"Error occured while transfering the new list to json file"}
        else{console.log("Change made successfully")}
    })
})