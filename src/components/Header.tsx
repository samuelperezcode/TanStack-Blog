import { HiHand } from 'react-icons/hi'
import Button from './Button'
import { useState } from 'react'

export function Header () {
  const [text, setText] = useState<string>('Enviar')

  const manejarClick = () => {
    setText('Enviando 🔄️')
    setTimeout(() => {
      setText('Done ✅')
      setTimeout(() => {
        setText('Enviar')
      }, 1000)
    }, 3000)
  }

  return (
    <header>
      <HiHand color='#fff' size={64}/>
      <h1>Hello</h1>
      <Button manejarClick={manejarClick} text={text} />
    </header>
  )
}
