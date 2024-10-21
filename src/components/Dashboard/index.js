import { useEffect, useState } from "react";



const Dashboard = () => {
    const [, setUser] = useState(null);

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
