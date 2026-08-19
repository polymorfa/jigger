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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(17), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = [], t[0] = n) : n = t[0];
		var r = g(n), a = r[0], i = r[1], l = f(null), s;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (s = [], t[1] = s) : s = t[1];
		var u = f(s), c;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = function(t) {
			var e = new Set(t.map(L));
			for (var n of t) o("WAWebMsgCollection").MsgCollection.add(n.msg);
			for (var r of u.current) e.has(r.toString()) || o("WAWebMsgCollection").MsgCollection.remove(r);
			u.current = t.map(R);
		}, t[2] = c) : c = t[2];
		var d = c, m;
		t[3] !== e ? (m = function() {
			l.current == null || l.current();
			var t = !0;
			l.current = function() {
				t = !1;
			}, (async function() {
				var n = await o("WAWebScheduledMsgStore").getScheduledMsgDataForChat(e);
				if (t) {
					var r = n.map(S);
					d(r), i(r);
				}
			})();
		}, t[3] = e, t[4] = m) : m = t[4];
		var p = m, h, y;
		t[5] !== p ? (h = function() {
			return p(), (function() {
				l.current == null || l.current();
			});
		}, y = [p], t[5] = p, t[6] = h, t[7] = y) : (h = t[6], y = t[7]), _(h, y);
		var C;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (C = function(t) {
			i(function(e) {
				return e.filter(function(e) {
					return e.msgId !== t;
				});
			});
		}, t[8] = C) : C = t[8];
		var b = C;
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scheduled_msg_revealed_from_bridge", b);
		var v;
		t[9] !== e || t[10] !== p ? (v = function(n) {
			n === e && p();
		}, t[9] = e, t[10] = p, t[11] = v) : v = t[11];
		var E = v;
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scheduled_msg_changed_from_bridge", E);
		var k, I;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (k = function() {
			return function() {
				for (var e of u.current) o("WAWebMsgCollection").MsgCollection.remove(e);
				u.current = [];
			};
		}, I = [], t[12] = k, t[13] = I) : (k = t[12], I = t[13]), _(k, I);
		var T;
		return t[14] !== p || t[15] !== a ? (T = {
			messages: a,
			refresh: p
		}, t[14] = p, t[15] = a, t[16] = T) : T = t[16], T;
	}
	function S(e) {
		return {
			msg: new (o("WAWebMsgModel")).Msg(e.msgData),
			msgId: e.msgId,
			status: e.status,
			scheduledTimestampS: e.scheduledTimestampS
		};
	}
	function R(e) {
		return e.msg.id;
	}
	function L(e) {
		return e.msg.id.toString();
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(15), n;
		t[0] !== e ? (n = o("WAWebChatCollection").ChatCollection.get(e), t[0] = e, t[1] = n) : n = t[1];
		var a = n, i;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = r("WAWebChatPreferenceCollection").get("defaultPreference"), t[2] = i) : i = t[2];
		var l = i, s;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (s = ["wallpaperValue"], t[3] = s) : s = t[3];
		var u = o("useWAWebModelValues").useOptionalModelValues(a, s), c;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = ["wallpaperValue"], t[4] = c) : c = t[4];
		var d = o("useWAWebModelValues").useOptionalModelValues(l, c), m = o("WAWebThemeContext").useIsDarkTheme(), p;
		t[5] !== a || t[6] !== (u == null ? void 0 : u.wallpaperValue) || t[7] !== (d == null ? void 0 : d.wallpaperValue) ? (p = a != null && o("WAWebChatThemeValue").isWallpaperOverride(u == null ? void 0 : u.wallpaperValue) ? u == null ? void 0 : u.wallpaperValue : d == null ? void 0 : d.wallpaperValue, t[5] = a, t[6] = u == null ? void 0 : u.wallpaperValue, t[7] = d == null ? void 0 : d.wallpaperValue, t[8] = p) : p = t[8];
		var _ = p, f = m ? "dark" : "light", g;
		t[9] !== _ || t[10] !== f ? (g = o("WAWebChatThemeValue").wallpaperBackgroundFromValue(_, f), t[9] = _, t[10] = f, t[11] = g) : g = t[11];
		var h = g, y = h.showDoodle, C = h.wallpaper, b;
		return t[12] !== y || t[13] !== C ? (b = {
			showDoodle: y,
			wallpaper: C
		}, t[12] = y, t[13] = C, t[14] = b) : b = t[14], b;
	}
	function k(e) {
		var t = o("react-compiler-runtime").c(40), a = e.item, i = e.onCopy, l = e.onDelete, u = e.onFailedClick, d = f(null), m = a.status === "FAILED", p;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[0] = p) : p = t[0];
		var _;
		t[1] !== a.msg.body || t[2] !== i ? (_ = c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcContentCopy.react"),
			title: p,
			onPress: function() {
				var e;
				return i((e = a.msg.body) != null ? e : "");
			},
			testid: "mi-scheduled-copy"
		}), t[1] = a.msg.body, t[2] = i, t[3] = _) : _ = t[3];
		var g;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (g = c.jsx(r("WDSMenuItem.react"), { type: "separator" }), t[4] = g) : g = t[4];
		var h;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[5] = h) : h = t[5];
		var y;
		t[6] !== a || t[7] !== l ? (y = c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcDelete.react"),
			title: h,
			onPress: function() {
				return l(a);
			},
			destructive: !0,
			testid: "mi-scheduled-delete"
		}), t[6] = a, t[7] = l, t[8] = y) : y = t[8];
		var C;
		t[9] !== a.msgId || t[10] !== a.status ? (C = n("cr:40197") != null ? n("cr:40197").getScheduledMsgDevMenuItems(a.msgId, a.status) : null, t[9] = a.msgId, t[10] = a.status, t[11] = C) : C = t[11];
		var b;
		t[12] !== _ || t[13] !== y || t[14] !== C ? (b = c.jsxs(r("WDSMenu.react"), { children: [
			_,
			g,
			y,
			C
		] }), t[12] = _, t[13] = y, t[14] = C, t[15] = b) : b = t[15];
		var v = b, S;
		t[16] !== v ? (S = {
			targetRef: d,
			menu: v
		}, t[16] = v, t[17] = S) : S = t[17];
		var R = r("useWDSMenu")(S), L = R.menuPortal, E = R.openMenu, k;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (k = { className: "x1n2onr6 x78zum5 x13a6bvl x6s0dn4 xu7uy1i xvtqlqk xcytdqz" }, t[18] = k) : k = t[18];
		var I;
		t[19] !== m || t[20] !== a || t[21] !== u ? (I = m ? c.jsx("button", {
			type: "button",
			className: "x78zum5 x6s0dn4 xl56j7k xamitd3 xvy4d1p xxk0z11 xnei2rj xqf2s3x xexx8yu xyri2b x18d9i69 x1c1uobl x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1ypdohk xk0ssx3 x17t9dm2",
			onClick: function() {
				return u(a);
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
		}) : null, t[19] = m, t[20] = a, t[21] = u, t[22] = I) : I = t[22];
		var T;
		t[23] !== m ? (T = {
			0: { className: "x-default-marker x1n2onr6 xggofmx" },
			1: { className: "x-default-marker x1n2onr6 xggofmx x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x113kvv2 xce17vl x61tcke x1kfnm9f xyi3aci xwf5gio x1p453bz x1suzm8a" }
		}[!!m << 0], t[23] = m, t[24] = T) : T = t[24];
		var D;
		t[25] !== a.msg ? (D = c.jsx(r("WAWebMessageWrapper.react"), {
			msg: a.msg,
			displayType: o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS,
			position: o("WAWebMessagePosition").MsgPosition.SINGLE,
			tailOverride: "right",
			showProfilePicture: !1,
			errorBoundaryName: "scheduled-msg"
		}), t[25] = a.msg, t[26] = D) : D = t[26];
		var x;
		t[27] === Symbol.for("react.memo_cache_sentinel") ? (x = { className: "x10l6tqk x1jzctok xceh6e4 x1oy9qf3 x10h3iyq x9fpu7x x6ikm8r x10wlt62 xexx8yu xyri2b x18d9i69 x1c1uobl x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1ypdohk x1595w2n xg01cxk x5b7970 x8w4yw4 x19991ni xx6bhzk xwji4o3" }, t[27] = x) : x = t[27];
		var $;
		t[28] === Symbol.for("react.memo_cache_sentinel") ? ($ = s._(
			/*BTDS*/
			""
		), t[28] = $) : $ = t[28];
		var P;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (P = c.jsx("div", {
			className: "x10l6tqk xtijo5x xs7f9wi x1xp8n7a xmix8c7 x1djpfga x1im30kd x1bvqhpb",
			children: c.jsx(r("WDSIconIcExpandMore.react"), {})
		}), t[29] = P) : P = t[29];
		var N;
		t[30] !== E ? (N = c.jsx("button", babelHelpers.extends({
			ref: d,
			type: "button"
		}, x, {
			onClick: E,
			"aria-label": $,
			"aria-haspopup": "menu",
			"data-testid": "scheduled_message_bubble_options_button",
			children: P
		})), t[30] = E, t[31] = N) : N = t[31];
		var M;
		t[32] !== L || t[33] !== T || t[34] !== D || t[35] !== N ? (M = c.jsxs("div", babelHelpers.extends({}, T, { children: [
			D,
			N,
			L
		] })), t[32] = L, t[33] = T, t[34] = D, t[35] = N, t[36] = M) : M = t[36];
		var w;
		return t[37] !== I || t[38] !== M ? (w = c.jsxs("div", babelHelpers.extends({}, k, { children: [I, M] })), t[37] = I, t[38] = M, t[39] = w) : w = t[39], w;
	}
	function I(e) {
		var t = o("react-compiler-runtime").c(11), n = e.now, a = e.scheduledTimestampS, i, l, u, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x78zum5 x13a6bvl xu7uy1i xvtqlqk x4tpdpg" }, l = { className: "x1n2onr6 xggofmx x1g5lz36 xyi3aci xwf5gio x1p453bz x1suzm8a x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1b9z3ur" }, u = { className: "x78zum5 x6s0dn4 x1trrmfo" }, d = c.jsx("span", {
			className: "x3nfvp2 x1xp8n7a xmix8c7 xhslqc4",
			children: c.jsx(o("WAWebRecalledIcon.react").RecalledIcon, {})
		}), t[0] = i, t[1] = l, t[2] = u, t[3] = d) : (i = t[0], l = t[1], u = t[2], d = t[3]);
		var m, p;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = c.jsxs("div", babelHelpers.extends({}, u, { children: [d, c.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDeemphasized",
			xstyle: y.tombstoneText,
			children: s._(
				/*BTDS*/
				""
			)
		})] })), p = { className: "x78zum5 x6s0dn4 x13a6bvl xfl633f" }, t[4] = m, t[5] = p) : (m = t[4], p = t[5]);
		var _;
		t[6] !== n || t[7] !== a ? (_ = C(a, n), t[6] = n, t[7] = a, t[8] = _) : _ = t[8];
		var f;
		return t[9] !== _ ? (f = c.jsx("div", babelHelpers.extends({}, i, { children: c.jsxs("div", babelHelpers.extends({}, l, { children: [m, c.jsx("div", babelHelpers.extends({}, p, { children: c.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: _
		}) }))] })) })), t[9] = _, t[10] = f) : f = t[10], f;
	}
	function T(e) {
		var t = o("react-compiler-runtime").c(5), n = e.now, a = e.timestampS, i;
		t[0] !== n || t[1] !== a ? (i = b(a, n), t[0] = n, t[1] = a, t[2] = i) : i = t[2];
		var l;
		return t[3] !== i ? (l = c.jsx(r("WAWebWrapperSystemBubble.react"), { children: c.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			dir: "auto",
			children: i
		}) }), t[3] = i, t[4] = l) : l = t[4], l;
	}
	function D(e) {
		var t = e.items, n = e.now, r = e.onCopy, o = e.onDelete, a = e.onFailedClick, i = e.tombstonedIds, l = [], s = null;
		for (var u of t) {
			var d = new Date(u.scheduledTimestampS * 1e3).toDateString();
			d !== s && (s = d, l.push(c.jsx(T, {
				timestampS: u.scheduledTimestampS,
				now: n
			}, "divider-" + d))), l.push(i.has(u.msgId) ? c.jsx(I, {
				scheduledTimestampS: u.scheduledTimestampS,
				now: n
			}, u.msgId) : c.jsx(k, {
				item: u,
				onCopy: r,
				onDelete: o,
				onFailedClick: a
			}, u.msgId));
		}
		return l;
	}
	function x() {
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
	function $(e) {
		return o("WAWebChatGroupUtils").canSendToGroup(e);
	}
	function P(e) {
		var t = o("react-compiler-runtime").c(4), n = e.warning, a;
		t[0] !== n ? (a = n === "NOT_IN_GROUP" ? s._(
			/*BTDS*/
			""
		) : n === "GROUP_SUSPENDED" ? s._(
			/*BTDS*/
			""
		) : n === "ADMIN_ONLY" ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + n);
		})(), t[0] = n, t[1] = a) : a = t[1];
		var i = a, l;
		return t[2] !== i ? (l = c.jsx(r("WDSBanner.react"), {
			type: "warning",
			body: i,
			testid: "scheduled_message_deliverability_banner"
		}), t[2] = i, t[3] = l) : l = t[3], l;
	}
	function N(e) {
		var t = o("react-compiler-runtime").c(13), n;
		t[0] !== e ? (n = o("WAWebChatCollection").ChatCollection.get(e), t[0] = e, t[1] = n) : n = t[1];
		var a = n, i = a == null ? void 0 : a.groupMetadata, l = i == null ? void 0 : i.participants, s;
		t[2] !== a || t[3] !== i || t[4] !== l ? (s = [
			a,
			i,
			l
		], t[2] = a, t[3] = i, t[4] = l, t[5] = s) : s = t[5];
		var u;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (u = [
			"add",
			"change:announce",
			"change:isAdmin",
			"change:stale",
			"change:suspended",
			"change:terminated",
			"remove",
			"reset"
		], t[6] = u) : u = t[6];
		var c;
		t[7] !== a ? (c = function() {
			return a != null ? o("WAWebScheduledMsgDeliverability").getScheduledMsgDeliverabilityWarning(a) : null;
		}, t[7] = a, t[8] = c) : c = t[8];
		var d;
		return t[9] !== a || t[10] !== i || t[11] !== l ? (d = [
			a,
			i,
			l
		], t[9] = a, t[10] = i, t[11] = l, t[12] = d) : d = t[12], r("useWAWebEventTargetValue")(s, u, c, d);
	}
	function M(t) {
		var n = o("react-compiler-runtime").c(48), a = t.chatId, i = t.onBack, l = t.onDeleteMessage, u = v(a), d = u.messages, m = u.refresh, _ = new Date(), f = g(O), h = f[0], C = f[1], b = F, S;
		n[0] !== l || n[1] !== m ? (S = async function(t) {
			try {
				await l(t.msgId), C(function(e) {
					return [].concat(e, [t]);
				});
			} catch (e) {
				m();
			}
		}, n[0] = l, n[1] = m, n[2] = S) : S = n[2];
		var R = S, L;
		n[3] !== R ? (L = function(t) {
			if (!r("WAWebNetworkStatus").online) {
				x();
				return;
			}
			(async function() {
				var e = await o("WAWebConfirmPopup.react").waitForConfirmPopup({
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
				e && await R(t);
			})();
		}, n[3] = R, n[4] = L) : L = n[4];
		var k = L, I;
		n[5] !== a || n[6] !== m ? (I = async function(t) {
			try {
				await o("WAWebRetryScheduledMsgAction").retryScheduledMsg(a, t.msgId);
			} catch (e) {
				m();
			}
		}, n[5] = a, n[6] = m, n[7] = I) : I = n[7];
		var T = I, M;
		n[8] !== a || n[9] !== m ? (M = async function(t) {
			try {
				await o("WAWebSendScheduledMsgNowAction").sendScheduledMsgNow(a, t.msgId);
			} catch (e) {
				m();
			}
		}, n[8] = a, n[9] = m, n[10] = M) : M = n[10];
		var B = M, W;
		n[11] !== a || n[12] !== T || n[13] !== B || n[14] !== R ? (W = function(t) {
			var e = t.scheduledTimestampS * 1e3 > Date.now(), n = o("WAWebChatCollection").ChatCollection.get(a), i = n != null && $(n), l = e ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), u, d = !1, m;
			e ? (u = s._(
				/*BTDS*/
				""
			), m = function() {
				T(t);
			}) : i ? (u = s._(
				/*BTDS*/
				""
			), m = function() {
				B(t);
			}) : (u = s._(
				/*BTDS*/
				""
			), d = !0, m = function() {
				if (!r("WAWebNetworkStatus").online) {
					x();
					return;
				}
				R(t);
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
		}, n[11] = a, n[12] = T, n[13] = B, n[14] = R, n[15] = W) : W = n[15];
		var q = W, U = N(a), V = E(a), H = V.showDoodle, G = V.wallpaper, z = G != null && G !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER ? G : o("WDSVars.stylex").WDSVars["--WDS-systems-chat-background-wallpaper"], j;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (j = s._(
			/*BTDS*/
			""
		), n[16] = j) : j = n[16];
		var K = j, Q = p(r("WAWebAdaptiveLayoutContext.react")), X = Q.isNarrow, Y = new Set(h.map(A)), J = [].concat(d.filter(function(e) {
			return !Y.has(e.msgId);
		}), h).sort(w), Z = D({
			items: J,
			now: _,
			onCopy: b,
			onDelete: k,
			onFailedClick: q,
			tombstonedIds: Y
		}), ee;
		n[17] === Symbol.for("react.memo_cache_sentinel") ? (ee = { className: "x78zum5 xdt5ytf x5yr21d x6ikm8r x10wlt62" }, n[17] = ee) : ee = n[17];
		var te;
		n[18] !== X ? (te = {
			0: {},
			1: { className: "x1vb5itz x1t7ytsu xpilrb4" }
		}[!X << 0], n[18] = X, n[19] = te) : te = n[19];
		var ne;
		n[20] !== i || n[21] !== K ? (ne = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: K,
			onBack: i,
			type: "small",
			focusBackOrCancel: !0
		}), n[20] = i, n[21] = K, n[22] = ne) : ne = n[22];
		var re;
		n[23] !== te || n[24] !== ne ? (re = c.jsx("div", babelHelpers.extends({}, te, { children: ne })), n[23] = te, n[24] = ne, n[25] = re) : re = n[25];
		var oe;
		n[26] !== X ? (oe = {
			0: { className: "x1n2onr6 x78zum5 xdt5ytf x1iyjqo2 x6ikm8r x10wlt62" },
			1: { className: "x1n2onr6 x78zum5 xdt5ytf x1iyjqo2 x6ikm8r x10wlt62 x1vb5itz x1t7ytsu xpilrb4" }
		}[!X << 0], n[26] = X, n[27] = oe) : oe = n[27];
		var ae;
		n[28] !== J.length || n[29] !== H || n[30] !== G || n[31] !== z ? (ae = J.length > 0 ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(y.wallpaperLayer(z)), {
			"data-testid": "scheduled_messages_wallpaper_layer",
			children: c.jsx(r("WAWebConversationBackground.react"), {
				showDoodle: H,
				wallpaper: G != null ? G : o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER
			})
		})) : null, n[28] = J.length, n[29] = H, n[30] = G, n[31] = z, n[32] = ae) : ae = n[32];
		var ie;
		n[33] !== U ? (ie = U != null ? c.jsx("div", {
			className: "x16ovd2e x12xbjc7 xdx6fka xvtqlqk",
			children: c.jsx(P, { warning: U })
		}) : null, n[33] = U, n[34] = ie) : ie = n[34];
		var le;
		n[35] !== J.length || n[36] !== Z ? (le = J.length === 0 ? c.jsx("div", {
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
			children: Z
		}), n[35] = J.length, n[36] = Z, n[37] = le) : le = n[37];
		var se;
		n[38] !== ie || n[39] !== le ? (se = c.jsxs(r("WAWebDrawerBody.react"), { children: [ie, le] }), n[38] = ie, n[39] = le, n[40] = se) : se = n[40];
		var ue;
		n[41] !== oe || n[42] !== ae || n[43] !== se ? (ue = c.jsxs("div", babelHelpers.extends({}, oe, { children: [ae, se] })), n[41] = oe, n[42] = ae, n[43] = se, n[44] = ue) : ue = n[44];
		var ce;
		return n[45] !== re || n[46] !== ue ? (ce = c.jsx(r("WAWebDrawer.react"), { children: c.jsxs("div", babelHelpers.extends({}, ee, { children: [re, ue] })) }), n[45] = re, n[46] = ue, n[47] = ce) : ce = n[47], ce;
	}
	function w(e, t) {
		return e.scheduledTimestampS - t.scheduledTimestampS;
	}
	function A(e) {
		return e.msgId;
	}
	function F(e) {
		o("WAWebCopyToClipboard").copyTextToClipboard(e);
	}
	function O() {
		return [];
	}
	l.default = M;
}), 226);
