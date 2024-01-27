import {createSlice} from '@reduxjs/toolkit'

interface testState {
  test: string,
  count: number
}

const initialState: testState = {
    test: '',
    count: 0
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    sayHello() {
      console.log("HELLO TEST REDUX!");
    },
    increment(state) {
      state.count += 1
    }
  }
})

export default testSlice.reducer;