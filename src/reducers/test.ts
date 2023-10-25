import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'test',
  initialState: {
    test: {}
  },
  reducers: {
    initTest: () => {
      console.info('test complete')
    }
  }
})

export const { initTest } = slice.actions
export const test = slice.reducer