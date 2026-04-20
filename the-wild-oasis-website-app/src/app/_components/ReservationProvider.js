"use client";

import { createContext, useContext, useState } from "react";

    const ReservationContext= createContext()

     const initialState = {from:undefined, to:undefined}

    function ReservationProdiver({children}){
       const [range ,setRange]= useState(initialState)
        return( <ReservationContext.Provider value={{range,setRange}}>
            {children}
        </ReservationContext.Provider>)

    }


    function useReservation(){
     const context = useContext(ReservationContext);
        if(context === undefined) throw new Error("Context was used out of Provider");
        return context
        
    }


   export {ReservationProdiver, useReservation };