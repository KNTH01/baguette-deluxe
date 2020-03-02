import { shallowMount, createLocalVue } from '@vue/test-utils';
import TheNavbar from '@/apps/missions/components/TheNavbar.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('TheNavbar.vue Test', () => {
  let state;
  let store: any;

  beforeEach(() => {
    state = {
      profile: {
        name: 'Dander Perro',
      },
    };

    store = new Vuex.Store({
      state,
    });
  });

  it('renders username displayed with filter', () => {
    // render the component
    const wrapper = shallowMount(TheNavbar, { localVue, store });

    expect(wrapper.text()).toMatch('D. Perro');
  });
});
