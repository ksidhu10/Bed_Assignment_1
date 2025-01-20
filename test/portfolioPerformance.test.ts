import { calculatePortfolioPerformance, findLargestHolding, calculateAssetAllocation, Asset }  from '../src/portfolio/portfolioPerformance';
 
describe('Portfolio Functions', () => {
 
  // Testing the Portfolio Performance Calculation
  describe('Portfolio Performance Calculation', () => {
 
    test('Portfolio gained significantly (> 20%)', () => {
      // Arrange
      const initialInvestment = 10000;
      const currentValue = 15000; // 50% gain
 
      // Act
      const result = calculatePortfolioPerformance(initialInvestment, currentValue);
 
      // Assert
      expect(result.performanceSummary).toBe('The portfolio has gained significantly with a profit of $5000.00.');
    });
 
    test('Portfolio has no change (0%)', () => {
      // Arrange
      const initialInvestment = 10000;
      const currentValue = 10000; // 0% change
 
      // Act
      const result = calculatePortfolioPerformance(initialInvestment, currentValue);
 
      // Assert
      expect(result.performanceSummary).toBe('The portfolio has no change with a profit/loss of $0.00.');
    });
 
    test('Portfolio lost slightly (-0.1% to -10%)', () => {
      // Arrange
      const initialInvestment = 10000;
      const currentValue = 9500; // 5% loss
 
      // Act
      const result = calculatePortfolioPerformance(initialInvestment, currentValue);
 
      // Assert
      expect(result.performanceSummary).toBe('The portfolio has lost slightly with a loss of $500.00.');
    });
 
  });
 
  // Testing Find Largest Holding
  describe('Find Largest Holding', () => {
 
    test('Should return the asset with the highest value', () => {
      // Arrange
      const assets = [
        { name: 'House', value: 300000 },
        { name: 'Stocks', value: 15000 },
        { name: 'Bonds', value: 20000 }
      ];
 
      // Act
      const largestHolding = findLargestHolding(assets);
 
      // Assert
      expect(largestHolding).toEqual({ name: 'House', value: 300000 });
    });
 
    test('Should return null for an empty portfolio', () => {
      // Arrange
      const assets: Asset[] = [];
 
      // Act
      const largestHolding = findLargestHolding(assets);
 
      // Assert
      expect(largestHolding).toBeNull();
    });
 
    test('Should return the only asset if there is one', () => {
      // Arrange
      const assets = [{ name: 'Stocks', value: 10000 }];
 
      // Act
      const largestHolding = findLargestHolding(assets);
 
      // Assert
      expect(largestHolding).toEqual({ name: 'Stocks', value: 10000 });
    });
 
  });
 
  // Testing Asset Allocation Calculation
  describe('Calculate Asset Allocation', () => {
 
    test('Should calculate the percentage allocation of each asset', () => {
      // Arrange
      const assets = [
        { name: 'Stocks', value: 5000 },
        { name: 'Bonds', value: 5000 }
      ];
 
      // Act
      const allocation = calculateAssetAllocation(assets);
 
      // Assert
      expect(allocation).toEqual([
        { name: 'Stocks', allocationPercentage: 50 },
        { name: 'Bonds', allocationPercentage: 50 }
      ]);
    });
 
    test('Should handle assets with different values', () => {
      // Arrange
      const assets = [
        { name: 'Stocks', value: 7000 },
        { name: 'Bonds', value: 3000 }
      ];
 
      // Act
      const allocation = calculateAssetAllocation(assets);
 
      // Assert
      expect(allocation).toEqual([
        { name: 'Stocks', allocationPercentage: 70 },
        { name: 'Bonds', allocationPercentage: 30 }
      ]);
    });
 
    test('Should return an empty array for an empty portfolio', () => {
      // Arrange
      const assets: Asset[] = [];
 
      // Act
      const allocation = calculateAssetAllocation(assets);
 
      // Assert
      expect(allocation).toEqual([]);
    });
 
  });
 
});
 