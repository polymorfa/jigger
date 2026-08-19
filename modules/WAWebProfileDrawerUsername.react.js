__d("WAWebProfileDrawerUsername.react", [
	"fbt",
	"WAWebCmd",
	"WAWebDrawerBlock.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebGetMeUsernameQueryAction",
	"WAWebMentionsRefreshedIcon.react",
	"WAWebUserPrefsMeUser",
	"WAWebUserPrefsUsername",
	"WAWebUsernameTypes",
	"WAWebUsernameWorkerCompatibleGatingUtils",
	"WDSIconIcChevronRight.react",
	"WDSIconIcKey.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = { paddingBottom30: {
		paddingBottom: "xbaz6xv",
		$$css: !0
	} }, _ = {
		sectionPadding: {
			paddingTop: "xyinxu5",
			marginBottom: "xat24cr",
			$$css: !0
		},
		titlePadding: {
			paddingInlineStart: "x162tt16",
			paddingBottom: "xjkvuk6",
			$$css: !0
		},
		mentionIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		chevronIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		usernameKeyContainer: {
			backgroundColor: "x6egj2d",
			paddingTop: "x4p5aij",
			paddingInlineEnd: "x1icxu4v",
			paddingBottom: "x1j85h84",
			paddingInlineStart: "x25sj25",
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			$$css: !0
		},
		usernameKeyIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		createUsernameWithKey: {
			marginTop: "x1ci5j9l",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(29), n = e.onClick, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), t[0] = a) : a = t[0];
		var i = a, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = [o("WAWebFrontendContactGetters").getUsername, o("WAWebFrontendContactGetters").getUsernameKey], t[1] = l) : l = t[1];
		var c = o("useWAWebContactValues").useContactValues(i, l), f = c[0], h = c[1], y;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (y = o("WAWebUserPrefsUsername").getUsernameState(), t[2] = y) : y = t[2];
		var C = m(y), b = C[0], v = C[1], S;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (S = [], t[3] = S) : S = t[3], d(g, S);
		var R;
		if (t[4] === Symbol.for("react.memo_cache_sentinel") ? (R = function(t) {
			v(t);
		}, t[4] = R) : R = t[4], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "username_state_updated", R), b == null && (o("WAWebUsernameWorkerCompatibleGatingUtils").usernameAccountLinkingEnabled() || o("WAWebUsernameWorkerCompatibleGatingUtils").usernameReservationOnlyMode())) return null;
		var L;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[5] = L) : L = t[5];
		var E = L, k;
		t[6] !== b ? (k = b === "RESERVED" ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[6] = b, t[7] = k) : k = t[7];
		var I = k, T = h != null, D = T && p.paddingBottom30, x;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (x = u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "end",
			children: u.jsx(r("WDSIconIcChevronRight.react"), {
				xstyle: _.chevronIcon,
				directional: !0,
				height: 24,
				width: 24
			})
		}), t[8] = x) : x = t[8];
		var $;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? ($ = u.jsx(o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon, { xstyle: _.mentionIcon }), t[9] = $) : $ = t[9];
		var P = T && _.createUsernameWithKey, N = f != null ? "contentDefault" : "contentActionEmphasized", M;
		if (t[10] !== f) {
			var w;
			M = (w = o("WAWebUsernameTypes").serializeMaybeUsername(f)) != null ? w : E, t[10] = f, t[11] = M;
		} else M = t[11];
		var A;
		t[12] !== N || t[13] !== M ? (A = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: N,
			children: M
		}), t[12] = N, t[13] = M, t[14] = A) : A = t[14];
		var F;
		t[15] !== h || t[16] !== T ? (F = T && u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 8,
			xstyle: _.usernameKeyContainer,
			children: [u.jsx(r("WDSIconIcKey.react"), { xstyle: _.usernameKeyIcon }), u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: h
			})]
		}), t[15] = h, t[16] = T, t[17] = F) : F = t[17];
		var O;
		t[18] !== P || t[19] !== A || t[20] !== F ? (O = u.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 24,
			align: "center",
			children: [$, u.jsxs(o("WAWebFlex.react").FlexColumn, {
				gap: 8,
				xstyle: P,
				children: [A, F]
			})]
		}), t[18] = P, t[19] = A, t[20] = F, t[21] = O) : O = t[21];
		var B;
		t[22] !== n || t[23] !== O || t[24] !== D ? (B = u.jsx(r("WAWebDrawerBlock.react"), {
			xstyle: D,
			onClick: n,
			separator: !1,
			side: x,
			children: O
		}), t[22] = n, t[23] = O, t[24] = D, t[25] = B) : B = t[25];
		var W = B, q;
		return t[26] !== W || t[27] !== I ? (q = u.jsx(r("WAWebDrawerSection.react"), {
			theme: "no-padding",
			animation: !1,
			title: I,
			titleXStyle: _.titlePadding,
			xstyle: _.sectionPadding,
			children: W
		}), t[26] = W, t[27] = I, t[28] = q) : q = t[28], q;
	}
	function g() {
		o("WAWebGetMeUsernameQueryAction").getMeUsername();
	}
	l.default = f;
}), 226);
