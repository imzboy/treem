'use client'

import MetricCard, { type MetricCardProps } from "@/components/dashboard/metric-card";
import DashboardSidebar from "@/components/dashboard/sidebar/index";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/ui/site-header";

import { DataTable } from "@/components/dashboard/data-table";
import { Investment, columns } from "@/components/dashboard/data-table/columns";


const MetricCards: MetricCardProps[] = [
  {
    title: "Total Invested Amount",
    displayValue: "$145,250.54",
  },
  {
    title: "Portfolio Value",
    displayValue: "$268,145.12",
  },
  {
    title: "Distributions Received",
    displayValue: "$145,251.54",
  },
  {
    title: "Outstanding Commitments",
    displayValue: "$102,145.12",
  }
]

function getData(): Investment[] {
  return [
    { // AI ! mock created to match the columns
      id: "1",
      investorId: "1",
      projectName: "Treem",
      tokenClass: "Equity",
      sharesOwned: 10000,
      marketValue: 100000,
      roiPercent: 25,
      nextDistributionDate: new Date("2023-03-01"),
      createdAt: new Date("2022-12-01"),
    },
  ]
}

export default function Dashboard() {

  const data = getData();

  return (
    <SidebarProvider>
      <DashboardSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader title="Dashboard" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
                {MetricCards.map((card, index) => (
                  <MetricCard key={index} {...card} />
                ))}
              </div>
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}