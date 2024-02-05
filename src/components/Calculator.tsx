interface CalculatorProps {
  variant: 'sum' | 'mult' | 'div' | 'subs'
  num1: number
  num2: number
}

export default function Calculator ({ num1, num2, variant }: CalculatorProps) {
  if (variant !== null) {
    console.log({ variant })
  }
  const getResult = () => {
    const result = num1 + num2
    return result.toString()
  }
  return (
    <div>
      <h3>Variante: {variant}</h3>
      <h3>Result: {getResult()}</h3>
    </div>
  )
}
