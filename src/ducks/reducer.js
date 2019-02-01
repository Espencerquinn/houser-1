const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    image_url: '',
    monthly_mortgage: 0,
    desired_rent: 0
};

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMAGE = 'UPDATE_IMAGE';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_DES_RENT = 'UPDATE_DES_RENT';

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_NAME:
            return Object.assign({}, state, {name: action.payload});
        case UPDATE_ADDRESS:
            return Object.assign({}, state, {address: action.payload});
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload});
        case UPDATE_STATE:
            return Object.assign({}, state, {state: action.payload});
        case UPDATE_ZIP:
            return Object.assign({}, state, {zipcode: action.payload});
        case UPDATE_IMAGE:
            return Object.assign({}, state, {image_url: action.payload});
        case UPDATE_MORTGAGE:
            return Object.assign({}, state, {monthly_mortgage: action.payload});
        case UPDATE_DES_RENT:
            return Object.assign({}, state, {desired_rent: action.payload});
        default:
            return state;
    }
};

export function updateName(name){
    return { type: UPDATE_NAME, payload: name }
};
export function updateAddress(address){
    return { type: UPDATE_ADDRESS, payload: address }
};
export function updateCity(city){
    return { type: UPDATE_CITY, payload: city }
};
export function updateState(state){
    return { type: UPDATE_STATE, payload: state }
};
export function updateZip(zipcode){
    return { type: UPDATE_ZIP, payload: zipcode }
};
export function updateImage(image_url){
    return { type: UPDATE_IMAGE, payload: image_url }
};
export function updateMortgage(monthly_mortgage){
    return { type: UPDATE_MORTGAGE, payload: monthly_mortgage }
};
export function updateDesRent(desired_rent){
    return { type: UPDATE_DES_RENT, payload: desired_rent }
};

export default reducer;

