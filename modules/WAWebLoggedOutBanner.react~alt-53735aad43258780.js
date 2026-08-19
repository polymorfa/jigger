__d("WAWebLoggedOutBanner.react", [
	"WAWebClickable.react",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebWarningOutlineIcon.react",
	"WDSIconIcArrowForward.react",
	"WDSMargins.stylex",
	"react",
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
		var n = t.category, a = t.header, i = t.link, l = t.text, s = n === "error", p = i != null ? u.jsx(m, { link: i }) : null;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			grow: 1,
			className: (e || (e = r("stylex")))(d.wrapper, o("WDSMargins.stylex").wdsMargins.marginHorAuto, o("WDSMargins.stylex").wdsMargins.marginTop0, o("WDSMargins.stylex").wdsMargins.marginBottom40, c.padding15, s ? d.error : d.warn),
			children: [u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop4,
				children: u.jsx(o("WAWebWarningOutlineIcon.react").WarningOutlineIcon, {
					width: 28,
					height: 28,
					iconXstyle: s ? d.errorIcon : d.warningIcon
				})
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
				className: e(o("WDSMargins.stylex").wdsMargins.marginStart16),
				children: [u.jsx("div", {
					className: "x1evy7pa x1c3i2sq x1hql6x6 xu06os2",
					children: a
				}), u.jsxs("div", {
					className: "x1u7k74 x1hql6x6",
					children: [u.jsx("div", { children: l }), p]
				})]
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
