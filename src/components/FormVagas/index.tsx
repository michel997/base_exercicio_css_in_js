import { FormEvent, useState } from 'react'

import { FormularioEBAC, BotaoEBAC, InputEBAC } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormularioEBAC onSubmit={aoEnviarForm}>
      <InputEBAC
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoEBAC type="submit">Pesquisar</BotaoEBAC>
    </FormularioEBAC>
  )
}
export default FormVagas
