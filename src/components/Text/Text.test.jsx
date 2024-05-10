import { render, screen } from '@testing-library/react';
import { Text } from './Text';

const text = 'Hello World';
describe('Text', () => {
  it('should render provided children', () => {
    render(<Text>{text}</Text>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should render with the correct class name', () => {
    render(<Text className={'test1'}>{text}</Text>);
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(text)).toHaveClass('text');
    expect(screen.getByText(text)).toHaveClass('test1');
  });
  it('should render with the error class name', () => {
    render(<Text isError={true}>{text}</Text>);
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(text)).toHaveClass('text');
    expect(screen.getByText(text)).toHaveClass('error');
  });
  it('should render with the success class name', () => {
    render(<Text isSuccess={true}>{text}</Text>);
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(text)).toHaveClass('text');
    expect(screen.getByText(text)).toHaveClass('success');
  });
  it('should render with the correct class name and error class name', () => {
    render(
      <Text isError={true} className={'test1'}>
        {text}
      </Text>,
    );
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(text)).toHaveClass('text');
    expect(screen.getByText(text)).toHaveClass('error');
    expect(screen.getByText(text)).toHaveClass('test1');
  });
});
