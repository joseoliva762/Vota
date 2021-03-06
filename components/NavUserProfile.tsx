import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { signOut } from "next-auth/react"
import { Session } from 'next-auth'
import { useTranslations } from 'hooks/useTranslations';

const chevronIcon = (
  <svg className='text-gray-900' fill='currentColor' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
)

export function NavUserProfile ({ user }: { user: Session['user'] }) {
  const { LOGOUT } = useTranslations();
  const { name, image } = user ?? {};
  const handleSignOut = () => signOut();
  console.log({ user, image });

  return (
    <Menu as='div' className='relative ml-3'>
      <div className='flex items-center justify-center h-10'>
        <Menu.Button className='flex items-center text-sm rounded-full hover:opacity-80'>
          <span className='sr-only'>Abrir preferencias</span>
          <img
            className='w-8 h-8 rounded-full'
            src={image ?? undefined}
            alt=''
          />
          <span className='ml-2 font-semibold'>{name}</span>
          {chevronIcon}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'>
        <Menu.Items className='p-2 absolute right-0 z-10 block mt-3 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-44 ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={handleSignOut}
                className={`${
                  active ? 'bg-js' : ''
                } group flex gap-2 rounded-md items-center w-full px-4 py-2 text-sm font-semibold text-gray-900 `}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' viewBox="0 0 24 24" ><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
                { LOGOUT }
              </button>
            )}
          </Menu.Item>
   
        </Menu.Items>
      </Transition>
    </Menu>
  );
}