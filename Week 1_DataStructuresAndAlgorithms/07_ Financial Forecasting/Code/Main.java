public class Main {

    /**
     * Recursively forecasts future investment value.
     *
     * @param principal  Initial investment amount
     * @param annualRate Annual growth rate (e.g., 0.07 for 7%)
     * @param years      Number of years to forecast
     * @return Estimated future value
     */
    public static double forecastInvestment(double principal, double annualRate, int years) {
        if (years == 0) {
            System.out.printf("Year %2d: ₹%.2f (Initial Amount)\n", years, principal);
            return principal;
        }

        // Recursive step: forecast previous year's value
        double prevValue = forecastInvestment(principal, annualRate, years - 1);

        // Apply growth rate
        double newValue = prevValue * (1 + annualRate);

        // Log the result for this year
        System.out.printf("Year %2d: ₹%.2f\n", years, newValue);

        return newValue;
    }

    public static void main(String[] args) {
        double initialInvestment = 10000;     // Initial value in ₹
        double annualGrowthRate = 0.07;       // 7% annual growth rate
        int forecastYears = 5;                // Number of years
        System.out.println("");
        System.out.println(" Investment Growth Forecast (Recursive)");
        System.out.println("----------------------------------------");

        double finalAmount = forecastInvestment(initialInvestment, annualGrowthRate, forecastYears);

        System.out.printf("\n Final Forecasted Amount after %d years: ₹%.2f\n",
                forecastYears, finalAmount);
    }
}
