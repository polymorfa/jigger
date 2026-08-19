__d("WAWebPasskeyCheckpoint.react", [
	"fbt",
	"WAWebEnvironment",
	"WAWebFlex.react",
	"WAWebIntegrityChallengeUtils",
	"WAWebLandingHeader.react",
	"WAWebWdsPictoPasskeyIcon.react",
	"WDSIconIcArrowForward.react",
	"WDSIconIcLogout.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState, p = {
		wrapper: {
			position: "xixxii4",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			width: "xn9wirt",
			height: "x1dr59a3",
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xu7uy1i",
			paddingInlineEnd: "x1t7qo4d",
			boxSizing: "x9f619",
			zIndex: "xfo81ep",
			$$css: !0
		},
		wrapperWeb: {
			background: "xe4h88v",
			$$css: !0
		},
		wrapperWindows: {
			background: "xp8kixx",
			$$css: !0
		},
		headerContainer: {
			width: "xh8yej3",
			height: "xwzfr38",
			$$css: !0
		}
	};
	function _(e) {
		var t = e.onLogout, a = e.onPasskeyComplete, i = e.onPasskeyError, l = e.passkeyChallenge, c = m("idle"), _ = c[0], f = c[1], g = d(function() {
			f("pending"), n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var e = yield o("WAWebIntegrityChallengeUtils").performPasskeyAssertion(l);
					f("success"), yield a(e);
				} catch (e) {
					var t = e instanceof Error ? e.message : "Unknown error";
					f("idle"), i(t);
				}
			})();
		}, [
			l,
			a,
			i
		]), h = _ === "pending" || _ === "success";
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: [p.wrapper, r("WAWebEnvironment").isWeb ? p.wrapperWeb : p.wrapperWindows],
			children: [
				u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: p.headerContainer,
					shrink: 0,
					children: u.jsx(r("WAWebLandingHeader.react"), {
						showAppDownloadButton: !1,
						surface: "lock-screen"
					})
				}),
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					grow: 1,
					shrink: 0,
					children: [u.jsx("div", {
						className: "xewp6mh x4i7bpe x15zmtp0 x1sgudl8 x1oiqv2n x1g83kfv x3qq2k7 x2x8art x1qor8vf x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn xb1i3fl xdounpk",
						children: u.jsxs("div", {
							className: "x78zum5 x1q0g3np x6s0dn4 x1qgv0r9",
							children: [u.jsxs("div", {
								className: "x78zum5 xdt5ytf x1cy8zhl xfkdz6z x1iyjqo2",
								children: [
									u.jsx("span", {
										className: "xngnso2 xo1l8bm x1mqxbix",
										children: s._(
											/*BTDS*/
											""
										)
									}),
									u.jsx("span", {
										className: "x1f6kntn xo1l8bm x1mqxbix x1fc57z9",
										children: s._(
											/*BTDS*/
											""
										)
									}),
									u.jsxs("button", babelHelpers.extends({}, {
										0: { className: "x78zum5 x1q0g3np x6s0dn4 xfex06f xq4q3us x1mqxbix x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1g83kfv x3qq2k7 x2x8art x1qor8vf x16ovd2e x12xbjc7 x1phvje8 xcldk2z x1ypdohk xjb2p0i x1f6kntn" },
										1: { className: "x78zum5 x1q0g3np x6s0dn4 xfex06f xq4q3us x1mqxbix x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1g83kfv x3qq2k7 x2x8art x1qor8vf x16ovd2e x12xbjc7 x1phvje8 xcldk2z xjb2p0i x1f6kntn x197sbye x1h6gzvc" }
									}[!!h << 0], {
										disabled: h,
										onClick: g,
										type: "button",
										children: [s._(
											/*BTDS*/
											""
										), u.jsx(r("WDSIconIcArrowForward.react"), {
											height: 16,
											width: 16
										})]
									}))
								]
							}), u.jsx("div", {
								className: "x78zum5 x6s0dn4 xl56j7k x2lah0s",
								children: u.jsx(o("WAWebWdsPictoPasskeyIcon.react").WdsPictoPasskeyIcon, {
									height: 88,
									width: 88
								})
							})]
						})
					}), u.jsxs("button", {
						className: "x78zum5 x6s0dn4 xl56j7k xfex06f x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1ypdohk xexx8yu xyri2b x18d9i69 x1c1uobl xqui205",
						onClick: t,
						type: "button",
						children: [u.jsx("span", {
							className: "x1f6kntn xk50ysn x1mqxbix x1bvjpef xlkh4gg xdounpk",
							children: s._(
								/*BTDS*/
								""
							)
						}), u.jsx(r("WDSIconIcLogout.react"), {
							height: 16,
							width: 16
						})]
					})]
				}),
				u.jsx(o("WAWebFlex.react").FlexItem, { xstyle: p.headerContainer })
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
