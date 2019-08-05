export function setData (state, fieldName, data) {
    let newState = JSON.parse(JSON.stringify(state));
    newState[fieldName] = data;
    return newState;
}