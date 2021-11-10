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

export function getBitstring(char: string, Graph: HNode | null): string | null {
  const isLeftTerminal = !(Graph?.get('left')?.get('left') && Graph?.get('left')?.get('right'));
  const isRightTerminal = !(Graph?.get('right')?.get('left') && Graph?.get('right')?.get('left'));

  if (Graph?.get('left')?.get('symbol')?.includes(char)) {
    if (isLeftTerminal) {
      return '0';
    } else {
      return '0' + getBitstring(char, Graph.get('left'));
    }
  } else if (Graph?.get('right')?.get('symbol')?.includes(char)) {
    if (isRightTerminal) {
      return '1';
    } else {
      return '1' + getBitstring(char, Graph.get('right'));
    }
  }
  return null;
}
