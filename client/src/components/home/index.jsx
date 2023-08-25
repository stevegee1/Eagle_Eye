import { Section, Aside, AnchorButton, FourStars } from '../../shared';

const Card = ({ item }) => {
  const { name, address, rating, uploaded, reviews } = item;
  return (
    <div className="w-[100%] mb-2 sm:w-[45%] md:w-[49%] lg:w-[33%] bg-white">
      <div className="border-b border-gray px-4 py-2 flex justify-between items-center">
        <h4>{name}</h4>
        <small>{address}</small>
      </div>

      <div className="px-4 py-2">
        <div className="mb-6 flex justify-between items-start">
          <small className="">{uploaded}</small>
          <div className="flex flex-col items-end">
            <div className="flex justify-between items-center mb-1">
              <small className='mr-2'>{rating}</small> <FourStars />
            </div>
            <small>{`${reviews} Reviews`}</small>
          </div>
        </div>

        <div className="w-[100%]">
          <AnchorButton
            href={'#'}
            className={`bg-resblue`}
            content={'Check Reviews'}
          />
        </div>
      </div>
    </div>
  );
};

function HomeContainer({ items }) {
  console.log(items);
  return (
    <Section className={`w-[100%] bg-gray`}>
      <Aside>
        <div className="py-4">
          <div className="flex flex-wrap justify-between items-center">
            {items?.map((item, index) => {
              return <Card key={index} item={item} />;
            })}
          </div>
        </div>
      </Aside>
    </Section>
  );
}

export default HomeContainer;
