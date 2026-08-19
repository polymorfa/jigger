__d("WAWebMessageContentBox.react", [
	"WAWebBizTemplateMessageFooter.react",
	"WAWebDisplayType",
	"WAWebFrontendMsgGetters",
	"WAWebMessageAuthor.react",
	"WAWebMessageCaption.react",
	"WAWebMessageForwardedIndicator.react",
	"WAWebMessageMeta.react",
	"WAWebMsgGetters",
	"WAWebMsgSelectors",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		paddingInline6: {
			paddingInlineStart: "x25sj25",
			paddingInlineEnd: "x1icxu4v",
			$$css: !0
		},
		paddingBottom5: {
			paddingBottom: "xs9asl8",
			$$css: !0
		},
		paddingBottom3: {
			paddingBottom: "xg8j3zb",
			$$css: !0
		},
		paddingInlineStart6: {
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		paddingTop7: {
			paddingTop: "xm7lytj",
			$$css: !0
		}
	}, d = {
		author: {
			paddingTop: "xvwn6h4",
			$$css: !0
		},
		caption: {
			boxSizing: "x9f619",
			maxWidth: "x1xtabgy",
			$$css: !0
		},
		forwardedIndicator: {
			paddingTop: "xvwn6h4",
			$$css: !0
		}
	};
	function m(t) {
		var n = o("react-compiler-runtime").c(39), a = t.children, i = t.displayType, l = t.hideCaption, s = t.hideMeta, m = t.msg, p = t.quotedMsg, _ = t.showAuthor, f = t.trusted, g = l === void 0 ? !1 : l, h = s === void 0 ? !1 : s, y = _ === void 0 ? !1 : _, C;
		if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
			var b;
			C = [
				(b = o("WAWebMsgGetters")).getCaption,
				o("WAWebFrontendMsgGetters").getDir,
				b.getFooter,
				b.getIsFromTemplate,
				o("WAWebFrontendMsgGetters").getRtl,
				o("WAWebFrontendMsgGetters").getSenderObj,
				b.getSupportsMessageFooter,
				b.getType
			], n[0] = C;
		} else C = n[0];
		var v = o("useWAWebMsgValues").useMsgValues(m.id, C), S = v[0], R = v[1], L = v[2], E = v[4], k = v[5], I = v[6], T = v[7], D = y, x = !g && !!S, $, P;
		n[1] !== i || n[2] !== D || n[3] !== m || n[4] !== k ? ($ = o("WAWebMsgSelectors").showForwarded(m), P = D ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.author, c.paddingInline6, c.paddingBottom5, $ && o("WDSPaddings.stylex").wdsPaddings.paddingBottom0), { children: u.jsx(r("WAWebMessageAuthor.react"), {
			msg: m,
			contact: k,
			displayType: i
		}) })) : null, n[1] = i, n[2] = D, n[3] = m, n[4] = k, n[5] = $, n[6] = P) : ($ = n[5], P = n[6]);
		var N;
		n[7] !== D || n[8] !== $ || n[9] !== m ? (N = $ ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
			msg: m.unsafe(),
			className: (e || (e = r("stylex")))(d.forwardedIndicator, o("WDSPaddings.stylex").wdsPaddings.paddingEnd0, c.paddingBottom3, c.paddingInlineStart6, D && o("WDSPaddings.stylex").wdsPaddings.paddingTop0)
		}) : null, n[7] = D, n[8] = $, n[9] = m, n[10] = N) : N = n[10];
		var M;
		n[11] !== p ? (M = p != null ? u.jsx("div", {
			className: "xsjrbtr",
			children: p
		}) : null, n[11] = p, n[12] = M) : M = n[12];
		var w;
		n[13] !== L || n[14] !== x || n[15] !== m || n[16] !== f ? (w = x ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.caption, c.paddingTop7, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, c.paddingBottom5, c.paddingInlineStart6), { children: u.jsx(r("WAWebMessageCaption.react"), {
			msg: m.unsafe(),
			trusted: f,
			spacer: !L
		}) })) : null, n[13] = L, n[14] = x, n[15] = m, n[16] = f, n[17] = w) : w = n[17];
		var A;
		n[18] !== R || n[19] !== L || n[20] !== m || n[21] !== E || n[22] !== I || n[23] !== f || n[24] !== T ? (A = I ? u.jsx(r("WAWebBizTemplateMessageFooter.react"), {
			dir: R,
			footer: L,
			isShown: I,
			msg: m.unsafe(),
			rtl: E,
			type: T,
			trusted: f
		}) : null, n[18] = R, n[19] = L, n[20] = m, n[21] = E, n[22] = I, n[23] = f, n[24] = T, n[25] = A) : A = n[25];
		var F;
		n[26] !== i || n[27] !== x || n[28] !== h || n[29] !== m ? (F = !h && u.jsx("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk x1d37e2g x12zx8bi" },
			1: { className: "x10l6tqk x1d37e2g xy1j3rs" }
		}[!!x << 0], { children: u.jsx(o("WAWebMessageMeta.react").Meta, {
			msg: m,
			displayType: i,
			theme: i === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ? "date" : void 0
		}) })), n[26] = i, n[27] = x, n[28] = h, n[29] = m, n[30] = F) : F = n[30];
		var O;
		return n[31] !== a || n[32] !== F || n[33] !== P || n[34] !== N || n[35] !== M || n[36] !== w || n[37] !== A ? (O = u.jsxs(u.Fragment, { children: [
			P,
			N,
			M,
			a,
			w,
			A,
			F
		] }), n[31] = a, n[32] = F, n[33] = P, n[34] = N, n[35] = M, n[36] = w, n[37] = A, n[38] = O) : O = n[38], O;
	}
	l.default = m;
}), 98);
