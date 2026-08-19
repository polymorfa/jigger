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
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.businessWid, n = e.chatTimestamp, a = e.contact, i = e.experiment, l = e.privacyPolicyUrl, c = e.signupId, d = u.jsx(o("WAWebName.react").Name, { contact: a }), m = function() {
			c != null && o("WAWebSignupFlowLoggerLazy").logSignupOp({
				operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.AGM_BOTTOMSHEET_EXTERNAL_NAVIGATION,
				signupId: c,
				businessWid: t,
				chatTimestamp: n
			}), o("WAWebExternalLink.react").openExternalLink(l), o("WAWebModalManager").ModalManager.close();
		};
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onCancel: o("WAWebModalManager").closeModalManager,
			onOK: m,
			okIcon: r("WDSIconIcOpenInNew.react"),
			okText: s._(
				/*BTDS*/
				""
			),
			title: s._(
				/*BTDS*/
				"",
				[s._param("contactTitle", d)]
			),
			children: [u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: i === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			}), u.jsx(r("WAWebBizBrandingLine.react"), { contact: a })]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
