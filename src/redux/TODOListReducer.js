const TODOListReducer = (state=[],action={}) => {
        switch(action.type){
        case "ADD_TODO":
        //做一次深拷贝,,对数组的深拷贝
        const newState = [...state]
        newState.push(action.payload)
        return newState
    default:
        return state
    }
}
export default TODOListReducer