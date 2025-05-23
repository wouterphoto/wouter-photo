// app/portfolio/[category]/page.tsx

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import GalleryScroller from '../../../components/GalleryScroller'

// ✅ Typing van route params
type Props = {
  params: {
    category: 'concerts' | 'events' | 'misc' | 'all'
  }
}

// ✅ Metadata per pagina
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Portfolio - ${params.category}`,
  }
}

// ✅ Pagina zelf
export default function PortfolioPage({ params }: Props) {
  const validCategories = ['concerts', 'events', 'misc', 'all']
  const category = params.category

  if (!validCategories.includes(category)) {
    notFound()
  }

  return <GalleryScroller category={category} />
}