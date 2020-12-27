const Main = () => (
  <>
    <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 text-white absolute mt-28 sm:mt-28">
      <div className="mt-14 sm:mt-14 md:mt-20 lg:mt-28 xl:mt-36 text-center">
        <h1 className="text-3xl sm:text-3xl lg:text-5xl font-semibold sm:font-semibold lg:font-bold text-shadow">El Rincón Di Calcio</h1>
        <span className="block text-lg pt-4 text-shadow mb-12">
          No pierdas tiempo, el momento es ahora. Estamos en 518 entre 133 y 134.
        </span>
        <a className="transition duration-500 ease-in-out mx-1 sm:mx-1 lg:mx-2 px-8 sm:px-8 lg:px-10 xl:px-14 py-3 text-white bg-green-600 hover:bg-green-700 rounded font-semibold cursor-pointer" href="https://www.google.com/maps?q=-34.9136515,-58.0123882&z=17&hl=en" target="_blank">
          Cómo llegar
        </a>
        <div className="mt-16 sm:mt-16 lg:mt-32 bg-white shadow py-6 rounded max-w-xl mx-auto">
          <h3 className="text-base mb-1 text-gray-500">ABIERTA LA INSCRIPCIÓN</h3>
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-semibold sm:font-semibold lg:font-bold mb-2 text-gray-900">
            Escuelita de verano
          </h1>
          <div className="flex flex-col mb-6">
            <span className="mb-2 text-gray-700">Inicia el 05/01/2021 todos los martes y jueves</span>
            <span className="mb-1 text-gray-700">• Niños/as de 4 a 6 años: 09.30 a 10.30hs</span>
            <span className="text-gray-700">• Niños/as de 7 a 10 años: 10.30 a 11.30hs</span>
          </div>
          <a className="transition duration-500 ease-in-out mx-1 sm:mx-1 lg:mx-2 px-10 sm:px-10 lg:px-12 xl:px-16 py-2 text-white bg-green-500 hover:bg-green-600 rounded font-semibold cursor-pointer" href="https://api.whatsapp.com/send?phone=+5492216027620&text=Hola!%20quisiera%20anotarme%20a%20la%20escuelita%20de%20verano%20que%20comienza%20el%2005/01/2021" target="_blank">
            INSCRIBIRME
          </a>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .text-shadow {
          text-shadow: 0 0 10px #00000042;
        }
      `}
    </style>
  </>
);
export default Main;
