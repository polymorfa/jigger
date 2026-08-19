__d("MWXLink.react", [
	"E2EEMessagingLinkContext.react",
	"FDSLink.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref", "encryptedLink"], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(11), a, i, l;
		n[0] !== t ? (i = t.ref, a = t.encryptedLink, l = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l) : (a = n[1], i = n[2], l = n[3]);
		var s = o("E2EEMessagingLinkContext.react").useE2EEMessagingLink(), c = s.isSecure, d;
		n[4] !== a || n[5] !== c ? (d = c || a === !0 ? {
			disableLinkShimAndTracking_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV: !0,
			disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV: !0,
			rel: [
				"noreferrer",
				"noopener",
				"nofollow"
			]
		} : {}, n[4] = a, n[5] = c, n[6] = d) : d = n[6];
		var m = d, p;
		return n[7] !== m || n[8] !== i || n[9] !== l ? (p = u.jsx(r("FDSLink.react"), babelHelpers.extends({}, l, m, { ref: i })), n[7] = m, n[8] = i, n[9] = l, n[10] = p) : p = n[10], p;
	}
	l.default = c;
}), 98);
