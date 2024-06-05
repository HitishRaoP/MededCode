"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Progress = {
    date : string
    mobility : string
    speech : string
    strength : string
    dailyActivities : string | null
}
export const columns: ColumnDef<Progress>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "mobility",
    header: "Mobility",
  },
  {
    accessorKey: "speech",
    header: "Speech",
  },
  {
    accessorKey: "strength",
    header: "Strength",
  },
  {
    accessorKey: "dailyActivities",
    header: "Daily Activities",
  },
]
