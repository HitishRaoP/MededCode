"use client"

import { Personal } from "./columns"
import { useEffect, useState } from 'react'
import { getPersonalInfo } from '@/data/personal'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getUsername } from '@/data/username'
import { generateAdvice } from "@/actions/server"
import { BsStars } from "react-icons/bs";
import { Stats } from "../stats"

export function PersonalDashboard() {
    const [response, setResponse] = useState<string | undefined>()
    const [data, setData] = useState<Personal>()
    const [user, setUser] = useState<string | undefined>("")
    useEffect(() => {
        getPersonalInfo().then((response) => {
            const personalInfo: Personal = response?.personalInfo;
            setData(personalInfo);
        })
    }, []);

    useEffect(() => {
        getUsername()
            .then((response) => {
                setUser(response?.username);
            })
    }, [])

    useEffect(() => {
        async function getRes() {
            await generateAdvice(`Wait till you get the data after this and then only give the response. 
            ${JSON.stringify(data)} Give some advice for stroke based on this data. Limit to 100 words. Don't use points.  `).then(setResponse)
        }
        getRes()
    }, [data])

    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center text-3xl'>
                    {user}
                </CardTitle>
                <CardContent className="flex flex-col gap-4">
                    <div className="bg-lime-100 p-4 rounded-lg my-2">
                        <BsStars className="text-yellow-500 w-6 h-6 mb-2" />
                        {response}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Stats title="Gender" value={data?.gender} />
                        <Stats title="Age" value={data?.age} />
                        <Stats title="Date of Stroke" value={data?.dateofStroke} />
                        <Stats title="Time of Stroke" value={data?.timeofStroke} />
                        <Stats title="Location" value={data?.location} />
                        <Stats title="Symptoms" value={data?.symptoms} />
                        {data?.description && <Stats title="Description" value={data?.description} />}
                    </div>
                </CardContent>
            </CardHeader>
        </Card>
    )
}