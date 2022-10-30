import React from 'react';
import ProfileCard from '../components/ProfileCard';
import ProfileChart from '../components/ProfileChart';
import { signInWithGoogle, auth, signOut } from "../services/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Badge from '../components/Badge/Badge';
import Progress from '../components/Progress'
export default function Profile() {

    const [user] = useAuthState(auth);

    const data = [
        {
          type: 1,
          name: "A week of Safety",
        },
        {
          type: 2,
          name: "Travelled 5000km",
        },
        {
          type: 3,
          name: "Maintenance Excellence",
        },
        {
          type: 4,
          name: "Clean Freak",
        },
        {
          type: 5,
          name: "100 days on road",
        },
    ];
    const goals = [{
      title: "Complete first goal",
      description:
        "Travel 10km with in 24 hours and unlock your first achievement",
      actual: 100,
      current: 60,
      type: "personal",
    },
    {
      title: "Group task goal",
      description:
        "Travel 20km with your friends and get some free coupons",
      actual: 100,
      current: 30,
      type: "group",
    },
    {
      title: "Safe drive goal",
      description:
        "Drive safely for 20km and unlock new series in your achievements",
      actual: 100,
      current: 80,
      type: "safety",
    }
  ];
    return (
        user == null ?
        <h1>Please Login</h1>
        :
        <div>
            <ProfileCard/>
            <h4 className='text-center'>Achievements</h4>
            <Badge data={data} />
            <h4 className='text-center'>Goals</h4>
            <div className='d-flex justify-content-center flex-wrap'>
              {goals.map((val, i) => <Progress data={val} key={i} />)}
            </div>
            <ProfileChart/>
        </div>
    )
}