import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import './Header.css';

const Drawer = ({ setOpenDrawer, user, openDrawer }) => {
  return (
    <div
      className={`slide ${openDrawer ? 'open' : ''} min-h-[100vh] w-[70vw]  overflow-hidden bg-california-50 p-4 text-sushi-700 lg:w-[30vw]`}
    >
      <div className='flex justify-end'>
        <button onClick={() => setOpenDrawer(false)}>
          <RxCross2 />
        </button>
      </div>

      {user && (
        <div className='mb-4 flex items-center gap-3 border-b pb-4'>
          <Image
            src='https://media.newyorker.com/photos/644ab20d87ae684cabca21f2/master/pass/knight-Erling-Haaland.jpg'
            className='h-10 w-10 rounded-full'
            width={48}
            height={48}
          />

          <div className='flex flex-col'>
            <span>Hello, Sayed </span>
            <span className='text-sm text-sushi-600'>93, 2/B, Panchlaish</span>
          </div>
        </div>
      )}

      {user ? (
        <div className='mt-6 flex flex-col'>
          <Link
            className='rounded-md px-2 py-0.5 transition-all hover:bg-sushi-300/50 lg:py-1'
            href='/'
          >
            Profile
          </Link>
          <Link
            className='rounded-md px-2 py-0.5 transition-all hover:bg-sushi-300/50 lg:py-1'
            href='/'
          >
            Order History
          </Link>
          <Link
            className='rounded-md px-2 py-0.5 transition-all hover:bg-sushi-300/50 lg:py-1'
            href='/'
          >
            Current Orders
          </Link>
          <Link
            className='rounded-md px-2 py-0.5 transition-all hover:bg-sushi-300/50 lg:py-1'
            href='/'
          >
            Favorites
          </Link>
          <Link
            className='rounded-md px-2 py-0.5 transition-all hover:bg-sushi-300/50 lg:py-1'
            href='/'
          >
            Log Out
          </Link>
        </div>
      ) : (
        <div className='mt-6 flex flex-col'>
          <div className='my-3 flex w-full rounded-full bg-sushi-100 px-2 py-2 lg:hidden'>
            <input
              type='text'
              placeholder='Enter Your Address'
              className='mx-2 w-full bg-transparent outline-none placeholder:text-sushi-800'
            />
            <button>
              <FaSearch />
            </button>
          </div>
          <div className='flex flex-col px-4'>
            <Link href='/'>Login</Link>
            <Link href='/'>Sign Up</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drawer;
