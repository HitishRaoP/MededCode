"use client"
import { ExcerciseSchema } from '@/schemas/excercise'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { z } from 'zod'
import { Input } from '../ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from '../ui/button'
import { CreateExcercise } from '@/actions/excercise'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export function ExcerciseForm() {
    const [isloading, startTransition] = useTransition()
    const router = useRouter()
    const form = useForm<z.infer<typeof ExcerciseSchema>>({
        resolver: zodResolver(ExcerciseSchema),
        defaultValues: {
            date: "",
            excerciseType: undefined,
            duration: "",
            intensity: undefined,
            pain: undefined,
        }
    })

    const onSubmit = (values: z.infer<typeof ExcerciseSchema>) => {
        startTransition(() => {
            CreateExcercise(values)
                .then((data) =>
                    toast.success(data.success))
                .catch((data) =>
                    toast.error(data.error))
                .finally(() => router.push('/dashboard'))
        })
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mb-8">
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Date</FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="excerciseType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Excercise Type</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Excercise Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Physical Therapy">Physical Therapy</SelectItem>
                                            <SelectItem value="Occupational Therapy">Occupational Therapy</SelectItem>
                                            <SelectItem value="Speech Therapy">Speech Therapy</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Duration</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                  <FormField
                    control={form.control}
                    name="pain"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pain</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Pain" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="low">Low</SelectItem>
                                            <SelectItem value="medium">Medium</SelectItem>
                                            <SelectItem value="high">High</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                  <FormField
                    control={form.control}
                    name="intensity"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Intensity of excercise</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Intensity" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                        <SelectItem value="low">Low</SelectItem>
                                            <SelectItem value="medium">Medium</SelectItem>
                                            <SelectItem value="high">High</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            <Button type="submit" variant={"submit"}>Submit</Button>
            </form>
        </Form>
    )
}