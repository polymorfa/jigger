__d("WAWebGifPanel.react", [
	"fbt",
	"WAWebDomScroll",
	"WAWebEmojiPickerConstants",
	"WAWebExpressionsPanelPicker.react",
	"WAWebGifPanelGifSearch.react",
	"WAWebGifPanelGifSections",
	"WAWebGifPanelMenuSectionTab.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebPanelsDisplayLocation",
	"WAWebPanelsMenu.react",
	"WAWebStopEvent",
	"WAWebWebcEmojiOpenWamEvent",
	"WDSSearchBar.react",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebOnUnmount",
	"useWAWebThrottledCallback",
	"useWAWebUiIdle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useImperativeHandle, p = c.useRef, _ = c.useState, f = o("WAWebGifPanelGifSections").ORDERED_TAB_SECTION_IDS.filter(function(e) {
		return e !== o("WAWebGifPanelGifSections").SECTIONS.FAVORITES;
	}), g = "GIPHY", h = { searchBarWrapper: {
		paddingTop: "x1y1aw1k",
		paddingBottom: "xwib8y2",
		paddingInlineStart: "xf7dkkf",
		paddingInlineEnd: "xv54qhq",
		$$css: !0
	} };
	function y(e) {
		var t, n, a = o("react-compiler-runtime").c(101), i = e.defaultSearchText, l = e.displayCache, c = e.displayLocation, y = e.onChange, C = e.onDisplayCache, b = e.onFocusNext, v = e.onFocusPrev, S = e.onGif, R = e.ref, L = e.size, E = p(), k = p(), I = p(), T = p(), D = p(0), x = p(!1), $ = p(0), P = p(0), N = (t = l == null ? void 0 : l.scrollTop) != null ? t : 0, M = (n = l == null ? void 0 : l.showSearchInput) != null ? n : !0, w = l == null ? void 0 : l.selectedSectionId, A;
		a[0] !== N || a[1] !== M || a[2] !== w ? (A = {
			scrollTop: N,
			showSearchInput: M,
			selectedSectionId: w
		}, a[0] = N, a[1] = M, a[2] = w, a[3] = A) : A = a[3];
		var F = A, O = _(!F.scrollTop), B = O[0], W = O[1], q = _(i != null ? i : ""), U = q[0], V = q[1], H = _(F.showSearchInput), G = H[0], z = H[1], j = _(F.selectedSectionId || o("WAWebGifPanelGifSections").SECTIONS.TRENDING), K = j[0], Q = j[1], X = _(!1), Y = X[1], J = _(-1), Z = J[0], ee = J[1], te;
		a[4] === Symbol.for("react.memo_cache_sentinel") ? (te = new Map(), a[4] = te) : te = a[4];
		var ne = p(te), re;
		a[5] === Symbol.for("react.memo_cache_sentinel") ? (re = function(t) {
			I.current ? I.current.focus() : (x.current = !0, z(!0));
		}, a[5] = re) : re = a[5];
		var oe = re, ae;
		a[6] === Symbol.for("react.memo_cache_sentinel") ? (ae = function() {
			return {
				getElement: function() {
					return E.current;
				},
				focusSearchInput: function(t) {
					oe(t);
				},
				restoreFocus: function(t) {
					oe(t);
				}
			};
		}, a[6] = ae) : ae = a[6], m(R, ae);
		var ie = r("useWAWebUiIdle")(), le;
		a[7] !== (l == null ? void 0 : l.scrollTop) || a[8] !== ie ? (le = function() {
			if (P.current === 0) {
				P.current = Date.now();
				var e = l == null ? void 0 : l.scrollTop, t = T.current;
				t && e != null && e !== 0 && (t.scrollTop = e), ie(function() {
					oe(), new (o("WAWebWebcEmojiOpenWamEvent")).WebcEmojiOpenWamEvent({ webcEmojiOpenTab: "GIF" }).commit(), W(!1);
				});
			}
		}, a[7] = l == null ? void 0 : l.scrollTop, a[8] = ie, a[9] = le) : le = a[9];
		var se = l == null ? void 0 : l.scrollTop, ue;
		a[10] !== se || a[11] !== ie ? (ue = [se, ie], a[10] = se, a[11] = ie, a[12] = ue) : ue = a[12], d(le, ue);
		var ce;
		a[13] !== B || a[14] !== U || a[15] !== K || a[16] !== G ? (ce = function() {
			var e, t = T.current;
			if (K == null && U && t && k.current) {
				k.current.animateOnScroll(t);
				return;
			}
			if (!(Date.now() - P.current < o("WAWebEmojiPickerConstants").SCROLL_CLICK_TIME_GAP) && (B && W(!1), !!t)) {
				var n = t.scrollTop, r = D.current - n, a = Math.abs(r) > o("WAWebEmojiPickerConstants").INPUT_BAR_SCROLL_SENSITIVITY;
				x.current = Math.abs(r) > o("WAWebEmojiPickerConstants").INPUT_BAR_SCROLL_FAST, r < 0 ? G && (n > o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT && a || D.current < o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT && n >= o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT) && z(!1) : G || (a || n < o("WAWebEmojiPickerConstants").INPUT_SHOW_POINT) && z(!0), (e = k.current) == null || e.animateOnScroll(t), D.current = n;
			}
		}, a[13] = B, a[14] = U, a[15] = K, a[16] = G, a[17] = ce) : ce = a[17];
		var de = r("useWAWebThrottledCallback")(ce, o("WAWebEmojiPickerConstants").SCROLL_THROTTLE_TIME), me;
		a[18] !== C || a[19] !== K || a[20] !== G ? (me = function() {
			var e, t = T.current;
			C({
				scrollTop: (e = t == null ? void 0 : t.scrollTop) != null ? e : 0,
				showSearchInput: G,
				selectedSectionId: K
			});
		}, a[18] = C, a[19] = K, a[20] = G, a[21] = me) : me = a[21], r("useWAWebOnUnmount")(me);
		var pe;
		a[22] === Symbol.for("react.memo_cache_sentinel") ? (pe = function(t) {
			var e = T.current;
			e && t.offsetTop - e.scrollTop < o("WAWebEmojiPickerConstants").INPUT_BAR_TOTAL_HEIGHT && o("WAWebDomScroll").scrollIntoView(t, !0, e);
		}, a[22] = pe) : pe = a[22];
		var _e = pe, fe;
		a[23] !== y || a[24] !== U ? (fe = function(t) {
			if (T.current != null) {
				if (U.length === 0 && t) {
					var e;
					$.current = T.current.scrollTop, (e = T.current) == null || e.scrollTo(0, 0);
				} else if (U && t.length === 0 && $.current > 0) {
					var n;
					(n = T.current) == null || n.scrollTo(0, $.current);
				}
				y == null || y(t), V(t), Y(!1);
			}
		}, a[23] = y, a[24] = U, a[25] = fe) : fe = a[25];
		var ge = fe, he;
		a[26] !== K ? (he = function(t) {
			var e, n = K != null ? K : f[0];
			(e = ne.current.get(n)) == null || e.focus(), ee(f.indexOf(K));
		}, a[26] = K, a[27] = he) : he = a[27];
		var ye = he, Ce;
		a[28] === Symbol.for("react.memo_cache_sentinel") ? (Ce = function(t) {
			o("WAWebStopEvent").stopEvent(t), oe();
		}, a[28] = Ce) : Ce = a[28];
		var be = Ce, ve;
		a[29] === Symbol.for("react.memo_cache_sentinel") ? (ve = function(t) {
			var e = t == null ? void 0 : t.nativeEvent.target, n = e instanceof HTMLElement && !!k.current && k.current.contains(e);
			n && (oe(), o("WAWebStopEvent").stopEvent(t));
		}, a[29] = ve) : ve = a[29];
		var Se = ve, Re;
		a[30] === Symbol.for("react.memo_cache_sentinel") ? (Re = function(t) {
			var e, n = t == null ? void 0 : t.nativeEvent.target;
			if (n instanceof Node && (e = k.current) != null && e.contains(n)) {
				var r;
				(r = k.current) == null || r.initSelection(!1), o("WAWebStopEvent").stopEvent(t);
			}
		}, a[30] = Re) : Re = a[30];
		var Le = Re, Ee;
		a[31] !== b ? (Ee = function(t) {
			if (o("WAWebStopEvent").stopEvent(t), !!I.current) {
				if (document.activeElement !== I.current) return oe();
				b();
			}
		}, a[31] = b, a[32] = Ee) : Ee = a[32];
		var ke = Ee, Ie;
		a[33] !== v ? (Ie = function(t) {
			if (o("WAWebStopEvent").stopEvent(t), !!I.current) {
				if (document.activeElement !== I.current) return oe();
				v();
			}
		}, a[33] = v, a[34] = Ie) : Ie = a[34];
		var Te = Ie, De;
		a[35] !== y ? (De = function(t) {
			var e;
			z(!0), t !== o("WAWebGifPanelGifSections").SECTIONS.FAVORITES && Q(t), V(t === o("WAWebGifPanelGifSections").SECTIONS.FAVORITES ? "" : t), Y(!0), y == null || y(""), (e = I.current) == null || e.focus();
		}, a[35] = y, a[36] = De) : De = a[36];
		var xe = De, $e;
		a[37] !== Z || a[38] !== xe ? ($e = function(t) {
			var e = f[Z];
			ee(-1), xe(e);
		}, a[37] = Z, a[38] = xe, a[39] = $e) : $e = a[39];
		var Pe = $e, Ne;
		a[40] !== Z ? (Ne = function(t) {
			var e, n = (Z + 1) % f.length, r = f[n];
			(e = ne.current.get(r)) == null || e.focus(), ee(n);
		}, a[40] = Z, a[41] = Ne) : Ne = a[41];
		var Me = Ne, we;
		a[42] !== Z ? (we = function(t) {
			var e, n = (f.length + Z - 1) % f.length, r = f[n];
			(e = ne.current.get(r)) == null || e.focus(), ee(n);
		}, a[42] = Z, a[43] = we) : we = a[43];
		var Ae = we, Fe;
		a[44] === Symbol.for("react.memo_cache_sentinel") ? (Fe = function(t) {
			oe(), ee(-1);
		}, a[44] = Fe) : Fe = a[44];
		var Oe = Fe, Be = c === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel, We;
		a[45] !== ye ? (We = function(t) {
			if (t.key === "ArrowUp") return ye(), !1;
			if (t.key === "ArrowDown") {
				var e;
				return (e = k.current) == null || e.initSelection(), !1;
			}
		}, a[45] = ye, a[46] = We) : We = a[46];
		var qe = We, Ue;
		a[47] !== S ? (Ue = r("nullthrows")(S), a[47] = S, a[48] = Ue) : Ue = a[48];
		var Ve = Ue, He;
		a[49] !== Te || a[50] !== ke ? (He = {
			tab: ke,
			"shift+tab": Te,
			up: Se,
			down: Le
		}, a[49] = Te, a[50] = ke, a[51] = He) : He = a[51];
		var Ge;
		a[52] !== Be || a[53] !== L ? (Ge = {
			0: "",
			2: "x1mf5yl2 x1cipttk x6ikm8r x10wlt62",
			1: "x1kaczmr",
			3: "x1cipttk x6ikm8r x10wlt62 x1kaczmr"
		}[!!(Be && L !== o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL) << 1 | !!(Be && L !== o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL) << 0], a[52] = Be, a[53] = L, a[54] = Ge) : Ge = a[54];
		var ze;
		a[55] !== c || a[56] !== Z || a[57] !== xe ? (ze = function(t, n) {
			var e = function(n) {
				ne.current.set(t, n);
			};
			return u.jsx(r("WAWebGifPanelMenuSectionTab.react"), {
				onClick: xe,
				sectionId: t,
				selected: n,
				showFocusIndicator: Z !== -1,
				displayLocation: c,
				ref: e
			}, t);
		}, a[55] = c, a[56] = Z, a[57] = xe, a[58] = ze) : ze = a[58];
		var je;
		a[59] !== i ? (je = i == null ? void 0 : i.trim(), a[59] = i, a[60] = je) : je = a[60];
		var Ke = !je, Qe;
		a[61] !== c || a[62] !== Pe || a[63] !== Me || a[64] !== Ae || a[65] !== K || a[66] !== ze || a[67] !== Ke ? (Qe = u.jsx(r("WAWebPanelsMenu.react"), {
			selectedSectionId: K,
			sectionIds: f,
			renderSectionTab: ze,
			displayLocation: c,
			showTabHighlight: Ke,
			onFocusPrev: Ae,
			onFocusNext: Me,
			onEnter: Pe,
			onFocusLeave: Oe
		}), a[61] = c, a[62] = Pe, a[63] = Me, a[64] = Ae, a[65] = K, a[66] = ze, a[67] = Ke, a[68] = Qe) : Qe = a[68];
		var Xe;
		a[69] === Symbol.for("react.memo_cache_sentinel") ? (Xe = { className: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp x106tr1i" }, a[69] = Xe) : Xe = a[69];
		var Ye;
		a[70] !== Be ? (Ye = {
			0: { className: "x1n2onr6 xhjsbib x5yr21d" },
			2: { className: "x1n2onr6 x5yr21d x16w0wmm" },
			1: { className: "x1n2onr6 xhjsbib x5yr21d xfl633f" },
			3: { className: "x1n2onr6 x5yr21d x16w0wmm xfl633f" }
		}[!!Be << 1 | !!Be << 0], a[70] = Be, a[71] = Ye) : Ye = a[71];
		var Je;
		a[72] === Symbol.for("react.memo_cache_sentinel") ? (Je = s._(
			/*BTDS*/
			"",
			[s._param("service", g)]
		), a[72] = Je) : Je = a[72];
		var Ze;
		a[73] !== qe || a[74] !== ge || a[75] !== U ? (Ze = u.jsx("div", {
			onMouseDown: o("WAWebStopEvent").stopPropagation,
			onMouseUp: o("WAWebStopEvent").stopPropagation,
			onFocus: o("WAWebStopEvent").stopPropagation,
			children: u.jsx(r("WDSSearchBar.react"), {
				hintText: Je,
				onValueChange: ge,
				onKeyDown: qe,
				ref: I,
				value: U,
				xstyle: h.searchBarWrapper,
				testid: "gif_panel_search_bar"
			})
		}), a[73] = qe, a[74] = ge, a[75] = U, a[76] = Ze) : Ze = a[76];
		var et;
		a[77] !== Be || a[78] !== L ? (et = {
			0: { className: "x1n2onr6 x9f619 xl300f8 xexx8yu x1zti42 x4tejmo x1rife3k" },
			1: { className: "x1n2onr6 x9f619 xexx8yu x1zti42 x4tejmo x1rife3k xjifopm" }
		}[!!(Be && L !== o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL) << 0], a[77] = Be, a[78] = L, a[79] = et) : et = a[79];
		var tt = U || "", nt;
		if (a[80] !== tt) {
			var rt;
			a[82] === Symbol.for("react.memo_cache_sentinel") ? (rt = /^\s+/, a[82] = rt) : rt = a[82], nt = tt.replace(rt, ""), a[80] = tt, a[81] = nt;
		} else nt = a[81];
		var ot;
		a[83] !== c || a[84] !== Ve || a[85] !== K || a[86] !== nt ? (ot = u.jsx(o("WAWebGifPanelGifSearch.react").GifSearch, {
			displayLocation: c,
			ref: k,
			onGif: Ve,
			searchText: nt,
			scrollGifIntoViewIfNeeded: _e,
			selectedSectionId: K
		}), a[83] = c, a[84] = Ve, a[85] = K, a[86] = nt, a[87] = ot) : ot = a[87];
		var at;
		a[88] !== de || a[89] !== et || a[90] !== ot ? (at = u.jsx("div", babelHelpers.extends({}, et, {
			onScroll: de,
			ref: T,
			children: ot
		})), a[88] = de, a[89] = et, a[90] = ot, a[91] = at) : at = a[91];
		var it;
		a[92] !== Ye || a[93] !== Ze || a[94] !== at ? (it = u.jsx("div", babelHelpers.extends({}, Xe, { children: u.jsxs("div", babelHelpers.extends({}, Ye, {
			onMouseDown: be,
			children: [Ze, at]
		})) })), a[92] = Ye, a[93] = Ze, a[94] = at, a[95] = it) : it = a[95];
		var lt;
		return a[96] !== He || a[97] !== Ge || a[98] !== Qe || a[99] !== it ? (lt = u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: E,
			handlers: He,
			className: Ge,
			children: [Qe, it]
		}), a[96] = He, a[97] = Ge, a[98] = Qe, a[99] = it, a[100] = lt) : lt = a[100], lt;
	}
	l.default = y;
}), 226);
