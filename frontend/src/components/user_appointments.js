import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setAppointments } from "../reducers/appointments";
const UserAppointments = () => {
    const id = useParams();
    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return {
            appointments: state.appointments.appointments,
        };
    });
    const appointments = state.appointments;

    useEffect(() => {
        console.log("t");
        axios.get(`http://localhost:5000/user_appointments/${id.id}`).then((res) => {
            console.log("res.data", res.data);
            dispatch(setAppointments(res.data));
        });
    }, []);

    const deleteAppointment = (id) => {
        console.log("id", id);
        console.log("t1");
        axios.delete(` http://localhost:5000/delete_appointment/${id}`).then((res) => {
            console.log("res.data", res.data);
        });
    };

    return (
        <main>
            {console.log("appointments", appointments)}
            <section className="sellers">
                {appointments &&
                    appointments.map((appointment) => (
                        <div className="seller" key={appointment.id}>
                            <h2> You Book An Appointment With({appointment.seller_name}).</h2>
                            <p>
                                {" "}
                                Appointment Date : {appointment.app_date} At {appointment.hour}
                            </p>
                            <p>{appointment.app_status}</p>
                            <button
                                onClick={() => {
                                    deleteAppointment(appointment.id);
                                }}
                            >
                                delete
                            </button>
                        </div>
                    ))}
            </section>
        </main>
    );
};

export default UserAppointments;
