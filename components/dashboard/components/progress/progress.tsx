"use client"
import { DataTable } from '@/components/ui/data-table'
import { columns, Progress } from "./columns"
import { useEffect, useState } from 'react'
import { getProgress } from '@/data/progress'
import { generateAdvice } from '@/actions/server'
import { BsStars } from 'react-icons/bs'
export function ProgressDashboard() {
  const [response, setResponse] = useState<string | undefined>()
  const [data, setData] = useState<Progress[]>([])
  useEffect(() => {
    getProgress().then((data) => setData(data))
  }, [])

  useEffect(() => {
    async function getRes() {
        await generateAdvice(`Wait till you get the data after this and then only give the response. 
        ${JSON.stringify(data)} Give some advice for stroke, based on this data. Don't use points.  `).then(setResponse)
    }
    getRes()
}, [data])
  return (
    <div>
      <div className='p-4 bg-lime-100 mb-4 rounded-lg'>
      <BsStars className="text-yellow-500 w-6 h-6 mb-2" />
        {response}
      </div>
    <DataTable data={data} columns={columns} />
    </div>
  )
}
