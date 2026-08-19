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
	"react"
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
		return u.jsx(r("CometColumn.react"), {
			align: "center",
			expanding: !0,
			verticalAlign: "center",
			children: u.jsx(r("CometColumnItem.react"), { children: u.jsx(r("FDSProgressIndicator.react"), {}) })
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(t) {
		var a, i = t.notExpanding, l = t.onQuerySuccess, s = t.onSelect, c = t.queryRef, p = o("CometRelay").usePreloadedQuery(e !== void 0 ? e : e = n("MAWCometStickerPickerSearchResultsRootGQLQuery.graphql"), c), _ = m(function() {
			l == null || l();
		});
		d(function() {
			_();
		}, []);
		var f = p == null || (a = p.xfb_stickers_search_deidentified) == null ? void 0 : a.results;
		return f == null || f.length === 0 ? u.jsx(r("CometStickerPickerNullState.react"), { notExpanding: i }) : u.jsx(r("CometStickerPickerStickerGrid.react"), {
			notExpanding: i,
			children: f.map(function(e, t) {
				var n, o, a, i, l, c, d, m, p = String((n = e.sticker_id) != null ? n : t), _ = {
					animated_uri: (o = e.animated_image_url) != null ? o : void 0,
					uri: (a = (i = e.static_thumbnail_image_url) != null ? i : e.static_thumbnail_image_fallback_url) != null ? a : void 0
				}, f = (l = e.accessibility_label) != null ? l : void 0;
				return u.jsx(r("CometErrorBoundary.react"), {
					fallback: function() {
						return u.jsx(r("FDSProgressRingIndeterminate.react"), {
							color: "blue",
							size: 32
						});
					},
					children: u.jsx(r("FDSAspectRatioContainer.react"), {
						aspectRatio: 1,
						testid: void 0,
						children: u.jsx(r("CometSpriteBase.react"), {
							accessibilityCaption: (c = e.accessibility_label) != null ? c : "",
							cursorEnabled: !0,
							onPress: s == null ? void 0 : function(e) {
								e.preventDefault(), s({ stickerID: p }, _, f);
							},
							overlayEnabled: !0,
							showFocusOverlay: !0,
							showHoverOverlay: !0,
							src: (d = (m = _.animated_uri) != null ? m : _.uri) != null ? d : "",
							xstyle: g.sticker
						})
					})
				}, p);
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.deidentifiedEnvironment, n = e.notExpanding, a = e.onQueryFail, l = e.onQuerySuccess, s = e.onSelect, c = e.queryRef;
		return u.jsx(o("CometRelay").RelayEnvironmentProvider, {
			environment: t,
			children: u.jsx(r("CometErrorBoundary.react"), {
				fallback: function() {
					return u.jsx(r("CometStickerPickerNullState.react"), { notExpanding: n });
				},
				onError: function(t) {
					y(t), a == null || a(t);
				},
				children: u.jsx(r("CometPlaceholder.react"), {
					fallback: u.jsx(C, {}),
					name: i.id,
					children: c != null && u.jsx(b, {
						notExpanding: n,
						onQuerySuccess: l,
						onSelect: s,
						queryRef: c
					})
				})
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t, n, a = e.extraProps, i = e.props, l = i.notExpanding, s = i.onSelect, c = a == null ? void 0 : a.searchQuery, d = (t = a == null ? void 0 : a.stickerWidth) != null ? t : 128, m = (n = a == null ? void 0 : a.scale) != null ? n : 2, g = o("DeidentifiedRelayEnvironment").useDeidentifiedRelayEnvironment(o("MAWStickerSearchDeidentifiedRelayEnvironment").MAWStickerSearchDeidentifiedRelayEnvironmentConfig), y = o("CometRelay").useQueryLoader(r("MAWCometStickerPickerSearchResultsRootGQLQuery$Parameters")), C = y[0], b = y[1], S = f(null), R = S[0], L = S[1], E = _(null);
		p(function() {
			if (R != null) {
				var e = o("MAWLoggerUtils").createInstanceKey();
				return E.current = e, r("QPLUserFlow").start(h, { instanceKey: e }), function() {
					E.current === e && (r("QPLUserFlow").endCancel(h, { instanceKey: e }), E.current = null);
				};
			}
		}, [R]), c != null && c !== R ? (L(c), b({ request: {
			bypass_cache: !1,
			query: c,
			scale: m,
			thumbnail_width: d,
			type: "KEYWORD_SEARCH",
			width: d
		} }, { __environment: g })) : c == null && R != null && L(null);
		var k = R === c ? C : null;
		return u.jsx(v, {
			deidentifiedEnvironment: g,
			notExpanding: l,
			onQueryFail: function(t) {
				var e = E.current;
				e != null && (r("QPLUserFlow").endFailure(h, "query_error", {
					annotations: { string: { error_message: t.message } },
					instanceKey: e
				}), E.current = null);
			},
			onQuerySuccess: function() {
				var e = E.current;
				e != null && (r("QPLUserFlow").endSuccess(h, { instanceKey: e }), E.current = null);
			},
			onSelect: s,
			queryRef: k
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		return u.jsx(r("CometErrorBoundary.react"), {
			fallback: function() {
				return u.jsx(r("CometStickerPickerNullState.react"), { notExpanding: e.props.notExpanding });
			},
			children: u.jsx(S, babelHelpers.extends({}, e))
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 98);
