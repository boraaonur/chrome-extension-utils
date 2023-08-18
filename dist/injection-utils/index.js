import ReactDOM from "react-dom";
/**
 * Generalized function to inject React components into the DOM.
 *
 * @param {string} targetSelector - The CSS selector of the target node.
 * @param {ReactNode} Component - The React component to be rendered.
 * @param {string} id - The ID for the new element.
 * @param {("before"|"after"|"append"|"replace")} position - Where to insert the component in relation to the target.
 */
export function injectComponent({ targetElement, position, id, component, callback, }) {
    const targetNode = document.querySelector(targetElement);
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
