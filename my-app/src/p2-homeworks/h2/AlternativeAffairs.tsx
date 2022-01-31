import React, {useState} from 'react'
// import {AffairType} from "./HW2";
// import Affair from "./Affair";
// import any = jasmine.any;

type AlternativeAffairsType = {
    id: number
    title: string
    isDone: boolean
}
type statusAffairs = "All" | "Куплено" | "Купить"

function AlternativeAffairs() {
    let defaultAffairs: AlternativeAffairsType[] = [ // основной массив
        {id: 1, title: 'молоко', isDone: true},
        {id: 2, title: 'хлеб', isDone: false},
        {id: 3, title: 'пряники', isDone: true},
        {id: 4, title: 'сигареты', isDone: true},
        {id: 5, title: 'вкусняшки', isDone: false}
    ]


    let [updateAffair, setUpdateAffair] = useState<Array<AlternativeAffairsType>> (defaultAffairs)

    let [filterAffair, setFilterAffair] = useState<statusAffairs>("All");
    let filteredAffair = updateAffair;

    if(filterAffair === "Куплено") {
        filteredAffair = filteredAffair.filter(affair => affair.isDone === true)
    }
    if(filterAffair === "Купить") {
        filteredAffair = filteredAffair.filter(affair => affair.isDone === false)
    }

    const removeAffairs =(id: number) => { // удалить
        const updateAffair = filteredAffair.filter(affair => affair.id !== id)

        setUpdateAffair(updateAffair);
    }

    const changeStatusAffair =(value: statusAffairs) => {
        setFilterAffair(value);

    }


    const mappedAlternativeAffairs = filteredAffair.map(affair => {  // мапим

        return (
            <li><input type="checkbox" checked={affair.isDone} /><span>{affair.title}</span> <button onClick= { () =>removeAffairs(affair.id)} > x</button> </li>
        )
    })



    return (
        <div>

            {mappedAlternativeAffairs}
            <button onClick={ ()=> {changeStatusAffair("All")}}> Все </button>
            <button onClick={ ()=> {changeStatusAffair("Куплено")}}> Куплено </button>
            <button onClick={ ()=> {changeStatusAffair("Купить")}}> Надо купить </button>
        </div>
    )
}

export default AlternativeAffairs
