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
            <section className="appointments">
                {appointments &&
                    appointments.map((appointment) => (
                        <div className="appointment" key={appointment.id}>
                            <p className="app-top-text">
                                {" "}
                                ({appointment.username}) Want To Book An Appointment.
                            </p>
                            <p className="app-date">
                                Appointment Date : {appointment.app_date} At {appointment.hour}
                            </p>
                            <p className="phone-number">
                                Phone Number : 0{appointment.phonenumber}
                            </p>
                            {appointment.app_status === "Waiting For Response..." ? (
                                <section className="buttons">
                                    <button
                                        className="response-button accept"
                                        onClick={() => {
                                            sendAppointmentResponse("Accepted", appointment.id);
                                        }}
                                    >
                                        ACCEPT
                                    </button>
                                    <button
                                        className="response-button reject"
                                        onClick={() => {
                                            sendAppointmentResponse("Rejectd", appointment.id);
                                        }}
                                    >
                                        REJECT
                                    </button>
                                </section>
                            ) : (
                                <p className="res-message">
                                    You{" "}
                                    <span
                                        className={
                                            appointment.app_status === "Accepted"
                                                ? "green-res"
                                                : "red-res"
                                        }
                                    >
                                        {appointment.app_status}
                                    </span>{" "}
                                    This Appointment
                                </p>
                            )}
                        </div>
                    ))}
            </section>
        </main>
    );
};

export default SellerAppointments;
