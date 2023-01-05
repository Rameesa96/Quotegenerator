import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
  bookmarkList:localStorage.getItem("bookmarkList")? JSON.parse(localStorage.getItem("bookmarkList")):[],
}


export const bookmarkslice = createSlice({
  name: 'bookmarkReducer',
  initialState:initialState,
  reducers: {
  
    loadbookmarkdata:(state,action)=>{
          
      state.bookmarkList.push(action.payload)
      localStorage.setItem("bookmarkList",JSON.stringify(state.bookmarkList))

      
     
  },
    
  },
})

// Action creators are generated for each case reducer function
export const { loadbookmarkdata } = bookmarkslice.actions

export default bookmarkslice.reducer