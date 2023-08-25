import { useRouter } from 'next/router';
import Link from 'next/link';

const sidebar_items = [
  {
    id: '1',
    icon: 'ri-home-line',
    item: 'Home',
    route: '/',
  },

  {
    id: '2',
    icon: 'ri-wallet-line',
    item: 'Report & Earn',
    route: '/report-earn',
  },

  {
    id: '3',
    icon: 'ri-arrow-up-circle-line',
    item: 'Vote',
    route: '/vote',
  },
];

function Sidebar({ openSidebar }) {
  const router = useRouter();
  // console.log(router)

  return (
    <div
      className={`
        fixed ${openSidebar ? 'left-0' : 'left-[-500px]'}
        md:sticky md:top-0 bg-white md:w-[350px] shadow
        h-[100vh] transition-all duration-300 ease-in-out
      `}
    >
      <div className={`py-12`}>
        {sidebar_items.map((sidebar_item, index) => {
          const { icon, item, route } = sidebar_item;
          return (
            <Link key={index} href={`${route}`}>
              <a
                href={''}
                className={`transition-all duration-300 ease-in-out cursor-pointer group ${
                  router.route === route && 'bg-resblue'
                } hover:bg-resblue py-3 px-6 lg:px-12 mb-4 flex items-center`}
              >
                <i
                  className={`transition-all duration-300 ease-in-out text-xl mr-4 ${
                    router.route === route && 'text-white'
                  } group-hover:text-white ${icon}`}
                ></i>
                <p
                  className={`transition-all duration-300 ease-in-out ${
                    router.route === route && 'text-white'
                  } group-hover:text-white`}
                >
                  {item}
                </p>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
