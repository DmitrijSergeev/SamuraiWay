import {render} from '@testing-library/react';
import {Settings} from './Settings';

describe('Settings component', () => {
    it('render without error', () => {
        render(<Settings/>);
    })
});