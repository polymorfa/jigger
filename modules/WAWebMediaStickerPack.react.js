__d("WAWebMediaStickerPack.react", [
	"fbt",
	"WAWebDisplayType",
	"WAWebDrawerManager",
	"WAWebFlex.react",
	"WAWebKeyboardTabUtils",
	"WAWebMessageBubbleActions.react",
	"WAWebMessageCaption.react",
	"WAWebMessageMeta.react",
	"WAWebMessageTextBubble.react",
	"WAWebMsgGetters",
	"WAWebStateUtils",
	"WAWebStickerPackDetailsFlow.react",
	"WAWebStickerPackPreview",
	"WAWebStickerPackUtils",
	"WAWebWamEnumWebcRmrReasonCode",
	"WDSPaddings.stylex",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		paddingTop6: {
			paddingTop: "x1yrsyyn",
			$$css: !0
		},
		paddingInlineStart6: {
			paddingInlineStart: "x25sj25",
			$$css: !0
		}
	}, m = { caption: {
		boxSizing: "x9f619",
		maxWidth: "x1xtabgy",
		$$css: !0
	} };
	function p(t) {
		var a = o("react-compiler-runtime").c(34), i = t.displayAuthor, l = t.displayType, u = t.msg, p;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (p = [o("WAWebMsgGetters").getIsCaptionByUser], a[0] = p) : p = a[0];
		var _ = o("useWAWebMsgValues").useMsgValues(u.id, p), f = _[0], g;
		if (a[1] !== u) {
			var h = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					yield u.downloadMedia({
						downloadEvenIfExpensive: !0,
						rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.DOCUMENT_DOWNLOAD,
						isUserInitiated: !0
					});
					var e = o("WAWebStateUtils").unproxy(u.unsafe()).mediaData.mediaBlob, t = yield o("WAWebStickerPackUtils").decompressStickerPackMedia(e, u);
					y(t);
				});
				return function() {
					return e.apply(this, arguments);
				};
			})();
			g = function() {
				h();
			};
			var y = function(t) {
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(r("WAWebStickerPackDetailsFlow.react"), {
					msg: u,
					stickers: t
				}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
			};
			a[1] = u, a[2] = g;
		} else g = a[2];
		var C;
		a[3] !== f || a[4] !== u ? (C = f ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.caption, d.paddingTop6, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, d.paddingInlineStart6), { children: c.jsx(r("WAWebMessageCaption.react"), {
			msg: u.unsafe(),
			testId: "document-caption"
		}) })) : null, a[3] = f, a[4] = u, a[5] = C) : C = a[5];
		var b = C, v;
		a[6] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "xdvlbce" }, a[6] = v) : v = a[6];
		var S;
		a[7] !== u ? (S = c.jsx(r("WAWebStickerPackPreview"), { msg: u }), a[7] = u, a[8] = S) : S = a[8];
		var R;
		a[9] !== b ? (R = c.jsx(o("WAWebFlex.react").FlexRow, { children: b }), a[9] = b, a[10] = R) : R = a[10];
		var L;
		a[11] === Symbol.for("react.memo_cache_sentinel") ? (L = { className: "x10l6tqk x1inkcgm" }, a[11] = L) : L = a[11];
		var E;
		a[12] !== u ? (E = c.jsx(o("WAWebFlex.react").FlexRow, { children: c.jsx("div", babelHelpers.extends({}, L, { children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: u }) })) }), a[12] = u, a[13] = E) : E = a[13];
		var k;
		a[14] !== S || a[15] !== R || a[16] !== E ? (k = c.jsxs("div", babelHelpers.extends({}, v, { children: [
			S,
			R,
			E
		] })), a[14] = S, a[15] = R, a[16] = E, a[17] = k) : k = a[17];
		var I;
		a[18] !== i || a[19] !== l || a[20] !== u || a[21] !== k ? (I = c.jsx(r("WAWebMessageTextBubble.react"), {
			displayType: l,
			msg: u,
			displayAuthor: i,
			hideMeta: !0,
			children: k
		}), a[18] = i, a[19] = l, a[20] = u, a[21] = k, a[22] = I) : I = a[22];
		var T = I, D;
		a[23] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), a[23] = D) : D = a[23];
		var x = D, $;
		a[24] !== l ? ($ = {
			0: { className: "x9f619 x3orp4s xyqdw3p x1im30kd xg8j3zb x1djpfga" },
			1: { className: "x9f619 x4blvmq xyqdw3p x1im30kd xg8j3zb x1djpfga" }
		}[(l === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER) << 0], a[24] = l, a[25] = $) : $ = a[25];
		var P;
		a[26] !== T || a[27] !== $ ? (P = c.jsxs("div", babelHelpers.extends({}, $, { children: [T, " "] })), a[26] = T, a[27] = $, a[28] = P) : P = a[28];
		var N;
		a[29] !== g ? (N = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
			theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.STICKER_PACK,
			items: [{
				label: x,
				title: x,
				onClick: g,
				disabled: !1,
				testid: "view-sticker-pack"
			}]
		}), a[29] = g, a[30] = N) : N = a[30];
		var M;
		return a[31] !== P || a[32] !== N ? (M = c.jsxs(c.Fragment, { children: [P, N] }), a[31] = P, a[32] = N, a[33] = M) : M = a[33], M;
	}
	l.default = p;
}), 226);
