__d("WAWebBizAGMSignupPrivacyPolicyPopup.react", [
	"fbt",
	"WAWebBizBrandingLine.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebSignupCTAExperiment",
	"WAWebSignupFlowLoggerLazy",
	"WDSIconIcOpenInNew.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(19), n = e.businessWid, a = e.chatTimestamp, i = e.contact, l = e.experiment, c = e.privacyPolicyUrl, d = e.signupId, m;
		t[0] !== i ? (m = u.jsx(o("WAWebName.react").Name, { contact: i }), t[0] = i, t[1] = m) : m = t[1];
		var p = m, _;
		t[2] !== n || t[3] !== a || t[4] !== c || t[5] !== d ? (_ = function() {
			d != null && o("WAWebSignupFlowLoggerLazy").logSignupOp({
				operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.AGM_BOTTOMSHEET_EXTERNAL_NAVIGATION,
				signupId: d,
				businessWid: n,
				chatTimestamp: a
			}), o("WAWebExternalLink.react").openExternalLink(c), o("WAWebModalManager").ModalManager.close();
		}, t[2] = n, t[3] = a, t[4] = c, t[5] = d, t[6] = _) : _ = t[6];
		var f = _, g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[7] = g) : g = t[7];
		var h;
		t[8] !== p ? (h = s._(
			/*BTDS*/
			"",
			[s._param("contactTitle", p)]
		), t[8] = p, t[9] = h) : h = t[9];
		var y;
		t[10] !== l ? (y = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: l === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}), t[10] = l, t[11] = y) : y = t[11];
		var C;
		t[12] !== i ? (C = u.jsx(r("WAWebBizBrandingLine.react"), { contact: i }), t[12] = i, t[13] = C) : C = t[13];
		var b;
		return t[14] !== f || t[15] !== h || t[16] !== y || t[17] !== C ? (b = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onCancel: o("WAWebModalManager").closeModalManager,
			onOK: f,
			okIcon: r("WDSIconIcOpenInNew.react"),
			okText: g,
			title: h,
			children: [y, C]
		}), t[14] = f, t[15] = h, t[16] = y, t[17] = C, t[18] = b) : b = t[18], b;
	}
	l.default = c;
}), 226);
