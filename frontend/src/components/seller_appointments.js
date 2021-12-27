import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setAppointments } from "../reducers/appointments";

const SellerAppointments = () => {
    const id = useParams();
    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return {
            appointments: state.appointments.appointments,
        };
    });
    const appointments = state.appointments;

    const getAppointments = () => {
        axios.get(`http://localhost:5000/seller_appointments/${id.id}`).then((res) => {
            console.log("res.data", res.data);
            dispatch(setAppointments(res.data));
        });
    };

    useEffect(() => {
        getAppointments();
    }, []);

    const sendAppointmentResponse = (status, appointmentId) => {
        axios
            .put(`http://localhost:5000/update_appointment`, {
                appointmentId,
                status,
            })
            .then((res) => {
                //to re-get the appointments
                getAppointments();
            });
    };
    return (
        <main>
            {console.log("appointments", appointments)}
            <section className="appointments">
                {appointments &&
                    appointments.map((appointment) => (
                        <div className="appointment" key={appointment.id}>
                            <h2> ({appointment.username}) Want To Book An Appointment.</h2>
                            <p>
                                {" "}
                                Appointment Date : {appointment.app_date} At {appointment.hour}
                            </p>
                            <p>Phone Number : {appointment.phonenumber}</p>
                            {appointment.app_status === "Waiting For Response..." ? (
                                <section className="buttons">
                                    <button
                                        onClick={() => {
                                            sendAppointmentResponse("Accepted", appointment.id);
                                        }}
                                    >
                                        Accept
                                    </button>
                                    <button
                                        onClick={() => {
                                            sendAppointmentResponse("Rejectd", appointment.id);
                                        }}
                                    >
                                        Reject
                                    </button>
                                </section>
                            ) : (
                                <p>You ({appointment.app_status}) This Appointment</p>
                            )}
                        </div>
                    ))}
            </section>
        </main>
    );
};

export default SellerAppointments;
