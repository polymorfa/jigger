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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(3), n = e.boundaryName, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "xz9dl7a xpdmqnj xsag5q8 x1g0dm76 xyi3aci xwf5gio x1p453bz x1suzm8a x1h3rtpe xhslqc4 x1pg5gke x2b8uid" }, t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = c.jsx("div", babelHelpers.extends({}, r, { children: s._(
			/*BTDS*/
			"",
			[s._param("boundaryName", n)]
		) })), t[1] = n, t[2] = a) : a = t[2], a;
	}
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
		var t = o("react-compiler-runtime").c(12), n = e.msg, a = e.position, i = m(y), l;
		t[0] !== i ? (l = v(i), t[0] = i, t[1] = l) : l = t[1];
		var s = l, u = "showroom-bubble-" + n.type, d;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "xh8yej3 x1n2onr6 x14ug900 x1vjfegm x6ikm8r x10wlt62" }, t[2] = d) : d = t[2];
		var p = a != null ? a : o("WAWebMessagePosition").MsgPosition.SINGLE, _;
		t[3] !== n || t[4] !== p ? (_ = c.jsx("div", babelHelpers.extends({}, d, { children: c.jsx(r("WAWebMessageWrapper.react"), {
			msg: n,
			position: p,
			errorBoundaryName: "showroom"
		}) })), t[3] = n, t[4] = p, t[5] = _) : _ = t[5];
		var f;
		t[6] !== s || t[7] !== _ ? (f = c.jsx("div", {
			style: s,
			children: _
		}), t[6] = s, t[7] = _, t[8] = f) : f = t[8];
		var g;
		return t[9] !== u || t[10] !== f ? (g = c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: u,
			fallback: b,
			children: f
		}), t[9] = u, t[10] = f, t[11] = g) : g = t[11], g;
	}
	function R(t) {
		var n = o("react-compiler-runtime").c(31), a = t.chatThemeStyle, i = t.config, l = t.direction, s = t.galleryMsgs, u = t.isDarkMode, d = t.showDoodle, m = t.stockWallpaperUrl, p = s[i.id];
		if (p == null) return null;
		var _ = p.incoming, f = p.outgoing, g, y;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "x1vapyxq x1iyjqo2 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz xlr9sxt xvvg52n xwd4zgb xq8v1ta xyamay9 xv54qhq x1l90r2v xf7dkkf x1280gxy" }, y = { className: "x78zum5 x1qughib x1pha0wt xod5an3" }, n[0] = g, n[1] = y) : (g = n[0], y = n[1]);
		var C;
		n[2] !== i.label ? (C = c.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDefault",
			children: i.label
		}), n[2] = i.label, n[3] = C) : C = n[3];
		var b;
		n[4] !== i.description ? (b = c.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: i.description
		}), n[4] = i.description, n[5] = b) : b = n[5];
		var v;
		n[6] !== C || n[7] !== b ? (v = c.jsxs("div", babelHelpers.extends({}, y, { children: [C, b] })), n[6] = C, n[7] = b, n[8] = v) : v = n[8];
		var R;
		n[9] !== a ? (R = (e || (e = r("stylex"))).props(h.cardBubbles, a), n[9] = a, n[10] = R) : R = n[10];
		var L;
		n[11] !== d ? (L = c.jsx(r("WAWebConversationBackground.react"), {
			wallpaper: o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
			showDoodle: d
		}), n[11] = d, n[12] = L) : L = n[12];
		var E;
		n[13] !== u || n[14] !== m ? (E = m != null && c.jsxs(c.Fragment, { children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.stockWallpaper, h.stockWallpaperImage(m)))), u && c.jsx("div", { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x7w8cv9 x1ja2u2z" })] }), n[13] = u, n[14] = m, n[15] = E) : E = n[15];
		var k;
		n[16] !== l || n[17] !== _ ? (k = l !== "outgoing" && _ != null ? c.jsx(S, { msg: _ }) : null, n[16] = l, n[17] = _, n[18] = k) : k = n[18];
		var I;
		n[19] !== l || n[20] !== f ? (I = l !== "incoming" && f != null ? c.jsx(S, { msg: f }) : null, n[19] = l, n[20] = f, n[21] = I) : I = n[21];
		var T;
		n[22] !== I || n[23] !== R || n[24] !== L || n[25] !== E || n[26] !== k ? (T = c.jsxs("div", babelHelpers.extends({}, R, { children: [
			L,
			E,
			k,
			I
		] })), n[22] = I, n[23] = R, n[24] = L, n[25] = E, n[26] = k, n[27] = T) : T = n[27];
		var D;
		return n[28] !== T || n[29] !== v ? (D = c.jsxs("div", babelHelpers.extends({}, g, { children: [v, T] })), n[28] = T, n[29] = v, n[30] = D) : D = n[30], D;
	}
	function L(e) {
		var t = o("react-compiler-runtime").c(6), n = e.conversation, r, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = c.jsx("div", {
			className: "x2b8uid xz9dl7a x1l90r2v x1n2onr6 x1vjfegm",
			children: c.jsx("span", {
				className: "x1rg5ohu x1iorvi4 xjkvuk6 x1g0dm76 xpdmqnj xyi3aci xwf5gio x1p453bz x1suzm8a x16w0wmm x1pg5gke xhslqc4",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), a = { className: "x78zum5 xdt5ytf x1r0jzty x1n2onr6 x1vjfegm" }, t[0] = r, t[1] = a) : (r = t[0], a = t[1]);
		var i;
		t[2] !== n ? (i = n.map(E), t[2] = n, t[3] = i) : i = t[3];
		var l;
		return t[4] !== i ? (l = c.jsxs("div", { children: [r, c.jsx("div", babelHelpers.extends({}, a, { children: i }))] }), t[4] = i, t[5] = l) : l = t[5], l;
	}
	function E(e, t) {
		return c.jsx(S, { msg: e.msg }, t);
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k() {
		var t = o("react-compiler-runtime").c(182), n = f(!1), a = n[0], i = n[1], l = f("both"), u = l[0], d = l[1], m = f("consumer"), _ = m[0], g = m[1], C = f(P), b = C[0], v = C[1], S = f($), E = S[0], k = f(null), N = k[0], w = k[1], A = f(!0), F = A[0], O = A[1], B = f(!0), W = B[0], q = B[1], U;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (U = { isChatThemeEnabled: !0 }, t[0] = U) : U = t[0];
		var V = o("WAWebUseChatTheme").useLazyChatThemeDefinitions(U), H = a ? "dark" : "light", G;
		e: {
			if (N == null || V == null) {
				G = null;
				break e;
			}
			var z;
			t[1] !== V || t[2] !== N || t[3] !== H ? (z = V.getChatTheme(N, H), t[1] = V, t[2] = N, t[3] = H, t[4] = z) : z = t[4], G = z;
		}
		var j = G, K;
		t[5] !== N ? (K = N != null && o("WAWebChatThemeEnums").hasVibrantBubbleColor(N), t[5] = N, t[6] = K) : K = t[6];
		var Q = K, X = r("useWAWebChatThemeModeValue")(j, Q), Y;
		e: {
			if (N == null) {
				Y = null;
				break e;
			}
			var J;
			t[7] !== N ? (J = o("WAWebChatThemeEnums").Theme.cast(N.replace(/@(Tonal|Minimal)$/, "")), t[7] = N, t[8] = J) : J = t[8], Y = J;
		}
		var Z = Y, ee = Z != null ? o("WAWebStockWallpaper").getStockWallpaperUrl(Z) : null, te = ee != null ? !1 : W, ne;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (ne = new Set(o("WAWebStockWallpaper").getThemesWithStockWallpapers().map(x)), t[9] = ne) : ne = t[9];
		var re = ne, oe;
		t[10] !== V ? (oe = V != null ? [o("WAWebChatThemeEnums").Theme.Default].concat(V.getAllColorSchemes().filter(function(e) {
			var t = V.getBaseTheme(e);
			return t == null || !re.has(t);
		})) : [], t[10] = V, t[11] = oe) : oe = t[11];
		var ae = oe, ie;
		t[12] !== V ? (ie = V != null ? o("WAWebStockWallpaper").getThemesWithStockWallpapers() : [], t[12] = V, t[13] = ie) : ie = t[13];
		var le = ie, se;
		t[14] !== _ ? (se = _ === "smb" ? [].concat(o("WAWebMessageBubbleShowroomConstants").MESSAGE_TYPES, o("WAWebMessageBubbleShowroomConstants").SMB_MESSAGE_TYPES) : o("WAWebMessageBubbleShowroomConstants").MESSAGE_TYPES, t[14] = _, t[15] = se) : se = t[15];
		var ue = se, ce;
		t[16] !== E.conversation || t[17] !== E.smbConversation || t[18] !== _ ? (ce = _ === "smb" ? [].concat(E.conversation, E.smbConversation) : E.conversation, t[16] = E.conversation, t[17] = E.smbConversation, t[18] = _, t[19] = ce) : ce = t[19];
		var de = ce, me;
		t[20] !== E.allMsgs ? (me = function() {
			return (function() {
				for (var e of E.allMsgs) {
					var t = o("WAWebMsgCollection").MsgCollection.get(e.id);
					t != null && o("WAWebMsgCollection").MsgCollection.remove(t);
				}
			});
		}, t[20] = E.allMsgs, t[21] = me) : me = t[21];
		var pe;
		t[22] !== E ? (pe = [E], t[22] = E, t[23] = pe) : pe = t[23], p(me, pe);
		var _e;
		if (t[24] !== ue || t[25] !== b) {
			var fe;
			t[27] !== b ? (fe = function(t) {
				return b.has(t.id);
			}, t[27] = b, t[28] = fe) : fe = t[28], _e = ue.filter(fe), t[24] = ue, t[25] = b, t[26] = _e;
		} else _e = t[26];
		var ge = _e, he;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (he = function(t) {
			v(function(e) {
				var n = new Set(e);
				return n.has(t) ? n.delete(t) : n.add(t), n;
			});
		}, t[29] = he) : he = t[29];
		var ye = he, Ce;
		t[30] === Symbol.for("react.memo_cache_sentinel") ? (Ce = function(t) {
			g(t);
			var e = t === "smb" ? [].concat(o("WAWebMessageBubbleShowroomConstants").MESSAGE_TYPES, o("WAWebMessageBubbleShowroomConstants").SMB_MESSAGE_TYPES) : o("WAWebMessageBubbleShowroomConstants").MESSAGE_TYPES;
			v(new Set(e.map(D)));
		}, t[30] = Ce) : Ce = t[30];
		var be = Ce, ve;
		t[31] !== ue ? (ve = function() {
			v(new Set(ue.map(T)));
		}, t[31] = ue, t[32] = ve) : ve = t[32];
		var Se = ve, Re;
		t[33] === Symbol.for("react.memo_cache_sentinel") ? (Re = function() {
			v(new Set());
		}, t[33] = Re) : Re = t[33];
		var Le = Re, Ee;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (Ee = function(t) {
			i(t);
		}, t[34] = Ee) : Ee = t[34];
		var ke = Ee, Ie;
		t[35] !== V ? (Ie = function(t) {
			V != null && w(t === o("WAWebChatThemeEnums").Theme.Default ? null : t);
		}, t[35] = V, t[36] = Ie) : Ie = t[36];
		var Te = Ie, De;
		t[37] === Symbol.for("react.memo_cache_sentinel") ? (De = function() {
			w(null);
		}, t[37] = De) : De = t[37];
		var xe = De, $e = y, Pe;
		t[38] !== a ? (Pe = (e || (e = r("stylex"))).props(a ? o("WDSThemes").WDSDarkTheme : o("WDSThemes").WDSLightTheme, h.overlay), t[38] = a, t[39] = Pe) : Pe = t[39];
		var Ne, Me;
		t[40] === Symbol.for("react.memo_cache_sentinel") ? (Ne = { className: "x78zum5 x6s0dn4 x1qughib xyamay9 x1l90r2v x106a9eq x1xnnf8n xso031l x1q0q8m5 x120ee7l x2lah0s" }, Me = { className: "x78zum5 x6s0dn4 xtqikln" }, t[40] = Ne, t[41] = Me) : (Ne = t[40], Me = t[41]);
		var we, Ae, Fe;
		t[42] === Symbol.for("react.memo_cache_sentinel") ? (we = c.jsx("div", babelHelpers.extends({}, Me, { children: c.jsx(r("WDSText.react"), {
			type: "Headline2",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), Ae = { className: "x78zum5 x6s0dn4 xtqikln" }, Fe = { className: "x78zum5 x6s0dn4 xfex06f" }, t[42] = we, t[43] = Ae, t[44] = Fe) : (we = t[42], Ae = t[43], Fe = t[44]);
		var Oe;
		t[45] !== a ? (Oe = c.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: a ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}), t[45] = a, t[46] = Oe) : Oe = t[46];
		var Be;
		t[47] === Symbol.for("react.memo_cache_sentinel") ? (Be = s._(
			/*BTDS*/
			""
		), t[47] = Be) : Be = t[47];
		var We;
		t[48] !== a ? (We = c.jsx(r("WDSSwitch.react"), {
			value: a,
			onChange: ke,
			"aria-label": Be
		}), t[48] = a, t[49] = We) : We = t[49];
		var qe;
		t[50] !== Oe || t[51] !== We ? (qe = c.jsxs("div", babelHelpers.extends({}, Fe, { children: [Oe, We] })), t[50] = Oe, t[51] = We, t[52] = qe) : qe = t[52];
		var Ue;
		t[53] === Symbol.for("react.memo_cache_sentinel") ? (Ue = c.jsx(r("WDSButton.react"), {
			variant: "borderless",
			Icon: r("WDSIconIcClose.react"),
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onPress: M
		}), t[53] = Ue) : Ue = t[53];
		var Ve;
		t[54] !== qe ? (Ve = c.jsxs("div", babelHelpers.extends({}, Ne, { children: [we, c.jsxs("div", babelHelpers.extends({}, Ae, { children: [qe, Ue] }))] })), t[54] = qe, t[55] = Ve) : Ve = t[55];
		var He, Ge;
		t[56] === Symbol.for("react.memo_cache_sentinel") ? (He = { className: "x78zum5 xdt5ytf x1b8z93w xz9dl7a xsag5q8 x106a9eq x1xnnf8n xso031l x1q0q8m5 x120ee7l x2lah0s" }, Ge = { className: "x78zum5 x6s0dn4 xmixu3c xw09woa x1a02dak" }, t[56] = He, t[57] = Ge) : (He = t[56], Ge = t[57]);
		var ze;
		t[58] === Symbol.for("react.memo_cache_sentinel") ? (ze = c.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDeemphasized",
			children: c.jsx("span", {
				className: "x2fvf9 x2lah0s",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), t[58] = ze) : ze = t[58];
		var je = _ === "consumer", Ke;
		t[59] === Symbol.for("react.memo_cache_sentinel") ? (Ke = function() {
			return be("consumer");
		}, t[59] = Ke) : Ke = t[59];
		var Qe;
		t[60] !== je ? (Qe = c.jsx(r("WDSChip.react"), {
			label: "Consumer",
			size: "default",
			isSelected: je,
			onPress: Ke,
			testid: "showroom_msg_bubble_mode_chip_consumer"
		}), t[60] = je, t[61] = Qe) : Qe = t[61];
		var Xe = _ === "smb", Ye;
		t[62] === Symbol.for("react.memo_cache_sentinel") ? (Ye = function() {
			return be("smb");
		}, t[62] = Ye) : Ye = t[62];
		var Je;
		t[63] !== Xe ? (Je = c.jsx(r("WDSChip.react"), {
			label: "SMB",
			size: "default",
			isSelected: Xe,
			onPress: Ye,
			testid: "showroom_msg_bubble_mode_chip_smb"
		}), t[63] = Xe, t[64] = Je) : Je = t[64];
		var Ze;
		t[65] !== Qe || t[66] !== Je ? (Ze = c.jsxs("div", babelHelpers.extends({}, Ge, { children: [
			ze,
			Qe,
			Je
		] })), t[65] = Qe, t[66] = Je, t[67] = Ze) : Ze = t[67];
		var et;
		t[68] === Symbol.for("react.memo_cache_sentinel") ? (et = { className: "x78zum5 x6s0dn4 xmixu3c xw09woa x1a02dak" }, t[68] = et) : et = t[68];
		var tt;
		t[69] === Symbol.for("react.memo_cache_sentinel") ? (tt = c.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDeemphasized",
			children: c.jsx("span", {
				className: "x2fvf9 x2lah0s",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), t[69] = tt) : tt = t[69];
		var nt = u === "incoming", rt;
		t[70] === Symbol.for("react.memo_cache_sentinel") ? (rt = function() {
			return d("incoming");
		}, t[70] = rt) : rt = t[70];
		var ot;
		t[71] !== nt ? (ot = c.jsx(r("WDSChip.react"), {
			label: "Incoming",
			size: "default",
			isSelected: nt,
			onPress: rt,
			testid: "showroom_msg_bubble_direction_chip_incoming"
		}), t[71] = nt, t[72] = ot) : ot = t[72];
		var at = u === "outgoing", it;
		t[73] === Symbol.for("react.memo_cache_sentinel") ? (it = function() {
			return d("outgoing");
		}, t[73] = it) : it = t[73];
		var lt;
		t[74] !== at ? (lt = c.jsx(r("WDSChip.react"), {
			label: "Outgoing",
			size: "default",
			isSelected: at,
			onPress: it,
			testid: "showroom_msg_bubble_direction_chip_outgoing"
		}), t[74] = at, t[75] = lt) : lt = t[75];
		var st = u === "both", ut;
		t[76] === Symbol.for("react.memo_cache_sentinel") ? (ut = function() {
			return d("both");
		}, t[76] = ut) : ut = t[76];
		var ct;
		t[77] !== st ? (ct = c.jsx(r("WDSChip.react"), {
			label: "Both",
			size: "default",
			isSelected: st,
			onPress: ut,
			testid: "showroom_msg_bubble_direction_chip_both"
		}), t[77] = st, t[78] = ct) : ct = t[78];
		var dt;
		t[79] !== ot || t[80] !== lt || t[81] !== ct ? (dt = c.jsxs("div", babelHelpers.extends({}, et, { children: [
			tt,
			ot,
			lt,
			ct
		] })), t[79] = ot, t[80] = lt, t[81] = ct, t[82] = dt) : dt = t[82];
		var mt;
		t[83] === Symbol.for("react.memo_cache_sentinel") ? (mt = { className: "x78zum5 x6s0dn4 xmixu3c xw09woa x1a02dak" }, t[83] = mt) : mt = t[83];
		var pt;
		t[84] === Symbol.for("react.memo_cache_sentinel") ? (pt = c.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDeemphasized",
			children: c.jsx("span", {
				className: "x2fvf9 x2lah0s",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), t[84] = pt) : pt = t[84];
		var _t;
		if (t[85] !== ue || t[86] !== b) {
			var ft;
			t[88] !== b ? (ft = function(t) {
				return c.jsx(r("WDSChip.react"), {
					label: t.label,
					size: "default",
					isSelected: b.has(t.id),
					onPress: function() {
						return ye(t.id);
					},
					testid: "showroom_msg_bubble_type_chip_" + t.id
				}, t.id);
			}, t[88] = b, t[89] = ft) : ft = t[89], _t = ue.map(ft), t[85] = ue, t[86] = b, t[87] = _t;
		} else _t = t[87];
		var gt;
		t[90] === Symbol.for("react.memo_cache_sentinel") ? (gt = { className: "x78zum5 xmixu3c xvc5jky" }, t[90] = gt) : gt = t[90];
		var ht;
		t[91] === Symbol.for("react.memo_cache_sentinel") ? (ht = s._(
			/*BTDS*/
			""
		), t[91] = ht) : ht = t[91];
		var yt;
		t[92] !== Se ? (yt = c.jsx(r("WDSButton.react"), {
			variant: "borderless",
			label: ht,
			onPress: Se
		}), t[92] = Se, t[93] = yt) : yt = t[93];
		var Ct;
		t[94] === Symbol.for("react.memo_cache_sentinel") ? (Ct = c.jsx(r("WDSButton.react"), {
			variant: "borderless",
			label: s._(
				/*BTDS*/
				""
			),
			onPress: Le
		}), t[94] = Ct) : Ct = t[94];
		var bt;
		t[95] !== yt ? (bt = c.jsxs("div", babelHelpers.extends({}, gt, { children: [yt, Ct] })), t[95] = yt, t[96] = bt) : bt = t[96];
		var vt;
		t[97] !== _t || t[98] !== bt ? (vt = c.jsxs("div", babelHelpers.extends({}, mt, { children: [
			pt,
			_t,
			bt
		] })), t[97] = _t, t[98] = bt, t[99] = vt) : vt = t[99];
		var St;
		t[100] !== Ze || t[101] !== dt || t[102] !== vt ? (St = c.jsxs("div", babelHelpers.extends({}, He, { children: [
			Ze,
			dt,
			vt
		] })), t[100] = Ze, t[101] = dt, t[102] = vt, t[103] = St) : St = t[103];
		var Rt, Lt, Et;
		t[104] === Symbol.for("react.memo_cache_sentinel") ? (Rt = { className: "xso031l x1q0q8m5 x120ee7l x2lah0s" }, Lt = { className: "x78zum5 x6s0dn4 x1qughib x1y1aw1k xwib8y2 x106a9eq x1xnnf8n" }, Et = { className: "x78zum5 x6s0dn4 xtqikln" }, t[104] = Rt, t[105] = Lt, t[106] = Et) : (Rt = t[104], Lt = t[105], Et = t[106]);
		var kt;
		t[107] === Symbol.for("react.memo_cache_sentinel") ? (kt = c.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[107] = kt) : kt = t[107];
		var It;
		t[108] !== V || t[109] !== N ? (It = N != null && V != null && c.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: V.getColorSchemeName(N)
		}), t[108] = V, t[109] = N, t[110] = It) : It = t[110];
		var Tt;
		t[111] !== It ? (Tt = c.jsxs("div", babelHelpers.extends({}, Et, { children: [kt, It] })), t[111] = It, t[112] = Tt) : Tt = t[112];
		var Dt, xt;
		t[113] === Symbol.for("react.memo_cache_sentinel") ? (Dt = { className: "x78zum5 x6s0dn4 xtqikln" }, xt = { className: "x78zum5 x6s0dn4 xfex06f" }, t[113] = Dt, t[114] = xt) : (Dt = t[113], xt = t[114]);
		var $t;
		t[115] === Symbol.for("react.memo_cache_sentinel") ? ($t = c.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[115] = $t) : $t = t[115];
		var Pt;
		t[116] === Symbol.for("react.memo_cache_sentinel") ? (Pt = s._(
			/*BTDS*/
			""
		), t[116] = Pt) : Pt = t[116];
		var Nt;
		t[117] !== W ? (Nt = c.jsxs("div", babelHelpers.extends({}, xt, { children: [$t, c.jsx(r("WDSSwitch.react"), {
			value: W,
			onChange: q,
			"aria-label": Pt
		})] })), t[117] = W, t[118] = Nt) : Nt = t[118];
		var Mt;
		t[119] !== N ? (Mt = N != null && c.jsx(r("WDSButton.react"), {
			variant: "borderless",
			label: s._(
				/*BTDS*/
				""
			),
			onPress: xe
		}), t[119] = N, t[120] = Mt) : Mt = t[120];
		var wt;
		t[121] !== F ? (wt = F ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[121] = F, t[122] = wt) : wt = t[122];
		var At;
		t[123] === Symbol.for("react.memo_cache_sentinel") ? (At = function() {
			return O(I);
		}, t[123] = At) : At = t[123];
		var Ft;
		t[124] !== wt ? (Ft = c.jsx(r("WDSButton.react"), {
			variant: "borderless",
			label: wt,
			onPress: At
		}), t[124] = wt, t[125] = Ft) : Ft = t[125];
		var Ot;
		t[126] !== Nt || t[127] !== Mt || t[128] !== Ft ? (Ot = c.jsxs("div", babelHelpers.extends({}, Dt, { children: [
			Nt,
			Mt,
			Ft
		] })), t[126] = Nt, t[127] = Mt, t[128] = Ft, t[129] = Ot) : Ot = t[129];
		var Bt;
		t[130] !== Tt || t[131] !== Ot ? (Bt = c.jsxs("div", babelHelpers.extends({}, Lt, { children: [Tt, Ot] })), t[130] = Tt, t[131] = Ot, t[132] = Bt) : Bt = t[132];
		var Wt;
		t[133] !== ae || t[134] !== V || t[135] !== Te || t[136] !== N || t[137] !== F || t[138] !== H || t[139] !== le ? (Wt = F && V != null && c.jsxs("div", {
			className: "x1g0dm76 x1xnnf8n xsag5q8 x1xiyphd xw2csxc x1odjw0f",
			children: [c.jsx(r("WAWebChatThemeGrid.react"), {
				compact: !0,
				currentThemeId: N,
				onSelect: Te,
				themes: ae,
				themeMode: H
			}), c.jsx(r("WAWebChatThemeGrid.react"), {
				compact: !0,
				currentThemeId: N,
				onSelect: Te,
				themes: le,
				themeMode: H
			})]
		}), t[133] = ae, t[134] = V, t[135] = Te, t[136] = N, t[137] = F, t[138] = H, t[139] = le, t[140] = Wt) : Wt = t[140];
		var qt;
		t[141] !== Bt || t[142] !== Wt ? (qt = c.jsxs("div", babelHelpers.extends({}, Rt, { children: [Bt, Wt] })), t[141] = Bt, t[142] = Wt, t[143] = qt) : qt = t[143];
		var Ut = r("WAWebChatThemeModeContext"), Vt, Ht, Gt;
		t[144] === Symbol.for("react.memo_cache_sentinel") ? (Vt = { className: "x1iyjqo2 x78zum5 x6ikm8r x10wlt62" }, Ht = { className: "x3qk5kr xw2csxc x1odjw0f x1cnzs8 x1xnnf8n xx6bls6 x106a9eq x1lun4ml x18b5jzi xbogo7e" }, Gt = { className: "x1yztbdb x1n2onr6 x1vjfegm" }, t[144] = Vt, t[145] = Ht, t[146] = Gt) : (Vt = t[144], Ht = t[145], Gt = t[146]);
		var zt, jt;
		t[147] === Symbol.for("react.memo_cache_sentinel") ? (zt = c.jsx("div", babelHelpers.extends({}, Gt, { children: c.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), jt = { className: "x78zum5 x1a02dak x40hh3e xgpatz3" }, t[147] = zt, t[148] = jt) : (zt = t[147], jt = t[148]);
		var Kt = ge.map(function(e) {
			return c.jsx(R, {
				config: e,
				direction: u,
				galleryMsgs: E.gallery,
				chatThemeStyle: j,
				stockWallpaperUrl: ee,
				showDoodle: te,
				isDarkMode: a
			}, e.id);
		}), Qt;
		t[149] !== Kt ? (Qt = c.jsxs("div", babelHelpers.extends({}, Ht, { children: [zt, c.jsx("div", babelHelpers.extends({}, jt, { children: Kt }))] })), t[149] = Kt, t[150] = Qt) : Qt = t[150];
		var Xt;
		t[151] !== j ? (Xt = (e || (e = r("stylex"))).props(h.convPanel, j), t[151] = j, t[152] = Xt) : Xt = t[152];
		var Yt;
		t[153] !== te ? (Yt = c.jsx(r("WAWebConversationBackground.react"), {
			wallpaper: o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
			showDoodle: te
		}), t[153] = te, t[154] = Yt) : Yt = t[154];
		var Jt = ee != null && c.jsxs(c.Fragment, { children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.stockWallpaper, h.stockWallpaperImage(ee)))), a && c.jsx("div", { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x7w8cv9 x1ja2u2z" })] }), Zt;
		t[155] === Symbol.for("react.memo_cache_sentinel") ? (Zt = { className: "x1yztbdb x1n2onr6 x1vjfegm" }, t[155] = Zt) : Zt = t[155];
		var en;
		t[156] === Symbol.for("react.memo_cache_sentinel") ? (en = c.jsx("div", babelHelpers.extends({}, Zt, { children: c.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), t[156] = en) : en = t[156];
		var tn;
		t[157] !== de ? (tn = c.jsx(L, { conversation: de }), t[157] = de, t[158] = tn) : tn = t[158];
		var nn;
		t[159] !== Xt || t[160] !== Yt || t[161] !== Jt || t[162] !== tn ? (nn = c.jsxs("div", babelHelpers.extends({}, Xt, { children: [
			Yt,
			Jt,
			en,
			tn
		] })), t[159] = Xt, t[160] = Yt, t[161] = Jt, t[162] = tn, t[163] = nn) : nn = t[163];
		var rn;
		t[164] !== Vt || t[165] !== Qt || t[166] !== nn ? (rn = c.jsxs("div", babelHelpers.extends({}, Vt, { children: [Qt, nn] })), t[164] = Vt, t[165] = Qt, t[166] = nn, t[167] = rn) : rn = t[167];
		var on;
		t[168] !== X || t[169] !== Ut.Provider || t[170] !== rn ? (on = c.jsx(Ut.Provider, {
			value: X,
			children: rn
		}), t[168] = X, t[169] = Ut.Provider, t[170] = rn, t[171] = on) : on = t[171];
		var an;
		t[172] !== Pe || t[173] !== Ve || t[174] !== St || t[175] !== qt || t[176] !== on ? (an = c.jsxs("div", babelHelpers.extends({}, Pe, { children: [
			Ve,
			St,
			qt,
			on
		] })), t[172] = Pe, t[173] = Ve, t[174] = St, t[175] = qt, t[176] = on, t[177] = an) : an = t[177];
		var ln;
		return t[178] !== a || t[179] !== an || t[180] !== $e.Provider ? (ln = c.jsx($e.Provider, {
			value: a,
			children: an
		}), t[178] = a, t[179] = an, t[180] = $e.Provider, t[181] = ln) : ln = t[181], ln;
	}
	function I(e) {
		return !e;
	}
	function T(e) {
		return e.id;
	}
	function D(e) {
		return e.id;
	}
	function x(e) {
		return e;
	}
	function $() {
		return C();
	}
	function P() {
		return new Set(o("WAWebMessageBubbleShowroomConstants").MESSAGE_TYPES.map(N));
	}
	function N(e) {
		return e.id;
	}
	function M() {
		o("WAWebModalManager").ModalManager.close();
	}
	l.default = k;
}), 226);
