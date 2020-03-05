import { shallowMount } from '@vue/test-utils';
import DetailView from '@/apps/missions/views/Detail.vue';

describe('DetailView Test', () => {
  let state: any;

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
        {
          id: 4,
          name: 'Say something',
          editable: false,
        },
      ],
    };
  });

  it('renders detail view with id param equal to 1', () => {
    // render the component
    const wrapper = shallowMount(DetailView, {
      mocks: {
        $store: {
          state,
        },
        $route: {
          params: { id: '1' },
        },
      },
    });

    expect(wrapper.find('h1').text()).toMatch('Mission:');
    expect(wrapper.find('h1').text()).toMatch(
      'Mission: Inform everyone Xiaomi offers best quality and price'
    );
  });

  it('renders detail view with id param equal to 2', () => {
    // render the component
    const wrapper = shallowMount(DetailView, {
      mocks: {
        $store: {
          state,
        },
        $route: {
          params: { id: '2' },
        },
      },
    });

    expect(wrapper.find('[data-test="mission-title"]').text()).toMatch(
      'Mission:'
    );
    expect(wrapper.find('[data-test="mission-title"]').text()).toMatch(
      'Austrian potatoes'
    );
  });
});
