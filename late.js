// start coding your function here!
function running_late(date){
    if (date.getTime() > 10){
        return "It is late!"
    } 
    else {
        return "It is still early!"
    }
}
exports.running_late = running_late;