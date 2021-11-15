export interface Props {
  freq: number;
  symbol: string;
  left: HNode | null;
  right: HNode | null;
}

export class HNode {
  props: Props
  constructor(props: Props) {
    this.props = props;
  }

  set<T extends keyof Props>(prop: T, value: Props[T]): void {
    if (this.props) {
      this.props[prop] = value;
    }
  }

  get<T extends keyof Props>(prop: T): Props[T] {
    return this.props[prop];
  }
}
