"use client"
import { PersonalSchema } from "@/schemas/personal"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "../ui/textarea"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { CreatePersonalInfo } from "@/actions/personal"
import { toast } from "sonner"
export function PersonalForm() {
  const [isLoading, startTransition] = useTransition()
  const router = useRouter()
  const form = useForm<z.infer<typeof PersonalSchema>>({
    resolver: zodResolver(PersonalSchema), // Now it should work
    defaultValues: {
      gender: undefined,
      age: "",
      dateofStroke: "",
      timeofStroke: "",
      typeofStroke: "",
      location : "",
      description : "",
      symptoms : "",
    },
  })

  const onSubmit = (values: z.infer<typeof PersonalSchema>) => {
    startTransition(() => {
        CreatePersonalInfo(values)
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
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
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
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
               <Input type="text" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="dateofStroke"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Stroke</FormLabel>
              <FormControl>
               <Input type="date" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="timeofStroke"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time of Stroke</FormLabel>
              <FormControl>
               <Input type="time" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="typeofStroke"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Stroke</FormLabel>
              <FormControl>
               <Input type="text" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
               <Input type="text" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
               <Textarea {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="symptoms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Symptoms</FormLabel>
              <FormControl>
               <Textarea {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={'submit'}>Submit</Button>
      </form>
    </Form>
  )
}