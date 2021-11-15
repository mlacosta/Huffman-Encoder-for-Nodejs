import { HNode } from './HNode';

export function getBitForString(char: string, graph: HNode | null): string | null {
  /**Simplify */
  if (!graph) {
    return null;
  }

  const isLeftTerminal = !(graph.get('left')?.get('left') && graph.get('left')?.get('right'));
  const isRightTerminal = !(graph.get('right')?.get('left') && graph.get('right')?.get('right'));

  const hasLeftChar = graph.get('left')?.get('symbol')?.includes(char);
  const hasRightChar = graph.get('right')?.get('symbol')?.includes(char);

  if (hasLeftChar) {
    const left = graph.get('left') || null;
    return isLeftTerminal ? '0' : '0' + getBitForString(char, left);
  }

  if (hasRightChar) {
    const right = graph.get('right') || null;
    return isRightTerminal ? '1' : '1' + getBitForString(char, right);
  }

  return '';
}
