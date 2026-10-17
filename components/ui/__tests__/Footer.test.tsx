import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from '../Footer';
import { ThemeProvider } from '../../../lib/ThemeContext';
import { getWhatsAppMeUrl } from '../../../lib/contactConfig';

function renderFooter() {
  return render(
    <ThemeProvider>
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    </ThemeProvider>
  );
}

describe('Footer WhatsApp quick message', () => {
  const openSpy = vi.fn();

  beforeEach(() => {
    cleanup();
    localStorage.clear();
    openSpy.mockReset();
    vi.stubEnv('VITE_WHATSAPP_NUMBER', '20105551234');
    vi.stubGlobal('open', openSpy);
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => undefined,
        removeListener: () => undefined,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
        dispatchEvent: () => false,
      }),
    });
    Object.defineProperty(window.navigator, 'language', {
      configurable: true,
      get: () => 'en-US',
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('keeps the send button disabled for empty and whitespace-only messages', async () => {
    const user = userEvent.setup();
    renderFooter();

    const input = screen.getByPlaceholderText('Type your message...');
    const send = screen.getByRole('button', { name: 'Send WhatsApp message' });

    expect(send).toBeDisabled();

    await user.type(input, '   ');
    expect(send).toBeDisabled();
    expect(openSpy).not.toHaveBeenCalled();
  });

  it('enables send, opens the encoded WhatsApp URL, and clears the input on click', async () => {
    const user = userEvent.setup();
    renderFooter();

    const input = screen.getByPlaceholderText('Type your message...');
    const send = screen.getByRole('button', { name: 'Send WhatsApp message' });
    const message = 'Hello Elsakr & team';

    await user.type(input, message);
    expect(send).toBeEnabled();

    await user.click(send);

    expect(openSpy).toHaveBeenCalledWith(getWhatsAppMeUrl(message), '_blank');
    expect(openSpy.mock.calls[0][0]).toContain(encodeURIComponent(message));
    expect(input).toHaveValue('');
  });

  it('sends on Enter when the message is non-empty', async () => {
    const user = userEvent.setup();
    renderFooter();

    const input = screen.getByPlaceholderText('Type your message...');
    const message = 'Quick question';

    await user.type(input, message);
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(openSpy).toHaveBeenCalledWith(getWhatsAppMeUrl(message), '_blank');
    expect(input).toHaveValue('');
  });
});
