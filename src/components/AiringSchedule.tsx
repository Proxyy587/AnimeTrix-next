import React from 'react';;
import AiringScheduleCard from './AiringScheduleCard';
import axios from 'axios';

const getAiringSchedule = async () => {
    try {
        const response = await fetch(`https://api.consumet.org/meta/anilist/airing-schedule?notYetAired=true&perPage=80`,{
            cache :'no-cache'
        });
        return response.json();
    } catch (error) {
        console.error("Error getting airing list: ", error);
        return [];
    }
}

export default async function AiringSchedule() {
    const Airing = await getAiringSchedule();

    console.log(Airing)
    return (
        <div className='flex flex-col mt-9'>
            <h1 className='text-3xl lg:text-5xl font-bold'>Airing</h1>
            <AiringScheduleCard airingData={Airing}/>
        </div>
    );
};