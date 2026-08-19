__d("WAWebMessageWrapperBenchmark.react", [
	"fbt",
	"WAWebChatCollection",
	"WAWebChatThemeModeContext",
	"WAWebErrorBoundary.react",
	"WAWebMessageBubbleShowroomConstants",
	"WAWebMessageBubbleShowroomMsgCreators",
	"WAWebMessagePosition",
	"WAWebMessageWrapper.react",
	"WAWebModalManager",
	"WAWebMsgCollection",
	"WAWebUserPrefsMeUser",
	"WAWebWidFactory",
	"WDSButton.react",
	"WDSChip.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSThemes",
	"react",
	"stylex",
	"useWAWebChatThemeModeValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = { overlay: {
		position: "xixxii4",
		top: "x13vifvy",
		bottom: "x1ey2m1c",
		insetInlineStart: "x1o0tod",
		insetInlineEnd: "xtijo5x",
		left: null,
		right: null,
		zIndex: "xfo81ep",
		display: "x78zum5",
		flexDirection: "xdt5ytf",
		backgroundColor: "x1280gxy",
		$$css: !0
	} }, g = [].concat(o("WAWebMessageBubbleShowroomConstants").MESSAGE_TYPES, o("WAWebMessageBubbleShowroomConstants").SMB_MESSAGE_TYPES), h = [
		10,
		50,
		100,
		200
	], y = o("WAWebWidFactory").createWid("99999999999-1700000000@g.us"), C = [
		o("WAWebWidFactory").createWid("22222222222@c.us"),
		o("WAWebWidFactory").createWid("33333333333@c.us"),
		o("WAWebWidFactory").createWid("44444444444@c.us")
	], b = {
		"--message-primary": "var(--WDS-content-default)",
		"--primary": "var(--WDS-content-default)",
		"--primary-strong": "var(--WDS-content-default)",
		"--primary-stronger": "var(--WDS-content-default)",
		"--primary-strong-rgb": "17, 27, 33",
		"--secondary": "var(--WDS-content-deemphasized)",
		"--secondary-lighter": "var(--WDS-content-deemphasized)",
		"--secondary-stronger": "var(--WDS-content-deemphasized)",
		"--bubble-meta": "var(--WDS-content-deemphasized)",
		"--bubble-meta-icon": "var(--WDS-content-deemphasized)",
		"--icon": "var(--WDS-content-deemphasized)",
		"--button-alternative": "var(--WDS-content-action-emphasized)",
		"--border-bubble": "var(--WDS-lines-divider)",
		"--payment-status-pending": "rgba(17, 27, 33, 0.45)",
		"--payment-status-success": "#1fa855",
		"--payment-status-failed": "#f15c6d",
		"--chat-background": "var(--WDS-systems-chat-background-wallpaper)",
		"--overlay-rgb": "11, 20, 26",
		"--shadow-rgb": "11, 20, 26",
		"--forwarded-indicator-text": "#8696a0",
		"--vcard-placeholder-background": "rgba(17, 27, 33, 0.04)",
		"--vcard-placeholder-background-deeper": "rgba(17, 27, 33, 0.08)"
	};
	function v(e) {
		for (var t = e.count, n = e.groupWid, r = e.meUser, a = e.typeIds, i = [], l = [], s = C.length + 1, u = 0; u < t; u++) {
			var c = a[u % a.length], d = Math.floor(u / 2) % s, m = d === 0, p = m ? r : C[(d - 1) % C.length], _ = o("WAWebMessageBubbleShowroomMsgCreators").createMsgForType({
				allMsgs: i,
				author: p,
				fromMe: m,
				meUser: r,
				otherUser: n,
				typeId: c
			});
			_ != null && l.push(_);
		}
		return {
			allMsgs: i,
			msgs: l
		};
	}
	function S(e) {
		for (var t = C.length + 1, n = [], r = 0; r < e; r++) {
			var a = Math.floor(r / 2) % t, i = r > 0 ? Math.floor((r - 1) / 2) % t : -1, l = r < e - 1 ? Math.floor((r + 1) / 2) % t : -1;
			a === i && a === l ? n.push(o("WAWebMessagePosition").MsgPosition.MID) : a === i ? n.push(o("WAWebMessagePosition").MsgPosition.END) : a === l ? n.push(o("WAWebMessagePosition").MsgPosition.FRONT) : n.push(o("WAWebMessagePosition").MsgPosition.SINGLE);
		}
		return n;
	}
	function R(e) {
		for (var t of e) {
			var n = o("WAWebMsgCollection").MsgCollection.get(t.id);
			n != null && o("WAWebMsgCollection").MsgCollection.remove(n);
		}
	}
	function L(e) {
		var t = e.boundaryName, n = e.error, r = e.handleClick;
		return c.jsx("div", {
			className: "xz9dl7a xpdmqnj xsag5q8 x1g0dm76 xyi3aci xwf5gio x1p453bz x1suzm8a x1h3rtpe xhslqc4 x1pg5gke x2b8uid",
			"data-testid": "benchmark_msg_wrapper_bubble_fallback",
			children: s._(
				/*BTDS*/
				"",
				[s._param("boundaryName", t)]
			)
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.msg, n = e.position;
		return c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "benchmark-" + t.type,
			fallback: L,
			children: c.jsx("div", {
				className: "xh8yej3 x1n2onr6 x14ug900 x1vjfegm x6ikm8r x10wlt62",
				children: c.jsx(r("WAWebMessageWrapper.react"), {
					msg: t,
					position: n,
					showProfilePicture: !0,
					errorBoundaryName: "benchmark"
				})
			})
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k() {
		var t = _(50), n = t[0], a = t[1], i = _(function() {
			return new Set(o("WAWebMessageBubbleShowroomConstants").MESSAGE_TYPES.map(function(e) {
				return e.id;
			}));
		}), l = i[0], u = i[1], d = _(0), C = d[0], L = d[1], k = _([]), T = k[0], D = k[1], x = _([]), $ = x[0], P = x[1], N = _(!1), M = N[0], w = N[1], A = p([]), F = _(function() {
			return o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
		}), O = F[0], B = r("useWAWebChatThemeModeValue")(null, !1);
		m(function() {
			return o("WAWebChatCollection").ChatCollection.add({ id: y }), function() {
				R(A.current);
				var e = o("WAWebChatCollection").ChatCollection.get(y);
				e != null && o("WAWebChatCollection").ChatCollection.remove(e);
			};
		}, []);
		var W = function() {
			var e = Array.from(l);
			if (e.length !== 0) {
				R(A.current);
				var t = v({
					count: n,
					groupWid: y,
					meUser: O,
					typeIds: e
				}), r = t.allMsgs, o = t.msgs;
				D(o), P(S(o.length)), A.current = r, L(function(e) {
					return e + 1;
				}), w(!0);
			}
		}, q = function(t) {
			u(function(e) {
				var n = new Set(e);
				return n.has(t) ? n.delete(t) : n.add(t), n;
			});
		}, U = function() {
			u(new Set(g.map(function(e) {
				return e.id;
			})));
		}, V = function() {
			u(new Set());
		};
		return c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme, f.overlay), {
			"data-testid": "benchmark_msg_wrapper_overlay",
			children: [
				c.jsxs("div", {
					className: "x78zum5 x6s0dn4 x1qughib xyamay9 x1l90r2v x106a9eq x1xnnf8n xso031l x1q0q8m5 x120ee7l x2lah0s",
					children: [c.jsx(r("WDSText.react"), {
						type: "Headline2",
						colorName: "contentDefault",
						children: s._(
							/*BTDS*/
							""
						)
					}), c.jsx(r("WDSButton.react"), {
						variant: "borderless",
						Icon: r("WDSIconIcClose.react"),
						"aria-label": s._(
							/*BTDS*/
							""
						),
						onPress: I,
						testid: "benchmark_msg_wrapper_close_button"
					})]
				}),
				c.jsxs("div", {
					className: "x78zum5 xdt5ytf x1b8z93w xz9dl7a xsag5q8 x106a9eq x1xnnf8n xso031l x1q0q8m5 x120ee7l x2lah0s",
					children: [
						c.jsxs("div", {
							className: "x78zum5 x6s0dn4 xmixu3c xw09woa x1a02dak",
							children: [c.jsx(r("WDSText.react"), {
								type: "Body2Emphasized",
								colorName: "contentDeemphasized",
								children: c.jsx("span", {
									className: "x2fvf9 x2lah0s",
									children: s._(
										/*BTDS*/
										""
									)
								})
							}), h.map(function(e) {
								return c.jsx(r("WDSChip.react"), {
									label: String(e),
									size: "default",
									isSelected: n === e,
									onPress: function() {
										return a(e);
									},
									testid: "benchmark_msg_wrapper_count_chip_" + e
								}, e);
							})]
						}),
						c.jsxs("div", {
							className: "x78zum5 x6s0dn4 xmixu3c xw09woa x1a02dak",
							children: [
								c.jsx(r("WDSText.react"), {
									type: "Body2Emphasized",
									colorName: "contentDeemphasized",
									children: c.jsx("span", {
										className: "x2fvf9 x2lah0s",
										children: s._(
											/*BTDS*/
											""
										)
									})
								}),
								g.map(function(e) {
									return c.jsx(r("WDSChip.react"), {
										label: e.label,
										size: "default",
										isSelected: l.has(e.id),
										onPress: function() {
											return q(e.id);
										},
										testid: "benchmark_msg_wrapper_type_chip_" + e.id
									}, e.id);
								}),
								c.jsxs("div", {
									className: "x78zum5 xmixu3c xvc5jky",
									children: [c.jsx(r("WDSButton.react"), {
										variant: "borderless",
										label: s._(
											/*BTDS*/
											""
										),
										onPress: U
									}), c.jsx(r("WDSButton.react"), {
										variant: "borderless",
										label: s._(
											/*BTDS*/
											""
										),
										onPress: V
									})]
								})
							]
						}),
						c.jsx("div", {
							className: "x78zum5 x6s0dn4 xmixu3c xw09woa x1a02dak",
							children: c.jsx(r("WDSButton.react"), {
								variant: "filled",
								label: s._(
									/*BTDS*/
									""
								),
								onPress: W,
								disabled: l.size === 0,
								testid: "benchmark_msg_wrapper_run_button"
							})
						})
					]
				}),
				c.jsx(r("WAWebChatThemeModeContext").Provider, {
					value: B,
					children: c.jsxs("div", {
						className: "x1iyjqo2 xw2csxc x1odjw0f xyamay9 xv54qhq x1l90r2v xf7dkkf x1n2onr6",
						children: [M && c.jsx("div", {
							style: b,
							children: T.map(function(e, t) {
								var n;
								return c.jsx(E, {
									msg: e,
									position: (n = $[t]) != null ? n : o("WAWebMessagePosition").MsgPosition.SINGLE
								}, t);
							})
						}, C), !M && c.jsx("div", {
							className: "x13zrc24 x2b8uid",
							children: c.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDeemphasized",
								children: s._(
									/*BTDS*/
									""
								)
							})
						})]
					})
				})
			]
		}));
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I() {
		o("WAWebModalManager").ModalManager.close();
	}
	l.default = k;
}), 226);
