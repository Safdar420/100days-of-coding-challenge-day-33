// Q no 97
function getCurrentDateFormated() {
    var now = new Date();
    var day = String(now.getDate());
    var month = String(now.getMonth() + 1);
    var year = now.getFullYear();
    return "".concat(day, "-").concat(month, "-").concat(year);
}
console.log(getCurrentDateFormated());
// Q no 98
function daysUntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var diff = newYear.getTime() - today.getTime();
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() + "days Until New Year");
// // // Q no 99
function getNextBirthDay(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthDay = new Date(year, month - 1, day);
    if (birthDay < today) {
        birthDay.setFullYear(year + 1);
    }
    return birthDay;
}
var nextBirthDay = getNextBirthDay(12, 25);
console.log("Next Birth Day on", nextBirthDay.toLocaleDateString());
