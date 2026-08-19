__d("WAWebStatusCell.react", [
	"WAReplaceRepeatingWhitespace",
	"WAWebBoolFunc",
	"WAWebChatCell.react",
	"WAWebChatCollection",
	"WAWebClock",
	"WAWebContactGetters",
	"WAWebFrontendChatGetters",
	"WAWebFrontendContactGetters",
	"WAWebMiscGatingUtils",
	"WAWebParticipantListUtils",
	"WAWebPsaVerifiedBlueIcon.react",
	"WAWebPsaVerifiedIcon.react",
	"WAWebStatusGetters",
	"WAWebStatusThumbnail.react",
	"react",
	"useWAWebChatValues",
	"useWAWebContactValues",
	"useWAWebStatusValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t, n = e.contact, a = e.contextMenu, i = e.isModalView, l = i === void 0 ? !0 : i, u = e.onClick, c = e.onContext, d = e.showMutedStatusesDimmed, m = d === void 0 ? !0 : d, p = e.showRing, _ = p === void 0 ? !1 : p, f = e.status, g = o("useWAWebStatusValues").useStatusValues(f.id, [o("WAWebStatusGetters").getId, o("WAWebStatusGetters").getT]), h = g[0], y = g[1], C = o("useWAWebContactValues").useContactValues(n.id, [
			o("WAWebFrontendContactGetters").getFormattedName,
			o("WAWebContactGetters").getStatusMute,
			o("WAWebContactGetters").getIsPSA
		]), b = C[0], v = C[1], S = C[2], R = o("WAWebChatCollection").ChatCollection.get(h), L = (t = o("useWAWebChatValues").useOptionalChatValues(R == null ? void 0 : R.id, [o("WAWebFrontendChatGetters").getGroupMetadata])) != null ? t : [null], E = L[0], k = b;
		E != null && E.isUnnamed && (k = r("WAReplaceRepeatingWhitespace")(o("WAWebParticipantListUtils").calculateUnnamedGroupFullParticipantsList(E, !0)));
		var I = S ? null : o("WAWebClock").Clock.relativeDateAndTimeStr(y), T = S ? s.jsxs("span", {
			className: "x1jfb8zj xuce83p x1bft6iq x1i7k8ik xq9mrsl",
			children: [b, s.jsx("div", {
				className: "x1rg5ohu x1c4vz4f x2lah0s xdl72j9 xvijh9v x7phf20 x16dsc37",
				children: o("WAWebMiscGatingUtils").isBlueEnabled() ? s.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {}) : s.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {})
			})]
		}) : k, D = null;
		return c != null ? D = "hidden-status-row-cell" : l && (D = "status-list-modal"), s.jsx(r("WAWebChatCell.react"), {
			testid: "status-row-cell",
			className: {
				0: "",
				1: "x1ks1olk"
			}[!!(m && v) << 0],
			customImage: !0,
			theme: D,
			image: s.jsx(r("WAWebStatusThumbnail.react"), {
				id: f.id,
				contact: n,
				onClick: u,
				showRing: _
			}),
			tabIndex: -1,
			handleKeyboardClick: !0,
			focusid: "status-row-item",
			primary: T,
			secondary: I,
			onClick: u,
			contextEnabled: c != null ? o("WAWebBoolFunc").returnTrue : o("WAWebBoolFunc").returnFalse,
			onContext: c,
			contextMenu: a
		}, h.toString());
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
