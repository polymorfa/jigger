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
		var t, n, a = e.defaultSearchText, i = e.displayCache, l = e.displayLocation, c = e.onChange, y = e.onDisplayCache, C = e.onFocusNext, b = e.onFocusPrev, v = e.onGif, S = e.ref, R = e.size, L = p(), E = p(), k = p(), I = p(), T = p(0), D = p(!1), x = p(0), $ = p(0), P = {
			scrollTop: (t = i == null ? void 0 : i.scrollTop) != null ? t : 0,
			showSearchInput: (n = i == null ? void 0 : i.showSearchInput) != null ? n : !0,
			selectedSectionId: i == null ? void 0 : i.selectedSectionId
		}, N = _(!P.scrollTop), M = N[0], w = N[1], A = _(a != null ? a : ""), F = A[0], O = A[1], B = _(P.showSearchInput), W = B[0], q = B[1], U = _(P.selectedSectionId || o("WAWebGifPanelGifSections").SECTIONS.TRENDING), V = U[0], H = U[1], G = _(!1), z = G[0], j = G[1], K = _(-1), Q = K[0], X = K[1], Y = p(new Map()), J = function(t) {
			k.current ? k.current.focus() : (D.current = !0, q(!0));
		};
		m(S, function() {
			return {
				getElement: function() {
					return L.current;
				},
				focusSearchInput: function(t) {
					J(t);
				},
				restoreFocus: function(t) {
					J(t);
				}
			};
		});
		var Z = r("useWAWebUiIdle")();
		d(function() {
			if ($.current === 0) {
				$.current = Date.now();
				var e = i == null ? void 0 : i.scrollTop, t = I.current;
				t && e != null && e !== 0 && (t.scrollTop = e), Z(function() {
					J(), new (o("WAWebWebcEmojiOpenWamEvent")).WebcEmojiOpenWamEvent({ webcEmojiOpenTab: "GIF" }).commit(), w(!1);
				});
			}
		}, [i == null ? void 0 : i.scrollTop, Z]);
		var ee = r("useWAWebThrottledCallback")(function() {
			var e, t = I.current;
			if (V == null && F && t && E.current) {
				E.current.animateOnScroll(t);
				return;
			}
			if (!(Date.now() - $.current < o("WAWebEmojiPickerConstants").SCROLL_CLICK_TIME_GAP) && (M && w(!1), !!t)) {
				var n = t.scrollTop, r = T.current - n, a = Math.abs(r) > o("WAWebEmojiPickerConstants").INPUT_BAR_SCROLL_SENSITIVITY;
				D.current = Math.abs(r) > o("WAWebEmojiPickerConstants").INPUT_BAR_SCROLL_FAST, r < 0 ? W && (n > o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT && a || T.current < o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT && n >= o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT) && q(!1) : W || (a || n < o("WAWebEmojiPickerConstants").INPUT_SHOW_POINT) && q(!0), (e = E.current) == null || e.animateOnScroll(t), T.current = n;
			}
		}, o("WAWebEmojiPickerConstants").SCROLL_THROTTLE_TIME);
		r("useWAWebOnUnmount")(function() {
			var e, t = I.current;
			y({
				scrollTop: (e = t == null ? void 0 : t.scrollTop) != null ? e : 0,
				showSearchInput: W,
				selectedSectionId: V
			});
		});
		var te = function(t) {
			var e = I.current;
			e && t.offsetTop - e.scrollTop < o("WAWebEmojiPickerConstants").INPUT_BAR_TOTAL_HEIGHT && o("WAWebDomScroll").scrollIntoView(t, !0, e);
		}, ne = function(t) {
			if (I.current != null) {
				if (F.length === 0 && t) {
					var e;
					x.current = I.current.scrollTop, (e = I.current) == null || e.scrollTo(0, 0);
				} else if (F && t.length === 0 && x.current > 0) {
					var n;
					(n = I.current) == null || n.scrollTo(0, x.current);
				}
				c == null || c(t), O(t), j(!1);
			}
		}, re = function(t) {
			var e, n = V != null ? V : f[0];
			(e = Y.current.get(n)) == null || e.focus(), X(f.indexOf(V));
		}, oe = function(t) {
			o("WAWebStopEvent").stopEvent(t), J();
		}, ae = function(t) {
			var e = t == null ? void 0 : t.nativeEvent.target, n = e instanceof HTMLElement && !!E.current && E.current.contains(e);
			n && (J(), o("WAWebStopEvent").stopEvent(t));
		}, ie = function(t) {
			var e, n = t == null ? void 0 : t.nativeEvent.target;
			if (n instanceof Node && (e = E.current) != null && e.contains(n)) {
				var r;
				(r = E.current) == null || r.initSelection(!1), o("WAWebStopEvent").stopEvent(t);
			}
		}, le = function(t) {
			if (o("WAWebStopEvent").stopEvent(t), !!k.current) {
				if (document.activeElement !== k.current) return J();
				C();
			}
		}, se = function(t) {
			if (o("WAWebStopEvent").stopEvent(t), !!k.current) {
				if (document.activeElement !== k.current) return J();
				b();
			}
		}, ue = function(t) {
			var e;
			q(!0), t !== o("WAWebGifPanelGifSections").SECTIONS.FAVORITES && H(t), O(t === o("WAWebGifPanelGifSections").SECTIONS.FAVORITES ? "" : t), j(!0), c == null || c(""), (e = k.current) == null || e.focus();
		}, ce = function(t) {
			var e = f[Q];
			X(-1), ue(e);
		}, de = function(t) {
			var e, n = (Q + 1) % f.length, r = f[n];
			(e = Y.current.get(r)) == null || e.focus(), X(n);
		}, me = function(t) {
			var e, n = (f.length + Q - 1) % f.length, r = f[n];
			(e = Y.current.get(r)) == null || e.focus(), X(n);
		}, pe = function(t) {
			J(), X(-1);
		}, _e = l === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel, fe = function(t) {
			if (t.key === "ArrowUp") return re(), !1;
			if (t.key === "ArrowDown") {
				var e;
				return (e = E.current) == null || e.initSelection(), !1;
			}
		}, ge = r("nullthrows")(v);
		return u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: L,
			handlers: {
				tab: le,
				"shift+tab": se,
				up: ae,
				down: ie
			},
			className: {
				0: "",
				2: "x1mf5yl2 x1cipttk x6ikm8r x10wlt62",
				1: "x1kaczmr",
				3: "x1cipttk x6ikm8r x10wlt62 x1kaczmr"
			}[!!(_e && R !== o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL) << 1 | !!(_e && R !== o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL) << 0],
			children: [u.jsx(r("WAWebPanelsMenu.react"), {
				selectedSectionId: V,
				sectionIds: f,
				renderSectionTab: function(t, n) {
					var e = function(n) {
						Y.current.set(t, n);
					};
					return u.jsx(r("WAWebGifPanelMenuSectionTab.react"), {
						onClick: ue,
						sectionId: t,
						selected: n,
						showFocusIndicator: Q !== -1,
						displayLocation: l,
						ref: e
					}, t);
				},
				displayLocation: l,
				showTabHighlight: !(a != null && a.trim()),
				onFocusPrev: me,
				onFocusNext: de,
				onEnter: ce,
				onFocusLeave: pe
			}), u.jsx("div", {
				className: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp x106tr1i",
				children: u.jsxs("div", babelHelpers.extends({}, {
					0: { className: "x1n2onr6 xhjsbib x5yr21d" },
					2: { className: "x1n2onr6 x5yr21d x16w0wmm" },
					1: { className: "x1n2onr6 xhjsbib x5yr21d xfl633f" },
					3: { className: "x1n2onr6 x5yr21d x16w0wmm xfl633f" }
				}[!!_e << 1 | !!_e << 0], {
					onMouseDown: oe,
					children: [u.jsx("div", {
						onMouseDown: o("WAWebStopEvent").stopPropagation,
						onMouseUp: o("WAWebStopEvent").stopPropagation,
						onFocus: o("WAWebStopEvent").stopPropagation,
						children: u.jsx(r("WDSSearchBar.react"), {
							hintText: s._(
								/*BTDS*/
								"",
								[s._param("service", g)]
							),
							onValueChange: ne,
							onKeyDown: fe,
							ref: k,
							value: F,
							xstyle: h.searchBarWrapper,
							testid: "gif_panel_search_bar"
						})
					}), u.jsx("div", babelHelpers.extends({}, {
						0: { className: "x1n2onr6 x9f619 xl300f8 xexx8yu x1zti42 x4tejmo x1rife3k" },
						1: { className: "x1n2onr6 x9f619 xexx8yu x1zti42 x4tejmo x1rife3k xjifopm" }
					}[!!(_e && R !== o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL) << 0], {
						onScroll: ee,
						ref: I,
						children: u.jsx(o("WAWebGifPanelGifSearch.react").GifSearch, {
							displayLocation: l,
							ref: E,
							onGif: ge,
							searchText: (F || "").replace(/^\s+/, ""),
							scrollGifIntoViewIfNeeded: te,
							selectedSectionId: V
						})
					}))]
				}))
			})]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
