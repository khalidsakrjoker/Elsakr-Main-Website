import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import type { LinkProps, NavLinkProps } from 'react-router-dom';
import { useLocalizedPath } from '../../lib/useLocalizedPath';
import { stripLocalePrefix } from '../../lib/seo/localePath';

type LocaleLinkProps = Omit<LinkProps, 'to'> & { to: string };
type LocaleNavLinkProps = Omit<NavLinkProps, 'to'> & { to: string };

/** `Link` that keeps Arabic visitors under `/ar` by prefixing internal targets. */
export const LocaleLink = React.forwardRef<HTMLAnchorElement, LocaleLinkProps>(
  ({ to, ...rest }, ref) => {
    const localize = useLocalizedPath();
    return <Link ref={ref} to={localize(to)} {...rest} />;
  }
);
LocaleLink.displayName = 'LocaleLink';

/** `NavLink` with locale-aware targets; the home link only matches exactly. */
export const LocaleNavLink = React.forwardRef<HTMLAnchorElement, LocaleNavLinkProps>(
  ({ to, end, ...rest }, ref) => {
    const localize = useLocalizedPath();
    const isHome = stripLocalePrefix(to.split(/[?#]/)[0] ?? '/') === '/';
    return <NavLink ref={ref} to={localize(to)} end={end ?? isHome} {...rest} />;
  }
);
LocaleNavLink.displayName = 'LocaleNavLink';
