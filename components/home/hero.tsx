import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

export function HeroComponent() {
  return (
    <Card className='border-0 h-[calc(100vh-8rem)] flex flex-col items-center justify-center'>
        <CardHeader className='flex flex-col items-center'>
            <CardTitle className='text-4xl text-center'>
                Get Personlised <span className=' bg-gradient-to-tr from-pink-500 to-violet-500 bg-clip-text text-transparent'>AI advice</span> for all your health needs                
            </CardTitle>
            <CardDescription className='text-center'>
                Going to hospital for checkups? Don&apos;t worry, we have got you covered
            </CardDescription>
        </CardHeader>
    </Card>
  )
}
