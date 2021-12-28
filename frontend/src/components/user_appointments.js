import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setAppointments, deleteAppointment } from "../reducers/appointments";
import { AiOutlineClose } from "react-icons/ai";

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
        axios.get(`http://localhost:5000/user_appointments/${id.id}`).then((res) => {
            dispatch(setAppointments(res.data));
        });
    }, []);

    //delete appointment with spicefic id
    const removeAppointment = (id) => {
        axios.delete(` http://localhost:5000/delete_appointment/${id}`).then((res) => {
            dispatch(deleteAppointment(id));
        });
    };

    return (
        <main>
            <section className="appointments">
                {appointments &&
                    appointments.map((appointment) => (
                        <div className="appointment" key={appointment.id}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                                className="top-text-div flex-box space-b baseline"
                            >
                                <p className="app-top-text">
                                    You Book An Appointment With({appointment.seller_name}).
                                </p>
                                <AiOutlineClose
                                    fontSize={"22.5px"}
                                    className="delete-icon"
                                    onClick={() => {
                                        removeAppointment(appointment.id);
                                    }}
                                />
                            </div>
                            <p className="app-date">
                                Appointment Date : {appointment.app_date} At {appointment.hour}
                            </p>
                            <p className="app-status">
                                Appointment Status : {appointment.app_status}
                            </p>
                        </div>
                    ))}
            </section>
        </main>
    );
};

export default UserAppointments;
