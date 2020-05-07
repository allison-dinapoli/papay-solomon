import { LOW_REZ_IMAGE_FINISHED_LOADING} from "./actionTypes";

export function lowRezImageFinishedLoading(status) {
    return {
        type: LOW_REZ_IMAGE_FINISHED_LOADING, 
        status
    }
}