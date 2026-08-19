__d("WAWebCopyPasteSelectable.react", [
	"WAWebClassnames",
	"WAWebCopyPasteCopyable.react",
	"WAWebDomElementMatches",
	"WAWebExternalLink.react",
	"WAWebURLUtils",
	"react"
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
		var t = w(e);
		return e.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableCode, babelHelpers.extends({}, t)) : d.jsx("code", babelHelpers.extends({}, t));
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = w(e);
		return e.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableDel, babelHelpers.extends({}, t)) : d.jsx("del", babelHelpers.extends({}, t));
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = w(e);
		return e.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableDiv, babelHelpers.extends({}, t)) : d.jsx("div", babelHelpers.extends({}, t));
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		var t = w(e);
		return e.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableEm, babelHelpers.extends({}, t)) : d.jsx("em", babelHelpers.extends({}, t));
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(t) {
		var n, r = t.ref, a = t.forwardedRef, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = w(i);
		return i.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableImg, babelHelpers.extends({ forwardedRef: r }, l)) : d.jsx("img", babelHelpers.extends({ ref: r }, l, {
			tabIndex: l.onClick ? 0 : -1,
			alt: (n = i.alt) != null ? n : ""
		}));
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(e) {
		var t = w(e), n = e.href;
		return n != null && n !== "" && !r("WAWebURLUtils").hasValidUrlScheme(n) ? d.jsx("span", {}) : e.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableLink, babelHelpers.extends({
			dir: "ltr",
			dataTab: e.dataTab
		}, t)) : d.jsx(o("WAWebExternalLink.react").ExternalLinkEl, babelHelpers.extends({ dataTab: e.dataTab }, t));
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e) {
		var t = w(e);
		return e.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableSpan, babelHelpers.extends({}, t)) : d.jsx("span", babelHelpers.extends({}, t));
	}
	x.displayName = x.name + " [from " + i.id + "]";
	function $(e) {
		var t = w(e);
		return e.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableStrong, babelHelpers.extends({}, t)) : d.jsx("strong", babelHelpers.extends({}, t));
	}
	$.displayName = $.name + " [from " + i.id + "]";
	function P(e) {
		var t = w(e);
		return e.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").CopyableBlockQuote, babelHelpers.extends({}, t)) : d.jsx("blockquote", babelHelpers.extends({}, t));
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(e) {
		var t = e.element, n = e.ref, r = babelHelpers.objectWithoutPropertiesLoose(e, s), a = w(r);
		return r.selectable ? d.jsx(o("WAWebCopyPasteCopyable.react").Copyable, babelHelpers.extends({ element: t }, a, { ref: n })) : d.jsx(t, babelHelpers.extends({}, a, { ref: n }));
	}
	N.displayName = N.name + " [from " + i.id + "]";
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
