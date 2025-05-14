// AI! filled all the columns and matched the data

export type Investment = {
    id: string // uuid, primary key
    investor_id: string // uuid
    project_name: string // text
    token_class: string // text
    shares_owned: number // integer
    market_value: number // numeric
    roi_percent: number // numeric
    next_distribution_date: Date // date
    created_at: Date // timestamp
}

export type Investor = {
    id: string // uuid, primary key
    total_invested_amount: number // number
    portfolio_value: number // text
    distributions_received: number // number
    outstanding_commitments: number // number
    createdAt: Date // timestamp
    investments: Investment[]
}