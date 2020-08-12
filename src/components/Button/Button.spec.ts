import { render, fireEvent  } from '@testing-library/vue';
import Button from './Button.vue';
import { Slots, Stubs } from '@vue/test-utils';

type ComponentOptions = {
    mocks?: any;
    props?: any;
    store?: any;
    stubs?: Stubs;
    slots?: Slots;
};

const renderComponent = (overrides?: ComponentOptions) => {
    const store = {
        modules: {},
    };
    const mocks = {

    };

    const stubs = {};

    const slots: Slots = Object.assign({
        default: ''
    }, overrides?.slots || {});

    const props = Object.assign({
        title: "Some text for title",
    }, overrides?.props || {});

    return render(Button, {
        props, store, mocks, stubs, slots
    });
};

describe('Button Component', () => {
    it('Especificação de testes de renderização do component como button', async () => {
        const { getByText, baseElement } = renderComponent({
            slots: {
                default: 'Some text'
            }
        });
        
        const button = baseElement.querySelector('button');
        
        expect(button).not.toBe(null);

        getByText('Some text');
    
        expect(button?.getAttribute('title')).toBe('Some text for title');

        if (button) {
            await fireEvent.click(button);
        }        
    });
    
    it('Especificação de testes de renderização do component como anchor', async () => {
        const href = 'https://test.me';
        const { getByText, baseElement } = renderComponent({
            slots: {
                default: 'Link'
            },
            props: {
                href
            }
        });

        getByText('Link');
        
        const a = baseElement.querySelector('a');
        expect(a?.getAttribute('href')).toBe(href);

        if (a) {
            await fireEvent.click(a);
        }
    });
});
