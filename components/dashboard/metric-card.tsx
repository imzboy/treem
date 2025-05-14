import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { JSX } from "react";

export type MetricCardProps = {
  title?: string;
  displayValue?: number;
}

const defaultProps: MetricCardProps = {
  title: "Total Revenue",
  displayValue: 0,
}

/**
 * MetricCard component displays a card with a title and a formatted display value.
 *
 * @param {MetricCardProps} props - Properties for the MetricCard component.
 * @param {string} [props.title] - The title to be displayed on the card.
 * @param {number} [props.displayValue] - The value to be formatted and displayed on the card.
 * 
 * @returns {JSX.Element} A card component with a description and a title.
 */

export default function MetricCard(props: MetricCardProps): JSX.Element {

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