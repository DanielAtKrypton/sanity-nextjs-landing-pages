import EmbedHTML from './EmbedHTML'
import Figure from './Figure'

const serializers = {
  types: {
    embedHTML: EmbedHTML,
    figure: Figure
  },
  code: props => (
    <pre data-language={props.node.language}>
      <code>{props.node.code}</code>
    </pre>
  )
}

export default serializers
