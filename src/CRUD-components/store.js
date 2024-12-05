import { configureStore, createSlice } from '@reduxjs/toolkit';
import fetchProductsData from './fetchData/productsData'

// Creating Slice for products
const productsInitialState = {
  productsData: [],
  productsApiSataus: "initial",
  errorMessage: "",
};

const productsApiSlice = createSlice({
  name: "productsApi",
  initialState: productsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.productsApiSataus = "loading";
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.productsData = action.payload;
        state.productsApiSataus = "success";
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        
        state.errorMessage = action.error.message;
        state.productsApiSataus = "failure";
        state.productsData=[]
      });
  },
});

// Creating Slice for todo
const initialStateData = {
  todo: [],
  id: 1,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialStateData,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        title: action.payload.title,
        id: state.id + 1,
        isEditing: true,
        isCheck: false,
      };
      state.todo.push(newTodo);
      state.id += 1;
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((each) => each.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      state.todo = state.todo.map((each) =>
        each.id === action.payload.id
          ? { ...each, isEditing: !each.isEditing }
          : each
      );
    },
    saveTodo: (state, action) => {
      state.todo = state.todo.map((each) =>
        each.id === action.payload.id
          ? { ...each, isEditing: !each.isEditing, title: action.payload.title }
          : each
      );
    },
    toggleCheck: (state, action) => {
      state.todo = state.todo.map((each) =>
        each.id === action.payload.id
          ? { ...each, isCheck: !each.isCheck }
          : each
      );
    },
  },
});

// Creating Slice for account
const accountSlice = createSlice({
  name: 'account',
  initialState: {
    transactions: [],
  },
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
  },
});

// Configuring the store
const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    account: accountSlice.reducer,
    productsApiData: productsApiSlice.reducer, // Adding productsApi slice here
  },
});

// Exporting actions and store
export const { addTodo, deleteTodo, editTodo, saveTodo, toggleCheck } =
  todoSlice.actions;
export const { addTransaction } = accountSlice.actions;
export default store;
