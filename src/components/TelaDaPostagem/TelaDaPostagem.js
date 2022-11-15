import React from 'react'
import {ContainerPostagem, Image, Description} from './styles'

const TelaDaPostagem = (props) => {
  return  props.imagem.length>0 && props.descricao.length>0 ? (   <ContainerPostagem>
      <h2>{props.titulo}</h2>
            <Image src={props.imagem} alt='drone view'/>
            <Description>{props.descricao}</Description>
    </ContainerPostagem>
  ) : (
    <ContainerPostagem>
    <h2>{props.titulo}</h2>
          <Image src={"https://mobimg.b-cdn.net/pic/v2/gallery/preview/gory-ozera-pejzazh-33751.jpg"} alt='drone view'/>
          <Description>Sua Descrução</Description>
  </ContainerPostagem>
  )
}

export default TelaDaPostagem