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
      roi: 25,
      nextDistributionDate: new Date("2023-03-01"),
      createdAt: new Date("2022-12-01"),
    },
    {
      id: "2",
      investorId: "2",
      projectName: "GreenTech",
      tokenClass: "Debt",
      sharesOwned: 5000,
      marketValue: 75000,
      roi: 15,
      nextDistributionDate: new Date("2023-06-15"),
      createdAt: new Date("2023-01-15"),
    },
    {
      id: "3",
      investorId: "3",
      projectName: "SolarWave",
      tokenClass: "Equity",
      sharesOwned: 12000,
      marketValue: 180000,
      roi: 30,
      nextDistributionDate: new Date("2023-09-10"),
      createdAt: new Date("2023-02-10"),
    },
    {
      id: "4",
      investorId: "4",
      projectName: "WindPower",
      tokenClass: "Convertible Note",
      sharesOwned: 8000,
      marketValue: 120000,
      roi: 20,
      nextDistributionDate: new Date("2023-12-05"),
      createdAt: new Date("2023-03-05"),
    },
    {
      id: "5",
      investorId: "5",
      projectName: "HydroFlow",
      tokenClass: "Debt",
      sharesOwned: 6000,
      marketValue: 90000,
      roi: 18,
      nextDistributionDate: new Date("2024-01-20"),
      createdAt: new Date("2023-04-20"),
    },
    {
      id: "6",
      investorId: "6",
      projectName: "GeoTherm",
      tokenClass: "Equity",
      sharesOwned: 15000,
      marketValue: 225000,
      roi: 28,
      nextDistributionDate: new Date("2024-03-30"),
      createdAt: new Date("2023-05-30"),
    },
    {
      id: "7",
      investorId: "7",
      projectName: "SolarWave",
      tokenClass: "Debt",
      sharesOwned: 20000,
      marketValue: 300000,
      roi: 12,
      nextDistributionDate: new Date("2024-05-10"),
      createdAt: new Date("2023-07-10"),
    },
    {
      id: "8",
      investorId: "8",
      projectName: "WindPower",
      tokenClass: "Equity",
      sharesOwned: 25000,
      marketValue: 375000,
      roi: 25,
      nextDistributionDate: new Date("2024-08-15"),
      createdAt: new Date("2023-09-15"),
    },
    {
      id: "9",
      investorId: "9",
      projectName: "HydroFlow",
      tokenClass: "Convertible Note",
      sharesOwned: 10000,
      marketValue: 150000,
      roi: 22,
      nextDistributionDate: new Date("2024-10-20"),
      createdAt: new Date("2023-11-20"),
    },
    {
      id: "10",
      investorId: "9",
      projectName: "HydroFlow",
      tokenClass: "Convertible Note",
      sharesOwned: 10000,
      marketValue: 150000,
      roi: 22,
      nextDistributionDate: new Date("2024-10-20"),
      createdAt: new Date("2023-11-20"),
    },
    {
      id: "11",
      investorId: "9",
      projectName: "HydroFlow",
      tokenClass: "Convertible Note",
      sharesOwned: 10000,
      marketValue: 150000,
      roi: 22,
      nextDistributionDate: new Date("2024-10-20"),
      createdAt: new Date("2023-11-20"),
    },
    {
      id: "12",
      investorId: "9",
      projectName: "HydroFlow",
      tokenClass: "Convertible Note",
      sharesOwned: 10000,
      marketValue: 150000,
      roi: 22,
      nextDistributionDate: new Date("2024-10-20"),
      createdAt: new Date("2023-11-20"),
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