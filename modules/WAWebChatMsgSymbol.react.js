__d("WAWebChatMsgSymbol.react", [
	"WAWebFrontendMsgGetters",
	"WAWebMessageFailIcon.react",
	"WAWebMessagePluginRenderPreviewIcon",
	"WAWebMsgGetters",
	"WAWebSystemMessagePluginRenderPreviewIcon",
	"react",
	"react-compiler-runtime",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(13), n = e.msg, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = [
			o("WAWebMsgGetters").getType,
			o("WAWebMsgGetters").getSubtype,
			o("WAWebFrontendMsgGetters").getMediaData
		], t[0] = r) : r = t[0];
		var a = o("useWAWebMsgValues").useOptionalMsgValues(n.id, r), i = a != null ? a[0] : n.type, l = a != null ? a[1] : n.subtype, u = a != null ? a[2] : n.mediaData, c;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(o("WAWebMessageFailIcon.react").MessageFailIcon, {}), t[1] = c) : c = t[1];
		var d = c;
		if (e.overrideIcon != null) d = e.overrideIcon;
		else {
			var m;
			t[2] !== n ? (m = o("WAWebSystemMessagePluginRenderPreviewIcon").renderPreviewIcon({ msg: n }), t[2] = n, t[3] = m) : m = t[3];
			var p = m;
			if (p != null) d = p;
			else {
				var _ = u == null ? void 0 : u.parsedVcards, f;
				t[4] !== n || t[5] !== e.viewOnceStatic || t[6] !== l || t[7] !== _ || t[8] !== i ? (f = o("WAWebMessagePluginRenderPreviewIcon").renderPreviewIcon(i, l, {
					msg: n,
					options: {
						parsedVcards: _,
						viewOnceStatic: e.viewOnceStatic
					}
				}), t[4] = n, t[5] = e.viewOnceStatic, t[6] = l, t[7] = _, t[8] = i, t[9] = f) : f = t[9];
				var g = f;
				g != null && (d = g);
			}
		}
		var h;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (h = { className: "x1rg5ohu x1c4vz4f x2lah0s xdl72j9 xhslqc4 x16dsc37 x1qx5ct2 x1p8j9ns" }, t[10] = h) : h = t[10];
		var y;
		return t[11] !== d ? (y = s.jsx("div", babelHelpers.extends({}, h, {
			"data-testid": "chat-msg-symbol",
			children: d
		})), t[11] = d, t[12] = y) : y = t[12], y;
	}
	l.default = u;
}), 98);
