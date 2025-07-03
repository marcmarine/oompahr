import { memo } from 'react'
import { normalizeText } from './utils'

const accentMap: { [key: string]: string } = {
  a: '[aàá]',
  e: '[eèé]',
  i: '[iìíï]',
  o: '[oòó]',
  u: '[uùúü]',
}

export const HighlightedText = memo(
  ({
    text,
    highlight,
    className,
  }: {
    text: string
    highlight: string
    className?: string
  }) => {
    if (!highlight) return <>{text}</>

    const parts = getTextParts(text, highlight)
    const normalizedHighlight = normalizeText(highlight)

    return (
      <>
        {parts.map((part, index) => {
          const key = `${normalizeText(part)}-${index}`
          if (normalizeText(part) === normalizedHighlight) {
            return (
              <mark key={key} className={className || 'font-semibold'}>
                {part}
              </mark>
            )
          }
          return <span key={key} dangerouslySetInnerHTML={{ __html: part }} />
        })}
      </>
    )
  }
)

HighlightedText.displayName = 'HighlightedText'

function getTextParts(text: string, highlight: string): string[] {
  if (!highlight) return [text]

  const accentInsensitive = highlight
    .split('')
    .map((char) => accentMap[char.toLowerCase()] || char)
    .join('')

  return text.split(new RegExp(`(${accentInsensitive})`, 'gi'))
}

export function getHighlightedText(
  text: string,
  highlight: string,
  returnType: 'string' | 'jsx' = 'jsx',
  startIndex: number = 0
) {
  if (!highlight) return returnType === 'string' ? text : <>{text}</>

  const parts = getTextParts(text, highlight)
  const normalizedHighlight = normalizeText(highlight)
  let count = startIndex

  if (returnType === 'string') {
    return parts
      .map((part) => {
        if (normalizeText(part) === normalizedHighlight) {
          count++
          return `<mark id='${count}' tabIndex='1'>${part}</mark>`
        }
        return part
      })
      .join('')
  }

  return <HighlightedText text={text} highlight={highlight} />
}
