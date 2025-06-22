import java.util.*;

public class InvestmentForecast {
    // Step 1: Calculate average growth rate
    public static double calculateAverageGrowthRate(List<Double> pastData) {
        double totalGrowth = 0.0;
        for (int i = 1; i < pastData.size(); i++) {
            double growth = (pastData.get(i) - pastData.get(i - 1)) / pastData.get(i - 1);
            totalGrowth += growth;
        }
        return totalGrowth / (pastData.size() - 1);
    }

    // Step 2: Forecast investment using recursion
    public static double forecastInvestment(int yearsToPredict, double initialInvestment, double growthRate) {
        if (yearsToPredict == 0) {
            return initialInvestment;
        }
        return forecastInvestment(yearsToPredict - 1, initialInvestment, growthRate) * (1 + growthRate);
    }

    public static void main(String[] args) {
        // Past investment value data
        List<Double> pastData = Arrays.asList(10000.0, 11000.0, 12100.0, 13000.0, 14300.0);
        double averageGrowthRate = calculateAverageGrowthRate(pastData);
        System.out.printf("Average Annual Growth Rate: %.2f%%\n", averageGrowthRate * 100);

        // Initial investment
        double initialInvestment = 10000.0;

        // Years to forecast
        int forecastYears = 5;

        System.out.println("\nForecasting future investment growth:");
        for (int i = 1; i <= forecastYears; i++) {
            double futureValue = forecastInvestment(i, initialInvestment, averageGrowthRate);
            System.out.printf("Year +%d: Rs.%.2f\n", i, futureValue);
        }
    }
}
