namespace H {
    // content sectioning
    export const address = _elementBuilder<HTypes.HTMLGlobalProps>("address");
    export const article = _elementBuilder<HTypes.HTMLGlobalProps>("article");
    export const aside = _elementBuilder<HTypes.HTMLGlobalProps>("aside");
    export const footer = _elementBuilder<HTypes.HTMLGlobalProps>("footer");
    export const header = _elementBuilder<HTypes.HTMLGlobalProps>("header");
    export const h1 = _elementBuilder<HTypes.HTMLGlobalProps>("h1");
    export const h2 = _elementBuilder<HTypes.HTMLGlobalProps>("h2");
    export const h3 = _elementBuilder<HTypes.HTMLGlobalProps>("h3");
    export const h4 = _elementBuilder<HTypes.HTMLGlobalProps>("h4");
    export const h5 = _elementBuilder<HTypes.HTMLGlobalProps>("h5");
    export const h6 = _elementBuilder<HTypes.HTMLGlobalProps>("h6");
    export const mainElement = _elementBuilder<HTypes.HTMLGlobalProps>("main");
    export const nav = _elementBuilder<HTypes.HTMLGlobalProps>("nav");
    export const section = _elementBuilder<HTypes.HTMLGlobalProps>("section");

    // text content
    export const blockquote = _elementBuilder<HTypes.HTMLGlobalProps>("blockquote");
    export const dd = _elementBuilder<HTypes.HTMLGlobalProps>("dd");
    export const div = _elementBuilder<HTypes.HTMLGlobalProps>("div");
    export const dl = _elementBuilder<HTypes.HTMLGlobalProps>("dl");
    export const dt = _elementBuilder<HTypes.HTMLGlobalProps>("dt");
    export const figcaption = _elementBuilder<HTypes.HTMLGlobalProps>("figcaption");
    export const figure = _elementBuilder<HTypes.HTMLGlobalProps>("figure");
    export const hr = _noContentElementBuilder<HTypes.HTMLGlobalProps>("hr");
    export const li = _elementBuilder<HTypes.HTMLGlobalProps>("li");
    export const ol = _elementBuilder<HTypes.HTMLGlobalProps>("ol");
    export const par = _elementBuilder<HTypes.HTMLGlobalProps>("p");
    export const pre = _elementBuilder<HTypes.HTMLGlobalProps>("pre");
    export const ul = _elementBuilder<HTypes.HTMLGlobalProps>("ul");

    // text semantics
    export const hlink = _elementBuilder<HTypes.HTMLGlobalProps>("a");
    export const abbr = _elementBuilder<HTypes.HTMLGlobalProps>("abbr");
    export const bold = _elementBuilder<HTypes.HTMLGlobalProps>("b");
    export const bdi = _elementBuilder<HTypes.HTMLGlobalProps>("bdi");
    export const bdo = _elementBuilder<HTypes.HTMLGlobalProps>("bdo");
    export const br = _noContentElementBuilder<HTypes.HTMLGlobalProps>("br");
    export const cite = _elementBuilder<HTypes.HTMLGlobalProps>("cite");
    export const code = _elementBuilder<HTypes.HTMLGlobalProps>("code");
    export const data = _elementBuilder<HTypes.HTMLGlobalProps>("data");
    export const dfn = _elementBuilder<HTypes.HTMLGlobalProps>("dfn");
    export const em = _elementBuilder<HTypes.HTMLGlobalProps>("em");
    export const itl = _elementBuilder<HTypes.HTMLGlobalProps>("i");
    export const kbd = _elementBuilder<HTypes.HTMLGlobalProps>("kbd");
    export const quot = _elementBuilder<HTypes.HTMLGlobalProps>("q");
    export const strk = _elementBuilder<HTypes.HTMLGlobalProps>("s");
    export const samp = _elementBuilder<HTypes.HTMLGlobalProps>("samp");
    export const small = _elementBuilder<HTypes.HTMLGlobalProps>("small");
    export const span = _elementBuilder<HTypes.HTMLGlobalProps>("span");
    export const strong = _elementBuilder<HTypes.HTMLGlobalProps>("sub");
    export const sup = _elementBuilder<HTypes.HTMLGlobalProps>("sup");
    export const time = _elementBuilder<HTypes.HTMLGlobalProps>("time");
    export const uline = _elementBuilder<HTypes.HTMLGlobalProps>("u");
    export const mathvar = _elementBuilder<HTypes.HTMLGlobalProps>("var");
    export const wbr = _noContentElementBuilder<HTypes.HTMLGlobalProps>("wbr");

    // Media
    export const area = _elementBuilder<HTypes.HTMLGlobalProps>("area");
    export const audio = _elementBuilder<HTypes.HTMLGlobalProps>("audio");
    export const img = _elementBuilder<HTypes.HTMLGlobalProps>("img");
    export const map = _elementBuilder<HTypes.HTMLGlobalProps>("map");
    export const track = _elementBuilder<HTypes.HTMLGlobalProps>("track");
    export const video = _elementBuilder<HTypes.HTMLGlobalProps>("video");

    // Embedded content
    export const embed = _elementBuilder<HTypes.HTMLGlobalProps>("embed");
    export const iframe = _elementBuilder<HTypes.HTMLGlobalProps>("iframe");
    export const param = _elementBuilder<HTypes.HTMLGlobalProps>("param");
    export const picture = _elementBuilder<HTypes.HTMLGlobalProps>("picture");
    export const portal = _elementBuilder<HTypes.HTMLGlobalProps>("portal");
    export const source = _elementBuilder<HTypes.HTMLGlobalProps>("source");

    // svg and math
    export const svg = _elementBuilder<HTypes.HTMLGlobalProps>("svg");
    export const mathElement = _elementBuilder<HTypes.HTMLGlobalProps>("math");

    // scripting
    export const canvas = _elementBuilder<HTypes.HTMLGlobalProps>("canvas");
    export const noscript = _elementBuilder<HTypes.HTMLGlobalProps>("noscript");
    export const script = _elementBuilder<HTypes.HTMLGlobalProps>("script");

    // document edits
    export const del = _elementBuilder<HTypes.HTMLGlobalProps>("del");
    export const ins = _elementBuilder<HTypes.HTMLGlobalProps>("ins");

    // table
    export const caption = _elementBuilder<HTypes.HTMLGlobalProps>("caption");
    export const col = _elementBuilder<HTypes.HTMLGlobalProps>("col");
    export const colgroup = _elementBuilder<HTypes.HTMLGlobalProps>("colgroup");
    export const table = _elementBuilder<HTypes.HTMLGlobalProps>("table");
    export const tbody = _elementBuilder<HTypes.HTMLGlobalProps>("tbody");
    export const td = _elementBuilder<HTypes.HTMLGlobalProps>("td");
    export const tfoot = _elementBuilder<HTypes.HTMLGlobalProps>("tfoot");
    export const th = _elementBuilder<HTypes.HTMLGlobalProps>("th");
    export const thead = _elementBuilder<HTypes.HTMLGlobalProps>("thead");
    export const tr = _elementBuilder<HTypes.HTMLGlobalProps>("tr");

    // forms
    export const button = _elementBuilder<HTypes.HTMLGlobalProps>("button");
    export const datalist = _elementBuilder<HTypes.HTMLGlobalProps>("datalist");
    export const fieldset = _elementBuilder<HTypes.HTMLGlobalProps>("fieldset");
    export const form = _elementBuilder<HTypes.HTMLGlobalProps>("form");
    export const input = _elementBuilder<HTypes.HTMLGlobalProps>("input");
    export const label = _elementBuilder<HTypes.HTMLGlobalProps>("label");
    export const legend = _elementBuilder<HTypes.HTMLGlobalProps>("legend");
    export const meter = _elementBuilder<HTypes.HTMLGlobalProps>("meter");
    export const optgroup = _elementBuilder<HTypes.HTMLGlobalProps>("optgroup");
    export const option = _elementBuilder<HTypes.HTMLGlobalProps>("option");
    export const ouptut = _elementBuilder<HTypes.HTMLGlobalProps>("ouptut");
    export const orogress = _elementBuilder<HTypes.HTMLGlobalProps>("progress");
    export const select = _elementBuilder<HTypes.HTMLGlobalProps>("select");
    export const textarea = _elementBuilder<HTypes.HTMLGlobalProps>("textarea");

    // interactive
    export const details = _elementBuilder<HTypes.HTMLGlobalProps>("details");
    export const dialogue = _elementBuilder<HTypes.HTMLGlobalProps>("dialogue");
    export const menu = _elementBuilder<HTypes.HTMLGlobalProps>("menu");
    export const summary = _elementBuilder<HTypes.HTMLGlobalProps>("summary");
}

/*

example:

let commentBox = H.Div({class: "commentBox"})(
    H.Span({class: "name"})(),
    H.Div({class: "comment"})()
)

*/
