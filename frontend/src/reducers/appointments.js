const initialState = {
    appointments: [],
};

const appointments = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_APPOINTMENTS":
            return { appointments: [...payload] };
        default:
            return state;
    }
};
export default appointments;

export const setAppointments = (appointments) => {
    return {
        type: "SET_APPOINTMENTS",
        payload: appointments,
    };
};
