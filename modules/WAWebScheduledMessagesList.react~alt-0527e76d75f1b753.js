__d("WAWebScheduledMessagesList.react", [
	"fbt",
	"WAWebAdaptiveLayoutContext.react",
	"WAWebChatCollection",
	"WAWebChatGroupUtils",
	"WAWebChatPreferenceCollection",
	"WAWebChatThemeValue",
	"WAWebClock",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebConversationBackground.react",
	"WAWebCopyToClipboard",
	"WAWebDisplayType",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebL10N",
	"WAWebMessagePosition",
	"WAWebMessageWrapper.react",
	"WAWebModalManager",
	"WAWebMsgCollection",
	"WAWebMsgModel",
	"WAWebNetworkStatus",
	"WAWebRecalledIcon.react",
	"WAWebRetryScheduledMsgAction",
	"WAWebScheduledMsgDeliverability",
	"WAWebScheduledMsgStore",
	"WAWebSendScheduledMsgNowAction",
	"WAWebThemeContext",
	"WAWebWallpaper",
	"WAWebWrapperSystemBubble.react",
	"WDSBanner.react",
	"WDSIconIcContentCopy.react",
	"WDSIconIcDelete.react",
	"WDSIconIcError.react",
	"WDSIconIcExpandMore.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSText.react",
	"WDSVars.stylex",
	"cr:40197",
	"react",
	"stylex",
	"useWAWebEventTargetValue",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useEffect, f = d.useRef, g = d.useState, h = {
		position: "x10l6tqk",
		top: "x13vifvy",
		insetInlineEnd: "xtijo5x",
		bottom: "x1ey2m1c",
		insetInlineStart: "x1o0tod",
		zIndex: "x1ja2u2z",
		$$css: !0
	}, y = {
		wallpaperLayer: function(t) {
			return [
				h,
				{
					backgroundColor: t != null ? "xl8spv7" : t,
					$$css: !0
				},
				{ "--x-backgroundColor": t != null ? t : void 0 }
			];
		},
		tombstoneText: {
			fontStyle: "x1k4tb9n",
			$$css: !0
		}
	};
	function C(e, t) {
		var n = new Date(e * 1e3), a = new Date(t);
		a.setDate(a.getDate() + 1);
		var i = o("WAWebClock").Clock.timestampStr(e);
		if (n.toDateString() === t.toDateString()) return String(s._(
			/*BTDS*/
			"",
			[s._param("time", i)]
		));
		if (n.toDateString() === a.toDateString()) return String(s._(
			/*BTDS*/
			"",
			[s._param("time", i)]
		));
		var l = n.toLocaleDateString(r("WAWebL10N").getFullLocale(), {
			weekday: "short",
			month: "short",
			day: "numeric"
		});
		return String(s._(
			/*BTDS*/
			"",
			[s._param("date", l), s._param("time", i)]
		));
	}
	function b(e, t) {
		var n = new Date(e * 1e3), o = new Date(t);
		if (o.setDate(o.getDate() + 1), n.toDateString() === t.toDateString()) return String(s._(
			/*BTDS*/
			""
		));
		if (n.toDateString() === o.toDateString()) return String(s._(
			/*BTDS*/
			""
		));
		var a = n.toLocaleDateString(r("WAWebL10N").getFullLocale(), {
			weekday: "short",
			month: "short",
			day: "numeric"
		});
		return String(s._(
			/*BTDS*/
			"",
			[s._param("date", a)]
		));
	}
	function v(e) {
		var t = g([]), n = t[0], r = t[1], a = f(null), i = f([]), l = m(function(e) {
			var t = new Set(e.map(function(e) {
				return e.msg.id.toString();
			}));
			for (var n of e) o("WAWebMsgCollection").MsgCollection.add(n.msg);
			for (var r of i.current) t.has(r.toString()) || o("WAWebMsgCollection").MsgCollection.remove(r);
			i.current = e.map(function(e) {
				return e.msg.id;
			});
		}, []), s = m(function() {
			a.current == null || a.current();
			var t = !0;
			a.current = function() {
				t = !1;
			}, (async function() {
				var n = await o("WAWebScheduledMsgStore").getScheduledMsgDataForChat(e);
				if (t) {
					var a = n.map(function(e) {
						return {
							msg: new (o("WAWebMsgModel")).Msg(e.msgData),
							msgId: e.msgId,
							status: e.status,
							scheduledTimestampS: e.scheduledTimestampS
						};
					});
					l(a), r(a);
				}
			})();
		}, [e, l]);
		_(function() {
			return s(), function() {
				a.current == null || a.current();
			};
		}, [s]);
		var u = m(function(e) {
			r(function(t) {
				return t.filter(function(t) {
					return t.msgId !== e;
				});
			});
		}, []);
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scheduled_msg_revealed_from_bridge", u);
		var c = m(function(t) {
			t === e && s();
		}, [e, s]);
		return o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scheduled_msg_changed_from_bridge", c), _(function() {
			return function() {
				for (var e of i.current) o("WAWebMsgCollection").MsgCollection.remove(e);
				i.current = [];
			};
		}, []), {
			messages: n,
			refresh: s
		};
	}
	function S(e) {
		var t = o("WAWebChatCollection").ChatCollection.get(e), n = r("WAWebChatPreferenceCollection").get("defaultPreference"), a = o("useWAWebModelValues").useOptionalModelValues(t, ["wallpaperValue"]), i = o("useWAWebModelValues").useOptionalModelValues(n, ["wallpaperValue"]), l = o("WAWebThemeContext").useIsDarkTheme(), s = t != null && o("WAWebChatThemeValue").isWallpaperOverride(a == null ? void 0 : a.wallpaperValue) ? a == null ? void 0 : a.wallpaperValue : i == null ? void 0 : i.wallpaperValue, u = o("WAWebChatThemeValue").wallpaperBackgroundFromValue(s, l ? "dark" : "light"), c = u.showDoodle, d = u.wallpaper;
		return {
			showDoodle: c,
			wallpaper: d
		};
	}
	function R(e) {
		var t = e.item, a = e.onCopy, i = e.onDelete, l = e.onFailedClick, u = f(null), d = t.status === "FAILED", m = c.jsxs(r("WDSMenu.react"), { children: [
			c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcContentCopy.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					var e;
					return a((e = t.msg.body) != null ? e : "");
				},
				testid: "mi-scheduled-copy"
			}),
			c.jsx(r("WDSMenuItem.react"), { type: "separator" }),
			c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcDelete.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					return i(t);
				},
				destructive: !0,
				testid: "mi-scheduled-delete"
			}),
			n("cr:40197") != null ? n("cr:40197").getScheduledMsgDevMenuItems(t.msgId, t.status) : null
		] }), p = r("useWDSMenu")({
			targetRef: u,
			menu: m
		}), _ = p.menuPortal, g = p.openMenu;
		return c.jsxs("div", {
			className: "x1n2onr6 x78zum5 x13a6bvl x6s0dn4 xu7uy1i xvtqlqk xcytdqz",
			children: [d ? c.jsx("button", {
				type: "button",
				className: "x78zum5 x6s0dn4 xl56j7k xamitd3 xvy4d1p xxk0z11 xnei2rj xqf2s3x xexx8yu xyri2b x18d9i69 x1c1uobl x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1ypdohk xk0ssx3 x17t9dm2",
				onClick: function() {
					return l(t);
				},
				"aria-label": s._(
					/*BTDS*/
					""
				),
				"data-testid": "scheduled_message_failure_icon",
				children: c.jsx(r("WDSIconIcError.react"), {
					colorName: "persistentAlwaysWhite",
					height: 16,
					width: 16
				})
			}) : null, c.jsxs("div", babelHelpers.extends({}, {
				0: { className: "x-default-marker x1n2onr6 xggofmx" },
				1: { className: "x-default-marker x1n2onr6 xggofmx x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x113kvv2 xce17vl x61tcke x1kfnm9f xyi3aci xwf5gio x1p453bz x1suzm8a" }
			}[!!d << 0], { children: [
				c.jsx(r("WAWebMessageWrapper.react"), {
					msg: t.msg,
					displayType: o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS,
					position: o("WAWebMessagePosition").MsgPosition.SINGLE,
					tailOverride: "right",
					showProfilePicture: !1,
					errorBoundaryName: "scheduled-msg"
				}),
				c.jsx("button", {
					ref: u,
					type: "button",
					className: "x10l6tqk x1jzctok xceh6e4 x1oy9qf3 x10h3iyq x9fpu7x x6ikm8r x10wlt62 xexx8yu xyri2b x18d9i69 x1c1uobl x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1ypdohk x1595w2n xg01cxk x5b7970 x8w4yw4 x19991ni xx6bhzk xwji4o3",
					onClick: g,
					"aria-label": s._(
						/*BTDS*/
						""
					),
					"aria-haspopup": "menu",
					"data-testid": "scheduled_message_bubble_options_button",
					children: c.jsx("div", {
						className: "x10l6tqk xtijo5x xs7f9wi x1xp8n7a xmix8c7 x1djpfga x1im30kd x1bvqhpb",
						children: c.jsx(r("WDSIconIcExpandMore.react"), {})
					})
				}),
				_
			] }))]
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.now, n = e.scheduledTimestampS;
		return c.jsx("div", {
			className: "x78zum5 x13a6bvl xu7uy1i xvtqlqk x4tpdpg",
			children: c.jsxs("div", {
				className: "x1n2onr6 xggofmx x1g5lz36 xyi3aci xwf5gio x1p453bz x1suzm8a x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1b9z3ur",
				children: [c.jsxs("div", {
					className: "x78zum5 x6s0dn4 x1trrmfo",
					children: [c.jsx("span", {
						className: "x3nfvp2 x1xp8n7a xmix8c7 xhslqc4",
						children: c.jsx(o("WAWebRecalledIcon.react").RecalledIcon, {})
					}), c.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDeemphasized",
						xstyle: y.tombstoneText,
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}), c.jsx("div", {
					className: "x78zum5 x6s0dn4 x13a6bvl xfl633f",
					children: c.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						children: C(n, t)
					})
				})]
			})
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.now, n = e.timestampS;
		return c.jsx(r("WAWebWrapperSystemBubble.react"), { children: c.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			dir: "auto",
			children: b(n, t)
		}) });
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.items, n = e.now, r = e.onCopy, o = e.onDelete, a = e.onFailedClick, i = e.tombstonedIds, l = [], s = null;
		for (var u of t) {
			var d = new Date(u.scheduledTimestampS * 1e3).toDateString();
			d !== s && (s = d, l.push(c.jsx(E, {
				timestampS: u.scheduledTimestampS,
				now: n
			}, "divider-" + d))), l.push(i.has(u.msgId) ? c.jsx(L, {
				scheduledTimestampS: u.scheduledTimestampS,
				now: n
			}, u.msgId) : c.jsx(R, {
				item: u,
				onCopy: r,
				onDelete: o,
				onFailedClick: a
			}, u.msgId));
		}
		return l;
	}
	function I() {
		o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			title: s._(
				/*BTDS*/
				""
			),
			testid: "scheduled_message_offline_unschedule_dialog",
			children: c.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}));
	}
	function T(e) {
		return o("WAWebChatGroupUtils").canSendToGroup(e);
	}
	function D(e) {
		var t = e.warning, n = t === "NOT_IN_GROUP" ? s._(
			/*BTDS*/
			""
		) : t === "GROUP_SUSPENDED" ? s._(
			/*BTDS*/
			""
		) : t === "ADMIN_ONLY" ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})();
		return c.jsx(r("WDSBanner.react"), {
			type: "warning",
			body: n,
			testid: "scheduled_message_deliverability_banner"
		});
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e) {
		var t = o("WAWebChatCollection").ChatCollection.get(e), n = t == null ? void 0 : t.groupMetadata, a = n == null ? void 0 : n.participants;
		return r("useWAWebEventTargetValue")([
			t,
			n,
			a
		], [
			"add",
			"change:announce",
			"change:isAdmin",
			"change:stale",
			"change:suspended",
			"change:terminated",
			"remove",
			"reset"
		], function() {
			return t != null ? o("WAWebScheduledMsgDeliverability").getScheduledMsgDeliverabilityWarning(t) : null;
		}, [
			t,
			n,
			a
		]);
	}
	function $(t) {
		var n = t.chatId, a = t.onBack, i = t.onDeleteMessage, l = v(n), u = l.messages, d = l.refresh, _ = new Date(), f = g(function() {
			return [];
		}), h = f[0], C = f[1], b = m(function(e) {
			o("WAWebCopyToClipboard").copyTextToClipboard(e);
		}, []), R = m(async function(e) {
			try {
				await i(e.msgId), C(function(t) {
					return [].concat(t, [e]);
				});
			} catch (e) {
				d();
			}
		}, [i, d]), L = m(function(e) {
			if (!r("WAWebNetworkStatus").online) {
				I();
				return;
			}
			(async function() {
				var t = await o("WAWebConfirmPopup.react").waitForConfirmPopup({
					okText: s._(
						/*BTDS*/
						""
					),
					cancelText: s._(
						/*BTDS*/
						""
					),
					title: s._(
						/*BTDS*/
						""
					),
					children: c.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						children: s._(
							/*BTDS*/
							""
						)
					})
				});
				t && await R(e);
			})();
		}, [R]), E = m(async function(e) {
			try {
				await o("WAWebRetryScheduledMsgAction").retryScheduledMsg(n, e.msgId);
			} catch (e) {
				d();
			}
		}, [n, d]), $ = m(async function(e) {
			try {
				await o("WAWebSendScheduledMsgNowAction").sendScheduledMsgNow(n, e.msgId);
			} catch (e) {
				d();
			}
		}, [n, d]), P = m(function(e) {
			var t = e.scheduledTimestampS * 1e3 > Date.now(), a = o("WAWebChatCollection").ChatCollection.get(n), i = a != null && T(a), l = t ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), u, d = !1, m;
			t ? (u = s._(
				/*BTDS*/
				""
			), m = function() {
				E(e);
			}) : i ? (u = s._(
				/*BTDS*/
				""
			), m = function() {
				$(e);
			}) : (u = s._(
				/*BTDS*/
				""
			), d = !0, m = function() {
				if (!r("WAWebNetworkStatus").online) {
					I();
					return;
				}
				R(e);
			}), o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: l,
				okText: u,
				okButtonType: d ? "negative-destructive" : void 0,
				onOK: function() {
					o("WAWebModalManager").ModalManager.close(), m();
				},
				cancelText: s._(
					/*BTDS*/
					""
				),
				onCancel: o("WAWebModalManager").closeModalManager,
				buttonWidth: "fill",
				buttonsDirection: "vertical",
				testid: "scheduled_message_failure_dialog"
			}));
		}, [
			n,
			E,
			$,
			R
		]), N = x(n), M = S(n), w = M.showDoodle, A = M.wallpaper, F = A != null && A !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER ? A : o("WDSVars.stylex").WDSVars["--WDS-systems-chat-background-wallpaper"], O = s._(
			/*BTDS*/
			""
		), B = p(r("WAWebAdaptiveLayoutContext.react")), W = B.isNarrow, q = new Set(h.map(function(e) {
			return e.msgId;
		})), U = [].concat(u.filter(function(e) {
			return !q.has(e.msgId);
		}), h).sort(function(e, t) {
			return e.scheduledTimestampS - t.scheduledTimestampS;
		}), V = k({
			items: U,
			now: _,
			onCopy: b,
			onDelete: L,
			onFailedClick: P,
			tombstonedIds: q
		});
		return c.jsx(r("WAWebDrawer.react"), { children: c.jsxs("div", {
			className: "x78zum5 xdt5ytf x5yr21d x6ikm8r x10wlt62",
			children: [c.jsx("div", babelHelpers.extends({}, {
				0: {},
				1: { className: "x1vb5itz x1t7ytsu xpilrb4" }
			}[!W << 0], { children: c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: O,
				onBack: a,
				type: "small",
				focusBackOrCancel: !0
			}) })), c.jsxs("div", babelHelpers.extends({}, {
				0: { className: "x1n2onr6 x78zum5 xdt5ytf x1iyjqo2 x6ikm8r x10wlt62" },
				1: { className: "x1n2onr6 x78zum5 xdt5ytf x1iyjqo2 x6ikm8r x10wlt62 x1vb5itz x1t7ytsu xpilrb4" }
			}[!W << 0], { children: [U.length > 0 ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(y.wallpaperLayer(F)), {
				"data-testid": "scheduled_messages_wallpaper_layer",
				children: c.jsx(r("WAWebConversationBackground.react"), {
					showDoodle: w,
					wallpaper: A != null ? A : o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER
				})
			})) : null, c.jsxs(r("WAWebDrawerBody.react"), { children: [N != null ? c.jsx("div", {
				className: "x16ovd2e x12xbjc7 xdx6fka xvtqlqk",
				children: c.jsx(D, { warning: N })
			}) : null, U.length === 0 ? c.jsx("div", {
				className: "x1iyjqo2 x78zum5 xdt5ytf x6s0dn4 xl56j7k xb0esv5 xyo0t3i x1280gxy",
				children: c.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDeemphasized",
					textAlign: "center",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}) : c.jsx("div", {
				className: "x1n2onr6 x16ovd2e x12xbjc7",
				children: V
			})] })] }))]
		}) });
	}
	$.displayName = $.name + " [from " + i.id + "]", l.default = $;
}), 226);
