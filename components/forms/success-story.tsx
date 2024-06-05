"use client"
import { SuccessStorySchema } from '@/schemas/success-story'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { UploadDropzone } from '@/lib/uploadthing'
import { toast } from 'sonner'
import { z } from 'zod'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { CreateSuccessStory } from '@/actions/success-story'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

export function SuccessStoryForm() {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const form = useForm<z.infer<typeof SuccessStorySchema>>({
        resolver: zodResolver(SuccessStorySchema),
        defaultValues: {
            VideoUrl: "",
            description: "",
        }
    })
    const onSubmit = (values: z.infer<typeof SuccessStorySchema>) => {
        startTransition(() => {
            CreateSuccessStory(values)
                .then((data) => {
                    toast.success(data.success)
                })
                .catch((data) => {
                    toast.error(data.error)
                })
                .finally(() => router.push('/dashboard'))
        })
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name="VideoUrl"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Upload Video
                            </FormLabel>
                            <FormControl>
                                <UploadDropzone
                                    endpoint={'mediaPost'} {...field}
                                    onClientUploadComplete={(res) => {
                                        toast.success("Flie Upload Completed")
                                        form.setValue("VideoUrl", res.map(a => a.url)[0])
                                    }}
                                    onUploadError={(error: Error) => {
                                        toast.error(`ERROR! something went wrong`)
                                    }} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)} />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) =>
                    (
                        <FormItem>
                            <FormLabel>
                                Description
                            </FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <Button variant={'submit'} type='submit'>Submit</Button>
            </form>
        </Form>
    )
}
