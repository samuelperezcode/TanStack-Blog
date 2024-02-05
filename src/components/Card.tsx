interface CardProps {
  name: string
  movil: string
  email: string
  cover: string
}

export function Card ({ name, movil, email, cover }: CardProps) {
  return (
  <div className='containerd'>
    <div className='card'>
      <div className='row'>
        <div className='col-lg-3'>
          <img src={cover} alt={cover} />
        </div>
        <div className='col-lg-9'>
          <div className='container'>
            <div>
              <h4>
                <span className='text-warning'>Nombre:</span>
                <u>{name}</u>
              </h4>
            </div>
            <div>
              <h4>
                <span className='text-warning'>Phone:</span>
                <u>{movil}</u>
              </h4>
            </div>
            <div>
              <h4>
                <span className='text-warning'>Email:</span>
                <u>{email}</u>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
