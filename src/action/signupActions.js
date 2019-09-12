import axios from 'axios'; 

export function userSignupRequest(userData){
        return dispatch => {
            dispatch({"type":"CALL_START"});
            axios.post('http://spainoption-fint/api/register', userData).then(response => {
              dispatch({"type":"RECEIVE_RESPONSE", "payload":"Successfully Registered"});
            }).catch(error => {
                dispatch({"type":"RECEIVE_ERROR", "payload":"Error Registering " +  JSON.stringify(error)});
            });
        }

    }