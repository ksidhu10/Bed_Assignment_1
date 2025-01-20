# Debugging Analysis

## Scenario 1:  Routing Logic - Debugging the Health Check Endpoint

**Breakpoint Location:** src/api/v1/routes/healthCheck.ts at line 20
**Objective:**  Investigate how the health check request is routed and handled by the server, especially the server status response and uptime calculation.

### Debugger Observations

**Variable States:** status: 'OK'
uptime: 345
timestamp: 2025-01-19T15:00:00.000Z
version: '1.0.0'
**Call Stack:**healthCheckHandler (line 18)
sendHealthCheckResponse (line 30)
server.ts (line 12 - invoking route handler)
**Behavior:** The breakpoint was hit when the server responded to a health check request. The status variable correctly returned "OK," and the uptime was calculated as 345 seconds. The timestamp was also correctly generated, but the version variable was mistakenly returned as undefined.
### Analysis

### What did you learn from this scenario?
I learned that the routing and response generation works well for most fields but the version field was missing from the response.
### Did you observe any unexpected behavior? If so, what might be the cause?
Yes, the version field was undefined in the response when it should have been '1.0.0'. The issue was likely due to the missing version configuration or variable setup in the server.ts or health check handler
### Are there areas for improvement or refactoring in this part of the code?
The version should be extracted from a configuration or package.json file instead of being hardcoded, to ensure it’s always up-to-date with the actual application version.
### How does this enhance your understanding of the overall project?
This enhanced my understanding of the routing system and how response handlers manage data. It also emphasized the importance of ensuring all variables are correctly populated before being returned.

## Scenario 2: Portfolio Performance Calculation - Debugging the Profit/Loss Logic

- **Breakpoint Location:**  src/portfolio/portfolioPerformance.ts at line 45
-**Objective:** Investigate the profit and loss calculation, especially when calculating percentage change in portfolio value.

## Debugger Observations

## Variable States:
initialInvestment: 10000
currentValue: 15000
profitOrLoss: 5000
percentageChange: 50

- **performanceSummary:** 'The portfolio has gained significantly with a profit of $5000.00.'

## Call Stack:
calculatePortfolioPerformance (line 40)
performanceSummaryHandler (line 50)
- **Behavior:** The calculation correctly identifies a significant gain. However, the percentageChange calculation logic was not correctly handling negative percentages, which is why it worked for positive numbers but failed when values decreased.
## Analysis
## What did you learn from this scenario?
The profit and percentage calculations work for gains, but the function did not account for negative scenarios well.
## Did you observe any unexpected behavior?
No, the behavior was as expected for positive portfolio changes, but it failed for losses.
## What might be the cause?
The issue was due to not handling negative values appropriately in the percentageChange logic. Specifically, I didn’t account for rounding errors in negative calculations.
## Are there areas for improvement or refactoring in this part of the code?
I should add a check for negative percentageChange values and refactor the performance summary logic to handle loss conditions better (e.g., using an if-else condition or a ternary operator).
## How does this enhance your understanding of the overall project?
This helped me understand the importance of accounting for both profit and loss scenarios when calculating performance and how to handle edge cases like zero or negative percentage changes.

## Scenario 3: Find Largest Holding - Debugging Empty Portfolio Edge Case
- **Breakpoint Location:** src/portfolio/portfolioPerformance.ts at line 25
**Objective:** Investigate how the findLargestHolding function behaves when the portfolio is empty.
Debugger Observations
## Variable States:
assets: [] (empty array)
largestHolding: null

## Call Stack:
findLargestHolding (line 20)
portfolioHandler (line 35)
**Behavior:** The breakpoint was hit when the findLargestHolding function was called with an empty array. The function correctly returned null, which is the expected behavior when there are no assets in the portfolio.
Analysis

## What did you learn from this scenario?
The function handles the empty portfolio edge case correctly by returning null.
## Did you observe any unexpected behavior?
No unexpected behavior. The function performs as expected for the empty portfolio case.
## What might be the cause?
No issues in this scenario. The code is working as intended.
## Are there areas for improvement or refactoring in this part of the code?
The code can be refactored for better error handling, especially when encountering unexpected input like undefined or non-array types, but this is not strictly necessary for this case.
## How does this enhance your understanding of the overall project?
This reinforced the importance of handling edge cases, such as empty portfolios, in financial applications where data might not always be present.

