let url = 'google.com'
let secondurl = 'instagram.com'

function toSend(name){
    console.log("This was sent to " + name)
}

function tosendalso(lesson){
    console.log("You are studying " + lesson)
}

module.exports.toReceive = toSend
module.exports.toAlsoReceive = tosendalso


