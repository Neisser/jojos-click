const seed = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
const base = 62;

export function toBase62(n: number): string{
  
  const chars = [];
  
  while (n) {
    chars.push(seed[n % base]);

    n = Math.floor(n / base);
  }

  return chars.join('');
}
