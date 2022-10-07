import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Loading from '@/components/atoms/Loading.vue';

describe('Loading Atom Component Test', () => {
  it('default', () => {
    const wrapper = mount(Loading, {
      props: {},
    });

    expect(wrapper.text()).toEqual('Loading...');
  });

  it('text 변경', () => {
    const wrapper = mount(Loading, {
      props: {
        text: '로딩중입니다',
      },
    });

    expect(wrapper.text()).toEqual('로딩중입니다');
  });
});
