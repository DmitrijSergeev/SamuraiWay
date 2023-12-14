import {render} from '@testing-library/react';
import {ProfileInfo} from './ProfileInfo';

describe('ProfileInfo component', () => {
    it('render without Error', () => {
        render(<ProfileInfo/>);
    })
});