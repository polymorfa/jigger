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
		var n = t.children, a = t.displayType, i = t.hideCaption, l = i === void 0 ? !1 : i, s = t.hideMeta, m = s === void 0 ? !1 : s, p = t.msg, _ = t.quotedMsg, f = t.showAuthor, g = f === void 0 ? !1 : f, h = t.trusted, y = o("useWAWebMsgValues").useMsgValues(p.id, [
			o("WAWebMsgGetters").getCaption,
			o("WAWebFrontendMsgGetters").getDir,
			o("WAWebMsgGetters").getFooter,
			o("WAWebMsgGetters").getIsFromTemplate,
			o("WAWebFrontendMsgGetters").getRtl,
			o("WAWebFrontendMsgGetters").getSenderObj,
			o("WAWebMsgGetters").getSupportsMessageFooter,
			o("WAWebMsgGetters").getType
		]), C = y[0], b = y[1], v = y[2], S = y[3], R = y[4], L = y[5], E = y[6], k = y[7], I = g, T = !l && !!C, D = o("WAWebMsgSelectors").showForwarded(p);
		return u.jsxs(u.Fragment, { children: [
			I ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.author, c.paddingInline6, c.paddingBottom5, D && o("WDSPaddings.stylex").wdsPaddings.paddingBottom0), { children: u.jsx(r("WAWebMessageAuthor.react"), {
				msg: p,
				contact: L,
				displayType: a
			}) })) : null,
			D ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
				msg: p.unsafe(),
				className: (e || (e = r("stylex")))(d.forwardedIndicator, o("WDSPaddings.stylex").wdsPaddings.paddingEnd0, c.paddingBottom3, c.paddingInlineStart6, I && o("WDSPaddings.stylex").wdsPaddings.paddingTop0)
			}) : null,
			_ != null ? u.jsx("div", {
				className: "xsjrbtr",
				children: _
			}) : null,
			n,
			T ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.caption, c.paddingTop7, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, c.paddingBottom5, c.paddingInlineStart6), { children: u.jsx(r("WAWebMessageCaption.react"), {
				msg: p.unsafe(),
				trusted: h,
				spacer: !v
			}) })) : null,
			E ? u.jsx(r("WAWebBizTemplateMessageFooter.react"), {
				dir: b,
				footer: v,
				isShown: E,
				msg: p.unsafe(),
				rtl: R,
				type: k,
				trusted: h
			}) : null,
			!m && u.jsx("div", babelHelpers.extends({}, {
				0: { className: "x10l6tqk x1d37e2g x12zx8bi" },
				1: { className: "x10l6tqk x1d37e2g xy1j3rs" }
			}[!!T << 0], { children: u.jsx(o("WAWebMessageMeta.react").Meta, {
				msg: p,
				displayType: a,
				theme: a === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ? "date" : void 0
			}) }))
		] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
