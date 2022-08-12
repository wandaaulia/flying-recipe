import React from "react";
import { useNavigate } from "react-router-dom";

const CardSectionIsi = ({ item }) => {
  const navigate = useNavigate();

  const handleDetail = id => {
    navigate(`/search/${id}`);
  };

  return (
    <>
      <div key={item.idMeal} className="cursor-pointer md:w-full w-full md:p-4 relative drop-shadow-lg h-64 min-h-full  text-base ">
        <div className=" -mt-10 flex flex-col p-2 0 text-gray-800 w-full">
          <img src={item.strMealThumb} alt="ini gambar" className="opacity-75 z-10 relative Gambar h-48  object-cover bg-center  bg-transparent" onClick={() => handleDetail(item.idMeal)} />
        </div>
        <div className="-ml-4 rounded-lg h-48 text-base flex items-center text-center flex-col  -mt-48" onClick={() => handleDetail(item.idMeal)}>
          <h1 className="w-full text-xl lg:text-2xl mt-2 md:mt-8 lg:mt-10 ml-4 opacity-90 z-40 p-6 text-black font-extrabold text-center">{item.strMeal}</h1>
        </div>
      </div>
    </>
  );
};

export default CardSectionIsi;
