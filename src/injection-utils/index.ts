import ReactDOM from "react-dom";
import { ReactElement } from "react";

/**
 * Generalized function to inject React components into the DOM.
 *
 * @param {string} targetSelector - The CSS selector of the target node.
 * @param {ReactNode} Component - The React component to be rendered.
 * @param {string} id - The ID for the new element.
 * @param {("before"|"after"|"append"|"replace")} position - Where to insert the component in relation to the target.
 */
export function safeInjectComponent({
  targetElement,
  position,
  id,
  component,
  callback,
}: {
  targetElement: string | HTMLElement;
  component: ReactElement;
  id: string;
  position: "before" | "after" | "append" | "replace";
  callback?: (container: HTMLElement) => void;
}) {
  const targetNode = determineTargetNode(targetElement);

  const existingComponent = document.getElementById(id);

  if (targetNode && !existingComponent) {
    const container = document.createElement("div");
    container.id = id;

    // Execute the callback if provided
    if (callback) {
      callback(container);
    }

    switch (position) {
      case "before":
        targetNode.parentNode?.insertBefore(container, targetNode);
        break;
      case "after":
        targetNode.parentNode?.insertBefore(container, targetNode.nextSibling);
        break;
      case "replace":
        targetNode.parentNode?.replaceChild(container, targetNode);
        break;
      case "append":
      default:
        targetNode.appendChild(container);
        break;
    }

    ReactDOM.render(component, container);
  }
}

export function injectComponent({
  targetElement,
  position,
  id,
  component,
  callback,
  condition,
  config,
}: {
  targetElement: string | HTMLElement;
  component: ReactElement;
  id: string;
  position: "before" | "after" | "append" | "replace";
  callback?: (container: HTMLElement) => void;
  condition: boolean;
  config?: InjectComponentConfig;
}) {
  const targetNode = determineTargetNode(targetElement);

  if (condition) {
    let container: HTMLElement | null;

    if (config?.createContainer) {
      container = document.createElement("div");
      container.id = id;
    } else {
      container = targetNode as HTMLElement;
    }

    if (callback && container) {
      callback(container);
    }

    switch (position) {
      case "before":
        targetNode?.parentNode?.insertBefore(container, targetNode);
        break;
      case "after":
        targetNode?.parentNode?.insertBefore(container, targetNode.nextSibling);
        break;
      case "replace":
        targetNode?.parentNode?.replaceChild(container, targetNode);
        break;
      case "append":
      default:
        targetNode?.appendChild(container);
        break;
    }

    ReactDOM.render(component, container);
  }
}

// Helper function to determine the target node.
function determineTargetNode(
  targetElement: string | HTMLElement
): HTMLElement | null {
  return typeof targetElement === "string"
    ? document.querySelector(targetElement)
    : targetElement;
}

interface InjectComponentConfig {
  createContainer: boolean;
}
