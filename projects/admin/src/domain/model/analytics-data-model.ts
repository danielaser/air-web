export interface IAnalyticsData{
    stateCounts: StateCounts
    statePercentages: StatePercentages
    totalBookings: number
    totalIncome: number
    totalTaxes: number
    incomeWithoutTaxes: number
  }

  export interface StateCounts {
    CONFIRMED: number
    PENDING: number
    CANCELED: number
  }

  export interface StatePercentages {
    CONFIRMED: number
    PENDING: number
    CANCELED: number
  }
