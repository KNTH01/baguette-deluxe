import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import MainView from '@/apps/missions/views/Main.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MainView Test', () => {
  let store: any;

  beforeEach(() => {
    const state = {
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
        {
          id: 4,
          name: 'Say something',
          editable: false,
        },
      ],
    };

    const getters = {
      missionCount: (state: any) => state.missions.length,
    };

    store = new Vuex.Store({
      state,
      getters,
    });
  });

  it('renders main view with the mission count', () => {
    // render the component
    const wrapper = shallowMount(MainView, {
      localVue,
      store,
    });

    expect(wrapper.find('[data-test=mission-count]').exists()).toBe(true);
    expect(wrapper.find('[data-test=mission-count]').text()).toMatch('4');
  });
});
