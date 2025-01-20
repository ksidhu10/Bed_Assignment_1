interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
  }
  
  export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): PortfolioPerformance {
    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;
  
    const performanceRanges = [
      { range: [20, Infinity], message: `The portfolio has gained significantly with a profit of $${profitOrLoss.toFixed(2)}.` },
      { range: [10, 20], message: `The portfolio has gained moderately with a profit of $${profitOrLoss.toFixed(2)}.` },
      { range: [0.1, 10], message: `The portfolio has gained slightly with a profit of $${profitOrLoss.toFixed(2)}.` },
      // Fix for "no change" case
      { range: [0, 0], message: `The portfolio has no change with a profit/loss of $${profitOrLoss.toFixed(2)}.` },
      { range: [-10, 0], message: `The portfolio has lost slightly with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.` },
      { range: [-20, -10], message: `The portfolio has lost moderately with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.` },
      { range: [-Infinity, -20], message: `The portfolio has lost significantly with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.` }
    ];
  
   // Modify the logic to correctly handle the "no change" (0%) scenario.

    const performanceSummary = performanceRanges.find(range => 
      (percentageChange === 0 && range.range[0] === 0) || (percentageChange > range.range[0] && percentageChange <= range.range[1])
    )?.message ?? '';
  
    return {
      initialInvestment,
      currentValue,
      profitOrLoss,
      percentageChange,
      performanceSummary,
    };
  }

 