// app/portfolio/[category]/page.tsx

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import GalleryScroller from '../../../components/GalleryScroller'

// ✅ Dit is belangrijk: server-side type
export type Props = {
  params: {
    category: 'concerts' | 'events' | 'misc' | 'all'
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Portfolio – ${params.category}`,
  }
}

export default function PortfolioPage({ params }: Props) {
  const validCategories = ['concerts', 'events', 'misc', 'all']
  const category = params.category

  if (!validCategories.includes(category)) {
    notFound()
  }

  return <GalleryScroller category={category} />
}