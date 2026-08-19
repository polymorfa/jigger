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
	"asyncToGeneratorRuntime",
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
		var t = o("react-compiler-runtime").c(20), a = e.canCancel, i = e.isSending, l = e.okText, d = e.onOK, p = r("useWAWebNux")(o("WAWebNux").NUX.SUPPORT_AI), _ = p[1], f;
		t[0] !== d || t[1] !== _ ? (f = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				_(), yield d();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[0] = d, t[1] = _, t[2] = f) : f = t[2];
		var g = a === !0 ? o("WAWebModalManager").closeModalManager : null, h;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (h = {
			surface: "unknown",
			viewName: "support-ai-nux"
		}, t[3] = h) : h = t[3];
		var y;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			marginTop: 20,
			children: u.jsx(o("WAWebWdsPictoAiChatsAndroidIcon.react").WdsPictoAiChatsAndroidIcon, { height: 88 })
		}), t[4] = y) : y = t[4];
		var C;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(o("WAWebFlex.react").FlexItem, {
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
		}), t[5] = C) : C = t[5];
		var b;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx(r("WDSIconIcShieldVerified.react"), {
			iconXstyle: c.iconColor,
			height: 20,
			width: 20
		}), t[6] = b) : b = t[6];
		var v;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			children: u.jsx(r("WAWebCellV2.react"), {
				containerXStyle: c.paddingBottom4,
				detailLeftXStyle: c.paddingAll8,
				primaryXStyle: c.paddingStart8,
				interactive: !1,
				colorScheme: "lightest",
				detailLeft: b,
				primary: u.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
					/*BTDS*/
					""
				) })
			})
		}), t[7] = v) : v = t[7];
		var S;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsx(r("WDSIconWdsIcAi.react"), {
			iconXstyle: c.iconColor,
			height: 20,
			width: 20
		}), t[8] = S) : S = t[8];
		var R;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			children: u.jsx(r("WAWebCellV2.react"), {
				containerXStyle: c.paddingBottom4,
				detailLeftXStyle: c.paddingAll8,
				primaryXStyle: c.paddingStart8,
				interactive: !1,
				colorScheme: "lightest",
				size: "none",
				detailLeft: S,
				primary: u.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
					/*BTDS*/
					""
				) })
			})
		}), t[9] = R) : R = t[9];
		var L;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx(r("WDSIconIcThumbsUpDown.react"), {
			iconXstyle: c.iconColor,
			height: 20,
			width: 20
		}), t[10] = L) : L = t[10];
		var E;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (E = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			marginStart: 24,
			marginEnd: 24,
			children: [
				v,
				R,
				u.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 1,
					children: u.jsx(r("WAWebCellV2.react"), {
						detailLeftXStyle: c.paddingAll8,
						containerXStyle: c.paddingBottom4,
						primaryXStyle: c.paddingStart8,
						interactive: !1,
						colorScheme: "lightest",
						detailLeft: L,
						primary: u.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
							/*BTDS*/
							""
						) })
					})
				})
			]
		}), t[11] = E) : E = t[11];
		var k;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (k = o("WAWebMobilePlatforms").isSMB() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[12] = k) : k = t[12];
		var I;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (I = o("WAWebFaqUrl").getSupportChatSafetyFaqUrl(), t[13] = I) : I = t[13];
		var T;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (T = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
			y,
			C,
			E,
			u.jsx(o("WAWebFlex.react").FlexRow, {
				marginTop: 16,
				marginStart: 24,
				marginEnd: 24,
				children: u.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 1,
					children: u.jsx("label", {
						htmlFor: "contact-us-include-device",
						children: u.jsxs(o("WAWebText.react").WAWebTextMuted, { children: [
							k,
							" ",
							u.jsx(o("WAWebExternalLink.react").ExternalLink, {
								href: I,
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
		] }), t[14] = T) : T = t[14];
		var D;
		return t[15] !== i || t[16] !== l || t[17] !== f || t[18] !== g ? (D = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okSpinner: i,
			okText: l,
			onOK: f,
			okDisabled: i,
			cancelDisabled: i,
			onCancel: g,
			testid: "system-message-modal",
			tsNavigationData: h,
			children: T
		}), t[15] = i, t[16] = l, t[17] = f, t[18] = g, t[19] = D) : D = t[19], D;
	}
	function m() {
		new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.REVIEW_INFORMATION_LEARN_MORE_CLICKED }).commit();
	}
	l.default = d;
}), 226);
