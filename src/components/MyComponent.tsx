import { sayHello } from "../core/utils";

export function MyComponent(): JSX.Element {
    return <div>{sayHello()}</div>;
}
