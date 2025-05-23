// app/portfolio/[category]/page.tsx

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import GalleryScroller from '../../../components/GalleryScroller'

type Category = 'concerts' | 'events' | 'misc' | 'all'

type Props = {
  params: {
    category: Category
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Portfolio – ${params.category}`,
  }
}

export default function PortfolioPage({ params }: Props) {
  const validCategories: Category[] = ['concerts', 'events', 'misc', 'all']

  if (!validCategories.includes(params.category)) {
    notFound()
  }

  return <GalleryScroller category={params.category} />
}