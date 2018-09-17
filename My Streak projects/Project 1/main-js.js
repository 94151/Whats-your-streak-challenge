const clock= () => {
    const today = new Date();
    let hour = today.getHours(); //Getting the hour value
    let minute = today.getMinutes(); //Getting the minute value
    let second = today.getSeconds(); //Getting the second value
    let ampm = hour >= 12 ? 'PM' : 'AM';
    hour = checkZero(hour);
    minute = checkZero(minute);
    second= checkZero(second);
    document.getElementById('time').innerHTML = `${hour}:${minute}:${second} ${ampm}`;
    setTimeout(clock, 500); // recursivly calling the function after 0.5s 
}

//Putting zero in front of numbers less than 10
const checkZero=(i)=> {
    if (i < 10) {i = "0" + i};  
      return i;
}
