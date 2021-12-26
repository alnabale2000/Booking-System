const initialState = {
    sellers: [],
};

const sellers = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_SELLERS":
            return { sellers: [...payload] };
        default:
            return state;
    }
};
export default sellers;

export const setSellers = (sellers) => {
    return {
        type: "SET_SELLERS",
        payload: sellers,
    };
};
