function Random(){

    let number = Math.random()*100
    //give css style in {{..}} because {} is for javascript
    return <h3 style={{color:'brown'}}>Random Number is :{Math.round(number)}</h3>
    

}

export default Random;