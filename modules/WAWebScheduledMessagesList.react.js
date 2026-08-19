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
	"asyncToGeneratorRuntime",
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
		var t = o("react-compiler-runtime").c(17), r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = [], t[0] = r) : r = t[0];
		var a = g(r), i = a[0], l = a[1], s = f(null), u;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (u = [], t[1] = u) : u = t[1];
		var c = f(u), d;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = function(t) {
			var e = new Set(t.map(L));
			for (var n of t) o("WAWebMsgCollection").MsgCollection.add(n.msg);
			for (var r of c.current) e.has(r.toString()) || o("WAWebMsgCollection").MsgCollection.remove(r);
			c.current = t.map(R);
		}, t[2] = d) : d = t[2];
		var m = d, p;
		t[3] !== e ? (p = function() {
			s.current == null || s.current();
			var t = !0;
			s.current = function() {
				t = !1;
			}, n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var n = yield o("WAWebScheduledMsgStore").getScheduledMsgDataForChat(e);
				if (t) {
					var r = n.map(S);
					m(r), l(r);
				}
			})();
		}, t[3] = e, t[4] = p) : p = t[4];
		var h = p, y, C;
		t[5] !== h ? (y = function() {
			return h(), (function() {
				s.current == null || s.current();
			});
		}, C = [h], t[5] = h, t[6] = y, t[7] = C) : (y = t[6], C = t[7]), _(y, C);
		var b;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (b = function(t) {
			l(function(e) {
				return e.filter(function(e) {
					return e.msgId !== t;
				});
			});
		}, t[8] = b) : b = t[8];
		var v = b;
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scheduled_msg_revealed_from_bridge", v);
		var E;
		t[9] !== e || t[10] !== h ? (E = function(n) {
			n === e && h();
		}, t[9] = e, t[10] = h, t[11] = E) : E = t[11];
		var k = E;
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scheduled_msg_changed_from_bridge", k);
		var I, T;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (I = function() {
			return function() {
				for (var e of c.current) o("WAWebMsgCollection").MsgCollection.remove(e);
				c.current = [];
			};
		}, T = [], t[12] = I, t[13] = T) : (I = t[12], T = t[13]), _(I, T);
		var D;
		return t[14] !== h || t[15] !== i ? (D = {
			messages: i,
			refresh: h
		}, t[14] = h, t[15] = i, t[16] = D) : D = t[16], D;
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
		var a = o("react-compiler-runtime").c(48), i = t.chatId, l = t.onBack, u = t.onDeleteMessage, d = v(i), m = d.messages, _ = d.refresh, f = new Date(), h = g(O), C = h[0], b = h[1], S = F, R;
		a[0] !== u || a[1] !== _ ? (R = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				try {
					yield u(e.msgId), b(function(t) {
						return [].concat(t, [e]);
					});
				} catch (e) {
					_();
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), a[0] = u, a[1] = _, a[2] = R) : R = a[2];
		var L = R, k;
		a[3] !== L ? (k = function(t) {
			if (!r("WAWebNetworkStatus").online) {
				x();
				return;
			}
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
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
				e && (yield L(t));
			})();
		}, a[3] = L, a[4] = k) : k = a[4];
		var I = k, T;
		a[5] !== i || a[6] !== _ ? (T = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				try {
					yield o("WAWebRetryScheduledMsgAction").retryScheduledMsg(i, e.msgId);
				} catch (e) {
					_();
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), a[5] = i, a[6] = _, a[7] = T) : T = a[7];
		var M = T, B;
		a[8] !== i || a[9] !== _ ? (B = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				try {
					yield o("WAWebSendScheduledMsgNowAction").sendScheduledMsgNow(i, e.msgId);
				} catch (e) {
					_();
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), a[8] = i, a[9] = _, a[10] = B) : B = a[10];
		var W = B, q;
		a[11] !== i || a[12] !== M || a[13] !== W || a[14] !== L ? (q = function(t) {
			var e = t.scheduledTimestampS * 1e3 > Date.now(), n = o("WAWebChatCollection").ChatCollection.get(i), a = n != null && $(n), l = e ? s._(
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
				M(t);
			}) : a ? (u = s._(
				/*BTDS*/
				""
			), m = function() {
				W(t);
			}) : (u = s._(
				/*BTDS*/
				""
			), d = !0, m = function() {
				if (!r("WAWebNetworkStatus").online) {
					x();
					return;
				}
				L(t);
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
		}, a[11] = i, a[12] = M, a[13] = W, a[14] = L, a[15] = q) : q = a[15];
		var U = q, V = N(i), H = E(i), G = H.showDoodle, z = H.wallpaper, j = z != null && z !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER ? z : o("WDSVars.stylex").WDSVars["--WDS-systems-chat-background-wallpaper"], K;
		a[16] === Symbol.for("react.memo_cache_sentinel") ? (K = s._(
			/*BTDS*/
			""
		), a[16] = K) : K = a[16];
		var Q = K, X = p(r("WAWebAdaptiveLayoutContext.react")), Y = X.isNarrow, J = new Set(C.map(A)), Z = [].concat(m.filter(function(e) {
			return !J.has(e.msgId);
		}), C).sort(w), ee = D({
			items: Z,
			now: f,
			onCopy: S,
			onDelete: I,
			onFailedClick: U,
			tombstonedIds: J
		}), te;
		a[17] === Symbol.for("react.memo_cache_sentinel") ? (te = { className: "x78zum5 xdt5ytf x5yr21d x6ikm8r x10wlt62" }, a[17] = te) : te = a[17];
		var ne;
		a[18] !== Y ? (ne = {
			0: {},
			1: { className: "x1vb5itz x1t7ytsu xpilrb4" }
		}[!Y << 0], a[18] = Y, a[19] = ne) : ne = a[19];
		var re;
		a[20] !== l || a[21] !== Q ? (re = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: Q,
			onBack: l,
			type: "small",
			focusBackOrCancel: !0
		}), a[20] = l, a[21] = Q, a[22] = re) : re = a[22];
		var oe;
		a[23] !== ne || a[24] !== re ? (oe = c.jsx("div", babelHelpers.extends({}, ne, { children: re })), a[23] = ne, a[24] = re, a[25] = oe) : oe = a[25];
		var ae;
		a[26] !== Y ? (ae = {
			0: { className: "x1n2onr6 x78zum5 xdt5ytf x1iyjqo2 x6ikm8r x10wlt62" },
			1: { className: "x1n2onr6 x78zum5 xdt5ytf x1iyjqo2 x6ikm8r x10wlt62 x1vb5itz x1t7ytsu xpilrb4" }
		}[!Y << 0], a[26] = Y, a[27] = ae) : ae = a[27];
		var ie;
		a[28] !== Z.length || a[29] !== G || a[30] !== z || a[31] !== j ? (ie = Z.length > 0 ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(y.wallpaperLayer(j)), {
			"data-testid": "scheduled_messages_wallpaper_layer",
			children: c.jsx(r("WAWebConversationBackground.react"), {
				showDoodle: G,
				wallpaper: z != null ? z : o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER
			})
		})) : null, a[28] = Z.length, a[29] = G, a[30] = z, a[31] = j, a[32] = ie) : ie = a[32];
		var le;
		a[33] !== V ? (le = V != null ? c.jsx("div", {
			className: "x16ovd2e x12xbjc7 xdx6fka xvtqlqk",
			children: c.jsx(P, { warning: V })
		}) : null, a[33] = V, a[34] = le) : le = a[34];
		var se;
		a[35] !== Z.length || a[36] !== ee ? (se = Z.length === 0 ? c.jsx("div", {
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
			children: ee
		}), a[35] = Z.length, a[36] = ee, a[37] = se) : se = a[37];
		var ue;
		a[38] !== le || a[39] !== se ? (ue = c.jsxs(r("WAWebDrawerBody.react"), { children: [le, se] }), a[38] = le, a[39] = se, a[40] = ue) : ue = a[40];
		var ce;
		a[41] !== ae || a[42] !== ie || a[43] !== ue ? (ce = c.jsxs("div", babelHelpers.extends({}, ae, { children: [ie, ue] })), a[41] = ae, a[42] = ie, a[43] = ue, a[44] = ce) : ce = a[44];
		var de;
		return a[45] !== oe || a[46] !== ce ? (de = c.jsx(r("WAWebDrawer.react"), { children: c.jsxs("div", babelHelpers.extends({}, te, { children: [oe, ce] })) }), a[45] = oe, a[46] = ce, a[47] = de) : de = a[47], de;
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
