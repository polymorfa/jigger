__d("useWAWebTextFieldEmojiPicker", [
	"Lexical",
	"WAWebDropdown.react",
	"WAWebEmojiNode",
	"WAWebEmojiPanel.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"react",
	"react-compiler-runtime",
	"useWAWebIsKeyboardUser"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useMemo, d = u.useRef, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(18), n = e.emojiPickerAriaLabel, a = r("useWAWebIsKeyboardUser")(), i = a.isKeyboardUser, l = d(null), u = m(null), c = u[0], p = u[1], _;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = [o("WAWebEmojiNode").EmojiNode], t[0] = _) : _ = t[0];
		var f = _, g;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (g = function() {
			var e;
			(e = l.current) == null || e.focus();
		}, t[1] = g) : g = t[1];
		var h = g, y;
		t[2] !== i ? (y = function() {
			p(null), i && h();
		}, t[2] = i, t[3] = y) : y = t[3];
		var C = y, b;
		if (t[4] !== C || t[5] !== i) {
			var v = function(t) {
				var e, n = (e = l.current) == null ? void 0 : e.editor;
				n != null && (n.focus(), n.update(function() {
					var e = o("Lexical").$getSelection();
					o("Lexical").$isRangeSelection(e) && e.insertText(t);
				})), i && C();
			};
			b = function(t) {
				var e = s.jsx(r("WAWebEmojiPanel.react"), {
					onEmoji: v,
					onFocusNext: h,
					onFocusPrev: h
				});
				p({
					menu: e,
					dirY: o("WAWebDropdown.react").DirY.TOP,
					type: o("WAWebDropdown.react").MenuType.EmojiPicker,
					anchor: document.activeElement
				}), h();
			}, t[4] = C, t[5] = i, t[6] = b;
		} else b = t[6];
		var S = b, R;
		t[7] !== c || t[8] !== C ? (R = c != null ? s.jsx(o("WAWebUimUie.react").UIE, {
			dismissOnWindowResize: !0,
			displayName: "EmojiPicker",
			escapable: !0,
			popable: !0,
			requestDismiss: C,
			children: s.jsx(r("WAWebUimUieMenu.react"), { contextMenu: c })
		}) : null, t[7] = c, t[8] = C, t[9] = R) : R = t[9];
		var L = R, E = c != null, k;
		t[10] !== n || t[11] !== S || t[12] !== E ? (k = {
			emojiPickerAriaLabel: n,
			isEmojiPickerOpen: E,
			onEmojiPress: S
		}, t[10] = n, t[11] = S, t[12] = E, t[13] = k) : k = t[13];
		var I;
		return t[14] !== L || t[15] !== S || t[16] !== k ? (I = {
			emojiPicker: L,
			enableEmojiPicker: k,
			nodes: f,
			openEmojiPicker: S,
			richTextFieldRef: l
		}, t[14] = L, t[15] = S, t[16] = k, t[17] = I) : I = t[17], I;
	}
	l.default = p;
}), 98);
