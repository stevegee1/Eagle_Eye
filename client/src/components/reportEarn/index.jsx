import { Section, Aside, H3, InputText, Button } from '../../shared';

const reportDetails = [
  {
    id: 'address',
    labelText: 'Address or Domain',
    placeholder: 'Enter address or URL',
    type: 'text',
    name: 'address',
  },

  {
    id: 'scam',
    labelText: 'Type of Scam',
    placeholder: 'Enter Type e.g Phishing',
    type: 'text',
    name: 'scam',
  },

  {
    id: 'description',
    labelText: 'Description',
    placeholder: 'Enter description...',
    type: 'text',
    name: 'description',
  },

  {
    id: 'losses',
    labelText: 'Report Losses',
    placeholder: 'Enter loss amount',
    type: 'text',
    name: 'losses',
  },

  {
    id: 'asssets',
    labelText: 'Assets',
    placeholder: 'Eg. USD, ETH',
    type: 'text',
    name: 'assets',
  },

  {
    id: 'evidence',
    labelText: 'Upload Evidence',
    placeholder: 'Enter source or URL',
    type: 'text',
    name: 'evidence',
  },

  {
    id: 'image',
    labelText: 'Image',
    placeholder: 'Select image',
    type: 'text',
    name: 'image',
  },
];

function EarnContainer() {
  return (
    <Section className={`h-screen overflow-hidden w-[100%] bg-white`}>
      <Aside>
        <div className="py-4">
          <div className="border-gray border-b">
            <H3
              className={`w-[100%] max-w-[500px]`}
              content={`Report and Earn`}
            />
          </div>

          <div className="my-8 w-[100%] max-w-[600px]">
            {reportDetails.slice(0, 3).map((report, index) => {
              const { name, labelText, placeholder, id, type } = report;
              return (
                <InputText
                  key={index}
                  name={name}
                  labelText={labelText}
                  placeholder={placeholder}
                  type={type}
                />
              );
            })}

            <div className="flex justify-between items-center">
              {reportDetails.slice(3, 5).map((report, index) => {
                const { name, labelText, placeholder, id, type } = report;
                return (
                  <div key={index} className={`w-[47%]`}>
                    <InputText
                      name={name}
                      labelText={labelText}
                      placeholder={placeholder}
                      type={type}
                    />
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between items-center">
              {reportDetails.slice(5).map((report, index) => {
                const { name, labelText, placeholder, id, type } = report;
                return (
                  <div key={index} className={`w-[47%]`}>
                    <InputText
                      name={name}
                      labelText={labelText}
                      placeholder={placeholder}
                      type={type}
                    />
                  </div>
                );
              })}
            </div>

            <div className='my-4'>
              <label
                for="default-toggle-size"
                className="inline-flex relative items-center mb-5 cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="default-toggle-size"
                  className="sr-only peer"
                />
                <div className="mr-3 w-11 h-6 bg-gray peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-resblue"></div>
                <span className="text-sm">
                  I accept to be contacted for my report
                </span>
              </label>
            </div>

            <Button className={`bg-resblue`} content={`Submit Report`}/>
          </div>
        </div>
      </Aside>
    </Section>
  );
}

export default EarnContainer;
