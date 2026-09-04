import { describe, it, expect } from 'vitest';
import { content as en } from '../../content/en/index';
import { content as ar } from '../../content/ar/index';
import type { Tool } from '../types';

function idsOf(tools: Tool[]): string[] {
  return tools.map((tool) => tool.id).sort();
}

function assertToolShape(tools: Tool[], label: string) {
  for (const tool of tools) {
    expect(tool.id, `${label} tool missing id`).toBeTruthy();
    expect(tool.title, `${label}:${tool.id} missing title`).toBeTruthy();
    expect(tool.description, `${label}:${tool.id} missing description`).toBeTruthy();
    expect(tool.links, `${label}:${tool.id} missing links`).toBeTruthy();
  }
}

describe('content parity EN/AR tools', () => {
  it('keeps matching freeToolsDesktop ids and required fields', () => {
    expect(idsOf(en.freeToolsDesktop)).toEqual(idsOf(ar.freeToolsDesktop));
    assertToolShape(en.freeToolsDesktop, 'en.desktop');
    assertToolShape(ar.freeToolsDesktop, 'ar.desktop');
  });

  it('keeps matching freeToolsWeb ids and required fields', () => {
    expect(idsOf(en.freeToolsWeb)).toEqual(idsOf(ar.freeToolsWeb));
    assertToolShape(en.freeToolsWeb, 'en.web');
    assertToolShape(ar.freeToolsWeb, 'ar.web');
  });
});
