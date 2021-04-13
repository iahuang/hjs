namespace HTypes {
    type EventAttr = string | ((e: Event) => void);
    export interface HTMLGlobalProps extends HSpecialProps, HTMLEventProps {
        [key: string]: any;
        accesskey?: string;
        class?: string;
        contenteditable?: string;
        dir?: string;
        draggable?: boolean;
        hidden?: boolean;
        id?: string;
        lang?: string;
        spellcheck?: boolean;
        style?: string;
        tabindex?: number;
        title?: string;
        translate?: "yes" | "no";
    }

    export interface HTMLEventProps {
        onabort?: EventAttr;
        onautocomplete?: EventAttr;
        onautocompleteerror?: EventAttr;
        onblur?: EventAttr;
        oncancel?: EventAttr;
        oncanplay?: EventAttr;
        oncanplaythrough?: EventAttr;
        onchange?: EventAttr;
        onclick?: EventAttr;
        onclose?: EventAttr;
        oncontextmenu?: EventAttr;
        oncuechange?: EventAttr;
        ondblclick?: EventAttr;
        ondrag?: EventAttr;
        ondragend?: EventAttr;
        ondragenter?: EventAttr;
        ondragexit?: EventAttr;
        ondragleave?: EventAttr;
        ondragover?: EventAttr;
        ondragstart?: EventAttr;
        ondrop?: EventAttr;
        ondurationchange?: EventAttr;
        onemptied?: EventAttr;
        onended?: EventAttr;
        onerror?: EventAttr;
        onfocus?: EventAttr;
        oninput?: EventAttr;
        oninvalid?: EventAttr;
        onkeydown?: EventAttr;
        onkeypress?: EventAttr;
        onkeyup?: EventAttr;
        onload?: EventAttr;
        onloadeddata?: EventAttr;
        onloadedmetadata?: EventAttr;
        onloadstart?: EventAttr;
        onmousedown?: EventAttr;
        onmouseenter?: EventAttr;
        onmouseleave?: EventAttr;
        onmousemove?: EventAttr;
        onmouseout?: EventAttr;
        onmouseover?: EventAttr;
        onmouseup?: EventAttr;
        onmousewheel?: EventAttr;
        onpause?: EventAttr;
        onplay?: EventAttr;
        onplaying?: EventAttr;
        onprogress?: EventAttr;
        onratechange?: EventAttr;
        onreset?: EventAttr;
        onresize?: EventAttr;
        onscroll?: EventAttr;
        onseeked?: EventAttr;
        onseeking?: EventAttr;
        onselect?: EventAttr;
        onshow?: EventAttr;
        onsort?: EventAttr;
        onstalled?: EventAttr;
        onsubmit?: EventAttr;
        onsuspend?: EventAttr;
        ontimeupdate?: EventAttr;
        ontoggle?: EventAttr;
        onvolumechange?: EventAttr;
        onwaiting?: EventAttr;
    }

    export interface HSpecialProps {
        classes: (string | null | undefined)[];
    }
}

namespace H {
    export const _eventPropNames = [
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
}
