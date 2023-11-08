import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffer = () => {
  return (
    <section className="flex justify-between
    items-center max-xl:flex-col-reverse
    gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer"
        width={773}
        height={687} 
        className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1
          flex-col">
          <h2 className="font-palanquin 
          text-4xl capitalize font-bold
          lg:max-w-lg">
            <span 
              className="text-coral-red ">
              Special
              </span> Offer
          </h2>
          <p className="mt-4 lg:max-w-lg
          info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatem quis officiis nobis deleniti consequuntur possimus praesentium consectetur, itaque accusantium.</p>
            <p className="mt-6 lg:max-w-lg
          info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit temporibus asperiores quae fugiat vel id sunt maiores veniam voluptatum cumque!</p>
          <div className="mt-11 gap-4 flex">
            <Button lable="Shop now"
            iconURL={arrowRight} />
            
            <Button
              lable="Learn more"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </div>
        </div>
    </section>
  )
}

export default SpecialOffer

