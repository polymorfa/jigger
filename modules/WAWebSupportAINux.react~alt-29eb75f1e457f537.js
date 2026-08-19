__d("WAWebSupportAINux.react", [
	"fbt",
	"WAWebCellV2.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebNux",
	"WAWebSupportAiSessionWamEvent",
	"WAWebText.react",
	"WAWebWamEnumSupportAiEventType",
	"WAWebWdsPictoAiChatsAndroidIcon.react",
	"WDSIconIcShieldVerified.react",
	"WDSIconIcThumbsUpDown.react",
	"WDSIconWdsIcAi.react",
	"react",
	"react-compiler-runtime",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		iconColor: {
			color: "xhslqc4",
			$$css: !0
		},
		paddingBottom4: {
			paddingBottom: "x1nbhmlj",
			$$css: !0
		},
		paddingAll8: {
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		paddingStart8: {
			paddingInlineStart: "x12w63v0",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(20), n = e.canCancel, a = e.isSending, i = e.okText, l = e.onOK, d = r("useWAWebNux")(o("WAWebNux").NUX.SUPPORT_AI), p = d[1], _;
		t[0] !== l || t[1] !== p ? (_ = async function() {
			p(), await l();
		}, t[0] = l, t[1] = p, t[2] = _) : _ = t[2];
		var f = n === !0 ? o("WAWebModalManager").closeModalManager : null, g;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (g = {
			surface: "unknown",
			viewName: "support-ai-nux"
		}, t[3] = g) : g = t[3];
		var h;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			marginTop: 20,
			children: u.jsx(o("WAWebWdsPictoAiChatsAndroidIcon.react").WdsPictoAiChatsAndroidIcon, { height: 88 })
		}), t[4] = h) : h = t[4];
		var y;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(o("WAWebFlex.react").FlexItem, {
			marginTop: 20,
			marginBottom: 20,
			marginStart: 24,
			marginEnd: 24,
			align: "center",
			children: u.jsx("div", {
				className: "xngnso2 x1s688f x2b8uid",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), t[5] = y) : y = t[5];
		var C;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(r("WDSIconIcShieldVerified.react"), {
			iconXstyle: c.iconColor,
			height: 20,
			width: 20
		}), t[6] = C) : C = t[6];
		var b;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			children: u.jsx(r("WAWebCellV2.react"), {
				containerXStyle: c.paddingBottom4,
				detailLeftXStyle: c.paddingAll8,
				primaryXStyle: c.paddingStart8,
				interactive: !1,
				colorScheme: "lightest",
				detailLeft: C,
				primary: u.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
					/*BTDS*/
					""
				) })
			})
		}), t[7] = b) : b = t[7];
		var v;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx(r("WDSIconWdsIcAi.react"), {
			iconXstyle: c.iconColor,
			height: 20,
			width: 20
		}), t[8] = v) : v = t[8];
		var S;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			children: u.jsx(r("WAWebCellV2.react"), {
				containerXStyle: c.paddingBottom4,
				detailLeftXStyle: c.paddingAll8,
				primaryXStyle: c.paddingStart8,
				interactive: !1,
				colorScheme: "lightest",
				size: "none",
				detailLeft: v,
				primary: u.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
					/*BTDS*/
					""
				) })
			})
		}), t[9] = S) : S = t[9];
		var R;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsx(r("WDSIconIcThumbsUpDown.react"), {
			iconXstyle: c.iconColor,
			height: 20,
			width: 20
		}), t[10] = R) : R = t[10];
		var L;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			marginStart: 24,
			marginEnd: 24,
			children: [
				b,
				S,
				u.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 1,
					children: u.jsx(r("WAWebCellV2.react"), {
						detailLeftXStyle: c.paddingAll8,
						containerXStyle: c.paddingBottom4,
						primaryXStyle: c.paddingStart8,
						interactive: !1,
						colorScheme: "lightest",
						detailLeft: R,
						primary: u.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
							/*BTDS*/
							""
						) })
					})
				})
			]
		}), t[11] = L) : L = t[11];
		var E;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (E = o("WAWebMobilePlatforms").isSMB() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[12] = E) : E = t[12];
		var k;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (k = o("WAWebFaqUrl").getSupportChatSafetyFaqUrl(), t[13] = k) : k = t[13];
		var I;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (I = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
			h,
			y,
			L,
			u.jsx(o("WAWebFlex.react").FlexRow, {
				marginTop: 16,
				marginStart: 24,
				marginEnd: 24,
				children: u.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 1,
					children: u.jsx("label", {
						htmlFor: "contact-us-include-device",
						children: u.jsxs(o("WAWebText.react").WAWebTextMuted, { children: [
							E,
							" ",
							u.jsx(o("WAWebExternalLink.react").ExternalLink, {
								href: k,
								onClick: m,
								children: s._(
									/*BTDS*/
									""
								)
							})
						] })
					})
				})
			})
		] }), t[14] = I) : I = t[14];
		var T;
		return t[15] !== a || t[16] !== i || t[17] !== _ || t[18] !== f ? (T = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okSpinner: a,
			okText: i,
			onOK: _,
			okDisabled: a,
			cancelDisabled: a,
			onCancel: f,
			testid: "system-message-modal",
			tsNavigationData: g,
			children: I
		}), t[15] = a, t[16] = i, t[17] = _, t[18] = f, t[19] = T) : T = t[19], T;
	}
	function m() {
		new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.REVIEW_INFORMATION_LEARN_MORE_CLICKED }).commit();
	}
	l.default = d;
}), 226);
