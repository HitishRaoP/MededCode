"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Excercise = {
  date: string
  excerciseType: string
  duration: string
  intensity: string
  pain: string
}
export const columns: ColumnDef<Excercise>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "excerciseType",
    header: "Excercise Type",
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "intensity",
    header: "Intensity",
  },
  {
    accessorKey: "pain",
    header: "Pain",
  },

]
