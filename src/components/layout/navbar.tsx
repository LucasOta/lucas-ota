import Link from 'next/link';

const Navbar = () => {
  const menu = [
    { title: 'Experience', path: 'experience' },
    { title: 'Projects', path: 'projects' },
    { title: 'Contact', path: 'contact' },
  ];

  return (
    <nav className='relative flex items-center justify-between p-4 lg:px-6'>
      <div className='block flex-none md:hidden'>
        <p>Mobile Navbar</p>
      </div>

      <div className='flex w-full justify-end'>
        <ul className='hidden gap-6 text-sm md:flex md:items-center'>
          {menu.map((item) => (
            <li key={item.title}>
              <Link href={item.path} className='hover:opacity-90'>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
