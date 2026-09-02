import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import { MultiStepForm } from '../MultiStepForm';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, animate, exit, transition, whileInView, viewport, whileHover, ...rest } = props;
      void initial;
      void animate;
      void exit;
      void transition;
      void whileInView;
      void viewport;
      void whileHover;
      return <div {...rest}>{children}</div>;
    },
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

vi.mock('../GlassCard', () => ({
  GlassCard: ({ children, className }: React.PropsWithChildren<{ className?: string }>) => (
    <div className={className}>{children}</div>
  ),
}));

vi.mock('../Button', () => ({
  Button: ({
    children,
    onClick,
    type = 'button',
    disabled,
  }: React.PropsWithChildren<{
    onClick?: () => void;
    type?: 'button' | 'submit';
    disabled?: boolean;
  }>) => (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  ),
}));

vi.mock('../../../lib/useContent', () => ({
  useContent: () => ({
    language: 'en',
    content: {
      contact: {
        form: {
          steps: ['Contact Info', 'Project Scope', 'Tech Needs', 'Review'],
          fields: {
            name: 'Full Name',
            email: 'Work Email',
            company: 'Organization',
            projectType: 'Category',
            budget: 'Budget Range',
            currency: 'Currency',
            details: 'Technical Specs',
            timeline: 'Target Delivery',
          },
          types: ['Web App', 'Mobile App', 'AI Solution'],
          currencies: ['USD', 'EUR', 'EGP'],
        },
      },
    },
  }),
}));

function renderForm() {
  return render(
    <HelmetProvider>
      <MultiStepForm />
    </HelmetProvider>
  );
}

describe('MultiStepForm', () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('advances to step 1 when required fields are filled and Next is clicked', async () => {
    const user = userEvent.setup();
    renderForm();

    await user.type(screen.getByPlaceholderText('John Doe'), 'Jane Doe');
    await user.type(screen.getByPlaceholderText('john@company.com'), 'jane@company.com');
    await user.click(screen.getByRole('button', { name: /next step/i }));

    expect(screen.getByText('Category')).toBeInTheDocument();
  });

  it('returns to step 0 when Back is clicked from step 1', async () => {
    const user = userEvent.setup();
    renderForm();

    await user.type(screen.getByPlaceholderText('John Doe'), 'Jane Doe');
    await user.type(screen.getByPlaceholderText('john@company.com'), 'jane@company.com');
    await user.click(screen.getByRole('button', { name: /next step/i }));

    expect(screen.getByText('Category')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /back/i }));

    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument();
  });

  it('does not advance when required name and email are empty', async () => {
    const user = userEvent.setup();
    renderForm();

    await user.click(screen.getByRole('button', { name: /next step/i }));

    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument();
    expect(screen.queryByText('Category')).not.toBeInTheDocument();
  });
});
