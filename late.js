// start coding your function here!
function running_late(date){
    if (date > "22:00:00"){
        return "It is late!"
    } 
    else {
        return "It is still early!"
    }
}
exports.running_late = running_late;