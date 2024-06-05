"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Personal = {
    gender: string
    age: string
    dateofStroke: string
    timeofStroke: string
    typeofStroke: string
    location: string
    description: string | null
    symptoms: string
} | undefined | null
export const columns: ColumnDef<Personal>[] = [
    {
        accessorKey: "gender",
        header: "Gender",
    },
    {
        accessorKey: "age",
        header: "Age",
    },
    {
        accessorKey: "dateofStroke",
        header: "Date of Stroke",
    },
    {
        accessorKey: "timeofStroke",
        header: "Time of Stroke",
    },
    {
        accessorKey: "typeofStroke",
        header: "Type of Stroke",
    },
    {
        accessorKey: "location",
        header: "Location",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "symptoms",
        header: "Symptoms",
    },
]
