__d("WAFlowsPreviewDeviceScreenCTWA.react", [
	"fbt",
	"ix",
	"AdsInterfacesLogger",
	"AutomatedGreetingMessageTypes",
	"GeoBaseText.react",
	"GeoFlexbox.react",
	"GeoIcon.react",
	"GeoMediaItem.react",
	"Image.react",
	"WAFlowJSONValidation",
	"WAFlowsPreviewProvider.react",
	"WAMFlowsCTWAUtilsCTALabels.react",
	"WAMFlowsHSMFlowJSONAdapter",
	"WhatsAppAndroidAppChatShellPreview.react",
	"WhatsAppAutomatedGreetingMessagePreviewBody.react",
	"bx",
	"fbicon",
	"geoMargin",
	"getErrorSafe",
	"react",
	"stylex",
	"useJSON"
], (function(t, n, r, o, a, i, l, s, u) {
	"use strict";
	var e, c, d = c || (c = o("react")), m = c.useMemo, p = {
		store: r("bx").getURL(r("bx")("10637")),
		phone: r("bx").getURL(r("bx")("9861")),
		shareExternal: r("bx").getURL(r("bx")("10635"))
	}, _ = {
		root: {
			position: "x1n2onr6",
			$$css: !0
		},
		bubble: {
			paddingTop: "x1iorvi4",
			paddingInlineEnd: "xf159sx",
			paddingBottom: "xjkvuk6",
			paddingInlineStart: "xmzvs34",
			fontSize: "x190qgfh",
			lineHeight: "x1t6tl7h",
			borderStartStartRadius: "xr9w4p7",
			borderStartEndRadius: "x7f0h72",
			borderEndEndRadius: "x1nug9m2",
			borderEndStartRadius: "x18qtlnh",
			textAlign: "x2b8uid",
			boxShadow: "x1exm56g",
			$$css: !0
		},
		timestamp: {
			color: "x1v8dydz",
			backgroundColor: "xezzwy5",
			$$css: !0
		},
		encryptionMessage: {
			color: "x18m0hwo",
			backgroundColor: "xqzoyor",
			$$css: !0
		},
		contextCard: {
			width: "x1q5yig5",
			paddingTop: "x134lwj9",
			paddingInlineEnd: "xl3akx1",
			paddingBottom: "x1i2zvha",
			paddingInlineStart: "x11ahuha",
			borderStartStartRadius: "xbjudin",
			borderStartEndRadius: "xnlwouz",
			borderEndEndRadius: "xpp8er5",
			borderEndStartRadius: "xs9wviy",
			backgroundColor: "xezzwy5",
			boxShadow: "x1exm56g",
			$$css: !0
		},
		businessDetails: { $$css: !0 },
		subText: {
			textAlign: "x2b8uid",
			fontSize: "xpsmn0r",
			color: "x18m0hwo",
			$$css: !0
		},
		body: {
			position: "x10l6tqk",
			top: "xbssg55",
			bottom: "xacj9c0",
			overflowY: "x1odjw0f",
			$$css: !0
		},
		bodyFullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		bottomBar: {
			height: "x1vqgdyp",
			backgroundColor: "x2izyaf",
			borderStartStartRadius: "x120xd9q",
			borderStartEndRadius: "x1k4ovr2",
			borderEndEndRadius: "xdfaw6k",
			borderEndStartRadius: "xefzod",
			insetInlineStart: "x1fb7gu6",
			left: null,
			right: null,
			bottom: "x1wa3icf",
			maxHeight: "x1rq5m6k",
			overflowY: "x1odjw0f",
			position: "x10l6tqk",
			width: "x1f9tj09",
			$$css: !0
		},
		bottomBarDefaultMessageInput: {
			color: "xp3w0mo",
			fontSize: "x1jchvi3",
			$$css: !0
		},
		formResponseBubble: {
			backgroundColor: "xfrb85r",
			borderStartStartRadius: "x6nl9eh",
			borderStartEndRadius: "x1ga7v0g",
			borderEndEndRadius: "x7vuprf",
			borderEndStartRadius: "x1mg3h75",
			paddingTop: "x1iorvi4",
			paddingInlineEnd: "x11lfxj5",
			paddingBottom: "xjkvuk6",
			paddingInlineStart: "x135b78x",
			marginTop: "x1xmf6yo",
			marginInlineEnd: "x1xegmmw",
			alignSelf: "xpvyfi4",
			$$css: !0
		},
		completionMessageRow: {
			flexShrink: "x2lah0s",
			$$css: !0
		}
	};
	function f(e) {
		var t = null;
		switch (e) {
			case "NONE": break;
			case "call":
				t = p.phone;
				break;
			case "catalog":
				t = p.store;
				break;
			case "url":
				t = p.shareExternal;
				break;
			default:
		}
		return t == null ? null : d.jsx(r("Image.react"), {
			height: 16,
			src: t,
			title: r("AutomatedGreetingMessageTypes"),
			width: 16
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		switch (e) {
			case "call": return s._(
				/*BTDS*/
				""
			);
			case "url": return s._(
				/*BTDS*/
				""
			);
			case "catalog": return s._(
				/*BTDS*/
				""
			);
			default: return null;
		}
	}
	function h(t) {
		var n = t.completionMessageCTAType, a = t.completionMessageText, i = t.ctwaImageCreative, l = t.ctwaWelcomeMessage, c = t.height, p = t.isCompletionMessageEnabled, h = p === void 0 ? !1 : p, y = t.onOpen, C = t.width, b = o("WAFlowsPreviewProvider.react").useWAFlowsPreview(), v = b.businessName, S = b.businessProfilePicture, R = b.flowJSON, L = m(function() {
			if (R == null) return !1;
			var e = null;
			try {
				return JSON.parse(R != null ? R : ""), e = o("WAFlowJSONValidation").validateFlowJSON(R, "ADS_MANAGER_CTWA", !1), e.isValid === !0;
			} catch (e) {
				var t, n = r("getErrorSafe")(e);
				return r("AdsInterfacesLogger").log({
					eventName: "ctwa_flows_am_preview_device_screen_ctwa_invalid_json",
					data: (t = {}, t.status = "error: " + String(n.message) + ", flowJSON: " + String(R), t)
				}), !1;
			}
		}, [R]), E = L ? R : "{\"\":\"\"}", k = r("useJSON")(E != null ? E : "{\"\":\"\"}"), I = m(function() {
			if (L === !1) return "";
			var e = o("WAMFlowsHSMFlowJSONAdapter").parseFlowJSON(k), t = e[0];
			return t.title;
		}, [L, k]), T = m(function() {
			return d.jsx(r("Image.react"), {
				src: S,
				alt: s._(
					/*BTDS*/
					""
				)
			});
		}, [S]);
		if (L === !1) return null;
		var D = h ? {
			xstyle: [_.body, _.bodyFullWidth],
			alignItems: void 0
		} : {
			xstyle: [_.body],
			alignItems: "center"
		};
		return d.jsxs(r("GeoFlexbox.react"), {
			direction: "column",
			xstyle: _.root,
			style: {
				width: C,
				height: c
			},
			children: [
				d.jsx(r("WhatsAppAndroidAppChatShellPreview.react"), {
					height: c,
					profileImage: T,
					profileName: v != null ? v : "",
					profileSubtext: s._(
						/*BTDS*/
						""
					),
					theme: "light",
					width: C
				}),
				l != null ? d.jsxs(r("GeoFlexbox.react"), {
					direction: "column",
					xstyle: D.xstyle,
					alignItems: D.alignItems,
					grow: 1,
					children: [
						d.jsx(r("WhatsAppAutomatedGreetingMessagePreviewBody.react"), {
							automatedGreetingMessageButton: {
								label: I,
								icon: null
							},
							automatedGreetingMessageButtonOnClick: y,
							pageProfileSrc: S,
							welcomeMessage: l,
							imageCreative: i
						}),
						h && d.jsxs("div", {
							className: "x78zum5 x13a6bvl x1xegmmw x2lah0s",
							children: [d.jsx(r("GeoFlexbox.react"), {
								direction: "column",
								xstyle: _.formResponseBubble,
								children: d.jsx("div", {
									className: "xm6rig7 x16qb05n xi7iut8 x1dm3dyd x1pv694p x1y1aw1k xf159sx xwib8y2 xmzvs34",
									children: d.jsxs(r("GeoFlexbox.react"), {
										direction: "row",
										alignItems: "center",
										children: [d.jsx("div", {
											className: "x1fns5xo x1ba4aug xo92w5m x18wx58x x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1q85c4o x78zum5 x6s0dn4 xl56j7k x1xegmmw x6ikm8r x10wlt62",
											children: d.jsx(r("Image.react"), {
												height: 16,
												width: 16,
												src: r("bx").getURL(r("bx")("25321")),
												title: I
											})
										}), d.jsxs(r("GeoFlexbox.react"), {
											direction: "column",
											grow: 1,
											children: [d.jsx("div", { children: d.jsx(r("GeoBaseText.react"), {
												color: "valueLabel",
												overflowWrap: "break-word",
												size: "value",
												weight: "bold",
												children: I
											}) }), d.jsx(r("GeoFlexbox.react"), {
												direction: "row",
												justifyContent: "space-between",
												alignItems: "end",
												children: d.jsx(r("GeoBaseText.react"), {
													color: "placeholder",
													overflowWrap: "break-word",
													size: "value",
													children: s._(
														/*BTDS*/
														""
													)
												})
											})]
										})]
									})
								})
							}), d.jsx("div", {
								className: "x1y0xqtl x1qfufaz",
								children: d.jsx(r("Image.react"), { src: u("1119261") })
							})]
						}),
						h && a != null && a !== "" && d.jsxs(r("GeoFlexbox.react"), {
							xstyle: [r("geoMargin").start8, _.completionMessageRow],
							children: [d.jsx("div", {
								className: "x1xmf6yo",
								children: d.jsx(r("GeoFlexbox.react"), { children: d.jsx(r("Image.react"), { src: u("388906") }) })
							}), d.jsx("div", {
								className: "x1q85c4o x15mokao x1a5l9x9 x7vuprf x1mg3h75 x1xmf6yo x1f07zgu xqyf9gi",
								children: d.jsxs(r("GeoFlexbox.react"), {
									direction: "column",
									xstyle: r("geoMargin").bottom4,
									children: [d.jsx("div", {
										className: "x1gslohp x13fj5qh x1sa5p1d",
										children: d.jsx(r("GeoBaseText.react"), {
											color: "value",
											overflowWrap: "break-word",
											size: "value",
											children: a
										})
									}), n != null && n !== "none" && d.jsx(r("GeoFlexbox.react"), {
										direction: "column",
										children: d.jsx("div", {
											className: "x178xt8z x13fuv20 xkh9tda x1anpbxc x6s0dn4 xl56j7k x78zum5 xso508o",
											children: d.jsxs(r("GeoFlexbox.react"), {
												alignContent: "center",
												xstyle: r("geoMargin").all8,
												children: [d.jsx("div", {
													className: "xso508o x6s0dn4 xl56j7k x78zum5 x1xegmmw",
													children: f(n)
												}), d.jsx(r("GeoBaseText.react"), {
													color: "inherit",
													size: "value",
													textAlign: "center",
													children: g(n)
												})]
											})
										})
									})]
								})
							})]
						})
					]
				}) : d.jsxs(r("GeoFlexbox.react"), {
					direction: "column",
					xstyle: _.body,
					alignItems: "center",
					grow: 1,
					children: [
						d.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.timestamp, _.bubble, r("geoMargin").vert8), { children: s._(
							/*BTDS*/
							""
						) })),
						d.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.bubble, _.encryptionMessage, r("geoMargin").horiz24), { children: s._(
							/*BTDS*/
							"",
							[s._implicitParam("=m2", d.jsx("strong", { children: s._(
								/*BTDS*/
								""
							) }))]
						) })),
						d.jsxs(r("GeoFlexbox.react"), {
							direction: "column",
							alignItems: "center",
							xstyle: [_.contextCard, r("geoMargin").vert8],
							children: [
								d.jsx(r("GeoMediaItem.react"), {
									fit: "cover",
									ratio: "circle",
									media: T,
									size: 64
								}),
								d.jsxs(r("GeoFlexbox.react"), {
									direction: "column",
									xstyle: [_.businessDetails, r("geoMargin").vert12],
									children: [d.jsx("div", {
										className: "x1nxh6w3 x2b8uid xk50ysn",
										children: v
									}), d.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([_.subText, r("geoMargin").top4]), { children: s._(
										/*BTDS*/
										""
									) }))]
								}),
								d.jsxs("button", {
									className: "x78zum5 xl56j7k x6s0dn4 x1ypdohk x2b8uid x1y1aw1k xf159sx xwib8y2 xmzvs34 x12peec7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1mnk73k xmnbj4i x1ev791w xpnxf55 x1t4u2ek x1avaie5 x1024vqm xg5rdaz xso508o xh8yej3",
									onClick: y,
									"data-testid": void 0,
									children: [d.jsx(r("Image.react"), {
										height: 16,
										width: 16,
										src: o("WAMFlowsCTWAUtilsCTALabels.react").getIconByCTALabel(I),
										title: I
									}), d.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("geoMargin").start4), { children: I }))]
								})
							]
						})
					]
				}),
				d.jsxs(r("GeoFlexbox.react"), {
					xstyle: _.bottomBar,
					children: [
						d.jsx(r("Image.react"), {
							className: (e || (e = r("stylex")))(r("geoMargin").horiz12),
							src: r("bx").getURL(r("bx")("11561")),
							width: 17,
							title: s._(
								/*BTDS*/
								""
							)
						}),
						d.jsx(r("GeoFlexbox.react"), {
							grow: 1,
							xstyle: _.bottomBarDefaultMessageInput,
							alignItems: "center",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						d.jsx(r("Image.react"), {
							src: r("bx").getURL(r("bx")("11558")),
							width: 10,
							title: s._(
								/*BTDS*/
								""
							)
						}),
						d.jsx(r("Image.react"), {
							className: e([r("geoMargin").start16, r("geoMargin").end12]),
							src: r("bx").getURL(r("bx")("11559")),
							width: 17,
							title: s._(
								/*BTDS*/
								""
							)
						})
					]
				}),
				d.jsx("div", {
					className: "x10l6tqk xxx7yvo xbfrwjf x7n1040 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x100vrsf x1vqgdyp x78zum5 xl56j7k x6s0dn4",
					children: d.jsx(r("GeoIcon.react"), {
						icon: o("fbicon")._(u("624149"), 20),
						color: "inverted"
					})
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
