__d("MAWCometStickerPickerSearchResultsRootGQL.react", [
	"CometColumn.react",
	"CometColumnItem.react",
	"CometErrorBoundary.react",
	"CometPlaceholder.react",
	"CometRelay",
	"CometSpriteBase.react",
	"CometStickerPickerNullState.react",
	"CometStickerPickerStickerGrid.react",
	"DeidentifiedRelayEnvironment",
	"FBLogger",
	"FDSAspectRatioContainer.react",
	"FDSProgressIndicator.react",
	"FDSProgressRingIndeterminate.react",
	"MAWCometStickerPickerSearchResultsRootGQLQuery$Parameters",
	"MAWCometStickerPickerSearchResultsRootGQLQuery.graphql",
	"MAWLoggerUtils",
	"MAWStickerSearchDeidentifiedRelayEnvironment",
	"QPLUserFlow",
	"qpl",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useEffectEvent, p = c.useLayoutEffect, _ = c.useRef, f = c.useState, g = { sticker: {
		height: "x5yr21d",
		width: "xh8yej3",
		$$css: !0
	} }, h = r("qpl")._(25305966, "2645");
	function y(e) {
		r("FBLogger")("messenger_web_sticker_picker").warn("MAWCometStickerPickerSearchResultsRootGQL: Error fetching deidentified sticker search results: %s", e.message);
	}
	function C() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(r("CometColumn.react"), {
			align: "center",
			expanding: !0,
			verticalAlign: "center",
			children: u.jsx(r("CometColumnItem.react"), { children: u.jsx(r("FDSProgressIndicator.react"), {}) })
		}), e[0] = t) : t = e[0], t;
	}
	function b(t) {
		var a, i = o("react-compiler-runtime").c(13), l = t.notExpanding, s = t.onQuerySuccess, c = t.onSelect, p = t.queryRef, _ = o("CometRelay").usePreloadedQuery(e !== void 0 ? e : e = n("MAWCometStickerPickerSearchResultsRootGQLQuery.graphql"), p), f;
		i[0] !== s ? (f = function() {
			s == null || s();
		}, i[0] = s, i[1] = f) : f = i[1];
		var h = m(f), y;
		i[2] !== h ? (y = function() {
			h();
		}, i[2] = h, i[3] = y) : y = i[3];
		var C;
		i[4] === Symbol.for("react.memo_cache_sentinel") ? (C = [], i[4] = C) : C = i[4], d(y, C);
		var b = _ == null || (a = _.xfb_stickers_search_deidentified) == null ? void 0 : a.results;
		if (b == null || b.length === 0) {
			var S;
			return i[5] !== l ? (S = u.jsx(r("CometStickerPickerNullState.react"), { notExpanding: l }), i[5] = l, i[6] = S) : S = i[6], S;
		}
		var R;
		i[7] !== c || i[8] !== b ? (R = b.map(function(e, t) {
			var n, o, a, i, l, s, d, m, p = String((n = e.sticker_id) != null ? n : t), _ = {
				animated_uri: (o = e.animated_image_url) != null ? o : void 0,
				uri: (a = (i = e.static_thumbnail_image_url) != null ? i : e.static_thumbnail_image_fallback_url) != null ? a : void 0
			}, f = (l = e.accessibility_label) != null ? l : void 0;
			return u.jsx(r("CometErrorBoundary.react"), {
				fallback: v,
				children: u.jsx(r("FDSAspectRatioContainer.react"), {
					aspectRatio: 1,
					testid: void 0,
					children: u.jsx(r("CometSpriteBase.react"), {
						accessibilityCaption: (s = e.accessibility_label) != null ? s : "",
						cursorEnabled: !0,
						onPress: c == null ? void 0 : function(e) {
							e.preventDefault(), c({ stickerID: p }, _, f);
						},
						overlayEnabled: !0,
						showFocusOverlay: !0,
						showHoverOverlay: !0,
						src: (d = (m = _.animated_uri) != null ? m : _.uri) != null ? d : "",
						xstyle: g.sticker
					})
				})
			}, p);
		}), i[7] = c, i[8] = b, i[9] = R) : R = i[9];
		var L;
		return i[10] !== l || i[11] !== R ? (L = u.jsx(r("CometStickerPickerStickerGrid.react"), {
			notExpanding: l,
			children: R
		}), i[10] = l, i[11] = R, i[12] = L) : L = i[12], L;
	}
	function v() {
		return u.jsx(r("FDSProgressRingIndeterminate.react"), {
			color: "blue",
			size: 32
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = o("react-compiler-runtime").c(19), n = e.deidentifiedEnvironment, a = e.notExpanding, l = e.onQueryFail, s = e.onQuerySuccess, c = e.onSelect, d = e.queryRef, m;
		t[0] !== a ? (m = function() {
			return u.jsx(r("CometStickerPickerNullState.react"), { notExpanding: a });
		}, t[0] = a, t[1] = m) : m = t[1];
		var p;
		t[2] !== l ? (p = function(t) {
			y(t), l == null || l(t);
		}, t[2] = l, t[3] = p) : p = t[3];
		var _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsx(C, {}), t[4] = _) : _ = t[4];
		var f;
		t[5] !== a || t[6] !== s || t[7] !== c || t[8] !== d ? (f = d != null && u.jsx(b, {
			notExpanding: a,
			onQuerySuccess: s,
			onSelect: c,
			queryRef: d
		}), t[5] = a, t[6] = s, t[7] = c, t[8] = d, t[9] = f) : f = t[9];
		var g;
		t[10] !== f ? (g = u.jsx(r("CometPlaceholder.react"), {
			fallback: _,
			name: i.id,
			children: f
		}), t[10] = f, t[11] = g) : g = t[11];
		var h;
		t[12] !== m || t[13] !== p || t[14] !== g ? (h = u.jsx(r("CometErrorBoundary.react"), {
			fallback: m,
			onError: p,
			children: g
		}), t[12] = m, t[13] = p, t[14] = g, t[15] = h) : h = t[15];
		var v;
		return t[16] !== n || t[17] !== h ? (v = u.jsx(o("CometRelay").RelayEnvironmentProvider, {
			environment: n,
			children: h
		}), t[16] = n, t[17] = h, t[18] = v) : v = t[18], v;
	}
	function R(e) {
		var t, n, a = o("react-compiler-runtime").c(10), i = e.extraProps, l = e.props, s = l.notExpanding, c = l.onSelect, d = i == null ? void 0 : i.searchQuery, m = (t = i == null ? void 0 : i.stickerWidth) != null ? t : 128, g = (n = i == null ? void 0 : i.scale) != null ? n : 2, y = o("DeidentifiedRelayEnvironment").useDeidentifiedRelayEnvironment(o("MAWStickerSearchDeidentifiedRelayEnvironment").MAWStickerSearchDeidentifiedRelayEnvironmentConfig), C = o("CometRelay").useQueryLoader(r("MAWCometStickerPickerSearchResultsRootGQLQuery$Parameters")), b = C[0], v = C[1], R = f(null), L = R[0], E = R[1], k = _(null), I, T;
		a[0] !== L ? (I = function() {
			if (L != null) {
				var e = o("MAWLoggerUtils").createInstanceKey();
				return k.current = e, r("QPLUserFlow").start(h, { instanceKey: e }), (function() {
					k.current === e && (r("QPLUserFlow").endCancel(h, { instanceKey: e }), k.current = null);
				});
			}
		}, T = [L], a[0] = L, a[1] = I, a[2] = T) : (I = a[1], T = a[2]), p(I, T), d != null && d !== L ? (E(d), v({ request: {
			bypass_cache: !1,
			query: d,
			scale: g,
			thumbnail_width: m,
			type: "KEYWORD_SEARCH",
			width: m
		} }, { __environment: y })) : d == null && L != null && E(null);
		var D = L === d ? b : null, x, $;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (x = function(t) {
			var e = k.current;
			e != null && (r("QPLUserFlow").endFailure(h, "query_error", {
				annotations: { string: { error_message: t.message } },
				instanceKey: e
			}), k.current = null);
		}, $ = function() {
			var e = k.current;
			e != null && (r("QPLUserFlow").endSuccess(h, { instanceKey: e }), k.current = null);
		}, a[3] = x, a[4] = $) : (x = a[3], $ = a[4]);
		var P;
		return a[5] !== D || a[6] !== y || a[7] !== s || a[8] !== c ? (P = u.jsx(S, {
			deidentifiedEnvironment: y,
			notExpanding: s,
			onQueryFail: x,
			onQuerySuccess: $,
			onSelect: c,
			queryRef: D
		}), a[5] = D, a[6] = y, a[7] = s, a[8] = c, a[9] = P) : P = a[9], P;
	}
	function L(e) {
		var t = o("react-compiler-runtime").c(7), n;
		t[0] !== e.props.notExpanding ? (n = function() {
			return u.jsx(r("CometStickerPickerNullState.react"), { notExpanding: e.props.notExpanding });
		}, t[0] = e.props.notExpanding, t[1] = n) : n = t[1];
		var a;
		t[2] !== e ? (a = u.jsx(R, babelHelpers.extends({}, e)), t[2] = e, t[3] = a) : a = t[3];
		var i;
		return t[4] !== n || t[5] !== a ? (i = u.jsx(r("CometErrorBoundary.react"), {
			fallback: n,
			children: a
		}), t[4] = n, t[5] = a, t[6] = i) : i = t[6], i;
	}
	l.default = L;
}), 98);
