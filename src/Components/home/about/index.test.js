import { render, screen } from '@testing-library/react';
import About from './index';

test('should render About inside About container', () => {
    render(<About />);
    const aboutElement = screen.getByText('Learn More');
    expect(aboutElement).toBeInTheDocument();
});
