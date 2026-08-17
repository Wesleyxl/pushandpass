import { mockContent } from './mock'

export type ContentRepository = typeof mockContent

export const content: ContentRepository = mockContent
