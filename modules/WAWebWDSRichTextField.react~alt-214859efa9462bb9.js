__d("WAWebWDSRichTextField.react", [
	"fbt",
	"WAWebEmojiNode",
	"WAWebEmojiPickerPlugin",
	"WAWebEmojisPlugin.react",
	"WAWebL10N",
	"WDSRichTextField.react",
	"react",
	"useMergeRefs",
	"useWAWebTextFieldEmojiPicker"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u = [
		"children",
		"emoji",
		"nodes",
		"characterCountRenderer"
	], c, d = c || (c = o("react")), m = c.useMemo;
	function p(e, t) {
		var n = r("WAWebL10N").n(e), o = r("WAWebL10N").n(t);
		return s._(
			/*BTDS*/
			"",
			[s._param("current-count", n), s._param("max-count", o)]
		);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(t) {
		var n, a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), s = l.children, c = l.emoji, _ = l.nodes, f = l.characterCountRenderer, g = f === void 0 ? p : f, h = babelHelpers.objectWithoutPropertiesLoose(l, u), y = c == null || (n = c.picker) == null ? void 0 : n.ariaLabel, C = r("useWAWebTextFieldEmojiPicker")({ emojiPickerAriaLabel: y }), b = C.emojiPicker, v = C.enableEmojiPicker, S = C.openEmojiPicker, R = C.richTextFieldRef, L = r("useMergeRefs")(R, i != null ? i : null), E = c != null && (c.display === !0 || c.picker != null || c.keyboardShortcut === !0), k = m(function() {
			if (!E) return _;
			var e = _ != null ? _ : [];
			return e.includes(o("WAWebEmojiNode").EmojiNode) ? e : [o("WAWebEmojiNode").EmojiNode].concat(e);
		}, [E, _]), I = y != null ? {
			emojiPickerAriaLabel: y,
			isEmojiPickerOpen: v.isEmojiPickerOpen,
			onEmojiPress: S
		} : void 0, T = E ? d.jsxs(d.Fragment, { children: [d.jsx(r("WAWebEmojisPlugin.react"), {
			transformTextEmoji: (a = c == null ? void 0 : c.transformTextEmoji) != null ? a : !0,
			emojiSize: c == null ? void 0 : c.emojiSize
		}), (c == null ? void 0 : c.keyboardShortcut) === !0 ? d.jsx(r("WAWebEmojiPickerPlugin"), {}) : null] }) : null;
		return d.jsxs(d.Fragment, { children: [d.jsxs(r("WDSRichTextField.react"), babelHelpers.extends({ ref: L }, h, {
			characterCountRenderer: g,
			nodes: k,
			enableEmojiPicker: I,
			children: [T, s]
		})), (c == null ? void 0 : c.picker) != null ? b : null] });
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
