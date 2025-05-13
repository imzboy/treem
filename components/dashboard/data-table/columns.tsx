"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

// AI! filled all the columns and matched the data
export type Investment = {
  id: string // uuid, primary key
  investorId: string // uuid
  projectName: string // text
  tokenClass: string // text
  sharesOwned: number // integer
  marketValue: number // numeric
  roi: number // numeric
  nextDistributionDate: Date // date
  createdAt: Date // timestamp
}

export const columns: ColumnDef<Investment>[] = [
  {
    accessorKey: "projectName",
    header: "Project Name",
  },
  {
    accessorKey: "tokenClass",
    header: "Token Class",
  },
  {
    accessorKey: "sharesOwned",
    header: "Shares Owned",
  },
  {
    accessorKey: "marketValue",
    header: "Market Value",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("marketValue"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return formatted
    },
  },
  {
    accessorKey: "roi",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ROI %
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    cell: ({ row }) => {
      const roi = row.getValue("roi")
      return `${roi}%`
    }
  },
  {
    accessorKey: "nextDistributionDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Next Distribution Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date: string = row.getValue("nextDistributionDate")
      const formatted = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(date))
      return formatted
    }
  },
]
