import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import Sellers from "./components/sellers";
import SignUp from "./components/auth/user_auth/signup";
import UserAppointments from "./components/user_appointments";
import SellerAppointments from "./components/seller_appointments";
import Login from "./components/auth/user_auth/login";
import SellerSignUp from "./components/auth/seller_auth/signup";
import SellerLogin from "./components/auth/seller_auth/login";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/seller_login" element={<SellerLogin />} />
                <Route exact path="/seller_signup" element={<SellerSignUp />} />
                <Route exact path="/my_appointments/:id" element={<UserAppointments />} />
                <Route exact path="/clients_appointments/:id" element={<SellerAppointments />} />
                <Route exact path="/" element={<Sellers />} />
            </Routes>
        </div>
    );
}

export default App;
