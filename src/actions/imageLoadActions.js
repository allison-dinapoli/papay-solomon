import { ARROW_KEY_PRESSED} from "./actionTypes";

export function arrowKeyPressed(status) {
    return {
        type: ARROW_KEY_PRESSED, 
        status
    }
}