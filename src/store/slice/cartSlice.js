import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action) =>{
            state.items.push(action.payload);
            console.log(current(state));// it will give you current state log, as if you will not use current it will give but not reable 
        },
        removeItem:(state, action)=>{
            state.items.pop()
        },
        removeAllItems:(state)=>{
            // by setting the length of array to 0, all the elements of the array will be removed.
            // this is a faster way to remove all elements from an array than using the Array.prototype.filter() method.
            // this is because, when we set the length of an array to 0, it will directly go to the memory and remove all the elements from the array.
            // this is more efficient than using the filter() method, which has to iterate over the array and remove the elements one by one.
            state.items.length = 0 ;
        // OR,
            // return {item:[]}
        }
    }
})


export const {addItem,removeAllItems,removeItem} = cartSlice.actions;

export default cartSlice.reducer;
