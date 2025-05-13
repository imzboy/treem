"use client"

import { ColumnDef } from "@tanstack/react-table"

// AI! filled all the columns and matched the data
export type Investment = {
  id: string // uuid, primary key
  investorId: string // uuid
  projectName: string // text
  tokenClass: string // text
  sharesOwned: number // integer
  marketValue: number // numeric
  roiPercent: number // numeric
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
  },
  {
    accessorKey: "roi",
    header: "ROI %",
  },
  {
    accessorKey: "nextDistributionDate",
    header: "Next Distribution Date",
  },
]
