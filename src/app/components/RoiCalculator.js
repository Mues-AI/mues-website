"use client"
import { useState, useEffect } from "react"
import Input from "./ui/Input";

export default function RoiCalculatorComponent() {
  const [teamSize, setTeamSize] = useState(5)
  const [hoursPerWeek, setHoursPerWeek] = useState(20)
  const [avgSalary, setAvgSalary] = useState(60000)
  const [automationPercentage, setAutomationPercentage] = useState(60)

  // Calculated values
  const [calculations, setCalculations] = useState({
    timeSaved: 0,
    monthlySavings: 0,
    yearlyROI: 0,
    yearlySavings: 0,
    muesAICost: 0,
  })

  useEffect(() => {
    const hourlyRate = avgSalary / (52 * 40)
    const weeklyHours = teamSize * hoursPerWeek
    const automatedHours = weeklyHours * (automationPercentage / 100)
    const weeklyCostSavings = automatedHours * hourlyRate
    const monthlyCostSavings = weeklyCostSavings * 4.33
    const yearlyCostSavings = monthlyCostSavings * 12

    // Determine Mues AI annual cost based on tiered pricing
    let muesAIMonthly = 0
    if (teamSize <= 5) {
      // Basic plan
      muesAIMonthly = 149
    } else if (teamSize <= 20) {
      // Growth plan
      muesAIMonthly = 449
    } else {
      // Enterprise plan (estimated)
      muesAIMonthly = 800
    }

    const muesAICost = muesAIMonthly * 12 // annual cost

    const roi = yearlyCostSavings > muesAICost ? ((yearlyCostSavings - muesAICost) / muesAICost) * 100 : 0

    setCalculations({
      timeSaved: automatedHours * 52,
      monthlySavings: monthlyCostSavings,
      yearlyROI: roi,
      yearlySavings: yearlyCostSavings,
      muesAICost: muesAICost,
    })
  }, [teamSize, hoursPerWeek, avgSalary, automationPercentage])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US").format(Math.round(num))
  }

  return (
  <div className="max-w-[1168px] mx-auto px-0 py-0 mt-16 md:mt-24 lg:mt-32 mb-12 md:mb-18 lg:mb-24">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Input Section */}
      <div className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-xl font-medium text-primarty-black">Your Current Team Status</h2>

          <div className="space-y-6">
            <div>
              <label htmlFor="team-size" className="text-sm font-medium text-black-121212">
                Support team size
              </label>
              <div className="flex items-center mt-2 rounded-xl group border border-[#F4F4F4] hover:border-[rgba(0,137,255,0.20)] focus-within:!border-[#0089FF] focus-within:!outline-1 focus-within:!outline-[rgba(0,137,255,0.12)] focus-within:!outline-offset-2">
                <Input
                  id="team-size"
                  type="number"
                  value={teamSize}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    setTeamSize(value > 2000000 ? 2000000 : value);
                  }}
                  className="flex-1 border-0 rounded-r-none outline-none shadow-none bg-white"
                  height={40}
                  min={1}
                  max={2000000}
                />
                <span className="bg-gray-100 text-gray-600 text-sm px-3 py-2 rounded-r-xl flex items-center h-10 whitespace-nowrap border-0">
                  members
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="hours-week" className="text-sm font-medium text-black-121212">
                Hours per week on repetitive questions <span className="text-[#777] text-xs">(per teammember)</span>
              </label>
              <div className="flex items-center mt-2 rounded-xl group border border-[#F4F4F4] hover:border-[rgba(0,137,255,0.20)] focus-within:!border-[#0089FF] focus-within:!outline-1 focus-within:!outline-[rgba(0,137,255,0.12)] focus-within:!outline-offset-2">
                <Input
                  id="hours-week"
                  type="number"
                  value={hoursPerWeek}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    setHoursPerWeek(value > 168 ? 168 : value);
                  }}
                  className="flex-1 border-0 rounded-r-none outline-none shadow-none bg-white"
                  min={1}
                  max={168}
                  height={40}
                />
                <span className="bg-gray-100 text-gray-600 text-sm px-3 py-2 rounded-r-xl flex items-center h-10 whitespace-nowrap border-0">
                  hours
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="avg-salary" className="text-sm font-medium text-black-121212">
                Average agent salary
              </label>
              <div className="flex items-center mt-2 rounded-xl group border border-[#F4F4F4] hover:border-[rgba(0,137,255,0.20)] focus-within:!border-[#0089FF] focus-within:!outline-1 focus-within:!outline-[rgba(0,137,255,0.12)] focus-within:!outline-offset-2">
                <div className="relative flex w-full">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    id="avg-salary"
                    type="number"
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(Number(e.target.value))}
                    className="flex-1 border-0 rounded-r-none outline-none shadow-none bg-white"
                    padding="pl-8 pr-4 py-4"
                    min={30000}
                    height={40}
                  />
                </div>
                <span className="bg-gray-100 text-gray-600 text-sm px-3 py-2 rounded-r-xl flex items-center h-10 whitespace-nowrap border-0">
                  per year
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
            <p className="text-sm font-medium text-black-121212">Questions that can be done by Mues AI Cursor</p>
            <div className="mt-4">
              <div className="relative w-full">
                {/* Custom Slider Track */}
                <div className="relative h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  {/* Filled portion */}
                  <div 
                    className="absolute h-full bg-[#0089ff] rounded-full"
                    style={{
                      width: `${((automationPercentage - 30) / (90 - 30)) * 100}%`
                    }}
                  />
                </div>
                
                {/* Custom Slider Input (invisible but functional) */}
                <input
                  id="automation-percentage"
                  type="range"
                  value={automationPercentage}
                  onChange={(e) => setAutomationPercentage(Number(e.target.value))}
                  max={90}
                  min={30}
                  step={5}
                  className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
                />
                
                {/* Custom Thumb */}
                <div 
                  className="absolute top-1/2 w-5 h-5 bg-white border-2 border-[#0089ff] rounded-full transform -translate-y-1/2 -translate-x-1/2 shadow-md hover:scale-110 pointer-events-none"
                  style={{
                    left: `${((automationPercentage - 30) / (90 - 30)) * 100}%`
                  }}
                />
              </div>
              
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>30%</span>
                <span className="font-medium text-[#0089ff]">{automationPercentage}%</span>
                <span>90%</span>
              </div>
            </div>
          </div>
      </div>

      {/* Results Section */}
      <div className="border border-gray-200 p-8 bg-gray-50/50 leading-6 rounded-xl py-6 px-6">
          <h2 className="text-xl font-medium text-primarty-black mb-6">Your Results</h2>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mx-0 px-0">
              <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="text-2xl font-semibold text-primarty-black font-openRunde">{formatNumber(calculations.timeSaved)}</div>
                <div className="text-sm text-gray-600 mt-1">hours saved/year</div>
              </div>
              <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="text-2xl font-semibold text-primarty-black font-openRunde">
                  {formatCurrency(calculations.monthlySavings)}
                </div>
                <div className="text-sm text-gray-600 mt-1">monthly savings</div>
              </div>
            </div>

            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg py-6">
              <div className="text-4xl font-semibold text-primarty-black mb-2 font-openRunde">{formatNumber(calculations.yearlyROI)}%</div>
              <div className="text-lg font-medium text-black-121212">Annual ROI</div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-primarty-black mb-3">Cost Breakdown</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Savings</span>
                  <span className="font-medium text-[rgba(31,193,107,1)] font-openRunde">{formatCurrency(calculations.yearlySavings)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mues AI Annual Cost</span>
                  <span className="font-medium text-black-121212 font-openRunde">{formatCurrency(calculations.muesAICost)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between">
                  <span className="text-black-121212 font-medium">Net Annual Benefit</span>
                  <span className="font-semibold text-[rgba(0,137,255,1)] font-openRunde">
                    {formatCurrency(calculations.yearlySavings - calculations.muesAICost)}
                  </span>
                </div>
              </div>
            </div>

            
          </div>
        </div>
    </div>
  </div>
  )
}
