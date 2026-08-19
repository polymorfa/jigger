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
	"stylex",
	"useWAWebNewsletterReactions",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useRef, _ = d.useState;
	function f(t) {
		var n = t.canLike, a = t.canReshare, i = t.msg, l = r("useWAWebStableCallback")(function() {
			o("WAWebStatusReshareAction").openStatusReshareComposer(i);
		});
		return !a && !n ? null : c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebStatusActionButtonStyles").statusActionButtonStyles.bottomBarContainer), { children: c.jsxs("div", babelHelpers.extends({}, e.props(o("WAWebStatusActionButtonStyles").statusActionButtonStyles.bottomBarRow), { children: [a ? c.jsx(r("WAWebUnstyledButton.react"), {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			testid: "status-reshare-button",
			dataTab: o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
			xstyle: [o("WAWebStatusActionButtonStyles").statusActionButtonStyles.iconButton, n && o("WAWebStatusActionButtonStyles").statusActionButtonStyles.backgroundProtection],
			onClick: l,
			children: c.jsx(r("WDSIconIcRepeat.react"), {
				"aria-hidden": !0,
				xstyle: [o("WAWebStatusActionButtonStyles").statusActionButtonStyles.square26Svg, n && o("WAWebStatusActionButtonStyles").statusActionButtonStyles.square26SvgCentered],
				colorName: "persistentAlwaysWhite"
			})
		}) : null, n ? c.jsx(g, { msg: i }) : null] })) }));
	}
	f.displayName = f.name + " [from " + i.id + "]";
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
