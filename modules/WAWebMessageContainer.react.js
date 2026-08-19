__d("WAWebMessageContainer.react", [
	"WAWebABProps",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeModeContext",
	"WAWebClassnames",
	"WAWebStylesEnv",
	"WAWebVibrantOutgoingOverrides.stylex",
	"WAWebWrapperGetTailIcon",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useContext, d = o("WAWebWrapperGetTailIcon").getTailIcon(!1), m = o("WAWebWrapperGetTailIcon").getTailIcon(!0), p = {
		message: {
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "xu342n7",
			borderEndEndRadius: "xelbjmh",
			borderEndStartRadius: "x16pgt24",
			color: "x14ug900",
			flex: "x1okw0bk",
			fontSize: "x12lqup9",
			lineHeight: "x17fgdl5",
			position: "x1n2onr6",
			$$css: !0
		},
		messageHighlightMention: {
			lineHeight: "x19v9tvf",
			$$css: !0
		},
		messageTailOverrideIncoming: {
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "xu342n7",
			$$css: !0
		},
		messageTailOverrideOutgoing: {
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "x17un8ov",
			$$css: !0
		},
		tail: {
			display: "x1lliihq",
			height: "x18gnavp",
			position: "x10l6tqk",
			top: "x13vifvy",
			width: "x1xc55vz",
			zIndex: "xupqr0c",
			$$css: !0
		},
		tailColorIncoming: {
			color: "x1l1cedg",
			$$css: !0
		},
		tailColorOutgoing: {
			color: "x1fa4crm",
			$$css: !0
		},
		tailLeft: {
			insetInlineStart: "x7hj1vm",
			$$css: !0
		},
		tailRight: {
			insetInlineEnd: "xgvahye",
			$$css: !0
		},
		tailLeftSafari: {
			insetInlineStart: "xnj87uo",
			$$css: !0
		},
		tailRightSafari: {
			insetInlineEnd: "x13niomq",
			$$css: !0
		}
	};
	function _(t) {
		var n = o("react-compiler-runtime").c(26), a = t.children, i = t.isSentByMe, l = c(r("WAWebChatThemeModeContext")), s = l.isVibrant, _, f, g;
		if (n[0] !== i || n[1] !== s) {
			var h = o("WAWebChatThemeGatingUtils").shouldApplyVibrantOverride({
				isVibrant: s,
				isSentByMe: i,
				isNotification: !1
			});
			_ = i ? m : d;
			var y;
			n[5] !== i ? (y = {
				0: "x193iq5w x1cy8zhl",
				1: "x193iq5w xuk3077"
			}[!!i << 0], n[5] = i, n[6] = y) : y = n[6], g = y, f = o("WAWebClassnames").classnamesConvertMeToStylexPlease((e || (e = r("stylex")))(p.message, o("WAWebABProps").getABPropConfigValue("wa_web_highlight_me_mention") && p.messageHighlightMention, i ? p.messageTailOverrideOutgoing : p.messageTailOverrideIncoming, h && o("WAWebVibrantOutgoingOverrides.stylex").vibrantOutgoingLiteralStyles.root), e(h && o("WAWebVibrantOutgoingOverrides.stylex").vibrantOutgoingTheme)), n[0] = i, n[1] = s, n[2] = _, n[3] = f, n[4] = g;
		} else _ = n[2], f = n[3], g = n[4];
		var C = f, b;
		n[7] !== i ? (b = {
			0: { className: "xelbjmh x16pgt24 x1n2onr6 x12xzxwr x1ew7x2d x1bczwif xu342n7" },
			2: { className: "xelbjmh x16pgt24 x1n2onr6 x12xzxwr x1g5lz36 x1bczwif xu342n7" },
			1: { className: "xelbjmh x16pgt24 x1n2onr6 x12xzxwr x1ew7x2d x1liijdw x17un8ov" },
			3: { className: "xelbjmh x16pgt24 x1n2onr6 x12xzxwr x1g5lz36 x1liijdw x17un8ov" }
		}[!!i << 1 | !!i << 0], n[7] = i, n[8] = b) : b = n[8];
		var v;
		n[9] !== i ? (v = (e || (e = r("stylex"))).props(p.tail, i ? p.tailColorOutgoing : p.tailColorIncoming, i ? p.tailRight : p.tailLeft, o("WAWebStylesEnv").hasSafariFix && (i ? p.tailRightSafari : p.tailLeftSafari)), n[9] = i, n[10] = v) : v = n[10];
		var S;
		n[11] !== _ ? (S = u.jsx(_, {}), n[11] = _, n[12] = S) : S = n[12];
		var R;
		n[13] !== v || n[14] !== S ? (R = u.jsx("div", babelHelpers.extends({}, v, {
			"aria-hidden": "true",
			children: S
		})), n[13] = v, n[14] = S, n[15] = R) : R = n[15];
		var L;
		n[16] !== a || n[17] !== b || n[18] !== R ? (L = u.jsxs("div", babelHelpers.extends({}, b, { children: [R, a] })), n[16] = a, n[17] = b, n[18] = R, n[19] = L) : L = n[19];
		var E;
		n[20] !== C || n[21] !== L ? (E = u.jsx("div", {
			className: C,
			children: L
		}), n[20] = C, n[21] = L, n[22] = E) : E = n[22];
		var k;
		return n[23] !== E || n[24] !== g ? (k = u.jsx("div", {
			className: g,
			children: E
		}), n[23] = E, n[24] = g, n[25] = k) : k = n[25], k;
	}
	l.default = _;
}), 98);
