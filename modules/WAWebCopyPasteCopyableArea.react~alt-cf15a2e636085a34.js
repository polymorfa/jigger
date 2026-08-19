__d("WAWebCopyPasteCopyableArea.react", [
	"WAWebClassnames",
	"WAWebCopyPasteClipboard",
	"justknobx",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"canCut",
		"children",
		"className",
		"ref",
		"testid"
	], s, u = s || (s = o("react")), c = "copyable-area";
	function d(t) {
		var n = t.canCut, r = t.children, a = t.className, i = t.ref, l = t.testid, s = babelHelpers.objectWithoutPropertiesLoose(t, e), d = babelHelpers.extends({}, s, {
			className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(a, "xnpuxes", c),
			onCopy: p,
			onCut: n ? _ : void 0
		});
		return u.jsx("div", babelHelpers.extends({}, d, {
			ref: i,
			"data-testid": l,
			children: r
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e, t) {
		var n = e.currentTarget;
		if (!(n instanceof HTMLElement) || !r("justknobx")._("2416") && !o("WAWebCopyPasteClipboard").Clipboard.selectionRequiresCustomSerialization(t)) return !1;
		var a = o("WAWebCopyPasteClipboard").Clipboard.fromSelection(n, t);
		e.clipboardData.setData("text/plain", a.toPlainString());
		try {
			e.clipboardData.setData(o("WAWebCopyPasteClipboard").APP_TEXT_MIMETYPE, a.toAppString());
		} catch (e) {}
		return !0;
	}
	function p(e) {
		m(e, window.getSelection()) && (e.stopPropagation(), e.preventDefault());
	}
	function _(e) {
		var t = window.getSelection();
		m(e, t) && (t.deleteFromDocument(), e.stopPropagation(), e.preventDefault(), e.target.dispatchEvent(new Event("input", {
			bubbles: !0,
			cancelable: !0
		})));
	}
	l.default = d;
}), 98);
