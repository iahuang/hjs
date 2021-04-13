"use strict";
var H;
(function (H) {
    function _toString(t) {
        if (t === undefined || t === null) {
            return "";
        }
        return t.toString();
    }
    function _primitiveAsNode(obj) {
        if (obj === null || obj === undefined) {
            return document.createTextNode("");
        }
        return document.createTextNode(obj.toString());
    }
    function isPrimitive(val) {
        if (typeof val === "object") {
            return val === null;
        }
        return typeof val !== "function";
    }
    function elementChildAsNode(obj) {
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
        throw new Error("Cannot represent object " + JSON.stringify(obj) + " as a DOM node!");
    }
    function _processElementProp(propName, value, el) {
        if (H._eventPropNames.includes(propName)) {
            if (typeof value === "string") {
                el.setAttribute(propName, _toString(value));
            }
            else {
                // remove the "on" part of the prop name to make the event name
                var evName = propName.substring(2);
                el.addEventListener(evName, value);
            }
        }
        else {
            el.setAttribute(propName, _toString(value));
        }
    }
    function marker() {
        return new Marker();
    }
    H.marker = marker;
    var HInternal = /** @class */ (function () {
        function HInternal() {
        }
        return HInternal;
    }());
    var Marker = /** @class */ (function () {
        function Marker() {
            this._id = "";
            for (var i = 0; i < 16; i++) {
                this._id += Math.floor(Math.random() * 10);
            }
            this._domRecord = [];
        }
        Marker.prototype.use = function (mark) {
            var el = mark();
            this._domRecord.push({ domNode: el, func: mark });
            return el;
        };
        Marker.prototype.redraw = function () {
            var _a;
            // filter removed DOM nodes
            this._domRecord = this._domRecord.filter(function (m) { return document.contains(m.domNode); });
            var tmp = [];
            for (var _i = 0, _b = this._domRecord; _i < _b.length; _i++) {
                var m = _b[_i];
                var oldNode = m.domNode;
                var newNode = m.func();
                tmp.push({ domNode: newNode, func: m.func });
                (_a = oldNode.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(newNode, oldNode);
            }
            this._domRecord = tmp;
        };
        return Marker;
    }());
    var Component = /** @class */ (function () {
        function Component() {
            this.componentMarker = marker();
        }
        Component.prototype.render = function () {
            return H.div();
        };
        Component.prototype._render = function () {
            var _this = this;
            return this.componentMarker.use(function () {
                return _this.render();
            });
        };
        return Component;
    }());
    H.Component = Component;
    function _elementBuilder(tag) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var first = args[0];
            if (first === undefined || !(typeof first === "object" && !Array.isArray(first)) || args.length > 1) {
                var el = document.createElement(tag);
                for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                    var child = args_1[_a];
                    el.appendChild(elementChildAsNode(child));
                }
                return el;
            }
            var props = first;
            var f = function () {
                var children = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    children[_i] = arguments[_i];
                }
                var el = document.createElement(tag);
                if (props) {
                    for (var _a = 0, _b = Object.keys(props); _a < _b.length; _a++) {
                        var k = _b[_a];
                        _processElementProp(k, props[k], el);
                    }
                }
                for (var _c = 0, children_1 = children; _c < children_1.length; _c++) {
                    var child = children_1[_c];
                    el.appendChild(elementChildAsNode(child));
                }
                return el;
            };
            f.__builder = true;
            return f;
        };
    }
    H._elementBuilder = _elementBuilder;
    function _noContentElementBuilder(tag) {
        return function (props) {
            var el = document.createElement(tag);
            if (props) {
                for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
                    var k = _a[_i];
                    _processElementProp(k, props[k], el);
                }
            }
            return el;
        };
    }
    H._noContentElementBuilder = _noContentElementBuilder;
})(H || (H = {}));
var H;
(function (H) {
    // content sectioning
    H.address = H._elementBuilder("address");
    H.article = H._elementBuilder("article");
    H.aside = H._elementBuilder("aside");
    H.footer = H._elementBuilder("footer");
    H.header = H._elementBuilder("header");
    H.h1 = H._elementBuilder("h1");
    H.h2 = H._elementBuilder("h2");
    H.h3 = H._elementBuilder("h3");
    H.h4 = H._elementBuilder("h4");
    H.h5 = H._elementBuilder("h5");
    H.h6 = H._elementBuilder("h6");
    H.mainElement = H._elementBuilder("main");
    H.nav = H._elementBuilder("nav");
    H.section = H._elementBuilder("section");
    // text content
    H.blockquote = H._elementBuilder("blockquote");
    H.dd = H._elementBuilder("dd");
    H.div = H._elementBuilder("div");
    H.dl = H._elementBuilder("dl");
    H.dt = H._elementBuilder("dt");
    H.figcaption = H._elementBuilder("figcaption");
    H.figure = H._elementBuilder("figure");
    H.hr = H._noContentElementBuilder("hr");
    H.li = H._elementBuilder("li");
    H.ol = H._elementBuilder("ol");
    H.par = H._elementBuilder("p");
    H.pre = H._elementBuilder("pre");
    H.ul = H._elementBuilder("ul");
    // text semantics
    H.hlink = H._elementBuilder("a");
    H.abbr = H._elementBuilder("abbr");
    H.bold = H._elementBuilder("b");
    H.bdi = H._elementBuilder("bdi");
    H.bdo = H._elementBuilder("bdo");
    H.br = H._noContentElementBuilder("br");
    H.cite = H._elementBuilder("cite");
    H.code = H._elementBuilder("code");
    H.data = H._elementBuilder("data");
    H.dfn = H._elementBuilder("dfn");
    H.em = H._elementBuilder("em");
    H.itl = H._elementBuilder("i");
    H.kbd = H._elementBuilder("kbd");
    H.quot = H._elementBuilder("q");
    H.strk = H._elementBuilder("s");
    H.samp = H._elementBuilder("samp");
    H.small = H._elementBuilder("small");
    H.span = H._elementBuilder("span");
    H.strong = H._elementBuilder("sub");
    H.sup = H._elementBuilder("sup");
    H.time = H._elementBuilder("time");
    H.uline = H._elementBuilder("u");
    H.mathvar = H._elementBuilder("var");
    H.wbr = H._noContentElementBuilder("wbr");
    // Media
    H.area = H._elementBuilder("area");
    H.audio = H._elementBuilder("audio");
    H.img = H._elementBuilder("img");
    H.map = H._elementBuilder("map");
    H.track = H._elementBuilder("track");
    H.video = H._elementBuilder("video");
    // Embedded content
    H.embed = H._elementBuilder("embed");
    H.iframe = H._elementBuilder("iframe");
    H.param = H._elementBuilder("param");
    H.picture = H._elementBuilder("picture");
    H.portal = H._elementBuilder("portal");
    H.source = H._elementBuilder("source");
    // svg and math
    H.svg = H._elementBuilder("svg");
    H.mathElement = H._elementBuilder("math");
    // scripting
    H.canvas = H._elementBuilder("canvas");
    H.noscript = H._elementBuilder("noscript");
    H.script = H._elementBuilder("script");
    // document edits
    H.del = H._elementBuilder("del");
    H.ins = H._elementBuilder("ins");
    // table
    H.caption = H._elementBuilder("caption");
    H.col = H._elementBuilder("col");
    H.colgroup = H._elementBuilder("colgroup");
    H.table = H._elementBuilder("table");
    H.tbody = H._elementBuilder("tbody");
    H.td = H._elementBuilder("td");
    H.tfoot = H._elementBuilder("tfoot");
    H.th = H._elementBuilder("th");
    H.thead = H._elementBuilder("thead");
    H.tr = H._elementBuilder("tr");
    // forms
    H.button = H._elementBuilder("button");
    H.datalist = H._elementBuilder("datalist");
    H.fieldset = H._elementBuilder("fieldset");
    H.form = H._elementBuilder("form");
    H.input = H._elementBuilder("input");
    H.label = H._elementBuilder("label");
    H.legend = H._elementBuilder("legend");
    H.meter = H._elementBuilder("meter");
    H.optgroup = H._elementBuilder("optgroup");
    H.option = H._elementBuilder("option");
    H.ouptut = H._elementBuilder("ouptut");
    H.orogress = H._elementBuilder("progress");
    H.select = H._elementBuilder("select");
    H.textarea = H._elementBuilder("textarea");
    // interactive
    H.details = H._elementBuilder("details");
    H.dialogue = H._elementBuilder("dialogue");
    H.menu = H._elementBuilder("menu");
    H.summary = H._elementBuilder("summary");
})(H || (H = {}));
/*

example:

let commentBox = H.Div({class: "commentBox"})(
    H.Span({class: "name"})(),
    H.Div({class: "comment"})()
)

*/
var H;
(function (H) {
    H._eventPropNames = [
        "onabort",
        "onautocomplete",
        "onautocompleteerror",
        "onblur",
        "oncancel",
        "oncanplay",
        "oncanplaythrough",
        "onchange",
        "onclick",
        "onclose",
        "oncontextmenu",
        "oncuechange",
        "ondblclick",
        "ondrag",
        "ondragend",
        "ondragenter",
        "ondragexit",
        "ondragleave",
        "ondragover",
        "ondragstart",
        "ondrop",
        "ondurationchange",
        "onemptied",
        "onended",
        "onerror",
        "onfocus",
        "oninput",
        "oninvalid",
        "onkeydown",
        "onkeypress",
        "onkeyup",
        "onload",
        "onloadeddata",
        "onloadedmetadata",
        "onloadstart",
        "onmousedown",
        "onmouseenter",
        "onmouseleave",
        "onmousemove",
        "onmouseout",
        "onmouseover",
        "onmouseup",
        "onmousewheel",
        "onpause",
        "onplay",
        "onplaying",
        "onprogress",
        "onratechange",
        "onreset",
        "onresize",
        "onscroll",
        "onseeked",
        "onseeking",
        "onselect",
        "onshow",
        "onsort",
        "onstalled",
        "onsubmit",
        "onsuspend",
        "ontimeupdate",
        "ontoggle",
        "onvolumechange",
        "onwaiting",
    ];
})(H || (H = {}));
