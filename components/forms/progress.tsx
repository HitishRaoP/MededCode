"use client"
import { ProgressSchema } from '@/schemas/progress'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
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
import { CreateProgress } from '@/actions/progress'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
export function ProgressForm() {
    const [isLoading, startTransition] = useTransition()
    const router = useRouter()
    const form = useForm<z.infer<typeof ProgressSchema>>({
        resolver: zodResolver(ProgressSchema),
        defaultValues: {
            date: "",
            mobility: undefined,
            speech: undefined,
            strength: undefined,
            dailyActivities: undefined,
        }
    })

    const onSubmit = (values: z.infer<typeof ProgressSchema>) => {
        startTransition(() => {
            CreateProgress(values)
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
                    render={({ field }) =>
                    (
                        <FormItem>
                            <FormLabel>
                                Date
                            </FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <FormField
                    control={form.control}
                    name="dailyActivities"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Daily Activities intensity</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Daily Activities intensity" />
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
                    name="mobility"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Movement intensity</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Movement Intensity" />
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
                    name="speech"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Speech intensity</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Speech Intensity" />
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
                    name="strength"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Strength intensity</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Strength Intensity" />
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
