import {Routes,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard"; import Devices from "./pages/Devices"; import Alerts from "./pages/Alerts"; import Reports from "./pages/Reports"; import Settings from "./pages/Settings"; import Login from "./pages/Login";
export default function App(){return <Routes><Route path="/login" element={<Login/>}/><Route path="/" element={<Dashboard/>}/><Route path="/devices" element={<Devices/>}/><Route path="/alerts" element={<Alerts/>}/><Route path="/reports" element={<Reports/>}/><Route path="/settings" element={<Settings/>}/></Routes>}
