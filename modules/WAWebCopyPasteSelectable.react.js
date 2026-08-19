__d("WAWebCopyPasteSelectable.react", [
	"WAWebClassnames",
	"WAWebCopyPasteCopyable.react",
	"WAWebDomElementMatches",
	"WAWebExternalLink.react",
	"WAWebURLUtils",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref", "forwardedRef"], s = ["element", "ref"], u = [
		"appTextTemplate",
		"className",
		"plainText",
		"prePlainText",
		"selectable",
		"selectAll"
	], c, d = c || (c = o("react")), m = "selectable-text", p = o("WAWebCopyPasteCopyable.react").COPYABLE_CSS_CLASS + " " + m, _ = "." + m, f = p, g = "select-all", h = "." + g;
	function y(e) {
		if (!e) return !1;
		if (!(e instanceof HTMLElement)) {
			var t = e.parentElement;
			return y(t);
		}
		return r("WAWebDomElementMatches")(e, _) || r("WAWebDomElementMatches")(e, _ + " *");
	}
	function C(e) {
		return e ? e instanceof HTMLElement ? r("WAWebDomElementMatches")(e, h) : C(e.parentElement) : !1;
	}
	function b(e) {
		if (!(e instanceof HTMLElement)) return [];
		var t = y(e);
		if (t) return Array.from(e.childNodes);
		var n = Array.from(e.querySelectorAll(_));
		return n.filter(function(e) {
			return !n.some(function(t) {
				return t !== e && t.contains(e);
			});
		});
	}
	function v(e) {
		return e instanceof HTMLElement ? !!e.querySelector(_) : !1;
	}
	function S(e) {
		return e ? e instanceof HTMLElement ? r("WAWebDomElementMatches")(e, h + " *") : S(e.parentElement) : !1;
	}
	function R(e) {
		if (!S(e)) return null;
		for (var t = e, n = 0, r = 5, o; t && n < r;) {
			if (C(t) && t instanceof HTMLElement) {
				o = t;
				break;
			}
			t = t.parentElement, n++;
		}
		return o;
	}
	function L(e) {
		var t = o("react-compiler-runtime").c(5), n;
		t[0] !== e ? (n = w(e), t[0] = e, t[1] = n) : n = t[1];
		var r = n, a;
		return t[2] !== r || t[3] !== e.selectable ? (a = e.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableCode, babelHelpers.extends({}, r)) : d.jsx("code", babelHelpers.extends({}, r)), t[2] = r, t[3] = e.selectable, t[4] = a) : a = t[4], a;
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(5), n;
		t[0] !== e ? (n = w(e), t[0] = e, t[1] = n) : n = t[1];
		var r = n, a;
		return t[2] !== r || t[3] !== e.selectable ? (a = e.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableDel, babelHelpers.extends({}, r)) : d.jsx("del", babelHelpers.extends({}, r)), t[2] = r, t[3] = e.selectable, t[4] = a) : a = t[4], a;
	}
	function k(e) {
		var t = o("react-compiler-runtime").c(5), n;
		t[0] !== e ? (n = w(e), t[0] = e, t[1] = n) : n = t[1];
		var r = n, a;
		return t[2] !== r || t[3] !== e.selectable ? (a = e.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableDiv, babelHelpers.extends({}, r)) : d.jsx("div", babelHelpers.extends({}, r)), t[2] = r, t[3] = e.selectable, t[4] = a) : a = t[4], a;
	}
	function I(e) {
		var t = o("react-compiler-runtime").c(5), n;
		t[0] !== e ? (n = w(e), t[0] = e, t[1] = n) : n = t[1];
		var r = n, a;
		return t[2] !== r || t[3] !== e.selectable ? (a = e.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableEm, babelHelpers.extends({}, r)) : d.jsx("em", babelHelpers.extends({}, r)), t[2] = r, t[3] = e.selectable, t[4] = a) : a = t[4], a;
	}
	function T(t) {
		var n = o("react-compiler-runtime").c(9), r, a, i;
		if (n[0] !== t) {
			var l = t.ref, s = t.forwardedRef, u = babelHelpers.objectWithoutPropertiesLoose(t, e);
			a = l, r = u, i = w(r), n[0] = t, n[1] = r, n[2] = a, n[3] = i;
		} else r = n[1], a = n[2], i = n[3];
		var c = i, m;
		if (n[4] !== c || n[5] !== r.alt || n[6] !== r.selectable || n[7] !== a) {
			var p;
			m = r.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableImg, babelHelpers.extends({ forwardedRef: a }, c)) : d.jsx("img", babelHelpers.extends({ ref: a }, c, {
				tabIndex: c.onClick ? 0 : -1,
				alt: (p = r.alt) != null ? p : ""
			})), n[4] = c, n[5] = r.alt, n[6] = r.selectable, n[7] = a, n[8] = m;
		} else m = n[8];
		return m;
	}
	function D(e) {
		var t = o("react-compiler-runtime").c(7), n;
		t[0] !== e ? (n = w(e), t[0] = e, t[1] = n) : n = t[1];
		var a = n, i = e.href;
		if (i != null && i !== "" && !r("WAWebURLUtils").hasValidUrlScheme(i)) {
			var l;
			return t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = d.jsx("span", {}), t[2] = l) : l = t[2], l;
		}
		var s;
		return t[3] !== a || t[4] !== e.dataTab || t[5] !== e.selectable ? (s = e.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableLink, babelHelpers.extends({
			dir: "ltr",
			dataTab: e.dataTab
		}, a)) : d.jsx(o("WAWebExternalLink.react").ExternalLinkEl, babelHelpers.extends({ dataTab: e.dataTab }, a)), t[3] = a, t[4] = e.dataTab, t[5] = e.selectable, t[6] = s) : s = t[6], s;
	}
	function x(e) {
		var t = o("react-compiler-runtime").c(5), n;
		t[0] !== e ? (n = w(e), t[0] = e, t[1] = n) : n = t[1];
		var r = n, a;
		return t[2] !== r || t[3] !== e.selectable ? (a = e.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableSpan, babelHelpers.extends({}, r)) : d.jsx("span", babelHelpers.extends({}, r)), t[2] = r, t[3] = e.selectable, t[4] = a) : a = t[4], a;
	}
	function $(e) {
		var t = o("react-compiler-runtime").c(5), n;
		t[0] !== e ? (n = w(e), t[0] = e, t[1] = n) : n = t[1];
		var r = n, a;
		return t[2] !== r || t[3] !== e.selectable ? (a = e.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableStrong, babelHelpers.extends({}, r)) : d.jsx("strong", babelHelpers.extends({}, r)), t[2] = r, t[3] = e.selectable, t[4] = a) : a = t[4], a;
	}
	function P(e) {
		var t = o("react-compiler-runtime").c(5), n;
		t[0] !== e ? (n = w(e), t[0] = e, t[1] = n) : n = t[1];
		var r = n, a;
		return t[2] !== r || t[3] !== e.selectable ? (a = e.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableBlockQuote, babelHelpers.extends({}, r)) : d.jsx("blockquote", babelHelpers.extends({}, r)), t[2] = r, t[3] = e.selectable, t[4] = a) : a = t[4], a;
	}
	function N(e) {
		var t = o("react-compiler-runtime").c(13), n, r, a, i;
		t[0] !== e ? (n = e.element, a = e.ref, r = babelHelpers.objectWithoutPropertiesLoose(e, s), i = w(r), t[0] = e, t[1] = n, t[2] = r, t[3] = a, t[4] = i) : (n = t[1], r = t[2], a = t[3], i = t[4]);
		var l = i;
		if (r.selectable) {
			var u;
			return t[5] !== n || t[6] !== l || t[7] !== a ? (u = d.jsx(o("WAWebCopyPasteCopyable.react").Copyable, babelHelpers.extends({ element: n }, l, { ref: a })), t[5] = n, t[6] = l, t[7] = a, t[8] = u) : u = t[8], u;
		}
		var c;
		return t[9] !== n || t[10] !== l || t[11] !== a ? (c = d.jsx(n, babelHelpers.extends({}, l, { ref: a })), t[9] = n, t[10] = l, t[11] = a, t[12] = c) : c = t[12], c;
	}
	var M = N;
	function w(e) {
		var t, n = e.appTextTemplate, r = e.className, a = e.plainText, i = e.prePlainText, l = e.selectable, s = e.selectAll, c = babelHelpers.objectWithoutPropertiesLoose(e, u), d = c;
		if (l && (d.plainText = a, d.prePlainText = i, d.appTextTemplate = n), d.className = o("WAWebClassnames").classnamesConvertMeToStylexPlease(r, "xnpuxes", (t = {}, t[m] = l, t[g] = l && s, t)), l) {
			var p = c["data-testid"], _ = s === !0 ? "select-all selectable-text" : "selectable-text";
			d["data-testid"] = p != null ? p + " " + _ : _;
		}
		return d;
	}
	l.SELECTABLE_CSS_CLASS = m, l.SELECTABLE_INPUT_CSS_CLASS = f, l.isSelectable = y, l.isSelectAll = C, l.findSelectableChildren = b, l.hasSelectableChildren = v, l.findSelectAllParent = R, l.SelectableCode = L, l.SelectableDel = E, l.SelectableDiv = k, l.SelectableEm = I, l.SelectableImg = T, l.SelectableLink = D, l.SelectableSpan = x, l.SelectableStrong = $, l.SelectableBlockQuote = P, l.Selectable = M;
}), 98);
