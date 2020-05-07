import { ARROW_KEY_PRESSED } from '../actions/actionTypes'; 

const initialState = {
    imageStatus: {
        arrowKeyPressed: false
    }
}

function imageLoadReducer(state = initialState, action) {
    switch(action.type) {
        case ARROW_KEY_PRESSED: 
            return {
                ...state, 
                imageStatus: {
                    ...state.imageStatus, 
                    arrowKeyPressed: action.arrowKeyPressed
                }
            }
        default: 
            return
    }
}

export default imageLoadReducer; 