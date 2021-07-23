import * as types from "./../types";

const initialState = {
  cars: [
    {
      brand: "Mercedes-benz",
      engine: "Petrol",
      model: "S-class",
      url: "https://www.topgear.com/sites/default/files/cars-car/image/2021/05/210302sclassjl_0084.jpg",
      id: 1,
    },
    {
      brand: "BMW",
      engine: "Petrol",
      model: "M5",
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-109-1611684117.jpg?crop=0.811xw:0.608xh;0.0433xw,0.224xh&resize=1200:*",
      id: 2,
    },
    {
      brand: "Toyota",
      engine: "Diesel",
      model: "Land-Cruiser",
      url: "https://saharamotorsuae.com/uploads/car/2107041249422022_toyota_land_cruiser_revealed_1.jpg",
      id: 3,
    },
    {
      brand: "Mitsubishi",
      engine: "Petrol",
      model: "Pajero",
      url: "https://i.ytimg.com/vi/33zhNAodFpc/maxresdefault.jpg",
      id: 4,
    },
  ],
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DELETE_ROW_ACTION:
      return {
        ...state,
        cars: action.payload,
      };
    case types.EDITED_ROW_ACTION:
      return {
        ...state,
        cars: action.payload,
      };
    case types.ADD_NEW_DATA_ACTION:
      return {
        ...state,
        cars: [...state.cars,action.payload],
      };
    default:
      return state;
  }
};

export default carsReducer;
