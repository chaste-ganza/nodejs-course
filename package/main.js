const fs = require("fs")
//This is the function that contains info to be pushed in the json file

let namesList = ["Chaste","John","Josh"]
let genderList = ["male","female"]
let specilializationList = ["backend-developer","AI-engineer","Frontend-developer"]


if (fs.existsSync("studentList.json")) {
  console.log("File exists");
} else {
    console.log("Just created a file called studentList.json");
  fs.writeFileSync(
    'studentList.json',
    '{"name":[],"gender":[],"specilialization":[]}'
    )
}



function addChaste(list){
    list.name.push(namesList[Math.round(Math.random(namesList) * 2)])
    list.gender.push(genderList[Math.round(Math.random(genderList) * 1)])
    list.specilialization.push(specilializationList[Math.round(Math.random(specilializationList) * 2)])
}

//This is the line that read the content of the file
fs.readFile("studentList.json","utf-8",(err,data)=>{  
    if(err){console.log("Error occured while reading the file")}
    console.log("\n\nThe list we received from JSON file: ",data)
    //data come as string, so we need to turn it into an object
    let receivedList = JSON.parse(data)
    console.log("\n\nInitial value(s) in array receivedList.name: ",receivedList.name)
    addChaste(receivedList)
    console.log("\n\nThe list after adding values: ",receivedList)

    //I declared a variable that stores the converted list to send to JSON file
    let finalList = JSON.stringify(receivedList)

    fs.writeFile("studentList.json",finalList,(err)=>{
        if(err){"Error occured while transfering the new list to json file"}
        else{console.log("Change made successfully")}
    })
})