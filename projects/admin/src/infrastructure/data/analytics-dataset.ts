import { IAnalyticsData } from "../../domain/model/analytics-data-model";

export const analyticsDataset : IAnalyticsData = {
	"stateCounts": {
		"CONFIRMED": 1,
    "PENDING": 2,
    "CANCELED": 3
	},
	"statePercentages": {
		"CONFIRMED": 20.0,
    "PENDING": 40.0,
    "CANCELED": 40.0
	},
	"totalBookings": 6,
	"totalIncome": 760500.0,
	"totalTaxes": 114075.0,
	"incomeWithoutTaxes": 646425.0
}