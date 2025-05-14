import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export type MetricCardProps = {
  title?: string;
  displayValue?: number;
}

const defaultProps: MetricCardProps = {
  title: "Total Revenue",
  displayValue: 0,
}

export default function MetricCard(props: MetricCardProps) {

  const { title, displayValue } = { ...defaultProps, ...props };

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
          {displayValue && new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(displayValue)}
        </CardTitle>
      </CardHeader>
    </Card>
  )
}