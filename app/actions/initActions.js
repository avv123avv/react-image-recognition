export const INIT           = 'INIT';
export const UPDATE_STEP    = 'UPDATE_STEP';

export function initApplication(){
    return {type: INIT};
}

export function updateStep(step) {
    return {type: UPDATE_STEP, step:step}
}