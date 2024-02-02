interface CalculatorProps {
  variant: 'sum' | 'mult' | 'div' | 'subs'
  num1: number
  num2: number
}

export default function Calculator ({ num1, num2, variant }: CalculatorProps) {
  const getResult = () => {
    const result = num1 + num2
    return result.toString()
  }
  return (
    <div>
      <h3>Result: {getResult()}</h3>
    </div>
  )
}