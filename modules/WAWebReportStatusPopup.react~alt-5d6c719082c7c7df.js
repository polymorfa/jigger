__d("WAWebReportStatusPopup.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFrontendContactGetters",
	"WAWebModal.react",
	"WAWebName.react",
	"WAWebReportPopupBase.react",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
		href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
		testid: "learn-more-link",
		children: r("WAWebFbtCommon")("Learn more")
	});
	function d(e) {
		var t = o("react-compiler-runtime").c(23), n = e.contact, r = e.onCancel, a = e.onReport, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [o("WAWebFrontendContactGetters").getIsContactBlocked], t[0] = i) : i = t[0];
		var l = o("useWAWebContactValues").useContactValues(n.id, i), d = l[0], m;
		t[1] !== n ? (m = u.jsx(o("WAWebName.react").Name, { contact: n }), t[1] = n, t[2] = m) : m = t[2];
		var p = m, _;
		t[3] !== a ? (_ = async function() {
			a(!1);
		}, t[3] = a, t[4] = _) : _ = t[4];
		var f = _, g;
		t[5] !== a ? (g = async function() {
			a(!0);
		}, t[5] = a, t[6] = g) : g = t[6];
		var h = g, y;
		t[7] !== n.isBusiness ? (y = function() {
			return n.isBusiness ? s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", c)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", c)]
			);
		}, t[7] = n.isBusiness, t[8] = y) : y = t[8];
		var C = y, b = !d, v;
		t[9] !== C ? (v = C(), t[9] = C, t[10] = v) : v = t[10];
		var S;
		t[11] !== p ? (S = o("WAWebReportPopupBase.react").getBlockLabelText(!1, p), t[11] = p, t[12] = S) : S = t[12];
		var R;
		t[13] !== n.isBusiness ? (R = o("WAWebReportPopupBase.react").getBlockSubText({
			isBizBot3p: !1,
			isBusiness: n.isBusiness,
			isGroup: !1,
			isCommunityAnnouncementGroup: !1
		}), t[13] = n.isBusiness, t[14] = R) : R = t[14];
		var L;
		return t[15] !== f || t[16] !== h || t[17] !== r || t[18] !== b || t[19] !== v || t[20] !== S || t[21] !== R ? (L = u.jsx(o("WAWebReportPopupBase.react").ReportPopupBase, {
			hasAdditionalAction: b,
			reportSubText: v,
			additionalActionLabelText: S,
			additionalActionSubText: R,
			onSendReport: f,
			onSendReportAndAdditionalAction: h,
			onCancel: r,
			type: o("WAWebModal.react").ModalTheme.StatusReport
		}), t[15] = f, t[16] = h, t[17] = r, t[18] = b, t[19] = v, t[20] = S, t[21] = R, t[22] = L) : L = t[22], L;
	}
	l.default = d;
}), 226);
