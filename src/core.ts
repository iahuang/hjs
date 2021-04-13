namespace H {
    function _toString(t: any) {
        if (t === undefined || t === null) {
            return "";
        }
        return t.toString();
    }

    function _primitiveAsNode(obj: any) {
        if (obj === null || obj === undefined) {
            return document.createTextNode("");
        }
        return document.createTextNode(obj.toString());
    }

    function isPrimitive(val: any) {
        if (typeof val === "object") {
            return val === null;
        }
        return typeof val !== "function";
    }

    function elementChildAsNode(obj: any) {
        if (isPrimitive(obj) || typeof obj === "undefined") {
            return _primitiveAsNode(obj);
        }
        if (obj instanceof Node) {
            return obj;
        }
        if (obj.__builder) {
            return obj();
        }
        if (obj instanceof Component) {
            return obj._render();
        }
        throw new Error(`Cannot represent object ${JSON.stringify(obj)} as a DOM node!`);
    }

    function _processElementProp(propName: string, value: any, el: HTMLElement) {
        if (_eventPropNames.includes(propName)) {
            if (typeof value === "string") {
                el.setAttribute(propName, _toString(value));
            } else {
                // remove the "on" part of the prop name to make the event name
                let evName = propName.substring(2);
                el.addEventListener(evName, value);
            }
        } else {
            el.setAttribute(propName, _toString(value));
        }
    }

    export function marker() {
        return new Marker();
    }

    class HInternal {}

    interface MarkRecord {
        domNode: Node;
        func: () => HTMLElement;
    }

    class Marker {
        _id: string;
        _domRecord: MarkRecord[];

        constructor() {
            this._id = "";
            for (let i = 0; i < 16; i++) {
                this._id += Math.floor(Math.random() * 10);
            }
            this._domRecord = [];
        }

        use(mark: () => HTMLElement) {
            let el = mark();
            this._domRecord.push({ domNode: el, func: mark });
            return el;
        }

        redraw() {
            // filter removed DOM nodes
            this._domRecord = this._domRecord.filter((m) => document.contains(m.domNode));

            let tmp: MarkRecord[] = [];
            for (let m of this._domRecord) {
                let oldNode = m.domNode;
                let newNode = m.func();
                tmp.push({ domNode: newNode, func: m.func });
                oldNode.parentNode?.replaceChild(newNode, oldNode);
            }
            this._domRecord = tmp;
        }
    }

    export class Component {
        componentMarker: Marker;
        constructor() {
            this.componentMarker = marker();
        }

        render() {
            return div();
        }

        _render() {
            return this.componentMarker.use(() => {
                return this.render();
            });
        }
    }

    export function _elementBuilder<T extends HTypes.HTMLGlobalProps>(tag: string): (a?: undefined) => HTMLElement;
    export function _elementBuilder<T extends HTypes.HTMLGlobalProps>(
        tag: string
    ): (a?: T) => (...args: any[]) => HTMLElement;

    export function _elementBuilder<T extends HTypes.HTMLGlobalProps>(tag: string) {
        return function (...args: any[]) {
            let first = args[0];
            if (first === undefined || !(typeof first === "object" && !Array.isArray(first)) || args.length > 1) {
                let el = document.createElement(tag);
                for (let child of args) {
                    el.appendChild(elementChildAsNode(child));
                }

                return el;
            }
            let props: T = first;
            let f = function (...children: any[]) {
                let el = document.createElement(tag);
                if (props) {
                    for (let k of Object.keys(props)) {
                        _processElementProp(k, props[k], el);
                    }
                }

                for (let child of children) {
                    el.appendChild(elementChildAsNode(child));
                }

                return el;
            };
            (f as any).__builder = true;
            return f;
        };
    }

    export function _noContentElementBuilder<T extends HTypes.HTMLGlobalProps>(tag: string) {
        return function (props?: T) {
            let el = document.createElement(tag);
            if (props) {
                for (let k of Object.keys(props)) {
                    _processElementProp(k, props[k], el);
                }
            }
            return el;
        };
    }
}
