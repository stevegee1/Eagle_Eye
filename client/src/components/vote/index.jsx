import { Section, Aside, H3, SubTitle, Button } from '../../shared';

function VoteContainer() {
  return (
    <Section className={`h-screen overflow-hidden w-[100%] bg-white`}>
      <Aside>
        <div className="py-4">
          <div className="border-gray border-b">
            <H3
              className={`w-[100%] max-w-[500px]`}
              content={`On- Chain voting on community treasury by token holders`}
            />
          </div>

          <div className="mt-8 border-gray border-b">
            <SubTitle
              className={`w-[100%]  max-w-[600px]`}
              content={`Proposals are strictly to strengthen security of the network`}
            />
          </div>

          <div className="flex flex-col my-8">
            <div class="flex items-center mb-4">
              <input
                disabled=""
                id="disabled-radio-1"
                type="checkbox"
                value=""
                name="disabled-radio"
                className="w-4 h-4 text-resblue bg-white rounded-xl"
              />
              <label
                for="disabled-radio-1"
                class="ml-2 font-medium text-gray-400 dark:text-gray-500"
              >
                Big bounty
              </label>
            </div>
            <div class="flex items-center">
              <input
                disabled=""
                id="disabled-radio-2"
                type="checkbox"
                value=""
                name="disabled-radio"
                className="w-4 h-4 text-resblue bg-white"
              />
              <label
                for="disabled-radio-2"
                class="ml-2 font-medium text-gray-400 dark:text-gray-500"
              >
                File law suit
              </label>
            </div>
          </div>


          <Button className={`mr-4 bg-laurel`} content={'Submit'} />
          {/* <Button className={`mr-4 bg-west`} content={'Connect'} /> */}
        </div>
      </Aside>
    </Section>
  );
}

export default VoteContainer;
