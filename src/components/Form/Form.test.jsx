import { fireEvent, waitFor } from '@testing-library/react';

import { Form } from './Form';
import { renderWithProviders } from './../../utils/renderWithProviders';

describe('Form', () => {
  it('should render Form with children', () => {
    const { container, getByTestId } = renderWithProviders(
      <Form>
        <div data-testid="my-child" />
      </Form>,
    );

    expect(getByTestId('my-child')).toBeInTheDocument();
    expect(container.querySelector('form')).toBeInTheDocument();
  });

  it('should invoke the onSubmit callback', () => {
    const onSubmit = jest.fn();
    const { container } = renderWithProviders(<Form onSubmit={onSubmit} />);
    const myForm = container.querySelector('form');
    fireEvent.submit(myForm);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should invoke the onSuccess callback', async () => {
    const onSuccess = jest.fn();
    const { container } = renderWithProviders(
      <Form onSubmit={jest.fn()} onSuccess={onSuccess} />,
    );
    const myForm = container.querySelector('form');
    fireEvent.submit(myForm);

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalledTimes(1);
    });
  });

  it('invoke the onError callback', async () => {
    const onError = jest.fn();

    const { container } = renderWithProviders(
      <Form onSubmit={() => Promise.reject()} onError={onError} />,
    );
    const myForm = container.querySelector('form');
    fireEvent.submit(myForm);

    await waitFor(() => {
      expect(onError).toHaveBeenCalledTimes(1);
    });
  });
});
