__d("WAWebLoggedOutBanner.react", [
	"WAWebClickable.react",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebWarningOutlineIcon.react",
	"WDSIconIcArrowForward.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		marginInlineStart5: {
			marginInlineStart: "xpcyujq",
			$$css: !0
		},
		padding15: {
			paddingTop: "xqy66fx",
			paddingInlineEnd: "x1q3ajuy",
			paddingBottom: "xr1496l",
			paddingInlineStart: "x1gx403c",
			$$css: !0
		}
	}, d = {
		wrapper: {
			minHeight: "x4lt0of",
			boxSizing: "x9f619",
			borderStartStartRadius: "x16qb05n",
			borderStartEndRadius: "xi7iut8",
			borderEndEndRadius: "x1dm3dyd",
			borderEndStartRadius: "x1pv694p",
			$$css: !0
		},
		error: {
			backgroundColor: "x1o4ak67",
			$$css: !0
		},
		errorIcon: {
			color: "x1xr9wsx",
			$$css: !0
		},
		warn: {
			backgroundColor: "x4d3jff",
			$$css: !0
		},
		warningIcon: {
			color: "x157dx7a",
			$$css: !0
		},
		moreHelpLinkIcon: {
			rotate: "x14ahhpt",
			$$css: !0
		},
		moreHelpLinkText: {
			color: "x1hql6x6",
			fontSize: "x1f6kntn",
			lineHeight: "x1evy7pa",
			fontWeight: "xk50ysn",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.link;
		return u.jsx(o("WAWebClickable.react").Clickable, {
			xstyle: d.moreHelpLinkText,
			as: "span",
			dataTestId: "link-device-qrcode-alt-linking-hint",
			onClick: function() {
				o("WAWebExternalLink.react").openExternalLink(t);
			},
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				children: [r("WAWebFbtCommon")("Learn more"), u.jsx(r("WDSIconIcArrowForward.react"), {
					width: 20,
					height: 20,
					iconXstyle: [d.moreHelpLinkIcon, c.marginInlineStart5]
				})]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(t) {
		var n = o("react-compiler-runtime").c(23), a = t.category, i = t.header, l = t.link, s = t.text, p = a === "error", _;
		n[0] !== l ? (_ = l != null ? u.jsx(m, { link: l }) : null, n[0] = l, n[1] = _) : _ = n[1];
		var f = _, g;
		n[2] !== p ? (g = (e || (e = r("stylex")))(d.wrapper, o("WDSMargins.stylex").wdsMargins.marginHorAuto, o("WDSMargins.stylex").wdsMargins.marginTop0, o("WDSMargins.stylex").wdsMargins.marginBottom40, c.padding15, p ? d.error : d.warn), n[2] = p, n[3] = g) : g = n[3];
		var h = p ? d.errorIcon : d.warningIcon, y;
		n[4] !== h ? (y = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: o("WDSMargins.stylex").wdsMargins.marginTop4,
			children: u.jsx(o("WAWebWarningOutlineIcon.react").WarningOutlineIcon, {
				width: 28,
				height: 28,
				iconXstyle: h
			})
		}), n[4] = h, n[5] = y) : y = n[5];
		var C, b;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (C = (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginStart16), b = { className: "x1evy7pa x1c3i2sq x1hql6x6 xu06os2" }, n[6] = C, n[7] = b) : (C = n[6], b = n[7]);
		var v;
		n[8] !== i ? (v = u.jsx("div", babelHelpers.extends({}, b, { children: i })), n[8] = i, n[9] = v) : v = n[9];
		var S;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (S = { className: "x1u7k74 x1hql6x6" }, n[10] = S) : S = n[10];
		var R;
		n[11] !== s ? (R = u.jsx("div", { children: s }), n[11] = s, n[12] = R) : R = n[12];
		var L;
		n[13] !== f || n[14] !== R ? (L = u.jsxs("div", babelHelpers.extends({}, S, { children: [R, f] })), n[13] = f, n[14] = R, n[15] = L) : L = n[15];
		var E;
		n[16] !== L || n[17] !== v ? (E = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			className: C,
			children: [v, L]
		}), n[16] = L, n[17] = v, n[18] = E) : E = n[18];
		var k;
		return n[19] !== E || n[20] !== g || n[21] !== y ? (k = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			grow: 1,
			className: g,
			children: [y, E]
		}), n[19] = E, n[20] = g, n[21] = y, n[22] = k) : k = n[22], k;
	}
	l.default = p;
}), 98);
