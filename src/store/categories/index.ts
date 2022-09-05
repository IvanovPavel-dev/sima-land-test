import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryType } from 'types/categories';

export const categoriesSliceName = 'categories';

interface BreedsReducerStateType {
  list: CategoryType[];
  subListLevelTwo: CategoryType[];
  subListLevelThree: CategoryType[];
  subListLevelFour: CategoryType[];
  subListLevelFive: CategoryType[];
  subListLevelSix:CategoryType[];
  subListLevelSeven:CategoryType[];
  goodsList: CategoryType[];
}

const initialState: BreedsReducerStateType = {
  list: [],
  subListLevelTwo: [],
  subListLevelThree: [],
  subListLevelFour:[],
  subListLevelFive:[],
  subListLevelSix:[],
  subListLevelSeven:[],
  goodsList: [],
};

export const counterSlice = createSlice({
  name: categoriesSliceName,
  initialState,
  reducers: {
    addCategories: (state, action: PayloadAction<CategoryType[]>) => {
      state.list.push(...action.payload);
    },
    addSubCategoriesLevelTwo: (state, action: PayloadAction<CategoryType[]>) => {
      state.subListLevelTwo.push(...action.payload);
    },
    addSubCategoriesLevelThree: (state, action: PayloadAction<CategoryType[]>) => {
      state.subListLevelThree.push(...action.payload);
    },
    addSubCategoriesLevelFour: (state, action: PayloadAction<CategoryType[]>) => {
      state.subListLevelFour.push(...action.payload);
    },
    addSubCategoriesLevelFive: (state, action: PayloadAction<CategoryType[]>) => {
      state.subListLevelFive.push(...action.payload);
    },
    addSubCategoriesLevelSix: (state, action: PayloadAction<CategoryType[]>) => {
      state.subListLevelSix.push(...action.payload);
    },
    addSubCategoriesLevelSeven: (state, action: PayloadAction<CategoryType[]>) => {
      state.subListLevelSeven.push(...action.payload);
    },
    addGoodsToList: (state, action: PayloadAction<CategoryType[]>) => {
      state.goodsList.push(...action.payload);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeSubCategoriesLevelTwo: (state) => {
      state.subListLevelTwo = []
    },
    removeSubCategoriesLevelThree: (state) => {
      state.subListLevelThree = []
    },
    removeSubCategoriesLevelFour: (state) => {
      state.subListLevelFour = []
    },
    removeSubCategoriesLevelFive: (state) => {
      state.subListLevelFive = []
    },
    removeSubCategoriesLevelSix: (state) => {
      state.subListLevelSix = []
    },
    removeSubCategoriesLevelSeven: (state) => {
      state.subListLevelSeven = []
    },
    removeGoods: (state) => {
      state.goodsList = []
    },
    requestCategories: () => {},
    requestSubCategories: () => {},
    requestGoods: () => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addCategories,
  addSubCategoriesLevelTwo,
  addSubCategoriesLevelThree,
  addSubCategoriesLevelFour,
  addSubCategoriesLevelFive,
  addSubCategoriesLevelSix,
  addSubCategoriesLevelSeven,
  requestCategories,
  requestSubCategories,
  requestGoods,
  removeSubCategoriesLevelTwo,
  removeSubCategoriesLevelThree,
  removeSubCategoriesLevelFour,
  removeSubCategoriesLevelFive,
  removeSubCategoriesLevelSix,
  removeSubCategoriesLevelSeven,
  removeGoods,
  addGoodsToList,
} = counterSlice.actions;
export default counterSlice.reducer;
