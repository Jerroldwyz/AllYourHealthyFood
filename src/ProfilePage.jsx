import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import userAccount from './backend/UserAccount';

function ProfilePage() {
    const navigate = useNavigate();

    console.log(userAccount.role);

    //if not logged in then go to login page
    useEffect(() => {
        if (userAccount.role === "guest") {
            navigate("/login");
        }
    });

    return (
        <div>Logged In</div>
    )
}

export default ProfilePage;