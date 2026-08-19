__d("WAWebMessageBubbleShowroom.react", [
	"fbt",
	"WAWebChatCollection",
	"WAWebChatThemeEnums",
	"WAWebChatThemeGrid.react",
	"WAWebChatThemeModeContext",
	"WAWebConversationBackground.react",
	"WAWebErrorBoundary.react",
	"WAWebMessageBubbleShowroomConstants",
	"WAWebMessageBubbleShowroomMsgCreators",
	"WAWebMessagePosition",
	"WAWebMessageWrapper.react",
	"WAWebModalManager",
	"WAWebMsgCollection",
	"WAWebShowroomUtils",
	"WAWebStockWallpaper",
	"WAWebUseChatTheme",
	"WAWebUserPrefsMeUser",
	"WAWebWallpaper",
	"WDSButton.react",
	"WDSChip.react",
	"WDSIconIcClose.react",
	"WDSSwitch.react",
	"WDSText.react",
	"WDSThemes",
	"react",
	"stylex",
	"useWAWebChatThemeModeValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useEffect, _ = d.useMemo, f = d.useState, g = {
		backgroundImage: "x1e87kdn",
		$$css: !0
	}, h = {
		overlay: {
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
		},
		convPanel: {
			flexBasis: "x1mqvdus",
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			backgroundColor: "x1q80dvb",
			paddingTop: "xyamay9",
			paddingInlineEnd: "xv54qhq",
			paddingBottom: "x1l90r2v",
			paddingInlineStart: "xf7dkkf",
			position: "x1n2onr6",
			$$css: !0
		},
		cardBubbles: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			rowGap: "xw09woa",
			position: "x1n2onr6",
			backgroundColor: "x1q80dvb",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			paddingTop: "x1y1aw1k",
			paddingInlineEnd: "xf159sx",
			paddingBottom: "xwib8y2",
			paddingInlineStart: "xmzvs34",
			$$css: !0
		},
		stockWallpaper: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			width: "xh8yej3",
			height: "x5yr21d",
			backgroundSize: "x18d0r48",
			backgroundPosition: "x1xsqp64",
			zIndex: "x1ja2u2z",
			$$css: !0
		},
		stockWallpaperImage: function(t) {
			return [g, { "--x-backgroundImage": "url(" + t + ")" != null ? "url(" + t + ")" : void 0 }];
		}
	}, y = c.createContext(!1);
	function C() {
		var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), t = o("WAWebShowroomUtils").getRandomContact().id, n = [];
		o("WAWebChatCollection").ChatCollection.add({ id: t });
		var r = {};
		for (var a of [].concat(o("WAWebMessageBubbleShowroomConstants").MESSAGE_TYPES, o("WAWebMessageBubbleShowroomConstants").SMB_MESSAGE_TYPES)) r[a.id] = {
			incoming: o("WAWebMessageBubbleShowroomMsgCreators").createMsgForType({
				allMsgs: n,
				fromMe: !1,
				meUser: e,
				otherUser: t,
				typeId: a.id
			}),
			outgoing: o("WAWebMessageBubbleShowroomMsgCreators").createMsgForType({
				allMsgs: n,
				fromMe: !0,
				meUser: e,
				otherUser: t,
				typeId: a.id
			})
		};
		var i = [];
		for (var l of o("WAWebMessageBubbleShowroomConstants").CONVERSATION_SEQUENCE) {
			var s = o("WAWebMessageBubbleShowroomMsgCreators").createMsgForType({
				allMsgs: n,
				fromMe: l.fromMe,
				meUser: e,
				otherUser: t,
				typeId: l.typeId
			});
			s != null && i.push({
				typeId: l.typeId,
				msg: s
			});
		}
		var u = [];
		for (var c of o("WAWebMessageBubbleShowroomConstants").SMB_CONVERSATION_SEQUENCE) {
			var d = o("WAWebMessageBubbleShowroomMsgCreators").createMsgForType({
				allMsgs: n,
				fromMe: c.fromMe,
				meUser: e,
				otherUser: t,
				typeId: c.typeId
			});
			d != null && u.push({
				typeId: c.typeId,
				msg: d
			});
		}
		return {
			gallery: r,
			conversation: i,
			smbConversation: u,
			allMsgs: n
		};
	}
	function b(e) {
		var t = e.boundaryName, n = e.error, r = e.handleClick;
		return c.jsx("div", {
			className: "xz9dl7a xpdmqnj xsag5q8 x1g0dm76 xyi3aci xwf5gio x1p453bz x1suzm8a x1h3rtpe xhslqc4 x1pg5gke x2b8uid",
			children: s._(
				/*BTDS*/
				"",
				[s._param("boundaryName", t)]
			)
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		return {
			"--message-primary": "var(--WDS-content-default)",
			"--primary": "var(--WDS-content-default)",
			"--primary-strong": "var(--WDS-content-default)",
			"--primary-stronger": "var(--WDS-content-default)",
			"--primary-strong-rgb": e ? "233, 237, 239" : "17, 27, 33",
			"--secondary": "var(--WDS-content-deemphasized)",
			"--secondary-lighter": "var(--WDS-content-deemphasized)",
			"--secondary-stronger": "var(--WDS-content-deemphasized)",
			"--bubble-meta": "var(--WDS-content-deemphasized)",
			"--bubble-meta-icon": "var(--WDS-content-deemphasized)",
			"--icon": "var(--WDS-content-deemphasized)",
			"--button-alternative": "var(--WDS-content-action-emphasized)",
			"--border-bubble": "var(--WDS-lines-divider)",
			"--payment-status-pending": e ? "rgba(233, 237, 239, 0.45)" : "rgba(17, 27, 33, 0.45)",
			"--payment-status-success": e ? "#71eb85" : "#1fa855",
			"--payment-status-failed": "#f15c6d",
			"--chat-background": "var(--WDS-systems-chat-background-wallpaper)",
			"--overlay-rgb": "11, 20, 26",
			"--shadow-rgb": "11, 20, 26",
			"--forwarded-indicator-text": e ? "rgba(255, 255, 255, 0.6)" : "#8696a0",
			"--vcard-placeholder-background": e ? "rgba(233, 237, 239, 0.04)" : "rgba(17, 27, 33, 0.04)",
			"--vcard-placeholder-background-deeper": e ? "rgba(233, 237, 239, 0.12)" : "rgba(17, 27, 33, 0.08)"
		};
	}
	function S(e) {
		var t = e.msg, n = e.position, a = m(y), i = _(function() {
			return v(a);
		}, [a]);
		return c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "showroom-bubble-" + t.type,
			fallback: b,
			children: c.jsx("div", {
				style: i,
				children: c.jsx("div", {
					className: "xh8yej3 x1n2onr6 x14ug900 x1vjfegm x6ikm8r x10wlt62",
					children: c.jsx(r("WAWebMessageWrapper.react"), {
						msg: t,
						position: n != null ? n : o("WAWebMessagePosition").MsgPosition.SINGLE,
						errorBoundaryName: "showroom"
					})
				})
			})
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(t) {
		var n = t.chatThemeStyle, a = t.config, i = t.direction, l = t.galleryMsgs, s = t.isDarkMode, u = t.showDoodle, d = t.stockWallpaperUrl, m = l[a.id];
		if (m == null) return null;
		var p = m.incoming, _ = m.outgoing;
		return c.jsxs("div", {
			className: "x1vapyxq x1iyjqo2 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz xlr9sxt xvvg52n xwd4zgb xq8v1ta xyamay9 xv54qhq x1l90r2v xf7dkkf x1280gxy",
			children: [c.jsxs("div", {
				className: "x78zum5 x1qughib x1pha0wt xod5an3",
				children: [c.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDefault",
					children: a.label
				}), c.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: a.description
				})]
			}), c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.cardBubbles, n), { children: [
				c.jsx(r("WAWebConversationBackground.react"), {
					wallpaper: o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
					showDoodle: u
				}),
				d != null && c.jsxs(c.Fragment, { children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.stockWallpaper, h.stockWallpaperImage(d)))), s && c.jsx("div", { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x7w8cv9 x1ja2u2z" })] }),
				i !== "outgoing" && p != null ? c.jsx(S, { msg: p }) : null,
				i !== "incoming" && _ != null ? c.jsx(S, { msg: _ }) : null
			] }))]
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.conversation;
		return c.jsxs("div", { children: [c.jsx("div", {
			className: "x2b8uid xz9dl7a x1l90r2v x1n2onr6 x1vjfegm",
			children: c.jsx("span", {
				className: "x1rg5ohu x1iorvi4 xjkvuk6 x1g0dm76 xpdmqnj xyi3aci xwf5gio x1p453bz x1suzm8a x16w0wmm x1pg5gke xhslqc4",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), c.jsx("div", {
			className: "x78zum5 xdt5ytf x1r0jzty x1n2onr6 x1vjfegm",
			children: t.map(function(e, t) {
				return c.jsx(S, { msg: e.msg }, t);
			})
		})] });
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E() {
		var t = f(!1), n = t[0], a = t[1], i = f("both"), l = i[0], u = i[1], d = f("consumer"), m = d[0], g = d[1], b = f(function() {
			return new Set(o("WAWebMessageBubbleShowroomConstants").MESSAGE_TYPES.map(function(e) {
				return e.id;
			}));
		}), v = b[0], S = b[1], E = f(function() {
			return C();
		}), I = E[0], T = f(null), D = T[0], x = T[1], $ = f(!0), P = $[0], N = $[1], M = f(!0), w = M[0], A = M[1], F = o("WAWebUseChatTheme").useLazyChatThemeDefinitions({ isChatThemeEnabled: !0 }), O = n ? "dark" : "light", B = _(function() {
			return D == null || F == null ? null : F.getChatTheme(D, O);
		}, [
			D,
			F,
			O
		]), W = D != null && o("WAWebChatThemeEnums").hasVibrantBubbleColor(D), q = r("useWAWebChatThemeModeValue")(B, W), U = _(function() {
			return D == null ? null : o("WAWebChatThemeEnums").Theme.cast(D.replace(/@(Tonal|Minimal)$/, ""));
		}, [D]), V = U != null ? o("WAWebStockWallpaper").getStockWallpaperUrl(U) : null, H = V != null ? !1 : w, G = _(function() {
			return new Set(o("WAWebStockWallpaper").getThemesWithStockWallpapers().map(function(e) {
				return e;
			}));
		}, []), z = _(function() {
			return F != null ? [o("WAWebChatThemeEnums").Theme.Default].concat(F.getAllColorSchemes().filter(function(e) {
				var t = F.getBaseTheme(e);
				return t == null || !G.has(t);
			})) : [];
		}, [F, G]), j = _(function() {
			return F != null ? o("WAWebStockWallpaper").getThemesWithStockWallpapers() : [];
		}, [F]), K = _(function() {
			return m === "smb" ? [].concat(o("WAWebMessageBubbleShowroomConstants").MESSAGE_TYPES, o("WAWebMessageBubbleShowroomConstants").SMB_MESSAGE_TYPES) : o("WAWebMessageBubbleShowroomConstants").MESSAGE_TYPES;
		}, [m]), Q = _(function() {
			return m === "smb" ? [].concat(I.conversation, I.smbConversation) : I.conversation;
		}, [m, I]);
		p(function() {
			return function() {
				for (var e of I.allMsgs) {
					var t = o("WAWebMsgCollection").MsgCollection.get(e.id);
					t != null && o("WAWebMsgCollection").MsgCollection.remove(t);
				}
			};
		}, [I]);
		var X = _(function() {
			return K.filter(function(e) {
				return v.has(e.id);
			});
		}, [v, K]), Y = function(t) {
			S(function(e) {
				var n = new Set(e);
				return n.has(t) ? n.delete(t) : n.add(t), n;
			});
		}, J = function(t) {
			g(t);
			var e = t === "smb" ? [].concat(o("WAWebMessageBubbleShowroomConstants").MESSAGE_TYPES, o("WAWebMessageBubbleShowroomConstants").SMB_MESSAGE_TYPES) : o("WAWebMessageBubbleShowroomConstants").MESSAGE_TYPES;
			S(new Set(e.map(function(e) {
				return e.id;
			})));
		}, Z = function() {
			S(new Set(K.map(function(e) {
				return e.id;
			})));
		}, ee = function() {
			S(new Set());
		}, te = function(t) {
			a(t);
		}, ne = function(t) {
			F != null && x(t === o("WAWebChatThemeEnums").Theme.Default ? null : t);
		}, re = function() {
			x(null);
		};
		return c.jsx(y.Provider, {
			value: n,
			children: c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(n ? o("WDSThemes").WDSDarkTheme : o("WDSThemes").WDSLightTheme, h.overlay), { children: [
				c.jsxs("div", {
					className: "x78zum5 x6s0dn4 x1qughib xyamay9 x1l90r2v x106a9eq x1xnnf8n xso031l x1q0q8m5 x120ee7l x2lah0s",
					children: [c.jsx("div", {
						className: "x78zum5 x6s0dn4 xtqikln",
						children: c.jsx(r("WDSText.react"), {
							type: "Headline2",
							colorName: "contentDefault",
							children: s._(
								/*BTDS*/
								""
							)
						})
					}), c.jsxs("div", {
						className: "x78zum5 x6s0dn4 xtqikln",
						children: [c.jsxs("div", {
							className: "x78zum5 x6s0dn4 xfex06f",
							children: [c.jsx(r("WDSText.react"), {
								type: "Body3",
								colorName: "contentDeemphasized",
								children: n ? s._(
									/*BTDS*/
									""
								) : s._(
									/*BTDS*/
									""
								)
							}), c.jsx(r("WDSSwitch.react"), {
								value: n,
								onChange: te,
								"aria-label": s._(
									/*BTDS*/
									""
								)
							})]
						}), c.jsx(r("WDSButton.react"), {
							variant: "borderless",
							Icon: r("WDSIconIcClose.react"),
							"aria-label": s._(
								/*BTDS*/
								""
							),
							onPress: k
						})]
					})]
				}),
				c.jsxs("div", {
					className: "x78zum5 xdt5ytf x1b8z93w xz9dl7a xsag5q8 x106a9eq x1xnnf8n xso031l x1q0q8m5 x120ee7l x2lah0s",
					children: [
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
								c.jsx(r("WDSChip.react"), {
									label: "Consumer",
									size: "default",
									isSelected: m === "consumer",
									onPress: function() {
										return J("consumer");
									},
									testid: "showroom_msg_bubble_mode_chip_consumer"
								}),
								c.jsx(r("WDSChip.react"), {
									label: "SMB",
									size: "default",
									isSelected: m === "smb",
									onPress: function() {
										return J("smb");
									},
									testid: "showroom_msg_bubble_mode_chip_smb"
								})
							]
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
								c.jsx(r("WDSChip.react"), {
									label: "Incoming",
									size: "default",
									isSelected: l === "incoming",
									onPress: function() {
										return u("incoming");
									},
									testid: "showroom_msg_bubble_direction_chip_incoming"
								}),
								c.jsx(r("WDSChip.react"), {
									label: "Outgoing",
									size: "default",
									isSelected: l === "outgoing",
									onPress: function() {
										return u("outgoing");
									},
									testid: "showroom_msg_bubble_direction_chip_outgoing"
								}),
								c.jsx(r("WDSChip.react"), {
									label: "Both",
									size: "default",
									isSelected: l === "both",
									onPress: function() {
										return u("both");
									},
									testid: "showroom_msg_bubble_direction_chip_both"
								})
							]
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
								K.map(function(e) {
									return c.jsx(r("WDSChip.react"), {
										label: e.label,
										size: "default",
										isSelected: v.has(e.id),
										onPress: function() {
											return Y(e.id);
										},
										testid: "showroom_msg_bubble_type_chip_" + e.id
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
										onPress: Z
									}), c.jsx(r("WDSButton.react"), {
										variant: "borderless",
										label: s._(
											/*BTDS*/
											""
										),
										onPress: ee
									})]
								})
							]
						})
					]
				}),
				c.jsxs("div", {
					className: "xso031l x1q0q8m5 x120ee7l x2lah0s",
					children: [c.jsxs("div", {
						className: "x78zum5 x6s0dn4 x1qughib x1y1aw1k xwib8y2 x106a9eq x1xnnf8n",
						children: [c.jsxs("div", {
							className: "x78zum5 x6s0dn4 xtqikln",
							children: [c.jsx(r("WDSText.react"), {
								type: "Body2Emphasized",
								colorName: "contentDeemphasized",
								children: s._(
									/*BTDS*/
									""
								)
							}), D != null && F != null && c.jsx(r("WDSText.react"), {
								type: "Body3",
								colorName: "contentDeemphasized",
								children: F.getColorSchemeName(D)
							})]
						}), c.jsxs("div", {
							className: "x78zum5 x6s0dn4 xtqikln",
							children: [
								c.jsxs("div", {
									className: "x78zum5 x6s0dn4 xfex06f",
									children: [c.jsx(r("WDSText.react"), {
										type: "Body3",
										colorName: "contentDeemphasized",
										children: s._(
											/*BTDS*/
											""
										)
									}), c.jsx(r("WDSSwitch.react"), {
										value: w,
										onChange: A,
										"aria-label": s._(
											/*BTDS*/
											""
										)
									})]
								}),
								D != null && c.jsx(r("WDSButton.react"), {
									variant: "borderless",
									label: s._(
										/*BTDS*/
										""
									),
									onPress: re
								}),
								c.jsx(r("WDSButton.react"), {
									variant: "borderless",
									label: P ? s._(
										/*BTDS*/
										""
									) : s._(
										/*BTDS*/
										""
									),
									onPress: function() {
										return N(function(e) {
											return !e;
										});
									}
								})
							]
						})]
					}), P && F != null && c.jsxs("div", {
						className: "x1g0dm76 x1xnnf8n xsag5q8 x1xiyphd xw2csxc x1odjw0f",
						children: [c.jsx(r("WAWebChatThemeGrid.react"), {
							compact: !0,
							currentThemeId: D,
							onSelect: ne,
							themes: z,
							themeMode: O
						}), c.jsx(r("WAWebChatThemeGrid.react"), {
							compact: !0,
							currentThemeId: D,
							onSelect: ne,
							themes: j,
							themeMode: O
						})]
					})]
				}),
				c.jsx(r("WAWebChatThemeModeContext").Provider, {
					value: q,
					children: c.jsxs("div", {
						className: "x1iyjqo2 x78zum5 x6ikm8r x10wlt62",
						children: [c.jsxs("div", {
							className: "x3qk5kr xw2csxc x1odjw0f x1cnzs8 x1xnnf8n xx6bls6 x106a9eq x1lun4ml x18b5jzi xbogo7e",
							children: [c.jsx("div", {
								className: "x1yztbdb x1n2onr6 x1vjfegm",
								children: c.jsx(r("WDSText.react"), {
									type: "Body1Emphasized",
									colorName: "contentDeemphasized",
									children: s._(
										/*BTDS*/
										""
									)
								})
							}), c.jsx("div", {
								className: "x78zum5 x1a02dak x40hh3e xgpatz3",
								children: X.map(function(e) {
									return c.jsx(R, {
										config: e,
										direction: l,
										galleryMsgs: I.gallery,
										chatThemeStyle: B,
										stockWallpaperUrl: V,
										showDoodle: H,
										isDarkMode: n
									}, e.id);
								})
							})]
						}), c.jsxs("div", babelHelpers.extends({}, e.props(h.convPanel, B), { children: [
							c.jsx(r("WAWebConversationBackground.react"), {
								wallpaper: o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
								showDoodle: H
							}),
							V != null && c.jsxs(c.Fragment, { children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.stockWallpaper, h.stockWallpaperImage(V)))), n && c.jsx("div", { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x7w8cv9 x1ja2u2z" })] }),
							c.jsx("div", {
								className: "x1yztbdb x1n2onr6 x1vjfegm",
								children: c.jsx(r("WDSText.react"), {
									type: "Body1Emphasized",
									colorName: "contentDeemphasized",
									children: s._(
										/*BTDS*/
										""
									)
								})
							}),
							c.jsx(L, { conversation: Q })
						] }))]
					})
				})
			] }))
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k() {
		o("WAWebModalManager").ModalManager.close();
	}
	l.default = E;
}), 226);
