export interface Props {
  freq: number;
  symbol: string;
  left?: HNode;
  right?: HNode;
}

export class HNode {
  props: Props;
  constructor(props: Props) {
    this.props = props;
  }

  set<T extends keyof Props>(prop: T, value: Props[T]) {
    this.props[prop] = value;
  }

  get<T extends keyof Props>(prop: T) {
    return this.props[prop];
  }
}
