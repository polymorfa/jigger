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
	"asyncToGeneratorRuntime",
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
		var t, a = e.msg, i = a.id.toString(), l = m(function() {
			return [a.id];
		}, [i]), u = ((t = r("useWAWebNewsletterReactions")(l)[0]) == null ? void 0 : t.myReaction) != null, d = _(null), f = d[0], g = d[1], h = f != null && f !== u ? f : u, y = p(null), C = r("useWAWebStableCallback")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = !h;
			if (e) {
				var t;
				(t = y.current) == null || t.playLikeAnimation();
			} else {
				var n;
				(n = y.current) == null || n.cancelAnimation();
			}
			g(e);
			var r = yield o("WAWebNewsletterSendStatusReactionAction").sendNewsletterStatusReaction(a, e ? o("WAWebStatusLikeEmojis").STATUS_LIKE_EMOJI : "");
			if (r !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
				var i;
				g(null), (i = y.current) == null || i.cancelAnimation();
			}
		}));
		return c.jsx(r("WAWebUnstyledButton.react"), {
			"aria-label": h ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			testid: "status_channel_like_toggle_button",
			dataTab: o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
			xstyle: [o("WAWebStatusActionButtonStyles").statusActionButtonStyles.iconButton, o("WAWebStatusActionButtonStyles").statusActionButtonStyles.backgroundProtection],
			onClick: C,
			children: c.jsx(r("WAWebStatusLikeHeartIcon.react"), {
				ref: y,
				isLiked: h
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = f;
}), 226);
