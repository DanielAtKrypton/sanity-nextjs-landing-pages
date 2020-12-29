import EmbedHTML from './EmbedHTML'
import Figure from './Figure'

const serializers = {
  types: {
    embedHTML: EmbedHTML,
    figure: Figure
  },
  marks: {
    internalLink: ({mark, children}) => {
      const {slug = {}} = mark
      const href = `/${slug.current}`
      return <a href={href}>{children}</a>
    }
  }
}

export default serializers
