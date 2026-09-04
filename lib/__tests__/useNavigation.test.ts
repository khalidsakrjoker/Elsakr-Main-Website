import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useNavigation } from '../useNavigation';

describe('useNavigation', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('starts with all menus closed', () => {
    const { result } = renderHook(() => useNavigation('/'));
    expect(result.current.isMenuOpen).toBe(false);
    expect(result.current.isServicesHovered).toBe(false);
    expect(result.current.isToolsHovered).toBe(false);
    expect(result.current.isMobileServicesOpen).toBe(false);
    expect(result.current.isMobileToolsOpen).toBe(false);
  });

  it('toggles the mobile menu open and closed', () => {
    const { result } = renderHook(() => useNavigation('/'));

    act(() => {
      result.current.toggleMenu();
    });
    expect(result.current.isMenuOpen).toBe(true);

    act(() => {
      result.current.toggleMenu();
    });
    expect(result.current.isMenuOpen).toBe(false);
  });

  it('toggles mobile services and tools sections', () => {
    const { result } = renderHook(() => useNavigation('/'));

    act(() => {
      result.current.toggleMobileServices();
      result.current.toggleMobileTools();
    });
    expect(result.current.isMobileServicesOpen).toBe(true);
    expect(result.current.isMobileToolsOpen).toBe(true);
  });

  it('resets navigation state when the pathname changes', () => {
    const { result, rerender } = renderHook(
      ({ pathname }) => useNavigation(pathname),
      { initialProps: { pathname: '/' } }
    );

    act(() => {
      result.current.toggleMenu();
      result.current.setIsServicesHovered(true);
    });
    expect(result.current.isMenuOpen).toBe(true);

    rerender({ pathname: '/about' });

    expect(result.current.isMenuOpen).toBe(false);
    expect(result.current.isServicesHovered).toBe(false);
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
