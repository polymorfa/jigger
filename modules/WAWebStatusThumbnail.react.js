__d("WAWebStatusThumbnail.react", [
	"WAWebContactGetters",
	"WAWebDetailImage.react",
	"WAWebFrontendStatusGetters",
	"WAWebMsgGetters",
	"WAWebStateUtils",
	"WAWebStatusGatingUtils",
	"WAWebStatusImageRing.react",
	"WAWebStatusThumbnailComponents.react",
	"WDSFocusStateStyles",
	"WDSVars.stylex",
	"gkx",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebContactValues",
	"useWAWebIsKeyboardUser",
	"useWAWebStaticButtonA11y",
	"useWAWebStatusValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useMemo, d = {
		container: {
			paddingTop: "xz9dl7a",
			paddingInlineEnd: "x1q3ajuy",
			paddingBottom: "xsag5q8",
			paddingInlineStart: "xbmws1g",
			position: "x1n2onr6",
			borderStartStartRadius: "xr9e8f9",
			borderStartEndRadius: "x1e4oeot",
			borderEndEndRadius: "x1ui04y5",
			borderEndStartRadius: "x6en5u8",
			$$css: !0
		},
		thumbSizeSmall: {
			height: "x1vqgdyp",
			width: "x100vrsf",
			$$css: !0
		},
		marginTop2: {
			marginTop: "xfl633f",
			$$css: !0
		}
	};
	function m(t) {
		var n = o("react-compiler-runtime").c(29), a = t.ariaLabel, i = t.id, l = t.msg, s = t.showRing, c = t.tabIndex, m = s === void 0 ? !1 : s, p;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (p = [o("WAWebFrontendStatusGetters").getLastStatus], n[0] = p) : p = n[0];
		var _ = o("useWAWebStatusValues").useStatusValues(i, p), f = _[0], g;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (g = [o("WAWebContactGetters").getStatusMute], n[1] = g) : g = n[1];
		var h = o("useWAWebContactValues").useContactValues(t.contact.id, g), y = h[0], C = r("useWAWebIsKeyboardUser")(), b = C.isKeyboardUser, v = r("useWAWebStaticButtonA11y")(t.onClick), S = v[0], R = v[1], L = l != null ? l : f, E;
		e: {
			if (!o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled() || f == null) {
				E = null;
				break e;
			}
			if (f.statusAudienceMetadata != null) {
				E = o("WDSVars.stylex").WDSBaseColor.plum400;
				break e;
			}
			E = null;
		}
		var k = E, I;
		n[2] !== L ? (I = function() {
			if (!r("gkx")("26258") && L) {
				var e = o("WAWebStateUtils").unproxy(L);
				window.msg = e;
			}
		}, n[2] = L, n[3] = I) : I = n[3];
		var T = I, D = d.thumbSizeSmall, x;
		n[4] !== L ? (x = L ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: o("WAWebMsgGetters").getSender(L),
			theme: "status",
			size: 40
		}) : null, n[4] = L, n[5] = x) : x = n[5];
		var $ = x, P;
		n[6] !== b ? (P = (e || (e = r("stylex")))(d.container, D, d.marginTop2, b && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), n[6] = b, n[7] = P) : P = n[7];
		var N = t.role || "", M = r("gkx")("26258") ? null : T, w;
		n[8] !== t ? (w = function(n) {
			t.onClick == null || t.onClick(), n.stopPropagation(), n.preventDefault();
		}, n[8] = t, n[9] = w) : w = n[9];
		var A;
		n[10] !== k || n[11] !== i || n[12] !== m || n[13] !== y ? (A = y && !m ? null : u.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
			id: i,
			breakRing: !0,
			customUnreadRingColor: k
		}), n[10] = k, n[11] = i, n[12] = m, n[13] = y, n[14] = A) : A = n[14];
		var F;
		n[15] !== L || n[16] !== $ ? (F = u.jsx(o("WAWebStatusThumbnailComponents.react").StatusMsgThumbnail, {
			msg: L,
			thumbnailPlaceholder: $,
			size: "small"
		}), n[15] = L, n[16] = $, n[17] = F) : F = n[17];
		var O;
		return n[18] !== a || n[19] !== R || n[20] !== S || n[21] !== A || n[22] !== F || n[23] !== P || n[24] !== N || n[25] !== M || n[26] !== w || n[27] !== c ? (O = u.jsxs("div", babelHelpers.extends({ ref: S }, R, {
			tabIndex: c,
			className: P,
			"aria-label": a,
			role: N,
			onContextMenu: M,
			onClickCapture: w,
			"data-testid": "status-thumbnail",
			children: [A, F]
		})), n[18] = a, n[19] = R, n[20] = S, n[21] = A, n[22] = F, n[23] = P, n[24] = N, n[25] = M, n[26] = w, n[27] = c, n[28] = O) : O = n[28], O;
	}
	l.default = m;
}), 98);
