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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(3), n = e.boundaryName, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "xz9dl7a xpdmqnj xsag5q8 x1g0dm76 xyi3aci xwf5gio x1p453bz x1suzm8a x1h3rtpe xhslqc4 x1pg5gke x2b8uid" }, t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = c.jsx("div", babelHelpers.extends({}, r, {
			"data-testid": "benchmark_msg_wrapper_bubble_fallback",
			children: s._(
				/*BTDS*/
				"",
				[s._param("boundaryName", n)]
			)
		})), t[1] = n, t[2] = a) : a = t[2], a;
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(7), n = e.msg, a = e.position, i = "benchmark-" + n.type, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "xh8yej3 x1n2onr6 x14ug900 x1vjfegm x6ikm8r x10wlt62" }, t[0] = l) : l = t[0];
		var s;
		t[1] !== n || t[2] !== a ? (s = c.jsx("div", babelHelpers.extends({}, l, { children: c.jsx(r("WAWebMessageWrapper.react"), {
			msg: n,
			position: a,
			showProfilePicture: !0,
			errorBoundaryName: "benchmark"
		}) })), t[1] = n, t[2] = a, t[3] = s) : s = t[3];
		var u;
		return t[4] !== i || t[5] !== s ? (u = c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: i,
			fallback: L,
			children: s
		}), t[4] = i, t[5] = s, t[6] = u) : u = t[6], u;
	}
	function k() {
		var t = o("react-compiler-runtime").c(58), n = _(50), a = n[0], i = n[1], l = _(x), u = l[0], d = l[1], C = _(0), L = C[0], k = C[1], $;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? ($ = [], t[0] = $) : $ = t[0];
		var N = _($), M = N[0], w = N[1], A;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (A = [], t[1] = A) : A = t[1];
		var F = _(A), O = F[0], B = F[1], W = _(!1), q = W[0], U = W[1], V;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (V = [], t[2] = V) : V = t[2];
		var H = p(V), G = _(D), z = G[0], j = r("useWAWebChatThemeModeValue")(null, !1), K, Q;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (K = function() {
			return o("WAWebChatCollection").ChatCollection.add({ id: y }), (function() {
				R(H.current);
				var e = o("WAWebChatCollection").ChatCollection.get(y);
				e != null && o("WAWebChatCollection").ChatCollection.remove(e);
			});
		}, Q = [], t[3] = K, t[4] = Q) : (K = t[3], Q = t[4]), m(K, Q);
		var X;
		t[5] !== z || t[6] !== a || t[7] !== u ? (X = function() {
			var e = Array.from(u);
			if (e.length !== 0) {
				R(H.current);
				var t = v({
					count: a,
					groupWid: y,
					meUser: z,
					typeIds: e
				}), n = t.allMsgs, r = t.msgs;
				w(r), B(S(r.length)), H.current = n, k(T), U(!0);
			}
		}, t[5] = z, t[6] = a, t[7] = u, t[8] = X) : X = t[8];
		var Y = X, J;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (J = function(t) {
			d(function(e) {
				var n = new Set(e);
				return n.has(t) ? n.delete(t) : n.add(t), n;
			});
		}, t[9] = J) : J = t[9];
		var Z = J, ee;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (ee = function() {
			d(new Set(g.map(I)));
		}, t[10] = ee) : ee = t[10];
		var te = ee, ne;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (ne = function() {
			d(new Set());
		}, t[11] = ne) : ne = t[11];
		var re = ne, oe;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (oe = (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme, f.overlay), t[12] = oe) : oe = t[12];
		var ae;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (ae = { className: "x78zum5 x6s0dn4 x1qughib xyamay9 x1l90r2v x106a9eq x1xnnf8n xso031l x1q0q8m5 x120ee7l x2lah0s" }, t[13] = ae) : ae = t[13];
		var ie;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (ie = c.jsx(r("WDSText.react"), {
			type: "Headline2",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[14] = ie) : ie = t[14];
		var le, se, ue;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (le = c.jsxs("div", babelHelpers.extends({}, ae, { children: [ie, c.jsx(r("WDSButton.react"), {
			variant: "borderless",
			Icon: r("WDSIconIcClose.react"),
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onPress: P,
			testid: "benchmark_msg_wrapper_close_button"
		})] })), se = { className: "x78zum5 xdt5ytf x1b8z93w xz9dl7a xsag5q8 x106a9eq x1xnnf8n xso031l x1q0q8m5 x120ee7l x2lah0s" }, ue = { className: "x78zum5 x6s0dn4 xmixu3c xw09woa x1a02dak" }, t[15] = le, t[16] = se, t[17] = ue) : (le = t[15], se = t[16], ue = t[17]);
		var ce;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (ce = c.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDeemphasized",
			children: c.jsx("span", {
				className: "x2fvf9 x2lah0s",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), t[18] = ce) : ce = t[18];
		var de;
		t[19] !== a ? (de = h.map(function(e) {
			return c.jsx(r("WDSChip.react"), {
				label: String(e),
				size: "default",
				isSelected: a === e,
				onPress: function() {
					return i(e);
				},
				testid: "benchmark_msg_wrapper_count_chip_" + e
			}, e);
		}), t[19] = a, t[20] = de) : de = t[20];
		var me;
		t[21] !== de ? (me = c.jsxs("div", babelHelpers.extends({}, ue, { children: [ce, de] })), t[21] = de, t[22] = me) : me = t[22];
		var pe;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (pe = { className: "x78zum5 x6s0dn4 xmixu3c xw09woa x1a02dak" }, t[23] = pe) : pe = t[23];
		var _e;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (_e = c.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDeemphasized",
			children: c.jsx("span", {
				className: "x2fvf9 x2lah0s",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), t[24] = _e) : _e = t[24];
		var fe;
		t[25] !== u ? (fe = g.map(function(e) {
			return c.jsx(r("WDSChip.react"), {
				label: e.label,
				size: "default",
				isSelected: u.has(e.id),
				onPress: function() {
					return Z(e.id);
				},
				testid: "benchmark_msg_wrapper_type_chip_" + e.id
			}, e.id);
		}), t[25] = u, t[26] = fe) : fe = t[26];
		var ge;
		t[27] === Symbol.for("react.memo_cache_sentinel") ? (ge = { className: "x78zum5 xmixu3c xvc5jky" }, t[27] = ge) : ge = t[27];
		var he;
		t[28] === Symbol.for("react.memo_cache_sentinel") ? (he = c.jsx(r("WDSButton.react"), {
			variant: "borderless",
			label: s._(
				/*BTDS*/
				""
			),
			onPress: te
		}), t[28] = he) : he = t[28];
		var ye;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (ye = c.jsxs("div", babelHelpers.extends({}, ge, { children: [he, c.jsx(r("WDSButton.react"), {
			variant: "borderless",
			label: s._(
				/*BTDS*/
				""
			),
			onPress: re
		})] })), t[29] = ye) : ye = t[29];
		var Ce;
		t[30] !== fe ? (Ce = c.jsxs("div", babelHelpers.extends({}, pe, { children: [
			_e,
			fe,
			ye
		] })), t[30] = fe, t[31] = Ce) : Ce = t[31];
		var be;
		t[32] === Symbol.for("react.memo_cache_sentinel") ? (be = { className: "x78zum5 x6s0dn4 xmixu3c xw09woa x1a02dak" }, t[32] = be) : be = t[32];
		var ve;
		t[33] === Symbol.for("react.memo_cache_sentinel") ? (ve = s._(
			/*BTDS*/
			""
		), t[33] = ve) : ve = t[33];
		var Se = u.size === 0, Re;
		t[34] !== Y || t[35] !== Se ? (Re = c.jsx("div", babelHelpers.extends({}, be, { children: c.jsx(r("WDSButton.react"), {
			variant: "filled",
			label: ve,
			onPress: Y,
			disabled: Se,
			testid: "benchmark_msg_wrapper_run_button"
		}) })), t[34] = Y, t[35] = Se, t[36] = Re) : Re = t[36];
		var Le;
		t[37] !== me || t[38] !== Ce || t[39] !== Re ? (Le = c.jsxs("div", babelHelpers.extends({}, se, { children: [
			me,
			Ce,
			Re
		] })), t[37] = me, t[38] = Ce, t[39] = Re, t[40] = Le) : Le = t[40];
		var Ee;
		t[41] === Symbol.for("react.memo_cache_sentinel") ? (Ee = { className: "x1iyjqo2 xw2csxc x1odjw0f xyamay9 xv54qhq x1l90r2v xf7dkkf x1n2onr6" }, t[41] = Ee) : Ee = t[41];
		var ke;
		t[42] !== M || t[43] !== q || t[44] !== O || t[45] !== L ? (ke = q && c.jsx("div", {
			style: b,
			children: M.map(function(e, t) {
				var n;
				return c.jsx(E, {
					msg: e,
					position: (n = O[t]) != null ? n : o("WAWebMessagePosition").MsgPosition.SINGLE
				}, t);
			})
		}, L), t[42] = M, t[43] = q, t[44] = O, t[45] = L, t[46] = ke) : ke = t[46];
		var Ie;
		t[47] !== q ? (Ie = !q && c.jsx("div", {
			className: "x13zrc24 x2b8uid",
			children: c.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), t[47] = q, t[48] = Ie) : Ie = t[48];
		var Te;
		t[49] !== ke || t[50] !== Ie ? (Te = c.jsxs("div", babelHelpers.extends({}, Ee, { children: [ke, Ie] })), t[49] = ke, t[50] = Ie, t[51] = Te) : Te = t[51];
		var De;
		t[52] !== j || t[53] !== Te ? (De = c.jsx(r("WAWebChatThemeModeContext").Provider, {
			value: j,
			children: Te
		}), t[52] = j, t[53] = Te, t[54] = De) : De = t[54];
		var xe;
		return t[55] !== Le || t[56] !== De ? (xe = c.jsxs("div", babelHelpers.extends({}, oe, {
			"data-testid": "benchmark_msg_wrapper_overlay",
			children: [
				le,
				Le,
				De
			]
		})), t[55] = Le, t[56] = De, t[57] = xe) : xe = t[57], xe;
	}
	function I(e) {
		return e.id;
	}
	function T(e) {
		return e + 1;
	}
	function D() {
		return o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
	}
	function x() {
		return new Set(o("WAWebMessageBubbleShowroomConstants").MESSAGE_TYPES.map($));
	}
	function $(e) {
		return e.id;
	}
	function P() {
		o("WAWebModalManager").ModalManager.close();
	}
	l.default = k;
}), 226);
