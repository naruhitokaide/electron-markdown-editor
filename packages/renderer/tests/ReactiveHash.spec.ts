import {test, vi} from 'vitest';
import type {BinaryLike} from 'crypto';

/**
 * Mock expected global api exposed by {@link module:preload}
 */
(window as Window & typeof globalThis & { nodeCrypto: { sha256sum: (s: BinaryLike) => string } }).nodeCrypto = {
  sha256sum: vi.fn((s: BinaryLike) => `${s}:HASHED`),
};

test('ReactiveHash component', async () => {
    // This was specifically for vue projects
    // But this project was built on REACT
});
