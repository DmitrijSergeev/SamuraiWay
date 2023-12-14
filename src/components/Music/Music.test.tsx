import {render} from '@testing-library/react';
import {Music} from './Music';

describe('Music component', () => {
 it('render without error', () => {
 render(<Music />); 
 })
});