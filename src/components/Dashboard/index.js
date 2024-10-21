import { useEffect, useState } from "react";
import Home from "./home";


const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            setUser(loggedInUser);
        } else {
            setUser(null);
        }
    }, []);
}

export default Dashboard;
