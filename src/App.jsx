import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Customers from './pages/Customers';
import Concessionaires from './pages/Concessionaires';
import Cafeterias from './pages/Cafeterias';
import Concessions from './pages/Concessions';
import Orders from './pages/Orders';
import ViewConcessionaire from './pages/ViewConcessionaire';
import ViewCustomer from './pages/ViewCustomer';
import ViewCafeteria from './pages/ViewCafeteria';
import ForgotPassword from './pages/ForgotPassword';
import PasswordReset from './pages/PasswordReset';

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={< Login />}/>
                    <Route path="/dashboard" element={< Dashboard />}/>
                    <Route path="/profile" element={< Profile />}/>
                    <Route path="/customers" element={< Customers />}/>
                    <Route path="/concessionaires" element={< Concessionaires />}/>
                    <Route path="/cafeterias" element={< Cafeterias />}/>
                    <Route path="/concessions" element={< Concessions />}/>
                    <Route path="/orders" element={< Orders />}/>
                    <Route path="/view-concessionaire" element={< ViewConcessionaire />}/>
                    <Route path="/view-customer" element={< ViewCustomer />}/>
                    <Route path="/view-cafeteria" element={< ViewCafeteria />}/>
                    <Route path="/forgot-password" element={< ForgotPassword />}/>
                    <Route path="/password-reset" element={< PasswordReset />}/>
                </Routes>
            </Router>
        </div>
    );
}
