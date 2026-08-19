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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(31), a = t.businessWid, i = t.chatTimestamp, l = t.contact, u = t.experiment, m = t.privacyPolicyUrl, p = t.signupId, _;
		n[0] !== a || n[1] !== i || n[2] !== l || n[3] !== u || n[4] !== m || n[5] !== p ? (_ = function() {
			m != null && (p != null && o("WAWebSignupFlowLoggerLazy").logSignupOp({
				operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.AGM_VIEW_DETAILS_CLICKED,
				signupId: p,
				businessWid: a,
				chatTimestamp: i
			}), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebBizAGMSignupPrivacyPolicyPopup.react"), {
				businessWid: a,
				chatTimestamp: i,
				contact: l,
				experiment: u,
				privacyPolicyUrl: m,
				signupId: p
			}), { transition: "modal-flow" }));
		}, n[0] = a, n[1] = i, n[2] = l, n[3] = u, n[4] = m, n[5] = p, n[6] = _) : _ = n[6];
		var f = _, g;
		n[7] !== f ? (g = function(t) {
			r("WAWebKeyboardIsKeyActivation")(t) && f();
		}, n[7] = f, n[8] = g) : g = n[8];
		var h = g, y;
		n[9] !== f || n[10] !== h || n[11] !== m ? (y = m != null ? {
			onClick: f,
			onKeyDown: h,
			role: "button",
			tabIndex: 0
		} : void 0, n[9] = f, n[10] = h, n[11] = m, n[12] = y) : y = n[12];
		var C;
		n[13] !== m ? (C = (e || (e = r("stylex"))).props(o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, o("WDSFlex.stylex").wdsFlex.flexColumn, d.wrapper, m != null && d.clickable), n[13] = m, n[14] = C) : C = n[14];
		var b, v, S;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (b = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRowCenter, o("WDSFlex.stylex").wdsFlex.columnGapSingle), v = c.jsx("div", babelHelpers.extends({}, e.props(o("WDSFlex.stylex").wdsFlex.flexCenter, o("WDSFlex.stylex").wdsFlex.flexShrink0, d.iconCircle), { children: c.jsx(r("WDSIconWdsIcGift.react"), {
			width: 20,
			height: 20
		}) })), S = e.props(o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.flexGrow1, o("WDSFlex.stylex").wdsFlex.justifyCenter, d.contentWrapper), n[15] = b, n[16] = v, n[17] = S) : (b = n[15], v = n[16], S = n[17]);
		var R;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft" }, n[18] = R) : R = n[18];
		var L;
		n[19] !== u ? (L = c.jsx("div", babelHelpers.extends({ "data-testid": "agm-signup-header-title" }, R, { children: c.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDefault",
			children: u === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}) })), n[19] = u, n[20] = L) : L = n[20];
		var E;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft" }, n[21] = E) : E = n[21];
		var k;
		n[22] !== u ? (k = c.jsx("div", babelHelpers.extends({ "data-testid": "agm-signup-header-subtitle" }, E, { children: c.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: u === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}) })), n[22] = u, n[23] = k) : k = n[23];
		var I;
		n[24] !== k || n[25] !== L ? (I = c.jsxs("div", babelHelpers.extends({}, b, { children: [v, c.jsxs("div", babelHelpers.extends({}, S, { children: [L, k] }))] })), n[24] = k, n[25] = L, n[26] = I) : I = n[26];
		var T;
		return n[27] !== I || n[28] !== y || n[29] !== C ? (T = c.jsx("div", babelHelpers.extends({ "data-testid": "agm-signup-header" }, y, C, { children: I })), n[27] = I, n[28] = y, n[29] = C, n[30] = T) : T = n[30], T;
	}
	l.default = m;
}), 226);
