const counterReducer = (state = 0, action) => {
    if (action.type === "INC_NUMBER")
        return state + 1;
    return state;
}

export default counterReducer;