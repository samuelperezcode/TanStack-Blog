import Calculos from './Calculos'
import { Card } from './Card'
import { content } from '../lib/data'

export function Main () {
  return (
    <section>
      <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, odio!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni hic sit dolor corporis nisi. Veniam, maxime ipsa repellendus repudiandae quisquam at impedit fuga eaque. Impedit neque quibusdam id cumque recusandae iste facere odio aliquid cum totam, perferendis illum. Voluptates maxime veritatis quod! Vitae ipsum nihil perferendis tenetur, eius illo magni.</p>

      <Calculos />
      {
        content.map(item => (
          <Card
            name={item.name}
            cover={item.imgURL}
            email={item.email}
            movil={item.phone}
            key={item.id}
          />
        ))
      }
    </section>
  )
}
