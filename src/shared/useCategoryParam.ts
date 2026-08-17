import { useParams } from 'react-router'
import { content } from '@/content'
import type { CategorySlug } from '@/content/types'

export function useCategoryParam(): CategorySlug | undefined {
  const { categoria } = useParams()
  if (!categoria) return undefined
  return content.isCategorySlug(categoria) ? categoria : undefined
}
