'use client'

import { useEffect, useState } from "react";

import MetricCard from "@/components/dashboard/metric-card";
import DashboardSidebar from "@/components/dashboard/sidebar/index";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/ui/site-header";

import { DataTable } from "@/components/dashboard/data-table";
import { columns } from "@/components/dashboard/data-table/columns";
import { Investor } from "@/types";


export default function Dashboard() {

  // Not critical, but a react context could be used in the future to prevent props drillin with investor data
  const [investorData, setInvestorData] = useState<Investor>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/dashboard");
      const result = await response.json();
      setInvestorData(result);
    };
    fetchData();
  }, []);

  return (
    <SidebarProvider>
      <DashboardSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader title="Dashboard" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
                <MetricCard title="Total Invested Amount" displayValue={investorData?.total_invested_amount} />
                <MetricCard title="Portfolio Value" displayValue={investorData?.portfolio_value} />
                <MetricCard title="Distributions Received" displayValue={investorData?.distributions_received} />
                <MetricCard title="Outstanding Commitments" displayValue={investorData?.outstanding_commitments} />
              </div>
              {
                investorData?.investments?.length
                  ?
                  <DataTable columns={columns} data={investorData?.investments} />
                  :
                  <div className="flex flex-1 items-center justify-center text-muted-foreground">No Investments</div>
              }
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
