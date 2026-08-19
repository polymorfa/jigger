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
