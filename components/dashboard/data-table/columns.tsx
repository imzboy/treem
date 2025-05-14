"use client"

import { Button } from "@/components/ui/button"
import { Investment } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

export const columns: ColumnDef<Investment>[] = [
  {
    accessorKey: "project_name",
    header: "Project Name",
  },
  {
    accessorKey: "token_class",
    header: "Token Class",
  },
  {
    accessorKey: "shares_owned",
    header: "Shares Owned",
  },
  {
    accessorKey: "market_value",
    header: "Market Value",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("market_value"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return formatted
    },
  },
  {
    accessorKey: "roi_percent",
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
      const roi = row.getValue("roi_percent")
      return `${roi}%`
    }
  },
  {
    accessorKey: "next_distribution_date",
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
  },
]
