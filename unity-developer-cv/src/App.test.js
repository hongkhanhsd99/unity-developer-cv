import { renderToStaticMarkup } from 'react-dom/server';
import App from './App';

jest.mock('lucide-react', () => {
  const React = require('react');
  const Icon = (props) => React.createElement('svg', props);

  return {
    Download: Icon,
    ExternalLink: Icon,
    Globe: Icon,
    Mail: Icon,
    MapPin: Icon,
    Phone: Icon,
  };
});

test('renders the current Unity Developer CV', () => {
  const markup = renderToStaticMarkup(<App />);

  expect(markup).toContain('LÊ HỒNG KHANH');
  expect(markup).toContain('Sky Game Studio');
  expect(markup).toContain('03/2025 – Hiện tại');
  expect(markup).toContain('In / Lưu PDF');
});
