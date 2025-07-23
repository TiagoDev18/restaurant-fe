import Footer from "@/components/Footer";
import { InputWithLabel } from "@/components/InputWithLabel";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <div className="relative bg-[url('/wallpaper.jpg')] bg-cover bg-center h-screen flex flex-col text-white">
        <div className="absolute inset-0 bg-black/60"></div>
        <Navbar />
        <div className="flex flex-col gap-6 items-center justify-center h-screen">
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl font-bold">Bem-vindo ao Iron Grill</h1>
            <p className="mt-4 text-2xl">
              Cortes nobres. Brasa no ponto. Sabor incomparável. <br />A
              verdadeira experiência steakhouse.
            </p>
          </div>
          <div className="relative z-10 flex items-center justify-center gap-4">
            <Button
              variant="secondary"
              onClick={() => {
                const target = document.getElementById("reserva");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Reservar mesa
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                const target = document.getElementById("menu");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Ver Menu
            </Button>
          </div>
        </div>
      </div>
      <div
        id="restaurante"
        className="relative bg-[url('/wallpaperDuo.jpg')] bg-cover bg-center flex items-center min-h-screen text-white"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 ml-10 flex flex-col gap-2">
          <p className="text-4xl font-bold">Sobre o Iron Grill</p>
          <p className="text-lg">
            No Iron Grill, celebramos o sabor autêntico da brasa. <br />
            Usamos apenas carnes nobres, temperadas com precisão e grelhadas à
            perfeição. <br />
            Criamos um espaço sofisticado e acolhedor para transformar cada
            refeição numa experiência memorável.
          </p>
        </div>
      </div>
      <div
        id="menu"
        className="relative bg-[url('/wallpaperThree.jpg')] bg-cover bg-center flex min-h-screen text-white"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen gap-4">
          <p className="text-4xl"> O nosso Menu</p>
          <img className="h-100" src="cardapio.png" />
        </div>
      </div>
      <div className="relative bg-[url('/wallpaper.jpg')] bg-cover bg-center flex min-h-screen text-white">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen gap-4">
          <form className="flex flex-col items-center p-6 w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] bg-[#1e1e1e] text-white rounded-lg shadow-md">
            <p
              id="reserva"
              className="text-4xl mb-6 text-center text-[#d2a679]"
            >
              Reserva já a tua mesa
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="flex flex-col gap-4">
                <InputWithLabel
                  label="Nome"
                  htmlFor="name"
                  name="name"
                  type="text"
                  id="name"
                />
                <InputWithLabel
                  label="Nº de Pessoas"
                  htmlFor="quantityOfPeople"
                  name="quantityOfPeople"
                  type="number"
                  id="quantityOfPeople"
                />
              </div>
              <div className="flex flex-col gap-4">
                <InputWithLabel
                  label="Data"
                  htmlFor="date"
                  name="date"
                  type="date"
                  id="date"
                />
                <InputWithLabel
                  label="Hora"
                  htmlFor="hour"
                  name="hour"
                  type="time"
                  id="hour"
                />
              </div>
            </div>
            <Button
              variant="secondary"
              className="mt-6 bg-[#a56c43] text-white hover:bg-[#8b5934] px-6 py-2 rounded"
            >
              Reservar
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
