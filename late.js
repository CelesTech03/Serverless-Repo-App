// start coding your function here!
// Function to check if the time is at or after 10:00 PM
function running_late(date){
    if(new Date(date).getHours() >= 22){
        return "It is late!";
    } 
    else {
        return "It is still early!";
    }
}
exports.running_late = running_late;