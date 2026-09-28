import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { ErrorBoundary } from '../ErrorBoundary';
import { logger } from '../../lib/logger';

vi.mock('../../lib/logger', () => ({
  logger: {
    error: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
    debug: vi.fn(),
  },
}));

function Boom(): React.ReactElement {
  throw new Error('boom-render');
}

describe('ErrorBoundary', () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Safe child</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Safe child')).toBeInTheDocument();
  });

  it('shows fallback UI and logs via logger when a child throws', () => {
    render(
      <ErrorBoundary>
        <Boom />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    expect(screen.getByText(/boom-render/)).toBeInTheDocument();
    expect(logger.error).toHaveBeenCalled();
  });
});
