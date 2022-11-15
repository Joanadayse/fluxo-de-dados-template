
import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {

  

  const trocaImagem= (event) =>{
   props.setImagem (event.target.value)
  };

  

  const trocaDescricao= (event)=>{
    props.setDescricao (event.target.value)
  };

  const trocaTitulo = (event) => {
    props.setTitulo(event.target.value);
  };

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" 
          value={props.imagem}
          onChange={trocaImagem
      }/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" 
          value={props.descricao}
          onChange={ trocaDescricao} />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Titulo:
          <Input id="descricao" 
          value={props.titulo}
          onChange={trocaTitulo} />
        </StyledLabel>

      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro