import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
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

async function advanceToSubmit(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByPlaceholderText('John Doe'), 'Jane Doe');
  await user.type(screen.getByPlaceholderText('john@company.com'), 'jane@company.com');
  await user.click(screen.getByRole('button', { name: /next step/i }));
  await user.click(screen.getByRole('button', { name: /next step/i }));
  await user.click(screen.getByRole('button', { name: /next step/i }));
}

describe('MultiStepForm submit', () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
    vi.stubEnv('VITE_WHATSAPP_NUMBER', '19995550123');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('sets validationError and calls logger.error when WhatsApp popup is blocked', async () => {
    const user = userEvent.setup();
    const logger = await import('../../../lib/logger');
    const errorSpy = vi.spyOn(logger.logger, 'error').mockImplementation(() => undefined);
    vi.spyOn(window, 'open').mockReturnValue(null);

    render(
      <HelmetProvider>
        <MultiStepForm />
      </HelmetProvider>
    );

    await advanceToSubmit(user);
    await user.click(screen.getByRole('button', { name: /send via whatsapp/i }));

    expect(errorSpy).toHaveBeenCalledWith(
      'MultiStepForm submit failed',
      expect.objectContaining({ error: expect.any(String) })
    );
    expect(screen.getByRole('alert')).toHaveTextContent(/could not open whatsapp/i);
  });
});
