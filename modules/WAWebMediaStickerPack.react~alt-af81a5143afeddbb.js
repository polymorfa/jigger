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
		var n = o("react-compiler-runtime").c(34), a = t.displayAuthor, i = t.displayType, l = t.msg, u;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (u = [o("WAWebMsgGetters").getIsCaptionByUser], n[0] = u) : u = n[0];
		var p = o("useWAWebMsgValues").useMsgValues(l.id, u), _ = p[0], f;
		if (n[1] !== l) {
			var g = async function() {
				await l.downloadMedia({
					downloadEvenIfExpensive: !0,
					rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.DOCUMENT_DOWNLOAD,
					isUserInitiated: !0
				});
				var e = o("WAWebStateUtils").unproxy(l.unsafe()).mediaData.mediaBlob, t = await o("WAWebStickerPackUtils").decompressStickerPackMedia(e, l);
				h(t);
			};
			f = function() {
				g();
			};
			var h = function(t) {
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(r("WAWebStickerPackDetailsFlow.react"), {
					msg: l,
					stickers: t
				}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
			};
			n[1] = l, n[2] = f;
		} else f = n[2];
		var y;
		n[3] !== _ || n[4] !== l ? (y = _ ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.caption, d.paddingTop6, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, d.paddingInlineStart6), { children: c.jsx(r("WAWebMessageCaption.react"), {
			msg: l.unsafe(),
			testId: "document-caption"
		}) })) : null, n[3] = _, n[4] = l, n[5] = y) : y = n[5];
		var C = y, b;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "xdvlbce" }, n[6] = b) : b = n[6];
		var v;
		n[7] !== l ? (v = c.jsx(r("WAWebStickerPackPreview"), { msg: l }), n[7] = l, n[8] = v) : v = n[8];
		var S;
		n[9] !== C ? (S = c.jsx(o("WAWebFlex.react").FlexRow, { children: C }), n[9] = C, n[10] = S) : S = n[10];
		var R;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x10l6tqk x1inkcgm" }, n[11] = R) : R = n[11];
		var L;
		n[12] !== l ? (L = c.jsx(o("WAWebFlex.react").FlexRow, { children: c.jsx("div", babelHelpers.extends({}, R, { children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: l }) })) }), n[12] = l, n[13] = L) : L = n[13];
		var E;
		n[14] !== v || n[15] !== S || n[16] !== L ? (E = c.jsxs("div", babelHelpers.extends({}, b, { children: [
			v,
			S,
			L
		] })), n[14] = v, n[15] = S, n[16] = L, n[17] = E) : E = n[17];
		var k;
		n[18] !== a || n[19] !== i || n[20] !== l || n[21] !== E ? (k = c.jsx(r("WAWebMessageTextBubble.react"), {
			displayType: i,
			msg: l,
			displayAuthor: a,
			hideMeta: !0,
			children: E
		}), n[18] = a, n[19] = i, n[20] = l, n[21] = E, n[22] = k) : k = n[22];
		var I = k, T;
		n[23] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
			/*BTDS*/
			""
		), n[23] = T) : T = n[23];
		var D = T, x;
		n[24] !== i ? (x = {
			0: { className: "x9f619 x3orp4s xyqdw3p x1im30kd xg8j3zb x1djpfga" },
			1: { className: "x9f619 x4blvmq xyqdw3p x1im30kd xg8j3zb x1djpfga" }
		}[(i === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER) << 0], n[24] = i, n[25] = x) : x = n[25];
		var $;
		n[26] !== I || n[27] !== x ? ($ = c.jsxs("div", babelHelpers.extends({}, x, { children: [I, " "] })), n[26] = I, n[27] = x, n[28] = $) : $ = n[28];
		var P;
		n[29] !== f ? (P = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
			theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.STICKER_PACK,
			items: [{
				label: D,
				title: D,
				onClick: f,
				disabled: !1,
				testid: "view-sticker-pack"
			}]
		}), n[29] = f, n[30] = P) : P = n[30];
		var N;
		return n[31] !== $ || n[32] !== P ? (N = c.jsxs(c.Fragment, { children: [$, P] }), n[31] = $, n[32] = P, n[33] = N) : N = n[33], N;
	}
	l.default = p;
}), 226);
