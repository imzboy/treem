import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export type MetricCardProps = {
  title?: string;
  displayValue?: string;
}

const defaultProps: MetricCardProps = {
  title: "Total Revenue",
  displayValue: "$1,250.00",
}

export default function MetricCard(props: MetricCardProps) {

  const { title, displayValue } = { ...defaultProps, ...props };

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
          {displayValue}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1 text-sm">
        <div className="text-muted-foreground">
          Visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}