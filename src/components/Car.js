import React from 'react';
import {carService} from "../services/carService";

const Car = ({car,setCarForUpdate,setTrigger}) => {
    const {id,brand,price,year}=car;
    const deleteCar = async () => {
        await carService.deleteById(id)
        setTrigger(prev=>!prev)
    };
    return (
        <div>
            <hr/>
            <div> id: {id}</div>
            <div> brand: {brand}</div>
            <div> price: {price}</div>
            <div> year: {year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={deleteCar}>delete</button>
            <hr/>
            <hr/>
        </div>
    );
};

export default Car;