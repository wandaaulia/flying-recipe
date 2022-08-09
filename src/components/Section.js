import React from 'react';
import CardListSearchIsi from '../components/CardListSearchIsi';
import { useMealsDataQuery } from "../services/dataMeals";

const Section = () => {
        
      const { data, error, isLoading } = useMealsDataQuery();
      
      let dataMeal;
      if(data){
        dataMeal = data.meals;
      }
      const loadData = isLoading ? <>loading</> : dataMeal.slice(1, 8).map(item => <CardListSearchIsi key={item.idMeal} item={item} />);
    
    return (
      <div className="flex flex-col md:p-4 w-5/6 flex-wrap gap-8 container mx-auto text-gray-600 ">
        <div className="flex flex-col gap-4 p-4 w-full items-center">
        <h1 className="text-2xl text-center">Product</h1>
          <div className="flex flex-row md:gap-4 md:justify-evenly flex-wrap w-full ">{ error ? <>error</> : loadData}</div>
        </div>
      </div>
    );
}

export default Section;