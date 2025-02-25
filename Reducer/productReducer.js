const productReducer = (State, action) => {
    switch (action.type) {
        case "FETCH_START" :
            return {...State, loading : true}
        case "FETCH_SUCCESS" :
            return {...State, loading : false , products : action.payload}
        case "FETCH_ERROR" :
            return {...State,loading : false , error : action.payload}
        case "ADD_PRODUCT" :
            return {...State, products : [...State.products , action.payload]}
        case "DELETE_PRODUCT" :
            return {...State , products : State.products.filter((item) => item.id !== action.payload)}
        default :
            return State ;
    }
};

export default productReducer;
