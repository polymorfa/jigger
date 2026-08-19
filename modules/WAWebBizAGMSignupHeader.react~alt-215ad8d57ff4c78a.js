__d("WAWebBizAGMSignupHeader.react", [
	"fbt",
	"WAWebBizAGMSignupPrivacyPolicyPopup.react",
	"WAWebKeyboardIsKeyActivation",
	"WAWebModalManager",
	"WAWebSignupCTAExperiment",
	"WAWebSignupFlowLoggerLazy",
	"WDSFlex.stylex",
	"WDSFocusStateStyles",
	"WDSIconWdsIcGift.react",
	"WDSText.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		wrapper: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			backgroundColor: "x1bu39yj",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			marginTop: "x4qlk2n",
			marginInlineStart: "x3c9gwt",
			marginInlineEnd: "x1pu7lq9",
			marginBottom: "xefnzgg",
			$$css: !0
		},
		clickable: {
			cursor: "x1ypdohk",
			$$css: !0
		},
		iconCircle: {
			width: "x100vrsf",
			height: "x1vqgdyp",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "x16w0wmm",
			color: "x14ug900",
			$$css: !0
		},
		contentWrapper: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.businessWid, a = t.chatTimestamp, i = t.contact, l = t.experiment, u = t.privacyPolicyUrl, m = t.signupId, p = function() {
			u != null && (m != null && o("WAWebSignupFlowLoggerLazy").logSignupOp({
				operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.AGM_VIEW_DETAILS_CLICKED,
				signupId: m,
				businessWid: n,
				chatTimestamp: a
			}), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebBizAGMSignupPrivacyPolicyPopup.react"), {
				businessWid: n,
				chatTimestamp: a,
				contact: i,
				experiment: l,
				privacyPolicyUrl: u,
				signupId: m
			}), { transition: "modal-flow" }));
		}, _ = function(t) {
			r("WAWebKeyboardIsKeyActivation")(t) && p();
		};
		return c.jsx("div", babelHelpers.extends({ "data-testid": "agm-signup-header" }, u != null ? {
			onClick: p,
			onKeyDown: _,
			role: "button",
			tabIndex: 0
		} : void 0, (e || (e = r("stylex"))).props(o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, o("WDSFlex.stylex").wdsFlex.flexColumn, d.wrapper, u != null && d.clickable), { children: c.jsxs("div", babelHelpers.extends({}, e.props(o("WDSFlex.stylex").wdsFlex.flexRowCenter, o("WDSFlex.stylex").wdsFlex.columnGapSingle), { children: [c.jsx("div", babelHelpers.extends({}, e.props(o("WDSFlex.stylex").wdsFlex.flexCenter, o("WDSFlex.stylex").wdsFlex.flexShrink0, d.iconCircle), { children: c.jsx(r("WDSIconWdsIcGift.react"), {
			width: 20,
			height: 20
		}) })), c.jsxs("div", babelHelpers.extends({}, e.props(o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.flexGrow1, o("WDSFlex.stylex").wdsFlex.justifyCenter, d.contentWrapper), { children: [c.jsx("div", {
			"data-testid": "agm-signup-header-title",
			className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft",
			children: c.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDefault",
				children: l === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			})
		}), c.jsx("div", {
			"data-testid": "agm-signup-header-subtitle",
			className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft",
			children: c.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: l === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			})
		})] }))] })) }));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
