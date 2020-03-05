import Vue from 'vue';
import { mount } from '@vue/test-utils';
import EditMission from '@/apps/missions/components/EditMission.vue';

describe('EditMission.vue Test', () => {
  let $router: any;
  let $route: any;
  let $store: any;

  beforeEach(() => {
    $route = {
      name: 'Detail',
      path: '/detail/1',
      params: { id: '1' },
    };

    $router = {
      push: jest.fn(() => ($route.name = 'Main')),
    };

    $store = {
      dispatch: jest.fn(),
    };
  });

  it('edit the mission and redirect to main view', async () => {
    // render the component
    const wrapper = mount(EditMission, {
      propsData: {
        mission: {
          id: 1,
          name: 'Say ¡Hola!',
          editable: true,
        },
      },
      mocks: {
        $route,
        $router,
        $store,
      },
    });

    expect(wrapper.vm.$route.name).toBe('Detail');
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('[data-test="input-mission"]').exists()).toBe(true);

    wrapper.find('[data-test="input-mission"]').setValue('Say Bonjour!');

    expect(wrapper.vm.$data.isValid).toBe(false);
    await Vue.nextTick();
    expect(wrapper.vm.$data.isValid).toBe(true);

    wrapper.find('form').trigger('submit.prevent');

    expect($store.dispatch).toHaveBeenCalled();

    await Vue.nextTick();

    expect($router.push).toHaveBeenCalled();
    expect(wrapper.vm.$route.name).toBe('Main');
  });

  it('does not edit the mission and redirect to main view', async () => {
    // render the component
    const wrapper = mount(EditMission, {
      propsData: {
        mission: {
          id: 1,
          name: 'Say ¡Hola!',
          editable: false,
        },
      },
      mocks: {
        $route,
        $router,
        $store,
      },
    });

    expect(wrapper.vm.$route.name).toBe('Detail');
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('[data-test="input-mission"]').exists()).toBe(true);

    wrapper.find('[data-test="input-mission"]').setValue('Say Bonjour!');

    expect(wrapper.vm.$data.isValid).toBe(false);
    await Vue.nextTick();
    expect(wrapper.vm.$data.isValid).toBe(true);

    wrapper.find('[data-test="form"]').trigger('submit.prevent');

    expect($store.dispatch).toHaveBeenCalledTimes(0);

    await Vue.nextTick();

    expect($router.push).toHaveBeenCalled();
    expect(wrapper.vm.$route.name).toBe('Main');
  });
});
