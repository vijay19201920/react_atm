const reducer = (state={}, action) => {
    switch(action.type){
        case "CALL_START" :{
            alert("Hi1");
            return {}
            break;  
        }
        case "RECEIVE_RESPONSE" : {
            //return {...state, data:action.payload}
            alert("Hi2");
            return {data:action.payload}
            break;
        }
        case "RECEIVE_ERROR" : {
            alert("Hi3");
            alert(JSON.stringify(action.payload));
            return {data:action.payload}
            break;
        }

    }   

}   

export default reducer;