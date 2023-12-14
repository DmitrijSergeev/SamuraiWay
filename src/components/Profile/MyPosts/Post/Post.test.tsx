import {render} from '@testing-library/react';
import {Post} from './Post';

describe('Post component', () => {
 it('render without error', () => {
 render(<Post />); 
 })
});