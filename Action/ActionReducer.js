const ActionReducer = async (dispatch) =>{
    dispatch({type : "FETCH_START"});
    try{
        const response = await fetch("https://fakestoreapi.com/products?limit=3");
        const data = await response.json() ;
        dispatch({type : "FETCH_SUCCESS" , payload : data}) 
    }catch(error){
        dispatch({type : "FETCH_ERROR" , payload : error.message}) ;
    }
};
export default ActionReducer ;