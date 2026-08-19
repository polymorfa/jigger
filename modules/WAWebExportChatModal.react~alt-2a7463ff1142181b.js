__d("WAWebExportChatModal.react", [
	"fbt",
	"WAAbortError",
	"WAWebExportChatAction",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebNoop",
	"WAWebProgressBar.react",
	"WAWebThemeContext",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSBaseRadio.react",
	"WDSButton.react",
	"WDSButtonGroup.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = c.useState, _ = {
		radioLabel: {
			paddingInlineStart: "xdx6fka",
			$$css: !0
		},
		sectionLabel: {
			marginBottom: "xefnzgg",
			$$css: !0
		}
	}, f = {
		loading: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		downloading_media: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		formatting: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		saving: function() {
			return s._(
				/*BTDS*/
				""
			);
		}
	};
	function g(e) {
		var t = e.chat, n = e.onClose, a = p("config"), i = a[0], l = a[1], c = p("all"), g = c[0], h = c[1], y = p(""), C = y[0], b = y[1], v = p(""), S = v[0], R = v[1], L = p("loading"), E = L[0], k = L[1], I = p(0), T = I[0], D = I[1], x = p(1), $ = x[0], P = x[1], N = m(null), M = o("WAWebThemeContext").useIsDarkTheme(), w = d(function() {
			var e = new AbortController();
			N.current = e, l("exporting"), D(0), P(1);
			var r, a;
			g === "custom" && (C !== "" && (r = Math.floor(new Date(C + "T00:00:00").getTime() / 1e3)), S !== "" && (a = Math.floor(new Date(S + "T23:59:59").getTime() / 1e3))), o("WAWebExportChatAction").exportChat({
				chat: t,
				includeMedia: !1,
				startDate: r,
				endDate: a,
				signal: e.signal,
				onProgress: function(t, n, r) {
					k(t), D(n), P(r);
				}
			}).then(function(e) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						"",
						[s._plural(e.messageCount), s._param("count", e.messageCount)]
					),
					id: o("WAWebToast.react").genId("export-chat-success")
				}), o("WAWebToastManager").ToastPosition.CENTER), n();
			}).catch(function(e) {
				e instanceof o("WAAbortError").AbortError || l("error");
			});
		}, [
			t,
			g,
			S,
			n,
			C
		]), A = d(function() {
			N.current != null && N.current.abort(), n();
		}, [n]), F = d(function(e) {
			h(e === "custom" ? "custom" : "all");
		}, []), O = d(function(e) {
			b(e.target.value);
		}, []), B = d(function(e) {
			R(e.target.value);
		}, []), W = new Date().toISOString().slice(0, 10);
		if (i === "config") {
			var q = u.jsx("div", { children: u.jsx(r("WDSButtonGroup.react"), {
				width: "hug",
				primaryButtonProps: {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: w
				},
				tertiaryButtonProps: {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: n,
					variant: "borderless"
				}
			}) });
			return u.jsx(o("WAWebModal.react").Modal, {
				title: s._(
					/*BTDS*/
					""
				),
				actions: q,
				testid: "export-chat-modal",
				children: u.jsxs("div", {
					className: "x14mdic9",
					children: [
						u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							xstyle: _.sectionLabel,
							children: s._(
								/*BTDS*/
								""
							)
						}),
						u.jsxs(o("WAWebFlex.react").FlexColumn, {
							role: "radiogroup",
							children: [u.jsxs("label", {
								htmlFor: "date-range-all",
								className: "x6s0dn4 x78zum5 x1wxaq2x x16ovd2e x12xbjc7",
								children: [u.jsx(r("WDSBaseRadio.react"), {
									id: "date-range-all",
									value: "all",
									name: "date-range",
									checked: g === "all",
									onChange: F
								}), u.jsx(r("WDSText.react"), {
									type: "Body1",
									colorName: "contentDefault",
									xstyle: _.radioLabel,
									children: s._(
										/*BTDS*/
										""
									)
								})]
							}), u.jsxs("label", {
								htmlFor: "date-range-custom",
								className: "x6s0dn4 x78zum5 x1wxaq2x x16ovd2e x12xbjc7",
								children: [u.jsx(r("WDSBaseRadio.react"), {
									id: "date-range-custom",
									value: "custom",
									name: "date-range",
									checked: g === "custom",
									onChange: F
								}), u.jsx(r("WDSText.react"), {
									type: "Body1",
									colorName: "contentDefault",
									xstyle: _.radioLabel,
									children: s._(
										/*BTDS*/
										""
									)
								})]
							})]
						}),
						g === "custom" && u.jsxs("div", {
							className: "x6s0dn4 x78zum5 x1qvou4u x1s70e7g x16ovd2e x1m4z3lf",
							children: [
								u.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDeemphasized",
									children: s._(
										/*BTDS*/
										""
									)
								}),
								u.jsx("input", babelHelpers.extends({
									"aria-label": s._(
										/*BTDS*/
										""
									),
									"data-testid": "export-start-date",
									max: S !== "" ? S : W,
									onChange: O,
									type: "date",
									value: C
								}, {
									0: { className: "xjbqb8w x1pyc6se x1mlb2bo x16pkwpw xqe4bef xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x14ug900 x1f6kntn x16ovd2e x12xbjc7 xdx6fka xvtqlqk" },
									1: { className: "xjbqb8w x1pyc6se x1mlb2bo x16pkwpw xqe4bef xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x14ug900 x1f6kntn x16ovd2e x12xbjc7 xdx6fka xvtqlqk xntwwlm" }
								}[!!M << 0])),
								u.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDeemphasized",
									children: s._(
										/*BTDS*/
										""
									)
								}),
								u.jsx("input", babelHelpers.extends({
									"aria-label": s._(
										/*BTDS*/
										""
									),
									"data-testid": "export-end-date",
									max: W,
									min: C !== "" ? C : void 0,
									onChange: B,
									type: "date",
									value: S
								}, {
									0: { className: "xjbqb8w x1pyc6se x1mlb2bo x16pkwpw xqe4bef xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x14ug900 x1f6kntn x16ovd2e x12xbjc7 xdx6fka xvtqlqk" },
									1: { className: "xjbqb8w x1pyc6se x1mlb2bo x16pkwpw xqe4bef xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x14ug900 x1f6kntn x16ovd2e x12xbjc7 xdx6fka xvtqlqk xntwwlm" }
								}[!!M << 0]))
							]
						})
					]
				})
			});
		}
		if (i === "exporting") {
			var U, V = $ > 0 ? Math.round(T / $ * 100) : 0, H = (U = f[E]) != null ? U : f.loading, G = H(), z = $ > 0;
			return u.jsxs(o("WAWebModal.react").Modal, {
				title: s._(
					/*BTDS*/
					""
				),
				onOverlayClick: r("WAWebNoop"),
				testid: "export-chat-progress",
				children: [u.jsxs("div", {
					className: "x6s0dn4 x78zum5 xdt5ytf x1f0uite xs2akgl xl56j7k xi3av73 xl7twdi xvg22vi",
					children: [
						z && u.jsx(r("WAWebProgressBar.react"), {
							value: V,
							max: 100
						}),
						u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: G
						}),
						E === "loading" && T > 0 && u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: s._(
								/*BTDS*/
								"",
								[s._plural(T), s._param("count", T)]
							)
						}),
						E === "downloading_media" && $ > 0 && u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: s._(
								/*BTDS*/
								"",
								[s._param("current", T), s._param("total", $)]
							)
						})
					]
				}), u.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "end",
					children: u.jsx(r("WDSButton.react"), {
						label: s._(
							/*BTDS*/
							""
						),
						variant: "borderless",
						onPress: A
					})
				})]
			});
		}
		if (i === "error") {
			var j = u.jsx("div", { children: u.jsx(r("WDSButtonGroup.react"), {
				width: "hug",
				primaryButtonProps: {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: w
				},
				tertiaryButtonProps: {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: n,
					variant: "borderless"
				}
			}) });
			return u.jsx(o("WAWebModal.react").Modal, {
				title: s._(
					/*BTDS*/
					""
				),
				actions: j,
				testid: "export-chat-error",
				children: u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			});
		}
		return null;
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
