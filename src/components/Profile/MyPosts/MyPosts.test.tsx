import {render} from '@testing-library/react';
import {MyPosts} from './MyPosts';

describe('MyPosts component', () => {
 it('render without error', () => {
 render(<MyPosts />); 
 })
});