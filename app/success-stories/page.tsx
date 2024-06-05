"use client"

import { getSuccessStories } from '@/data/success-stories'
import { SuccessStorySchema } from '@/schemas/success-story'
import React, { useEffect, useState } from 'react'
import { z } from 'zod'

type SuccessStory = {
  VideoUrl: string
  description: string
}
function SuccessStoriesPage() {
  const [data, setData] = useState<SuccessStory[]>([])
  useEffect(() => {
    getSuccessStories()
      .then((data) => setData(data))
  }, [data])
  return (
    <main className='flex flex-col'>
      {
        data.map((d) => {
          return (
            <div>
              <video className='w-full rounded-lg' controls preload="none">
                <source src={d.VideoUrl} type="video/mp4" />
                <track
                  src="/path/to/captions.vtt"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
              <span className='text-md'>
              {d.description}
              </span>
              
            </div>
          )
        })
      }
    </main>
  )
}

export default SuccessStoriesPage