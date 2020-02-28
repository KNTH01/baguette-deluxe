import { shallowMount, createLocalVue } from '@vue/test-utils';
import TheNavbar from '@/apps/missions/components/TheNavbar.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('TheNavbar.vue Test', () => {
  it('renders routes when component is created', () => {
    // render the component
    const wrapper = shallowMount(TheNavbar, { localVue, router });

    expect(wrapper.text()).toMatch('Home');
  });
});
