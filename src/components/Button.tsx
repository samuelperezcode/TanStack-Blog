import '../styles/Button.css'
export default function Button ({ manejarClick, text }: { manejarClick: () => void, text: string }) {
  return (
    <button className='btn' onClick={manejarClick}>
        {text}
    </button>
  )
}
