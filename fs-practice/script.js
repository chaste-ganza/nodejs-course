const fs = require("fs")

function addChaste(list){
    list.name.push("Chaste")
    list.gender.push("male")
    list.specilialization.push("AI-engineer")
}

fs.readFile("studentList.json","utf-8",(err,data)=>{
    if(err){console.log("Error occured while reading the file")}
    console.log("\n\nThe list we received from JSON file: ",data)
    let receivedList = JSON.parse(data)
    console.log("\n\nAs you can see, there is nothing in this array: ",receivedList.name)
    addChaste(receivedList)
    console.log("\n\nThe list after adding values: ",receivedList)

    //Let me declare a variable that stores the converted list to send to JSON file
    let finalList = JSON.stringify(receivedList)

    fs.writeFile("studentList.json",finalList,(err)=>{
        if(err){"Error occured while transfering the new list to json file"}
        else{console.log("Change made successfully")}
    })
})