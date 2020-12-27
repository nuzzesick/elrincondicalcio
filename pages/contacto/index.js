import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Contacto = () => (
  <>
    <Header />
    <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 text-white absolute mt-28 sm:mt-28">
      <div className="mt-14 sm:mt-14 md:mt-20 lg:mt-24 xl:mt-28 text-center">
        <h1 className="text-3xl sm:text-3xl lg:text-4xl font-semibold sm:font-semibold lg:font-bold text-shadow">Contacto</h1>
        <div className="mt-12 flex flex-col sm:mt-12 lg:mt-16 bg-white shadow py-6 rounded max-w-xl mx-auto">
          <span className="mb-2 text-gray-700">• Dirección: 518 entre 133 y 134</span>
          <span className="mb-1 text-gray-700">
            • WhatsApp: 
            <a href="https://api.whatsapp.com/send?phone=+5492216152534"> 2216152534 </a>
              | 
            <a href="https://api.whatsapp.com/send?phone=+5492216027620"> 2216027620</a>
          </span>
          <span className="text-gray-700">
            • Instagram: 
            <a href="https://instagram.com/elrincondicalcio" target="_blank"> elrincondicalcio</a>
          </span>
          <span className="text-gray-700">
            • Facebook:
            <a href="https://www.facebook.com/Elrincondicalcio-107129384576167" target="_blank">
              &nbsp;Elrincondicalcio
            </a>
          </span>
          <span className="text-gray-700">• Mail: <a href="mailto:elrincondicalcio@gmail.com">elrincondicalcio@gmail.com</a></span>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
export default Contacto;
