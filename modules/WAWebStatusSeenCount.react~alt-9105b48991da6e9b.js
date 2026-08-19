__d("WAWebStatusSeenCount.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebLottieAnimationLoadable",
	"WAWebSpinner.react",
	"WAWebStatusCounterStyles",
	"WAWebStatusLikesAnimationData",
	"WAWebTabOrder",
	"WAWebUnstyledButton.react",
	"WAWebUserPrefsGeneral",
	"WDSIconIcVisibility.react",
	"WDSIconIcVisibilityOff.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { marginBlock10: {
		marginTop: "x1anpbxc",
		marginBottom: "xyorhqc",
		$$css: !0
	} }, d = {
		container: {
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			color: "x17t9dm2",
			$$css: !0
		},
		animation: {
			height: "xpnc28q",
			width: "xop8lp1",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.hasLikes, n = t === void 0 ? !1 : t, a = e.onClick, i = e.seenCount, l = !!n && u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
			loop: !1,
			autoplay: !0,
			data: o("WAWebStatusLikesAnimationData").statusLikes,
			xstyle: [d.animation, c.marginBlock10]
		}), m = o("WAWebUserPrefsGeneral").getUserPrivacySettings().readReceipts === "none", p = i != null ? r("WAWebL10N").d(i) : null, _ = m ? u.jsx(r("WDSIconIcVisibilityOff.react"), { xstyle: o("WAWebStatusCounterStyles").statusCounterStyles.counterIcon }) : u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			children: [u.jsx(o("WAWebFlex.react").FlexItem, { children: l }), u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				xstyle: o("WAWebStatusCounterStyles").statusCounterStyles.counterGap,
				children: [u.jsx(r("WDSIconIcVisibility.react"), { xstyle: o("WAWebStatusCounterStyles").statusCounterStyles.counterIcon }), u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "persistentAlwaysWhite",
					testid: "status_seen_counter",
					children: p
				})]
			})]
		}), f = a ? u.jsx(r("WAWebUnstyledButton.react"), {
			dataTab: o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
			xstyle: d.container,
			onClick: a,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: _
		}) : _;
		return m || i != null ? u.jsx("div", {
			className: "x78zum5 x1q0g3np x6s0dn4 xl56j7k x17t9dm2",
			"data-testid": "status_seen_count_container",
			"aria-label": i != null ? s._(
				/*BTDS*/
				"",
				[s._plural(i, "number")]
			) : s._(
				/*BTDS*/
				""
			),
			children: f
		}) : u.jsx(o("WAWebSpinner.react").Spinner, {
			stroke: 3,
			size: 12
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
