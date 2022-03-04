/**
 * @description This function increments or decrements the value
 * of the Red, Green or Blue attribute of the color array depending on the parameters passed to it
 * @param {String} action The action to be carried out. Could be 'add' or 'decrease' .
 * @param {String} colorName The name of the color action should be carried out on. Could be 'red', 'green' or 'blue'. Defaults to 'red'.
 * @param {Number[]} state The array of numbers representing rbg color codes.
 * @param {Object} hook React hook that can change the state of the react state object.
 */
const editColor = (state, action) => {
  let indexOfColor = 0;
  let newState = { ...state };
  const COLOR_INCREMENT = 10;

  switch(action.colorName) {
    case 'red':
      indexOfColor = 0;
      break;
    case 'green':
      indexOfColor = 1;
      break;
    case 'blue':
      indexOfColor = 2;
      break;
    default: 
      indexOfColor = 0;
  }
  
  switch(action.type) {
    case 'increment' : {
      if(state.array[indexOfColor] < 255){
        state.array[indexOfColor] += COLOR_INCREMENT;
        state.string = unpackColor(state.array);
        newState = { ...state };
      }
      break;
    }
    case 'decrement': {
      if(state.array[indexOfColor] > 0){
        state.array[indexOfColor] -= COLOR_INCREMENT;
        state.string = unpackColor(state.array)
        newState = { ...state };
      }
      break;
    }
    default: {
      throw new Error("Invalid action type supplied");
    }
  }

  return newState;
}

const unpackColor = (color = [0, 0, 0]) => {
  // console.log(`rgb(${color[0]}, ${color[1]}, ${color[2]})`)
  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
};


export default editColor;