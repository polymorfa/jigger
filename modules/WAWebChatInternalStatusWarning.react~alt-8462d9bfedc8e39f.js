__d("WAWebChatInternalStatusWarning.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebL10N",
	"WAWebThemeContext",
	"WAWebUimUie.react",
	"WDSIconIcInfo.react",
	"react",
	"useWAWebChatInternalStatusHookWrapper"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useState, _ = {
		padding5: {
			paddingTop: "x123j3cw",
			paddingInlineEnd: "x1gabggj",
			paddingBottom: "xs9asl8",
			paddingInlineStart: "xaso8d8",
			$$css: !0
		},
		paddingInline5: {
			paddingInlineStart: "xaso8d8",
			paddingInlineEnd: "x1gabggj",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		marginEndQuarter: {
			marginInlineEnd: "x16q7b9a",
			$$css: !0
		}
	}, f = {
		refreshOuterContainer: {
			fontSize: "x1nxh6w3",
			color: "xhslqc4",
			backgroundColor: "xk7ee7b",
			borderStartStartRadius: "x12l2aii",
			borderStartEndRadius: "x1mbk4o",
			boxShadow: "xz16w4b",
			transition: "x1m0b2ad",
			$$css: !0
		},
		internLabelRefresh: {
			display: "x78zum5",
			alignItems: "xuk3077",
			justifyContent: "x1qughib",
			flexShrink: "x2lah0s",
			$$css: !0
		}
	};
	function g(e) {
		var t = e.tz, n = 128336, a = d(function() {
			try {
				var e = new Date().toLocaleString(r("WAWebL10N").getFullLocale(), {
					timeZone: t,
					hour: "2-digit",
					minute: "2-digit",
					hour12: !1
				}), o = e.split(":"), a = o[0], i = o[1], l = o[2], s = parseInt(a, 10), u = parseInt(i, 10), c;
				u > 15 && u < 45 ? c = n + ((s % 12 || 12) - 1) + 12 : u >= 45 ? c = n + s % 12 : c = n + (s % 12 || 12) - 1;
				var d = String.fromCodePoint(c);
				return d + " " + e;
			} catch (e) {
				return null;
			}
		}, [t]), i = p(a()), l = i[0], s = i[1];
		return m(function() {
			var e = window.setInterval(function() {
				s(a());
			}, 1e3);
			return function() {
				window.clearInterval(e);
			};
		}, [a]), l != null && u.jsx("span", babelHelpers.extends({ title: "This is the current time in the timezone(" + t + ") of the user" }, {
			0: { className: "x1x4hbl8 xd0e0f8 x1ey7xld xxl7t6f x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 xyqdw3p x1im30kd xg8j3zb x1djpfga xpcyujq" },
			1: { className: "x11emb26 x6182ab x1ey7xld xxl7t6f x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 xyqdw3p x1im30kd xg8j3zb x1djpfga xpcyujq" }
		}[!!o("WAWebThemeContext").isDarkTheme() << 0], { children: l }));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		return e.map(function(e, t) {
			switch (e.name) {
				case "tz": return u.jsx(g, { tz: e.params[0] }, t);
				default: return null;
			}
		});
	}
	function y(e) {
		var t, n = e.id, a = e.ref, i = e.renderImmediately, l = (t = r("useWAWebChatInternalStatusHookWrapper")(n)) != null ? t : {}, c = l.addons, d = l.hasStatus, m = l.status;
		if (i !== !0 && d !== !0) return null;
		var p = [_.padding5, f.refreshOuterContainer];
		return u.jsx(o("WAWebUimUie.react").UIE, {
			ref: a,
			displayName: "ComposeBoxInternalStatus",
			escapable: !1,
			children: u.jsx("div", {
				className: "x123j3cw x1gabggj xs9asl8 xaso8d8 x1nxh6w3 xhslqc4 xk7ee7b x12l2aii x1mbk4o xz16w4b x1m0b2ad",
				children: u.jsxs("div", {
					className: "x78zum5 x6s0dn4 x14atkfc xyi3aci xwf5gio xhjsbib xaso8d8 x1gabggj x889kno x1a8lsjc",
					children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						wrap: "wrap",
						children: [u.jsx(r("WAWebFlexItem.react"), { children: u.jsxs(o("WAWebExternalLink.react").ExternalLink, {
							href: "https://www.internalfb.com/intern/wiki/WhatsApp/Eng/Client/Web/Reference/Intern_Only_Away_Status/",
							xstyle: [f.internLabelRefresh, _.paddingInline5],
							children: [u.jsx(r("WDSIconIcInfo.react"), {
								displayInline: !0,
								height: 11,
								width: 11,
								xstyle: _.marginEndQuarter
							}), s._(
								/*BTDS*/
								""
							)]
						}) }), h(c != null ? c : []).map(function(e, t) {
							return u.jsx(r("WAWebFlexItem.react"), { children: e }, t);
						})]
					}), u.jsx("span", {
						className: "xpcyujq",
						children: m
					})]
				})
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t, n = e.id, o = (t = r("useWAWebChatInternalStatusHookWrapper")(n)) != null ? t : {}, a = o.hasOverlay, i = o.overlay;
		return a !== !0 ? null : u.jsx("div", {
			className: "x10l6tqk x13vifvy x1o0tod xbagc2z x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
			children: u.jsx("svg", {
				width: "100%",
				height: "100%",
				viewBox: "0 0 50 50",
				children: u.jsx("text", {
					className: "x1lzn6yi xw6cgo0 x1h227xn",
					x: "50%",
					y: "50%",
					children: i
				})
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	var b = {
		InternalStatusWarningComposeBox: y,
		InternalStatusWarningImageOverlay: C
	};
	l.default = b;
}), 226);
