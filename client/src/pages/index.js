import Layout from '../containers/Layout';
import { HomeContainer } from '../components';

export default function Home({ items }) {
  return (
    <Layout>
      <HomeContainer items={items} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const items = [
    {
      id: '1',
      name: 'Bored Ape Yatch',
      address: '0x1A....3985',
      uploaded: '3 hours ago',
      reviews: '1.5k',
      rating: '4.5',
    },

    {
      id: '2',
      name: 'Lee weht',
      address: '0x1A....6209',
      uploaded: '6 hours ago',
      reviews: '2.3k',
      rating: '4.0',
    },

    {
      id: '3',
      name: 'Golden leph',
      address: '0x1A....9153',
      uploaded: '7 hours ago',
      reviews: '1.1k',
      rating: '4.5',
    },

    {
      id: '4',
      name: 'Crypto Kittens',
      address: '0x1A....3455',
      uploaded: '7 hours ago',
      reviews: '2.0k',
      rating: '4.5',
    },

    {
      id: '5',
      name: 'Crypto Kittens',
      address: '0x1A....2035',
      uploaded: '7 hours ago',
      reviews: '0.8k',
      rating: '4.5',
    },

    {
      id: '6',
      name: 'Crypto Punk',
      address: '0x1A....7835',
      uploaded: '8 hours ago',
      reviews: '0.8k',
      rating: '4.5',
    },

    {
      id: '7',
      name: 'Core Crypto',
      address: '0x1A....0150',
      uploaded: '8 hours ago',
      reviews: '0.8k',
      rating: '4.5',
    },

    {
      id: '8',
      name: 'Ethereum Dives',
      address: '0x1A....7124',
      uploaded: '9 hours ago',
      reviews: '0.8k',
      rating: '4.5',
    },

    {
      id: '9',
      name: 'Ethereum Dives',
      address: '0x1A....7124',
      uploaded: '9 hours ago',
      reviews: '0.8k',
      rating: '4.5',
    },

    {
      id: '10',
      name: 'Ethereum Dives',
      address: '0x1A....7124',
      uploaded: '9 hours ago',
      reviews: '0.8k',
      rating: '4.5',
    },

    {
      id: '11',
      name: 'Ethereum Dives',
      address: '0x1A....7124',
      uploaded: '9 hours ago',
      reviews: '0.8k',
      rating: '4.5',
    },

    {
      id: '12',
      name: 'Eagle Eye',
      address: '0x1A....0005',
      uploaded: '17 hours ago',
      reviews: '8.8k',
      rating: '4.5',
    },
  ];

  return {
    props: {
      items,
    },
  };
};
