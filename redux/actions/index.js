import { ListItem } from "react-native-elements";

export const addAction = payload => ({  
  type: 'ADD_ACTION',
  payload // payload: payload 와 같음
})

export const removeAction = payload => ({  
  type: 'REMOVE_ACTION',
  payload // payload: payload 와 같음
})