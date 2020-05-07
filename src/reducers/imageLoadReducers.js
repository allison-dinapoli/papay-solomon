import { LOW_REZ_IMAGE_FINISHED_LOADING } from '../actions/actionTypes'; 

const initialState = {
    imageStatus: {
        lowRezImageFinishedLoading: false
    }
}

function imageLoadReducer(state = initialState, action) {
    switch(action.type) {
        case LOW_REZ_IMAGE_FINISHED_LOADING: 
            return {
                ...state, 
                imageStatus: {
                    ...state.imageStatus, 
                    lowRezImageFinishedLoading: action.lowRezImageFinishedLoading
                }
            }
        default: 
            return
    }
}

export default imageLoadReducer; 