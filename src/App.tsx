import { useState } from 'react'
import './styles/App.css'
import Button from './components/Button'

function App () {
  const [text, setText] = useState<string>('enviar')

  const manejarClick = () => {
    setText('afsdf')
  }

  const otro = () => {

  }

  const year = new Date().getFullYear()

  return (
    <main className='container'>
      <header>
        <h1>Hello</h1>
        <Button manejarClick={manejarClick} text={text} />
        <Button manejarClick={otro} text={'Otro'} />
      </header>
      <section>
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, odio!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni hic sit dolor corporis nisi. Veniam, maxime ipsa repellendus repudiandae quisquam at impedit fuga eaque. Impedit neque quibusdam id cumque recusandae iste facere odio aliquid cum totam, perferendis illum. Voluptates maxime veritatis quod! Vitae ipsum nihil perferendis tenetur, eius illo magni.</p>

      </section>
      <footer>
        <p> ©️ {year} Samuel Perez Martinez</p>
      </footer>
    </main>
  )
}

export default App
