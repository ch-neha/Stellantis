import React from 'react';
import ProfileCard from '../components/ProfileCard';
import ProfileChart from '../components/ProfileChart';
import { signInWithGoogle, auth, signOut } from "../services/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Profile() {

    const [user] = useAuthState(auth);


    return (
        user == null ?
        <h1>Please Login</h1>
        :
        <div>
            <ProfileCard/>
            <ProfileChart/>
        </div>
    )
}