import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { SobreSection } from '@/components/SobreSection'
import { ContatoSection } from '@/components/ContatoSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SobreSection />
        <ContatoSection />
      </main>
    </>
  )
}
