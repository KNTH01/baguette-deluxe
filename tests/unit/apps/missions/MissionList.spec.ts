import { shallowMount, createLocalVue } from '@vue/test-utils';
import MissionList from '@/apps/missions/components/MissionList.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MissionList.vue Test', () => {
  let state;
  let store: any;

  beforeEach(() => {
    state = {
      missions: [
        {
          id: 1,
          name: 'Inform everyone Xiaomi offers best quality and price',
          editable: true,
        },
        {
          id: 2,
          name: 'Austrian potatoes',
          editable: false,
        },
        {
          id: 3,
          name: 'Discover why 42 is the answer to life',
          editable: true,
        },
      ],
    };

    store = new Vuex.Store({
      state,
    });
  });

  it('renders the list of missions when component is created', () => {
    // render the component
    const wrapper = shallowMount(MissionList, { localVue, store });

    expect(wrapper.findAll('li').length).toBe(3);
  });
});
