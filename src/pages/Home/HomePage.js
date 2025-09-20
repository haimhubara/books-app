import { Hero } from "./components/Hero"
import { FeaturedProducts } from "./components/FeaturedProructs"
import { Testimonials } from "./components/Testimonials"
import { Faq } from "./components/Faq"
import { UseTitle } from "../../hooks/UseTitle"

export const HomePage = () => {
  UseTitle("CodeBook")
  return (
    <main>
        <Hero/>
        <FeaturedProducts/>
        <Testimonials/>
        <Faq/>
    </main>
  )
}
