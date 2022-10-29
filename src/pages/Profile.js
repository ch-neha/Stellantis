import React from 'react';
import ProfileCard from '../components/ProfileCard';
import ProfileChart from '../components/ProfileChart';
import Badge from '../components/Badge/Badge';

export default function Profile() {
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
    return (
        <div>
            <ProfileCard/>
            <Badge data={data} />
            <ProfileChart/>
        </div>
    )
}