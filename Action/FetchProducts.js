import { useLoader } from "@/Context/LoaderContext";

const FetchProducts = async (dispatch, {setLoading}) =>{
    
    dispatch({type : "FETCH_START"});
    try{
        setTimeout(async ()=>{        
            const response = await fetch("https://fakestoreapi.com/products?limit=3");
            const data = await response.json() ;
            dispatch({type : "FETCH_SUCCESS" , payload : data}) 
            setLoading(false)
        },5000)
        
    }catch(error){
        dispatch({type : "FETCH_ERROR" , payload : error.message}) ;
    }
};
export default FetchProducts ;