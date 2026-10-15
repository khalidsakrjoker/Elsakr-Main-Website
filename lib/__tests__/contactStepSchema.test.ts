import { describe, it, expect } from 'vitest';
import { contactStepSchema } from '../contactStepSchema';

describe('contactStepSchema', () => {
  it('accepts a valid name and email', () => {
    expect(
      contactStepSchema.safeParse({ name: 'Jane', email: 'jane@company.com' }).success
    ).toBe(true);
  });

  it('rejects empty name or invalid email', () => {
    expect(contactStepSchema.safeParse({ name: '', email: 'bad' }).success).toBe(false);
    expect(
      contactStepSchema.safeParse({ name: 'Jane', email: 'not-an-email' }).success
    ).toBe(false);
  });
});
