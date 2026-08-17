import { useEffect } from 'react'

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const previous = document.title
    document.title = title.includes('Push & Pass') ? title : `${title} | Push & Pass`

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.append(meta)
    }
    if (description) meta.setAttribute('content', description)

    return () => {
      document.title = previous
    }
  }, [title, description])
}
