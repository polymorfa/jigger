__d("WAWebTypingIndicator.react", [
	"WAChatState",
	"WAWebChatParticipantColor",
	"WAWebChatPreferenceCollection",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeValue",
	"WAWebCmd",
	"WAWebFacePile.react",
	"WAWebGroupGatingUtils",
	"WAWebMessageBubbleTypingIndicator.react",
	"WAWebQuotedMessageUserJourneyLogger",
	"WAWebThemeContext",
	"WAWebTypingIndicatorRecording.react",
	"WAWebVelocityTransitionGroup",
	"WAWebWallpaper",
	"WAWebWrapperConstants",
	"WAWebWrapperGetTailIcon",
	"WDSVars.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebDefaultProfileColors",
	"useWAWebGroupColors",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebStableActiveUsers"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useMemo, p = c.useState, _ = 4, f = 40, g = {
		transitionGroup: {
			position: "x10l6tqk",
			overflowY: "x10wlt62",
			bottom: "x1ey2m1c",
			height: "x1vqgdyp",
			$$css: !0
		},
		container: {
			display: "x78zum5",
			position: "x1n2onr6",
			$$css: !0
		},
		groupContainer: {
			paddingInlineStart: "xz7312c",
			$$css: !0
		},
		nonGroupContainer: {
			paddingInlineStart: "x1ogp2j0",
			$$css: !0
		},
		bubble: {
			backgroundColor: "x1ew7x2d",
			display: "x78zum5",
			height: "x10w6t97",
			flexDirection: "xdt5ytf",
			justifyContent: "xl56j7k",
			alignItems: "x1cy8zhl",
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			boxShadow: "x1khkcf",
			position: "x1n2onr6",
			top: "xs7f9wi",
			$$css: !0
		},
		tail: {
			position: "x1n2onr6",
			top: "xs7f9wi",
			marginInlineEnd: "xjn30re",
			color: "x1l1cedg",
			height: "x10w6t97",
			$$css: !0
		},
		borderWidth: {
			borderTopWidth: "x1ktv7sr",
			borderInlineEndWidth: "x142x0oa",
			borderBottomWidth: "xv7zg05",
			borderInlineStartWidth: "x12dgle5",
			$$css: !0
		},
		plusXIndicator: {
			display: "x78zum5",
			height: "x1fgtraw",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "x2vl965",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x7coems",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			rowGap: "x1b8z93w",
			columnGap: "x1amjocr",
			background: "x2ts8ay",
			color: "x14ug900",
			borderStartStartRadius: "x1ekkm8c",
			borderStartEndRadius: "x1143rjc",
			borderEndEndRadius: "xum4auv",
			borderEndStartRadius: "xj21bgg",
			backdropFilter: "x19z9ohp",
			fontSize: "x7yx35o",
			fontWeight: "xo1h6xc",
			marginInlineStart: "x2459kn",
			marginTop: "xfl633f",
			$$css: !0
		},
		wallpaperColor: function(t) {
			return [{
				color: t != null ? "x14rh7hd" : t,
				$$css: !0
			}, { "--x-color": t != null ? t : void 0 }];
		}
	}, h = 28;
	function y(e) {
		return e.type === o("WAChatState").ACTIVE_CHAT_STATE_TYPE.TYPING || e.type === o("WAChatState").ACTIVE_CHAT_STATE_TYPE.RECORDING_AUDIO ? e.type : null;
	}
	function C(e) {
		return e.typingUserIds.length > 0 ? o("WAChatState").ACTIVE_CHAT_STATE_TYPE.TYPING : e.recordingUserIds.length > 0 ? o("WAChatState").ACTIVE_CHAT_STATE_TYPE.RECORDING_AUDIO : null;
	}
	function b(t) {
		var n = o("react-compiler-runtime").c(40), a = t.chat, i;
		n[0] !== a.id ? (i = a.id.isGroup(), n[0] = a.id, n[1] = i) : i = n[1];
		var l = i, s;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (s = ["typingUserIds", "recordingUserIds"], n[2] = s) : s = n[2];
		var c = o("useWAWebModelValues").useModelValues(a.presence, s), m;
		e: {
			if (!l) {
				var f;
				n[3] === Symbol.for("react.memo_cache_sentinel") ? (f = [], n[3] = f) : f = n[3], m = f;
				break e;
			}
			var b = c.typingUserIds, S;
			if (n[4] !== c.recordingUserIds || n[5] !== b) {
				var R = new Set(b.map(v)), L = c.recordingUserIds.filter(function(e) {
					var t = e.toString();
					return R.has(t) ? !1 : (R.add(t), !0);
				});
				S = [].concat(b, L), n[4] = c.recordingUserIds, n[5] = b, n[6] = S;
			} else S = n[6];
			m = S;
		}
		var E = m, k = o("useWAWebStableActiveUsers").useWAWebStableActiveUsers(c.typingUserIds, c.recordingUserIds);
		l && o("WAWebGroupGatingUtils").isGroupTypingIndicatorEnabled() && k != null && (E = k);
		var I;
		n[7] !== a.presence.chatstate || n[8] !== l ? (I = function() {
			return l ? null : y(a.presence.chatstate);
		}, n[7] = a.presence.chatstate, n[8] = l, n[9] = I) : I = n[9];
		var T = p(I), D = T[0], x = T[1], $;
		n[10] !== l || n[11] !== D || n[12] !== c ? ($ = l ? C(c) : D, n[10] = l, n[11] = D, n[12] = c, n[13] = $) : $ = n[13];
		var P = $, N;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (N = o("WAWebWrapperGetTailIcon").getTailIcon(o("WAWebWrapperConstants").MSG_DIRECTION.IN), n[14] = N) : N = n[14];
		var M = N, w = E.length <= 5, A;
		n[15] !== E || n[16] !== w ? (A = w ? E : E.slice(E.length - _, E.length), n[15] = E, n[16] = w, n[17] = A) : A = n[17];
		var F = A, O = E.length - _, B = E.length >= 6, W = o("WAWebThemeContext").useIsDarkTheme(), q;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (q = ["wallpaperValue"], n[18] = q) : q = n[18];
		var U = o("useWAWebModelValues").useModelValues(a, q), V = U.wallpaperValue, H, G;
		n[19] === Symbol.for("react.memo_cache_sentinel") ? (G = r("WAWebChatPreferenceCollection").getDefault(), H = ["wallpaperValue"], n[19] = H, n[20] = G) : (H = n[19], G = n[20]);
		var z = o("useWAWebModelValues").useModelValues(G, H), j = z.wallpaperValue, K;
		n[21] !== V ? (K = o("WAWebChatThemeGatingUtils").isChatThemesEnabled() ? V : null, n[21] = V, n[22] = K) : K = n[22];
		var Q = K, X;
		n[23] !== j || n[24] !== Q ? (X = o("WAWebChatThemeValue").isWallpaperOverride(Q) ? Q : j, n[23] = j, n[24] = Q, n[25] = X) : X = n[25];
		var Y = X, J = Y != null ? o("WAWebChatThemeValue").wallpaperBackgroundFromValue(Y, W ? "dark" : "light").wallpaper : void 0, Z;
		n[26] !== a.presence.chatstate || n[27] !== l ? (Z = function(t, n) {
			l || x(y(a.presence.chatstate));
		}, n[26] = a.presence.chatstate, n[27] = l, n[28] = Z) : Z = n[28], o("useWAWebListener").useListener(a.presence.chatstate, "change:type", Z);
		var ee, te;
		n[29] !== P ? (ee = function() {
			o("WAWebCmd").Cmd.typingIndicatorVisibilityChange(P != null);
		}, te = [P], n[29] = P, n[30] = ee, n[31] = te) : (ee = n[30], te = n[31]), d(ee, te), J === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER && (J = o("WDSVars.stylex").WDSVars["--WDS-systems-chat-background-wallpaper"]);
		var ne = F[F.length - 1], re;
		if (n[32] !== a || n[33] !== l || n[34] !== ne) {
			var oe;
			re = l && ne && !o("useWAWebDefaultProfileColors").isDefaultProfileColorsEnabledForWid(ne) ? o("WAWebChatParticipantColor").getAssignedColor(a, ne, "WAWebTypingIndicator-" + ((oe = o("WAWebQuotedMessageUserJourneyLogger").getChatType(a.id)) != null ? oe : "")) : 0, n[32] = a, n[33] = l, n[34] = ne, n[35] = re;
		} else re = n[35];
		var ae = re, ie = o("useWAWebGroupColors").useGroupsColorRGBValue(ae), le = o("useWAWebDefaultProfileColors").useDefaultProfileColorRGB(l ? ne : null), se = r("WAWebVelocityTransitionGroup"), ue = g, ce = "typing-indicator", de = P != null ? u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.container, l ? g.groupContainer : g.nonGroupContainer, J != null && g.wallpaperColor(J)), { children: [
			F.length > 0 && u.jsx(r("WAWebFacePile.react"), {
				faceSize: h,
				idsOrUrls: F,
				borderWidth: g.borderWidth,
				theme: "typing_indicator",
				chatWid: a.id
			}),
			B && u.jsxs("div", {
				className: "x78zum5 x1fgtraw xexx8yu x2vl965 x18d9i69 x7coems xl56j7k x6s0dn4 x1b8z93w x1amjocr x2ts8ay x14ug900 x1ekkm8c x1143rjc xum4auv xj21bgg x19z9ohp x7yx35o xo1h6xc x2459kn xfl633f",
				children: ["+", O]
			}),
			u.jsx("span", {
				className: "x1n2onr6 xs7f9wi xjn30re x1l1cedg x10w6t97",
				children: u.jsx(M, { "aria-hidden": !0 })
			}),
			u.jsxs("div", {
				className: "x1ew7x2d x78zum5 x10w6t97 xdt5ytf xl56j7k x1cy8zhl x1bczwif xwf5gio x1p453bz x1suzm8a x1khkcf x1n2onr6 xs7f9wi",
				children: [P === o("WAChatState").ACTIVE_CHAT_STATE_TYPE.TYPING && u.jsx(r("WAWebMessageBubbleTypingIndicator.react"), {
					isBotMsgStreaming: !1,
					colorRgb: le != null ? le : ie
				}), P === o("WAChatState").ACTIVE_CHAT_STATE_TYPE.RECORDING_AUDIO && u.jsx(r("WAWebTypingIndicatorRecording.react"), {})]
			})
		] })) : null, me;
		return n[36] !== se || n[37] !== ue.transitionGroup || n[38] !== de ? (me = u.jsx(se, {
			xstyle: ue.transitionGroup,
			transitionName: ce,
			children: de
		}), n[36] = se, n[37] = ue.transitionGroup, n[38] = de, n[39] = me) : me = n[39], me;
	}
	function v(e) {
		return e.toString();
	}
	l.default = b;
}), 98);
