// Q no 97
function getCurrentDateFormated():string{
    const now = new Date();
    const day =String(now.getDate())
    const month =String(now.getMonth()+1)
    const year =now.getFullYear();
    return `${day}-${month}-${year}`
}
console.log(getCurrentDateFormated());

// Q no 98

function daysUntilNewYear():number{
    const today =new Date();
    const newYear = new Date(today.getFullYear() + 1,0,1);  
    const diff = newYear.getTime() -  today.getTime();
    const days =Math.ceil(diff/(1000 * 60 * 60 * 24));
    return days
}
console.log(daysUntilNewYear() + "days Until New Year");

// // // Q no 99

function getNextBirthDay(month:number,day:number){
    const today =new Date()
    let year = today.getFullYear();
    const birthDay = new Date(year,month - 1,day);
    if(birthDay<today){
        birthDay.setFullYear(year + 1);
    }
    return birthDay
}
const nextBirthDay = getNextBirthDay(12,25);

console.log("Next Birth Day on",nextBirthDay.toLocaleDateString());
