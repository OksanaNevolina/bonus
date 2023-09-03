import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../services/carService";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validatprs/carValidator";

const CarsForm = ({setTrigger,carForUpdate,setCarForUpdate}) => {
    const {reset,register,handleSubmit,setValue,formState:{errors,isValid}} = useForm(
        {
            resolver:joiResolver(carValidator),
            mode:"all"

        }
    );
    useEffect( ()=>{
        if (carForUpdate) {
        setValue("brand", carForUpdate.brand, {shouldValidate: true})
        setValue("price", carForUpdate.price, {shouldValidate: true})
        setValue("year", carForUpdate.year, {shouldValidate: true})
    }
    },[carForUpdate])

    const save = async (car) => {
       try {
           const {data}= await carService.create(car);
           setTrigger(prev=>!prev)
           reset()
           console.log(data)
       }catch (e) {
           console.log(e.response.data)
       }

   }
   const update = async (car) => {
     await carService.updateById(carForUpdate.id,car)
       setTrigger(prev=>!prev)
       setCarForUpdate(null)
       reset()
   }
    return (
        <form onSubmit={handleSubmit(carForUpdate? update: save)}>
            <div><input type="text" placeholder={'brand'}{...register('brand',)}/></div>
            {errors.brand&&<h3>{errors.brand.message}</h3>}
            <div><input type="text" placeholder={'price'}{...register('price', {
                valueAsNumber:true,
                // min:{value:0,message:'min 0'},
                // max:{value:1000000,message:'max 1000000'}
                },
            )}/></div>
            {errors.price&&<h3>{errors.price.message}</h3>}
            <div><input type="text" placeholder={'year'}{...register('year',{
                valueAsNumber:true,
                // min:{value:1990,message:'min 1990'},
                // max:{value:2023,message:'max 2023'}
            })}/></div>
            {errors.year&&<h3>{errors.year.message}</h3>}
            <button disabled={!isValid}>{carForUpdate ?'update': 'save'}</button>
        </form>
    );
};

export default CarsForm;