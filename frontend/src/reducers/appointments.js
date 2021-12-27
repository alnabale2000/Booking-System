const initialState = {
    appointments: [],
};

const appointments = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_APPOINTMENTS":
            return { appointments: [...payload] };
        case "DELETE_APPOINTMENT":
            return {
                appointments: state.appointments.filter(
                    (appointment) => appointment.id !== payload
                ),
            };

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

export const deleteAppointment = (id) => {
    return {
        type: "DELETE_APPOINTMENT",
        payload: id,
    };
};
