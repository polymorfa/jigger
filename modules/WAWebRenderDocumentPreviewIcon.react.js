__d("WAWebRenderDocumentPreviewIcon.react", [
	"WAWebFrontendMsgGetters",
	"WAWebPersonRefreshedOutlineThinIcon.react",
	"WDSIconIcDescription.react",
	"react",
	"react-compiler-runtime",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(3), n = e.msg, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [o("WAWebFrontendMsgGetters").getMediaData], t[0] = a) : a = t[0];
		var i = o("useWAWebMsgValues").useMsgValues(n.id, a), l = i[0], u = l == null ? void 0 : l.parsedVcards;
		if (u) {
			var c;
			return t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(o("WAWebPersonRefreshedOutlineThinIcon.react").PersonRefreshedOutlineThinIcon, {}), t[1] = c) : c = t[1], c;
		}
		var d;
		return t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = s.jsx(r("WDSIconIcDescription.react"), {
			height: 20,
			width: 20,
			testid: "ic-description"
		}), t[2] = d) : d = t[2], d;
	}
	l.default = u;
}), 98);
