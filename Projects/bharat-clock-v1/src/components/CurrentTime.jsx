function ClockTime(){

    let time= new Date();
    return <div>This is the correct time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</div>
}

export default ClockTime