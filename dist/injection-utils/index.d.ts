import { ReactElement } from "react";
/**
 * Generalized function to inject React components into the DOM.
 *
 * @param {string} targetSelector - The CSS selector of the target node.
 * @param {ReactNode} Component - The React component to be rendered.
 * @param {string} id - The ID for the new element.
 * @param {("before"|"after"|"append"|"replace")} position - Where to insert the component in relation to the target.
 */
export declare function safeInjectComponent({ targetElement, position, id, component, callback, }: {
    targetElement: string | HTMLElement;
    component: ReactElement;
    id: string;
    position: "before" | "after" | "append" | "replace";
    callback?: (container: HTMLElement) => void;
}): void;
export declare function injectComponent({ targetElement, position, id, component, callback, condition, config, }: {
    targetElement: string | HTMLElement;
    component: ReactElement;
    id: string;
    position: "before" | "after" | "append" | "replace";
    callback?: (container: HTMLElement) => void;
    condition: boolean;
    config?: InjectComponentConfig;
}): void;
interface InjectComponentConfig {
    createContainer: boolean;
}
export {};
