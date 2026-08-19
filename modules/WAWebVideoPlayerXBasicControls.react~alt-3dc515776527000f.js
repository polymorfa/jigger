__d("WAWebVideoPlayerXBasicControls.react", [
	"fbt",
	"VideoPlayerHooks",
	"WAWebClock",
	"WAWebStopEvent",
	"WDSIconIcArrowBack.react",
	"WDSIconIcCheck.react",
	"WDSIconIcFullscreen.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcPauseFilled.react",
	"WDSIconIcPictureInPictureAlt.react",
	"WDSIconIcPlayArrowFilled.react",
	"WDSIconIcVolumeOffFilled.react",
	"WDSIconIcVolumeUp.react",
	"react",
	"useVideoPlayerDefaultControlsVisibility",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = e || (e = o("react")), d = e, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState;
	function g(e, t) {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), t());
	}
	var h = "x1xkg3e2-B", y = [
		.25,
		.5,
		.75,
		1,
		1.25,
		1.5,
		1.75,
		2
	], C = 20, b = 20;
	function v(e) {
		return c.jsx("svg", babelHelpers.extends({
			"aria-hidden": "true",
			viewBox: "0 0 24 24",
			fill: "currentColor"
		}, e, { children: c.jsx("path", { d: "M13.05 9.79L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zm0 0L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zm0 0L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69A7.941 7.941 0 0111 4.07zM5.69 7.1L4.26 5.68A9.949 9.949 0 002.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43A7.868 7.868 0 014.07 13zm1.61 6.74A9.981 9.981 0 0011 21.95v-2.02a7.941 7.941 0 01-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z" }) }));
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		return c.jsx("svg", babelHelpers.extends({
			"aria-hidden": "true",
			viewBox: "0 0 24 24",
			fill: "currentColor"
		}, e, { children: c.jsx("path", { d: "M19 7H5v10h14V7zm4 12V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z" }) }));
	}
	S.displayName = S.name + " [from " + i.id + "]";
	var R = {
		iconBlock: {
			display: "x1lliihq",
			$$css: !0
		},
		menuCheckmark: {
			color: "x1v5yvga",
			flexShrink: "x2lah0s",
			height: "x1qx5ct2",
			marginInlineStart: "xvc5jky",
			width: "xw4jnvo",
			$$css: !0
		},
		menuHeaderIcon: {
			flexShrink: "x2lah0s",
			height: "x1qx5ct2",
			width: "xw4jnvo",
			$$css: !0
		},
		menuItemIcon: {
			flexShrink: "x2lah0s",
			height: "xxk0z11",
			width: "xvy4d1p",
			$$css: !0
		}
	}, L = 5;
	function E() {
		var e = r("useVideoPlayerDefaultControlsVisibility")(), t = e.isControlsVisible, n = (u || (u = o("VideoPlayerHooks"))).useController(), a = u.usePaused(), i = u.useEnded(), l = u.useMuted(), d = u.useVolume(), h = u.useCurrentTimeThrottled(250), E = u.useDuration(), k = u.usePlaybackRate(), I = f(null), T = I[0], D = I[1], x = _(null), $ = _(h), P = f(!1), N = P[0], M = P[1], w = f(!1), A = w[0], F = w[1], O = f(!1), B = O[0], W = O[1], q = f(!1), U = q[0], V = q[1], H = f(!1), G = H[0], z = H[1], j = _(null), K = f(!1), Q = K[0], X = K[1], Y = f("main"), J = Y[0], Z = Y[1], ee = _(null);
		p(function() {
			if (!(J !== "speed" || ee.current == null)) {
				var e = ee.current.querySelector("[data-active]");
				e != null && e.scrollIntoView({ block: "center" });
			}
		}, [J]), p(function() {
			if (Q) {
				var e = function(t) {
					var e = t.target;
					ee.current != null && e instanceof Node && !ee.current.contains(e) && (X(!1), Z("main"));
				};
				return document.addEventListener("mousedown", e), function() {
					return document.removeEventListener("mousedown", e);
				};
			}
		}, [Q]), p(function() {
			T != null && x.current == null && h !== $.current && D(null), $.current = h;
		}, [h, T]), p(function() {
			var e = j.current;
			if (e != null) {
				var t = new ResizeObserver(function(e) {
					for (var t of e) z(t.contentRect.width > 80);
				});
				return t.observe(e), function() {
					return t.disconnect();
				};
			}
		}, []);
		var te = T != null ? T : h, ne = m(function() {
			i && n.getCurrentState().duration === n.getPlayheadPosition() && n.seek(0), n.play("user_initiated");
		}, [n, i]), re = m(function() {
			n.pause("user_initiated");
		}, [n]), oe = m(function(e) {
			n.scrubBegin();
		}, [n]), ae = m(function(e) {
			var t, r = (t = x.current) != null ? t : h;
			n.scrubEnd(r), x.current = null;
		}, [n, h]), ie = m(function(e) {
			var t = parseFloat(e.target.value);
			x.current = t, D(t), n.seek(t);
		}, [n]), le = function(t) {
			var e = te, r = t.key === "ArrowRight" || t.key === "ArrowUp" ? Math.min(E, e + L) : t.key === "ArrowLeft" || t.key === "ArrowDown" ? Math.max(0, e - L) : t.key === "Home" ? 0 : t.key === "End" ? E : null;
			r != null && (t.preventDefault(), t.stopPropagation(), D(r), n.seek(r));
		}, se = m(function() {
			n.setMuted(!0, "user_initiated");
		}, [n]), ue = m(function() {
			n.setMuted(!1, "user_initiated");
		}, [n]), ce = m(function(e) {
			n.setVolume(e), e > 0 && l && n.setMuted(!1, "user_initiated");
		}, [n, l]), de = m(function() {
			X(function(e) {
				return e && Z("main"), !e;
			});
		}, []), me = f(!1), pe = me[0], _e = me[1], fe = document.pictureInPictureEnabled === !0;
		p(function() {
			if (!fe) return;
			var e = null;
			function t(t) {
				var n = function() {
					return _e(!0);
				}, r = function() {
					return _e(!1);
				};
				t.addEventListener("enterpictureinpicture", n), t.addEventListener("leavepictureinpicture", r), e = function() {
					t.removeEventListener("enterpictureinpicture", n), t.removeEventListener("leavepictureinpicture", r);
				};
			}
			var r = n.internal_getVideoElement();
			if (r != null) return t(r), function() {
				return e == null ? void 0 : e();
			};
			var o = null;
			return o = n.subscribe(function() {
				var e = n.internal_getVideoElement();
				if (e != null) {
					var r;
					(r = o) == null || r.remove(), t(e);
				}
			}), function() {
				var t;
				(t = o) == null || t.remove(), e == null || e();
			};
		}, [n, fe]), r("useWAWebOnUnmount")(function() {
			pe && n.exitPictureInPicture();
		});
		var ge = m(function() {
			pe ? n.exitPictureInPicture() : n.requestPictureInPicture(), X(!1), Z("main");
		}, [n, pe]), he = m(function(e) {
			n.setPlaybackRate == null || n.setPlaybackRate(e), X(!1), Z("main");
		}, [n]), ye = E > 0 ? te / E : 0;
		ye > 1 && (ye = 1);
		var Ce = ye * 100 + "%", be = !a && !i, ve = Math.ceil(te) >= E && E > 0, Se = ve ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), Re = l || d === 0, Le = Re ? 0 : d, Ee = Re ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), ke = B;
		return c.jsxs("div", {
			className: "x13vifvy xtijo5x x1ey2m1c x1o0tod x10l6tqk",
			children: [c.jsx("div", babelHelpers.extends({}, {
				0: { className: "x183btaf x1ey2m1c xjp8j0k x1o0tod x10l6tqk xh8yej3 xg01cxk x47corl x1d8287x x19991ni" },
				1: { className: "x183btaf x1ey2m1c xjp8j0k x1o0tod x47corl x10l6tqk xh8yej3 x1hc1fzr x1d8287x x19991ni" }
			}[!!t << 0])), c.jsxs("div", babelHelpers.extends({}, {
				0: { className: "x1ey2m1c x17t9dm2 x78zum5 xdt5ytf xtijo5x x1o0tod x12xbjc7 x10l6tqk xg01cxk x47corl x1d8287x x19991ni" },
				1: { className: "x1ey2m1c x17t9dm2 x78zum5 xdt5ytf xtijo5x x1o0tod x12xbjc7 x10l6tqk x1hc1fzr x1d8287x x19991ni" }
			}[!!t << 0], { children: [c.jsxs("div", {
				className: "x6s0dn4 x78zum5 x1q0g3np x1a8lsjc xf159sx xmzvs34 x1n2onr6",
				onClick: o("WAWebStopEvent").stopPropagation,
				onMouseDown: o("WAWebStopEvent").stopPropagation,
				children: [
					c.jsx("div", {
						className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1yrsyyn x1icxu4v x10b6aqq x25sj25 xtr8le0",
						onMouseUp: o("WAWebStopEvent").stopPropagation,
						children: c.jsx("button", {
							className: "x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1heor9g x1ypdohk x78zum5 xexx8yu xyri2b x18d9i69 x1c1uobl",
							"aria-label": be ? s._(
								/*BTDS*/
								""
							) : Se,
							onClick: be ? re : ne,
							type: "button",
							children: be ? c.jsx(r("WDSIconIcPauseFilled.react"), {
								height: C,
								width: C,
								iconXstyle: R.iconBlock
							}) : c.jsx(r("WDSIconIcPlayArrowFilled.react"), {
								height: C,
								width: C,
								iconXstyle: R.iconBlock
							})
						})
					}),
					c.jsx("div", {
						ref: j,
						className: "x1iyjqo2 xeuugli",
						children: G ? c.jsxs("div", {
							className: "x17t9dm2 x1f6kntn xmzvs34 xuxw1ft",
							children: [
								o("WAWebClock").Clock.durationStr(te),
								" / ",
								o("WAWebClock").Clock.durationStr(E)
							]
						}) : null
					}),
					c.jsxs("div", {
						className: "x6s0dn4 x78zum5 xiyxwb5",
						children: [
							c.jsxs("div", babelHelpers.extends({}, {
								0: { className: "x6s0dn4 xamitd3 xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x1n2onr6" },
								1: { className: "x6s0dn4 xamitd3 xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x1n2onr6 x1rk1j4g" }
							}[!!ke << 0], {
								style: { transition: "background-color 0.2s" },
								onMouseEnter: function() {
									return W(!0);
								},
								onMouseLeave: function() {
									return W(!1);
								},
								children: [c.jsx("div", babelHelpers.extends({}, {
									0: { className: "x6s0dn4 x78zum5 x1qx5ct2 x1m189uc x6ikm8r x10wlt62 x1vjfegm" },
									1: { className: "x6s0dn4 x78zum5 x1qx5ct2 x6ikm8r x10wlt62 x1vjfegm x1chcg4z xf159sx xf7dkkf" }
								}[!!ke << 0], {
									style: { transition: "max-width 0.2s ease, padding 0.2s ease" },
									onMouseEnter: function() {
										return V(!0);
									},
									onMouseLeave: function() {
										return V(!1);
									},
									children: c.jsxs("div", {
										className: "x1ers9ju xbrszos xea3l6g x18isctg x2q3nzr xqu0tyb x1n2onr6 xvni27",
										children: [
											c.jsx("div", {
												className: "x1p8t8ri xbrszos xea3l6g x18isctg x2q3nzr x5yr21d x10l6tqk x13vifvy",
												style: { width: Le * 100 + "%" }
											}),
											c.jsx("div", {
												className: "x1p8t8ri x1c9tyrk xeusxvb x1pahc9y x1ertn4p x6w4g8m x47corl x10l6tqk xwa60dl x11lhmoz x10vfzb2 x1vjfegm",
												style: {
													left: Le * 100 + "%",
													opacity: U ? 1 : 0,
													transition: "opacity 0.15s"
												}
											}),
											c.jsx("input", {
												tabIndex: -1,
												className: "x1ypdohk x1qx5ct2 x1o0tod xdj266r x14z9mp xat24cr x1lziwak xg01cxk x10l6tqk xwa60dl x1cb1t30 xh8yej3",
												dir: "ltr",
												max: 1,
												min: "0",
												onChange: function(t) {
													ce(parseFloat(t.target.value));
												},
												step: "any",
												type: "range",
												value: Le
											})
										]
									})
								})), c.jsx("div", {
									className: "x1yrsyyn x1icxu4v x10b6aqq x25sj25",
									children: c.jsx("button", {
										className: "x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1heor9g x1ypdohk x78zum5 xexx8yu xyri2b x18d9i69 x1c1uobl",
										"aria-label": Ee,
										onClick: Re ? ue : se,
										tabIndex: 0,
										type: "button",
										children: Re ? c.jsx(r("WDSIconIcVolumeOffFilled.react"), {
											height: 22,
											width: 22,
											iconXstyle: R.iconBlock
										}) : c.jsx(r("WDSIconIcVolumeUp.react"), {
											height: 22,
											width: 22,
											iconXstyle: R.iconBlock
										})
									})
								})]
							})),
							c.jsx("div", {
								className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p xt0e3qv x1yrsyyn x1icxu4v x10b6aqq x25sj25 x47corl",
								children: c.jsx("button", {
									className: "x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1heor9g x78zum5 xexx8yu xyri2b x18d9i69 x1c1uobl xt0e3qv xbyyjgo",
									"aria-label": s._(
										/*BTDS*/
										""
									),
									disabled: !0,
									type: "button",
									children: c.jsx(r("WDSIconIcFullscreen.react"), {
										height: C,
										width: C,
										iconXstyle: R.iconBlock
									})
								})
							}),
							c.jsx("div", {
								className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1yrsyyn x1icxu4v x10b6aqq x25sj25 xtr8le0",
								children: c.jsx("button", {
									className: "x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1heor9g x1ypdohk x78zum5 xexx8yu xyri2b x18d9i69 x1c1uobl",
									"aria-label": s._(
										/*BTDS*/
										""
									),
									onClick: de,
									type: "button",
									children: c.jsx(r("WDSIconIcMoreVert.react"), {
										height: C,
										width: C,
										iconXstyle: R.iconBlock
									})
								})
							}),
							Q ? c.jsx("div", {
								ref: ee,
								className: "xtsvl71 x1wpzwpe xa3vuyk x1p8t8ri xyi3aci xwf5gio x1p453bz x1suzm8a xqo3gd xpj8aza xxx7yvo xl8z2ie xfb3i0g x6ikm8r x1odjw0f x10l6tqk x6ow6l x1n327nk",
								onClick: o("WAWebStopEvent").stopPropagation,
								role: "menu",
								tabIndex: -1,
								children: J === "main" ? c.jsxs(c.Fragment, { children: [c.jsxs("div", {
									className: "x6s0dn4 x1lljey2 x1ypdohk x78zum5 x1pg5gke xtqikln xsdox4t xv54qhq xf7dkkf x1xub2uj",
									onClick: function() {
										return Z("speed");
									},
									onKeyDown: function(t) {
										return g(t, function() {
											return Z("speed");
										});
									},
									role: "menuitem",
									tabIndex: 0,
									children: [c.jsx(v, { className: "x2lah0s xxk0z11 xvy4d1p" }), c.jsx("span", {
										className: "x1iyjqo2",
										children: s._(
											/*BTDS*/
											""
										)
									})]
								}), fe ? c.jsxs("div", {
									className: "x6s0dn4 x1lljey2 x1ypdohk x78zum5 x1pg5gke xtqikln xsdox4t xv54qhq xf7dkkf x1xub2uj",
									onClick: ge,
									onKeyDown: function(t) {
										return g(t, ge);
									},
									role: "menuitem",
									tabIndex: 0,
									children: [pe ? c.jsx(S, { className: "x2lah0s xxk0z11 xvy4d1p" }) : c.jsx(r("WDSIconIcPictureInPictureAlt.react"), {
										height: 24,
										width: 24,
										xstyle: R.menuItemIcon,
										iconXstyle: R.iconBlock
									}), c.jsx("span", {
										className: "x1iyjqo2",
										children: pe ? s._(
											/*BTDS*/
											""
										) : s._(
											/*BTDS*/
											""
										)
									})]
								}) : null] }) : c.jsxs(c.Fragment, { children: [c.jsxs("div", {
									className: "x6s0dn4 x1lljey2 x1ypdohk x78zum5 x1pg5gke xtqikln xsdox4t xv54qhq xf7dkkf x1xub2uj",
									onClick: function() {
										return Z("main");
									},
									onKeyDown: function(t) {
										return g(t, function() {
											return Z("main");
										});
									},
									role: "menuitem",
									tabIndex: 0,
									children: [c.jsx(r("WDSIconIcArrowBack.react"), {
										height: b,
										width: b,
										xstyle: R.menuHeaderIcon,
										iconXstyle: R.iconBlock,
										directional: !0
									}), c.jsx("span", { children: s._(
										/*BTDS*/
										""
									) })]
								}), y.map(function(e) {
									var t = Math.abs(k - e) < .01;
									return c.jsxs("div", {
										className: "x6s0dn4 x1lljey2 x1ypdohk x78zum5 x1pg5gke xtqikln xsdox4t xv54qhq xf7dkkf x1xub2uj",
										"data-active": t ? "" : void 0,
										onClick: function() {
											return he(e);
										},
										onKeyDown: function(n) {
											return g(n, function() {
												return he(e);
											});
										},
										role: "menuitemradio",
										"aria-checked": t,
										tabIndex: 0,
										children: [
											c.jsx("div", { className: "x2lah0s x1qx5ct2 xlshs6z xw4jnvo" }),
											c.jsx("span", { children: e === 1 ? s._(
												/*BTDS*/
												""
											) : String(e) }),
											t ? c.jsx(r("WDSIconIcCheck.react"), {
												height: 20,
												width: 20,
												xstyle: R.menuCheckmark,
												iconXstyle: R.iconBlock
											}) : null
										]
									}, e);
								})] })
							}) : null
						]
					})
				]
			}), c.jsxs("div", {
				className: "x1hshjfz xpdmqnj x1g0dm76 x1n2onr6",
				onClick: o("WAWebStopEvent").stopPropagation,
				onMouseDown: o("WAWebStopEvent").stopPropagation,
				onMouseEnter: function() {
					return M(!0);
				},
				onMouseLeave: function() {
					return M(!1);
				},
				children: [c.jsx("input", {
					tabIndex: 0,
					"aria-label": s._(
						/*BTDS*/
						""
					),
					"data-testid": "progress",
					className: "xjbqb8w x1ypdohk x5yr21d x1o0tod xdj266r x14z9mp xat24cr x1lziwak xg01cxk x10l6tqk x13vifvy xh8yej3 xhtitgo",
					dir: "ltr",
					max: E > 0 ? E.toLocaleString("en-US", {
						minimumFractionDigits: 0,
						maximumFractionDigits: 2,
						roundingMode: "trunc",
						useGrouping: !1
					}) : 0,
					min: "0",
					onBlur: function() {
						return F(!1);
					},
					onChange: ie,
					onFocus: function() {
						return F(!0);
					},
					onKeyDown: le,
					onMouseDown: oe,
					onMouseUp: ae,
					step: "any",
					type: "range",
					value: te
				}), c.jsxs("div", {
					className: "x47corl x1n2onr6 xh8yej3",
					children: [
						c.jsx("div", { className: "xqu0tyb x1o0tod x10l6tqk xwa60dl x1cb1t30 xh8yej3 xki6t65 xbrszos xea3l6g x18isctg x2q3nzr" }),
						c.jsx("div", babelHelpers.extends({ "data-testid": "progressbar-progress" }, {
							0: { className: "xqu0tyb x1o0tod x10l6tqk xwa60dl x1cb1t30 xh8yej3 x1p8t8ri x1e7945m x2q3nzr x17un8ov xbrszos" },
							1: { className: "xqu0tyb x1o0tod x10l6tqk xwa60dl x1cb1t30 xh8yej3 x1p8t8ri xbrszos xea3l6g x18isctg x2q3nzr" }
						}[(ye === 1) << 0], { style: { width: Ce } })),
						c.jsx("div", babelHelpers.extends({}, {
							0: { className: "x1p8t8ri x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1kpxq89 x47corl x10l6tqk xwa60dl x11lhmoz xx6bhzk x19991ni xsmyaan xk3oba8" },
							1: { className: "x1p8t8ri x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1kpxq89 x47corl x10l6tqk xwa60dl x11lhmoz xx6bhzk x19991ni xsmyaan xk3oba8 xbdehr" }
						}[!!A << 0], { style: {
							left: Ce,
							opacity: N || A ? 1 : 0
						} }))
					]
				})]
			})] }))]
		});
	}
	E.displayName = E.name + " [from " + i.id + "]", l.default = E;
}), 226);
