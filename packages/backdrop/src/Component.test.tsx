import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Backdrop } from './Component';

describe('Backdrop', () => {
    it('should match snapshot', () => {
        const { queryByTestId } = render(
            <Backdrop open={true} dataTestId='Backdrop'>
                <span>children</span>
            </Backdrop>,
        );

        expect(queryByTestId('Backdrop')).toMatchSnapshot();
    });

    it('should set `data-test-id` attribute', () => {
        const dataTestId = 'test-id';
        const { queryByTestId } = render(<Backdrop open={true} dataTestId={dataTestId} />);

        expect(queryByTestId(dataTestId)).toBeInTheDocument();
    });

    it('should call `onClick` prop', () => {
        const cb = jest.fn();
        const dataTestId = 'test-id';
        const { getByTestId } = render(
            <Backdrop open={true} onClick={cb} dataTestId={dataTestId} />,
        );

        fireEvent.click(getByTestId(dataTestId));

        expect(cb).toBeCalledTimes(1);
    });

    it('should unmount without errors', () => {
        const { unmount } = render(<Backdrop open={true} />);

        expect(unmount).not.toThrowError();
    });
});
