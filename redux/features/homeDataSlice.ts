import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HomeDataState = {
  header: Object;
  footer: Object;
  dealOfTheDay: Object;
  featured: Object;
  offerCarousel: Object;
};

const initialState = {
  header: [],
  footer: [],
  dealOfTheDay: [],
  featured: [],
  offerCarousel: [],
} as HomeDataState;

export const homeData = createSlice({
  name: "homeData",
  initialState,
  reducers: {
    setHeaderData: (state, action: PayloadAction<Object>) => {
      state.header = action.payload;
    },
    setFooterData: (state, action: PayloadAction<Object>) => {
      state.footer = action.payload;
    },
    setDealOfTheDayData: (state, action: PayloadAction<Object>) => {
      state.dealOfTheDay = action.payload;
    },
    setFeaturedSectionData: (state, action: PayloadAction<Object>) => {
      state.featured = action.payload;
    },
    setOfferCarouselData: (state, action: PayloadAction<Object>) => {
      state.offerCarousel = action.payload;
    },
  },
});

export const {
  setHeaderData,
  setFooterData,
  setDealOfTheDayData,
  setFeaturedSectionData,
  setOfferCarouselData,
} = homeData.actions;
export default homeData.reducer;
