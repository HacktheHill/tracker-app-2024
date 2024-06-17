import { DocsLayout } from 'fumadocs-ui/layout'
import type { ReactNode } from 'react'
import { pageTree } from '@/app/source'

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={pageTree} nav={{ title: 'Hack the Hill Docs' }}>
      {children}
    </DocsLayout>
  )
}
