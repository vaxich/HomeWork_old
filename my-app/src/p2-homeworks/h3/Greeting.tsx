import React, { ChangeEventHandler, MouseEventHandler } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: ChangeEventHandler<HTMLInputElement> // need to fix any
    addUser: MouseEventHandler // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)
    console.log(error);
    
    return (
        <div>
            <input value={name} onChange={setNameCallback} className={error? inputClass : ""} />    
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting

//className={error ? "error" : ""}