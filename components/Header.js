import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
  const Router = useRouter();
  return (
    <div className="fixed w-full h-28 shadow-sm flex justify-between items-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 z-10">
      <a href="/">
        <img src="/assets/b17f83c0-bb54-4d46-b7dd-b46445749e0e.png" className="h-20 sm:h-20 md:h-24" alt="logo" />
      </a>
      <div>
        <ul className="flex">
          <Link href="/">
            <li className={`${Router.asPath === "/" ? 'bg-gray-100 text-green-500' : 'bg-transparent text-white'} transition duration-500 ease-in-out mx-1 sm:mx-1 lg:mx-3 px-2 sm:px-2 lg:px-3 py-1 hover:bg-gray-100 hover:text-green-500 rounded font-semibold cursor-pointer`}>
              Inicio
            </li>
          </Link>
          <Link href="/fotos">
            <li className={`${Router.asPath === "/fotos" ? 'bg-gray-100 text-green-500' : 'bg-transparent text-white'} transition duration-500 ease-in-out mx-1 sm:mx-1 lg:mx-3 px-2 sm:px-2 lg:px-3 py-1 hover:bg-gray-100 hover:text-green-500 rounded font-semibold cursor-pointer`}>
              Fotos
            </li>
          </Link>
          <Link href="/contacto">
            <li className={`${Router.asPath === "/contacto" ? 'bg-gray-100 text-green-500' : 'bg-transparent text-white'} transition duration-500 ease-in-out mx-1 sm:mx-1 lg:mx-3 px-2 sm:px-2 lg:px-3 py-1 hover:bg-gray-100 hover:text-green-500 rounded font-semibold cursor-pointer`}>
              Contacto
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Header;
