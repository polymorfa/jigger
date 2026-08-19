__d("WAWebRenderDocumentPreviewIcon.react", [
	"WAWebFrontendMsgGetters",
	"WAWebPersonRefreshedOutlineThinIcon.react",
	"WDSIconIcDescription.react",
	"react",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.msg, n = o("useWAWebMsgValues").useMsgValues(t.id, [o("WAWebFrontendMsgGetters").getMediaData]), a = n[0], i = a == null ? void 0 : a.parsedVcards;
		return i ? s.jsx(o("WAWebPersonRefreshedOutlineThinIcon.react").PersonRefreshedOutlineThinIcon, {}) : s.jsx(r("WDSIconIcDescription.react"), {
			height: 20,
			width: 20,
			testid: "ic-description"
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
