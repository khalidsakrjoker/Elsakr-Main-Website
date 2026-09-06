import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ToolsSlider } from '../ToolsSlider';

const tools = [
  {
    id: 'sqlite-browser',
    title: 'Elsakr SQLite Browser',
    description: 'Browse SQLite databases.',
    logo: '/assets/tools/logos/sqlite-browser.svg',
    links: { github: 'https://example.com' },
  },
  {
    id: 'seo-toolkit',
    title: 'SEO Toolkit',
    description: 'SEO helpers in the browser.',
    logo: '/assets/tools/logos/seo-toolkit.svg',
    links: { live: 'https://example.com' },
  },
];

describe('ToolsSlider', () => {
  beforeEach(() => {
    cleanup();
    Element.prototype.scrollIntoView = vi.fn();
  });

  it('renders slides and advances with next control', () => {
    render(
      <MemoryRouter>
        <ToolsSlider tools={tools} language="en" />
      </MemoryRouter>
    );

    expect(screen.getByRole('region', { name: /Tools slider/i })).toBeInTheDocument();
    expect(screen.getByText(/Elsakr SQLite Browser/i)).toBeInTheDocument();
    expect(screen.getByText(/SEO Toolkit/i)).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText(/Next tools/i));
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });
});
