__d("WAWebStatusListHeader.react", [
	"fbt",
	"WAWebContactCollection",
	"WAWebCrosspostingIcons.react",
	"WAWebKeyboardTabUtils",
	"WAWebModalManager",
	"WAWebStatusAvatarWithPlusBadge.react",
	"WAWebStatusCollection",
	"WAWebStatusLastPostPreview.react",
	"WAWebStatusPlusBadge.react",
	"WAWebStatusPostingDropdown.react",
	"WAWebStatusThumbnail.react",
	"WAWebStatusViewer.react",
	"WAWebUnstyledButton.react",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumStatusCreationEntryPoint",
	"WAWebWamEnumStatusRowSection",
	"WDSFocusStateStyles",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebEventTargetValue",
	"useWAWebFocusState",
	"useWAWebListener",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = d.useState, f = {
		panelHeader: {
			display: "x78zum5",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			flexDirection: "x1q0g3np",
			alignItems: "x6s0dn4",
			justifyContent: "x1qughib",
			width: "xh8yej3",
			height: "xwnsf4a",
			textAlign: "x1yc453h",
			$$css: !0
		},
		clickable: {
			cursor: "x1ypdohk",
			backgroundColor: "x1ubxc9n",
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			marginInlineStart: "x1hm9lzh",
			marginInlineEnd: "x1sa5p1d",
			width: "xnlsq7q",
			$$css: !0
		},
		headerText: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			justifyContent: "x1qughib",
			minWidth: "x9hgts1",
			height: "xc9qbxq",
			marginInlineEnd: "x11t971q",
			$$css: !0
		},
		thumbnailBadgePosition: {
			bottom: "xqo3gd",
			insetInlineEnd: "x1bv8kjd",
			left: null,
			right: null,
			$$css: !0
		}
	};
	function g(t) {
		var n, a = o("react-compiler-runtime").c(58), i = t.sessionIdRef, l = r("useWAWebFocusState")(), u = l[0], d = l[1], m = p(null), g = _(y), C = g[0], b = g[1], v;
		a[0] !== (C == null ? void 0 : C.msgs) ? (v = function() {
			return C == null ? void 0 : C.msgs.last();
		}, a[0] = C == null ? void 0 : C.msgs, a[1] = v) : v = a[1];
		var S = _(v), R = S[0], L = S[1], E;
		a[2] !== (R == null ? void 0 : R.crosspostingInfo) ? (E = function() {
			return R == null ? void 0 : R.crosspostingInfo;
		}, a[2] = R == null ? void 0 : R.crosspostingInfo, a[3] = E) : E = a[3];
		var k = r("useWAWebEventTargetValue")(R, "change:crosspostingInfo", E), I;
		a[4] === Symbol.for("react.memo_cache_sentinel") ? (I = function() {
			var e;
			b(o("WAWebStatusCollection").StatusCollection.getMyStatus()), L((e = o("WAWebStatusCollection").StatusCollection.getMyStatus()) == null ? void 0 : e.msgs.last());
		}, a[4] = I) : I = a[4];
		var T = I;
		o("useWAWebListener").useListener(o("WAWebStatusCollection").StatusCollection, "add remove bulk_add sort change:msgsChanged change:unreadCount", T), o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, "change:statusMute", T);
		var D, x, $;
		C && ($ = C.msgs);
		var P;
		a[5] !== C || a[6] !== i ? (P = function() {
			var e = C == null ? void 0 : C.msgs;
			C && e != null && e.length && o("WAWebModalManager").ModalManager.openMedia(c.jsx(r("WAWebStatusViewer.react"), {
				initialStatus: C,
				initialStatusMsg: void 0,
				closeStatusViewer: h,
				sessionId: i == null ? void 0 : i.current,
				rowIdx: 0,
				rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.MY_STATUS,
				continuousPlay: !0
			}), {
				transition: "status-modal",
				focusType: { type: o("WAWebKeyboardTabUtils").FocusType.CUSTOM }
			});
		}, a[5] = C, a[6] = i, a[7] = P) : P = a[7];
		var N = P, M, w;
		a[8] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			""
		), a[8] = w) : w = a[8];
		var A = w, F;
		a[9] === Symbol.for("react.memo_cache_sentinel") ? (F = {
			targetRef: m,
			menu: c.jsx(o("WAWebStatusPostingDropdown.react").AddStatusMenu, { entryPoint: o("WAWebWamEnumStatusCreationEntryPoint").STATUS_CREATION_ENTRY_POINT.STATUS_TAB_SELF_POG }),
			dismissable: !0
		}, a[9] = F) : F = a[9];
		var O = r("useWDSMenu")(F), B = O.closeMenu, W = O.isMenuOpen, q = O.menuPortal, U = O.openMenu, V;
		a[10] !== B || a[11] !== W || a[12] !== U ? (V = function() {
			W ? B() : U();
		}, a[10] = B, a[11] = W, a[12] = U, a[13] = V) : V = a[13];
		var H = V, G;
		a[14] !== H ? (G = function(t) {
			t == null || t.stopPropagation(), H();
		}, a[14] = H, a[15] = G) : G = a[15];
		var z = G;
		if (C && (n = $) != null && n.length) {
			var j;
			a[16] === Symbol.for("react.memo_cache_sentinel") ? (j = { className: "x1n2onr6 x3nfvp2" }, a[16] = j) : j = a[16];
			var K;
			a[17] !== z || a[18] !== C.contact || a[19] !== C.id ? (K = c.jsx(r("WAWebStatusThumbnail.react"), {
				tabIndex: -1,
				ariaLabel: A,
				id: C.id,
				contact: C.contact,
				onClick: z
			}), a[17] = z, a[18] = C.contact, a[19] = C.id, a[20] = K) : K = a[20];
			var Q;
			a[21] !== z ? (Q = c.jsx(r("WAWebStatusPlusBadge.react"), {
				anchorRef: m,
				positionXstyle: f.thumbnailBadgePosition,
				onClick: z
			}), a[21] = z, a[22] = Q) : Q = a[22];
			var X;
			a[23] !== K || a[24] !== Q ? (X = c.jsxs("div", babelHelpers.extends({}, j, { children: [K, Q] })), a[23] = K, a[24] = Q, a[25] = X) : X = a[25], D = X;
			var Y;
			a[26] === Symbol.for("react.memo_cache_sentinel") ? (Y = { className: "x78zum5 x1q0g3np x6s0dn4" }, a[26] = Y) : Y = a[26];
			var J;
			a[27] !== R ? (J = r("nullthrows")(R), a[27] = R, a[28] = J) : J = a[28];
			var Z;
			a[29] !== J ? (Z = c.jsx(r("WAWebStatusLastPostPreview.react"), { msg: J }), a[29] = J, a[30] = Z) : Z = a[30];
			var ee;
			a[31] !== k ? (ee = k != null ? c.jsx(r("WAWebCrosspostingIcons.react"), {
				crosspostingInfo: k,
				testidPrefix: "status-header"
			}) : null, a[31] = k, a[32] = ee) : ee = a[32];
			var te;
			a[33] !== Z || a[34] !== ee ? (te = c.jsxs("div", babelHelpers.extends({}, Y, { children: [Z, ee] })), a[33] = Z, a[34] = ee, a[35] = te) : te = a[35], x = te, M = N;
		} else {
			var ne;
			a[36] === Symbol.for("react.memo_cache_sentinel") ? (ne = c.jsx(r("WAWebStatusAvatarWithPlusBadge.react"), {
				anchorRef: m,
				id: o("WAWebUserPrefsMeUser").getMeUserOrThrow()
			}), a[36] = ne) : ne = a[36], D = ne;
			var re;
			a[37] === Symbol.for("react.memo_cache_sentinel") ? (re = s._(
				/*BTDS*/
				""
			), a[37] = re) : re = a[37];
			var oe = re, ae;
			a[38] === Symbol.for("react.memo_cache_sentinel") ? (ae = c.jsx("span", {
				"data-testid": "status-no-updates",
				className: "x1nxh6w3 xhslqc4",
				children: oe
			}), a[38] = ae) : ae = a[38], x = ae, M = H;
		}
		var ie;
		a[39] === Symbol.for("react.memo_cache_sentinel") ? (ie = c.jsx("span", {
			"data-testid": "my-status",
			className: "x1jchvi3",
			children: s._(
				/*BTDS*/
				""
			)
		}), a[39] = ie) : ie = a[39];
		var le = ie, se;
		a[40] === Symbol.for("react.memo_cache_sentinel") ? (se = [f.panelHeader, f.clickable], a[40] = se) : se = a[40];
		var ue = M, ce, de;
		a[41] === Symbol.for("react.memo_cache_sentinel") ? (ce = { className: "x1n2onr6" }, de = { className: "x78zum5 x1q0g3np x6s0dn4 xl56j7k x13zx6y x1peatla x17t9dm2" }, a[41] = ce, a[42] = de) : (ce = a[41], de = a[42]);
		var me;
		a[43] !== D ? (me = c.jsx("div", babelHelpers.extends({}, ce, { children: c.jsx("div", babelHelpers.extends({}, de, { children: D })) })), a[43] = D, a[44] = me) : me = a[44];
		var pe;
		a[45] !== d ? (pe = (e || (e = r("stylex"))).props(f.headerText, d && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent), a[45] = d, a[46] = pe) : pe = a[46];
		var _e;
		a[47] !== x || a[48] !== pe ? (_e = c.jsxs("div", babelHelpers.extends({}, pe, { children: [le, x] })), a[47] = x, a[48] = pe, a[49] = _e) : _e = a[49];
		var fe;
		a[50] !== u || a[51] !== M || a[52] !== me || a[53] !== _e ? (fe = c.jsxs(r("WAWebUnstyledButton.react"), {
			xstyle: se,
			onClick: ue,
			ref: u,
			testid: "status-header",
			children: [me, _e]
		}), a[50] = u, a[51] = M, a[52] = me, a[53] = _e, a[54] = fe) : fe = a[54];
		var ge;
		a[55] !== q || a[56] !== fe ? (ge = c.jsxs(c.Fragment, { children: [fe, q] }), a[55] = q, a[56] = fe, a[57] = ge) : ge = a[57];
		var he = ge;
		return he;
	}
	function h() {
		o("WAWebModalManager").ModalManager.closeMedia();
	}
	function y() {
		return o("WAWebStatusCollection").StatusCollection.getMyStatus();
	}
	l.default = g;
}), 226);
