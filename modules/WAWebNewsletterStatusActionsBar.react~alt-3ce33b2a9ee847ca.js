__d("WAWebNewsletterStatusActionsBar.react", [
	"fbt",
	"WAWebNewsletterSendStatusReactionAction",
	"WAWebSendMsgResultAction",
	"WAWebStatusActionButtonStyles",
	"WAWebStatusLikeEmojis",
	"WAWebStatusLikeHeartIcon.react",
	"WAWebStatusReshareAction",
	"WAWebTabOrder",
	"WAWebUnstyledButton.react",
	"WDSIconIcRepeat.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebNewsletterReactions",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useRef, _ = d.useState;
	function f(t) {
		var n = o("react-compiler-runtime").c(14), a = t.canLike, i = t.canReshare, l = t.msg, u;
		n[0] !== l ? (u = function() {
			o("WAWebStatusReshareAction").openStatusReshareComposer(l);
		}, n[0] = l, n[1] = u) : u = n[1];
		var d = r("useWAWebStableCallback")(u);
		if (!i && !a) return null;
		var m, p;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (m = (e || (e = r("stylex"))).props(o("WAWebStatusActionButtonStyles").statusActionButtonStyles.bottomBarContainer), p = e.props(o("WAWebStatusActionButtonStyles").statusActionButtonStyles.bottomBarRow), n[2] = m, n[3] = p) : (m = n[2], p = n[3]);
		var _;
		n[4] !== a || n[5] !== i || n[6] !== d ? (_ = i ? c.jsx(r("WAWebUnstyledButton.react"), {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			testid: "status-reshare-button",
			dataTab: o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
			xstyle: [o("WAWebStatusActionButtonStyles").statusActionButtonStyles.iconButton, a && o("WAWebStatusActionButtonStyles").statusActionButtonStyles.backgroundProtection],
			onClick: d,
			children: c.jsx(r("WDSIconIcRepeat.react"), {
				"aria-hidden": !0,
				xstyle: [o("WAWebStatusActionButtonStyles").statusActionButtonStyles.square26Svg, a && o("WAWebStatusActionButtonStyles").statusActionButtonStyles.square26SvgCentered],
				colorName: "persistentAlwaysWhite"
			})
		}) : null, n[4] = a, n[5] = i, n[6] = d, n[7] = _) : _ = n[7];
		var f;
		n[8] !== a || n[9] !== l ? (f = a ? c.jsx(g, { msg: l }) : null, n[8] = a, n[9] = l, n[10] = f) : f = n[10];
		var h;
		return n[11] !== _ || n[12] !== f ? (h = c.jsx("div", babelHelpers.extends({}, m, { children: c.jsxs("div", babelHelpers.extends({}, p, { children: [_, f] })) })), n[11] = _, n[12] = f, n[13] = h) : h = n[13], h;
	}
	function g(e) {
		var t, n = e.msg, a = n.id.toString(), i = m(function() {
			return [n.id];
		}, [a]), l = ((t = r("useWAWebNewsletterReactions")(i)[0]) == null ? void 0 : t.myReaction) != null, u = _(null), d = u[0], f = u[1], g = d != null && d !== l ? d : l, h = p(null), y = r("useWAWebStableCallback")(async function() {
			var e = !g;
			if (e) {
				var t;
				(t = h.current) == null || t.playLikeAnimation();
			} else {
				var r;
				(r = h.current) == null || r.cancelAnimation();
			}
			f(e);
			var a = await o("WAWebNewsletterSendStatusReactionAction").sendNewsletterStatusReaction(n, e ? o("WAWebStatusLikeEmojis").STATUS_LIKE_EMOJI : "");
			if (a !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
				var i;
				f(null), (i = h.current) == null || i.cancelAnimation();
			}
		});
		return c.jsx(r("WAWebUnstyledButton.react"), {
			"aria-label": g ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			testid: "status_channel_like_toggle_button",
			dataTab: o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
			xstyle: [o("WAWebStatusActionButtonStyles").statusActionButtonStyles.iconButton, o("WAWebStatusActionButtonStyles").statusActionButtonStyles.backgroundProtection],
			onClick: y,
			children: c.jsx(r("WAWebStatusLikeHeartIcon.react"), {
				ref: h,
				isLiked: g
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = f;
}), 226);
