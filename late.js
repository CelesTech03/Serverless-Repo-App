// start coding your function here!
function running_late(date){
    var hours = date.getHours();
    if (hours > (22,0,0,0)){
        return "It is late!"
    } 
    else {
        return "It is still early!"
    }
}
exports.running_late = running_late;