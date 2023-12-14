import {render} from '@testing-library/react';
import {Message} from './Message';

describe('Message component', () => {
    it('render without eError', () => {
        render(<Message message={'Hello'}/>);
    })
});