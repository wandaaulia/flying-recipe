import React from 'react';
import CardSectionIsi from '../components/CardSectionIsi';
import { useMealsDataQuery } from "../services/dataMeals";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination} from "swiper";



const Section = () => {
        
      const { data, error, isLoading } = useMealsDataQuery();
      console.log('ini section');
      let dataMeal;
      if(data){
        dataMeal = data.meals.slice(1,8);
      }
     // const loadData = isLoading ? <>loading</> : dataMeal.slice(1, 8).map(item => <CardListSearchIsi key={item.idMeal} item={item} />);
    
    return (
      <div className="flex flex-col md:p-2 w-5/6 flex-wrap gap-2 container mx-auto text-gray-600 ">
        <div className="flex flex-col gap-4 p-4 w-full items-center">
          <h1 className="text-4xl text-center">Product</h1>
        </div>

        <div className="container justify-content">
          <Swiper
            spaceBetween={2}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper flex-col flex w-full "
          >
            {error ? (
              <>error</>
            ) : isLoading ? (
              <>loading</>
            ) : (
              dataMeal.map(item => {
                return (
                  <SwiperSlide key={item.idMeal} className="md:w-80 ml-2 mt-10">
                    <CardSectionIsi item={item} />
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>
        </div>
      </div>
    );
}

export default Section;