/* Your Code Here */
// 4-element array-listed as parameters
function createEmployeeRecord([firstName,familyName,title,payPerHour]){
    /* the Returns, as Objects,  below are the keys--value TBD*/
    //create/name the object
     let employeeObj = {
         'firstName':firstName,
         'familyName':familyName,
         'title':title,
         'payPerHour':payPerHour,
         'timeInEvents':[],
         'timeOutEvents':[],
     }
     return employeeObj
 /*Loads Array elements into corresponding Object properties. Additionally, 
 initialize empty Arrays on the properties timeInEvents and timeOutEvents.*/
 }
 
 /*array of arrays---of what?*/
 function createEmployeeRecords(records){
 /*Returns array of objects*/
 return records.map(createEmployeeRecord)
 /* purpose of this function: Converts each nested Array into an employee record
  using createEmployeeRecord and accumulates it to a new Array*/
 }
 
 /*arguments-an employee record as an object? and date stamp in this format "year-MM-DD-HHMM"(as a string?)*/
 function createTimeInEvent(timeStamp){
     /*Returns employee record*/
     //create some variables
     let dateArray = timeStamp.split(' ')
     let timeInObject = {
         'type':'TimeIn',
         'hour': parseInt(dateArray[1].slice(0,2) + "00"),
         'date': dateArray[0]
     }
     this.timeInEvents.push(timeInObject)
     return this
 }/*Add an Object with keys to the timeInEvents Array on the record Object:
 type: Set to "TimeIn"
 hour: Derived from the argument
 date: Derived from the argument*/
 
 /*same as above --just TimeIn instead of out*/
 function createTimeOutEvent(timeStamp){
     /*Returns the employee record*/
     let dateArray = timeStamp.split(' ')
     let timeOutObject = {
         'type':'TimeOut',
         'hour': parseInt(dateArray[1].slice(0,2) + "00"),
         'date': dateArray[0]
     }
     this.timeOutEvents.push(timeOutObject)
     return this
 }
 
 function hoursWorkedOnDate(date){
     /*returns hours woeked, as integer*/

     const timeIn = this.timeInEvents.find((day) => date === day.date);
     const timeOut = this.timeOutEvents.find((day) => date === day.date);
     return (timeOut.hour - timeIn.hour) / 100;}
     //code below worked on previous lab/not this one, due to how test written
//      let hourOut, hourIn
//      for(const out of this.timeOutEvents){
//      if(out ['date']=== date){
//          hourOut = out['hour']
//      }
//  }
//      for(const inTime of this.timeInEvents){
//      if(inTime ['date']=== date){
//          hourIn = inTime['hour']
//      }
//  }
//  return (hourOut-hourIn)/ 100
//  }
 /* Given a date, find the number of hours elapsed between that 
 date's timeInEvent and timeOutEvent*/
 
 const allWagesFor = function () {
     const eligibleDates = this.timeInEvents.map(function (e) {
         return e.date
     })
 
     const payable = eligibleDates.reduce(function (memo, d) {
         return memo + wagesEarnedOnDate.call(this, d)
     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
 
     return payable
 }
 
 /*Using hoursWorkedOnDate, multiply the hours by the record's payRate
  to determine amount owed.*/
  function wagesEarnedOnDate(date){
    /*Returns pay owed--as a number*/
    return hoursWorkedOnDate.call(this,date) * this.payPerHour
}
 
 /*Using wagesEarnedOnDate, accumulate the value of all dates worked by the 
 employee in the record used as context. Amount should be returned as a number. 
 HINT: You will need to find the available dates somehow...*/
 
 

 function calculatePayroll(array){
   const total = array.reduce((acc, emp)=> {
       return acc + allWagesFor.call(emp)
   },0) 
return total}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(rec => rec.firstName === firstName)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

