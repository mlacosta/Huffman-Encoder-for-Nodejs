import { HNode } from './HNode';

export function getBitForString(char: string, graph?: HNode): string | null {
  /**Simplify */
  if (!graph) {
    return null;
  }

  const isLeftTerminal = !(graph.get('left')?.get('left') && graph.get('left')?.get('right'));
  const isRightTerminal = !(graph.get('right')?.get('left') && graph.get('right')?.get('right'));

  const hasLeftChar = graph.get('left')?.get('symbol').includes(char);
  const hasRightChar = graph.get('right')?.get('symbol').includes(char);

  if (hasLeftChar) {
    return '0' + (isLeftTerminal ? null : getBitForString(char, graph.get('left')));
  } 
  
  if (hasRightChar) {
    return '1' + (isRightTerminal ? null : getBitForString(char, graph.get('right')));
  }

  return '';
}
