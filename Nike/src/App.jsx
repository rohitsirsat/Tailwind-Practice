import {
  CustomerReviews,
    Footer,
    Hero,
    PopularProducts,
    Services,
    SpecialOffer,
    Subscribe,
    SuperQuality 
} from "./sections"
import Nav from "./components/Nav"


export default function App() {
  return (
      <main className="relative">
        <Nav/>
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts/>
        </section>
        <section className="padding">
          <SuperQuality/>
        </section>
        <section className="padding-x py-10">
          <Services/>
        </section>
        <section className="padding">
          <SpecialOffer/>
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews/>
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe/>
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer/>
        </section>
      </main>
    )
}

// const App = () => (
//   <main className="relative">
//    Nav
//     <section className="xl:padding-l wide:padding-r padding-b">
//       Hero
//     </section>
//     <section className="padding">
//       Popular Products  
//     </section>
//     <section className="padding">
//       super Quality 
//     </section> 
//     <section className="padding">
//       Services  
//     </section> 
//     <section className="padding">
//       Special offers  
//     </section>  
//   </main>
// );