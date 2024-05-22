//can directly write export before function name
export function Message(){

    //JavaScript code(Dynamic Content)
    let name = "Akshat"
    let city = ()=>{    
        return 'Sultanpur'
    }

    //can you javascript variables, functions and objects inside {}.

    return <div>
        Hello, my name is {name} and i live in {city()}. 
    </div>
}