
function calculate(){
    let day=window.document.getElementById("day").value;
    let month=window.document.getElementById("month").value;
    let year=window.document.getElementById("year").value;

    console.log(day);
    console.log(month);
    console.log(year);
    if(day>31){
        alert("date not valid");
    }
    let dob=new Date(`${day}${month}${year}`);
    console.log(dob);

    let now=new Date();
    let timeDiff=Math.abs(now-dob);
    console.log(timeDiff);

   let years = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
    console.log(years);
    // Calculate the remaining days
    let days = Math.floor((timeDiff % (1000 * 3600 * 24 * 365.25)) / (1000 * 3600 * 24));
    console.log(days)
    // Calculate the remaining minutes
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60));
    console.log(minutes);
    
    let yourAge=document.getElementById("yourAge");
    yourAge.textContent=`Your age is ${years} years,${days} days and ${minutes} minutes`;
}
