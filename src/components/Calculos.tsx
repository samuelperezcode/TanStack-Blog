import Calculator from './Calculator'

export default function Calculos () {
  return (
    <ul className='lista'>
      <Calculator
        num1={2}
        num2={3}
        variant="sum"
      />
      <Calculator
        num1={7}
        num2={1}
        variant="mult"
      />
    </ul>
  )
}
