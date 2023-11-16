import { VagasEBAC, TituloVagasEBAC, LinkVagasEBAC } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagasEBAC>
    <TituloVagasEBAC>{props.titulo}</TituloVagasEBAC>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <LinkVagasEBAC href="#">Ver detalhes e candidatar-se</LinkVagasEBAC>
  </VagasEBAC>
)

export default Vaga
