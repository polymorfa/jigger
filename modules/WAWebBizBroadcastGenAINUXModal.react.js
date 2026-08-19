__d("WAWebBizBroadcastGenAINUXModal.react", [
	"fbt",
	"WAWebBizBroadcastGenAIToS",
	"WAWebBroadcastConsts",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebWdsIllAiChatsIcon.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState, p = {
		buttonGroup: {
			justifyContent: "x13a6bvl",
			paddingTop: "x1p57kb1",
			textAlign: "xp4054r",
			$$css: !0
		},
		content: {
			rowGap: "x1f0uite",
			$$css: !0
		},
		legalFooter: {
			paddingBottom: "x18d9i69",
			$$css: !0
		}
	};
	function _(e) {
		var t = o("react-compiler-runtime").c(13), n = e.onAccept, a = e.onClose, i = m(!1), l = i[0], c = i[1], d;
		t[0] !== n || t[1] !== a ? (d = function() {
			c(!0), o("WAWebBizBroadcastGenAIToS").acceptGenAIToS().then(function() {
				n();
			}).catch(function() {
				c(!1), a();
			});
		}, t[0] = n, t[1] = a, t[2] = d) : d = t[2];
		var _ = d, h = g, y = f, C;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[3] = C) : C = t[3];
		var b;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), t[4] = b) : b = t[4];
		var v;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx(o("WAWebFlex.react").FlexItem, { children: u.jsx(o("WAWebWdsIllAiChatsIcon.react").WdsIllAiChatsIcon, {
			width: 168,
			height: 128
		}) }), t[5] = v) : v = t[5];
		var S;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsx(r("WDSText.react"), {
			type: "Headline1",
			colorName: "contentDefault",
			textAlign: "center",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[6] = S) : S = t[6];
		var R;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			textAlign: "center",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[7] = R) : R = t[7];
		var L;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: p.content,
			align: "center",
			children: [
				v,
				S,
				R,
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					xstyle: p.legalFooter,
					children: u.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						textAlign: "center",
						children: s._(
							/*BTDS*/
							"",
							[s._implicitParam("=m1", u.jsx(r("WDSTextualLink.react"), {
								href: o("WAWebBroadcastConsts").BIZ_BROADCAST_TOS_URL,
								onClick: h,
								children: s._(
									/*BTDS*/
									""
								)
							})), s._implicitParam("=m3", u.jsx(r("WDSTextualLink.react"), {
								href: o("WAWebBroadcastConsts").META_PRIVACY_POLICY_URL,
								onClick: y,
								children: s._(
									/*BTDS*/
									""
								)
							}))]
						)
					})
				})
			]
		}), t[8] = L) : L = t[8];
		var E;
		return t[9] !== _ || t[10] !== l || t[11] !== a ? (E = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.BotNut,
			buttonGroupStyle: p.buttonGroup,
			okText: C,
			onOK: _,
			okSpinner: l,
			cancelText: b,
			onCancel: a,
			onOverlayClick: a,
			children: L
		}), t[9] = _, t[10] = l, t[11] = a, t[12] = E) : E = t[12], E;
	}
	function f() {
		o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAINuxLinkClicked("privacy_policy");
	}
	function g() {
		o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAINuxLinkClicked("tos");
	}
	l.default = _;
}), 226);
