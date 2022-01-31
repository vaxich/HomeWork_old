import React, {ChangeEventHandler, useState} from "react";
import s from './Greeting.module.css'
import {v1} from "uuid";
import {UserType} from "./HW3";



function AlternativeGreeting() {
    const inputClass = s.error
    const [error, setError] = useState<string>('')// хук ошибки
    const [name, setName] = useState<string>('') // хук инпута
    const [people, setPeople] = useState<Array<UserType>>([]) // хук кол-ва людей

    const addTotalPeople = (name: string) => {
        {
            let newUser = {_id:v1(), name:name}
            let newArrayUsers = [ newUser, ...people]
            setPeople(newArrayUsers)

        }



    }
    const setNewName: ChangeEventHandler<HTMLInputElement> = (e) => {

        setName(e.currentTarget.value)
    }
    const addPeople = () => {
        if (name.trim() !== "") {
            addTotalPeople(name);
            setError("");
            alert("hello" + "   " + name) // need to fix
            setName("");
        } else {
            setError("поле не может быть пустым");
        }
    }
    const totalPeople = people.length
    return (
        <div>
            <input value={name} onChange={setNewName} className={error? inputClass : ""} />
            <span>{error}</span>
            <button onClick={addPeople}>добавить</button>
            <span>{totalPeople}</span>
        </div>
    );
}

export default AlternativeGreeting;
