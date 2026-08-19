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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(18), n = e.hasLikes, a = e.onClick, i = e.seenCount, l = n === void 0 ? !1 : n, m;
		t[0] !== l ? (m = !!l && u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
			loop: !1,
			autoplay: !0,
			data: o("WAWebStatusLikesAnimationData").statusLikes,
			xstyle: [d.animation, c.marginBlock10]
		}), t[0] = l, t[1] = m) : m = t[1];
		var p = m, _;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = o("WAWebUserPrefsGeneral").getUserPrivacySettings(), t[2] = _) : _ = t[2];
		var f = _.readReceipts === "none", g;
		t[3] !== i ? (g = i != null ? r("WAWebL10N").d(i) : null, t[3] = i, t[4] = g) : g = t[4];
		var h = g, y;
		t[5] !== p || t[6] !== h ? (y = f ? u.jsx(r("WDSIconIcVisibilityOff.react"), { xstyle: o("WAWebStatusCounterStyles").statusCounterStyles.counterIcon }) : u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			children: [u.jsx(o("WAWebFlex.react").FlexItem, { children: p }), u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				xstyle: o("WAWebStatusCounterStyles").statusCounterStyles.counterGap,
				children: [u.jsx(r("WDSIconIcVisibility.react"), { xstyle: o("WAWebStatusCounterStyles").statusCounterStyles.counterIcon }), u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "persistentAlwaysWhite",
					testid: "status_seen_counter",
					children: h
				})]
			})]
		}), t[5] = p, t[6] = h, t[7] = y) : y = t[7];
		var C = y, b;
		t[8] !== a || t[9] !== C ? (b = a ? u.jsx(r("WAWebUnstyledButton.react"), {
			dataTab: o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
			xstyle: d.container,
			onClick: a,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: C
		}) : C, t[8] = a, t[9] = C, t[10] = b) : b = t[10];
		var v = b;
		if (f || i != null) {
			var S;
			t[11] === Symbol.for("react.memo_cache_sentinel") ? (S = { className: "x78zum5 x1q0g3np x6s0dn4 xl56j7k x17t9dm2" }, t[11] = S) : S = t[11];
			var R;
			t[12] !== i ? (R = i != null ? s._(
				/*BTDS*/
				"",
				[s._plural(i, "number")]
			) : s._(
				/*BTDS*/
				""
			), t[12] = i, t[13] = R) : R = t[13];
			var L;
			return t[14] !== R || t[15] !== v ? (L = u.jsx("div", babelHelpers.extends({}, S, {
				"data-testid": "status_seen_count_container",
				"aria-label": R,
				children: v
			})), t[14] = R, t[15] = v, t[16] = L) : L = t[16], L;
		}
		var E;
		return t[17] === Symbol.for("react.memo_cache_sentinel") ? (E = u.jsx(o("WAWebSpinner.react").Spinner, {
			stroke: 3,
			size: 12
		}), t[17] = E) : E = t[17], E;
	}
	l.default = m;
}), 226);
