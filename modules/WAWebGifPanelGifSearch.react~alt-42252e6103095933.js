__d("WAWebGifPanelGifSearch.react", [
	"WAAbortError",
	"WALogger",
	"WAPromiseCache",
	"WAPromiseLoop",
	"WAShiftTimer",
	"WAWebEmptyState.react",
	"WAWebEventsWaitForBbEvent",
	"WAWebFocusTracer",
	"WAWebGifFromProviderSentWamEvent",
	"WAWebGifPanelConstants",
	"WAWebGifPanelGifInfo",
	"WAWebGifPanelGifPreview.react",
	"WAWebGifPanelGifSections",
	"WAWebGifSearchCancelledWamEvent",
	"WAWebGifSearchNoResultsWamEvent",
	"WAWebGifSearchResultTappedWamEvent",
	"WAWebGifSearchSessionStartedWamEvent",
	"WAWebGifSearchStyles",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebNetworkStatus",
	"WAWebNoop",
	"WAWebPanelsDisplayLocation",
	"WAWebPonyfillsFetch",
	"WAWebProtobufsE2E.pb",
	"WAWebSetRefCache",
	"WAWebURLUtils",
	"WAWebWamEnumGifSearchProvider",
	"err",
	"getErrorSafe",
	"gkx",
	"react",
	"stylex",
	"useLazyRef",
	"useWAWebForceUpdate",
	"useWAWebStableCallback",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = ["ref"], m, p, _ = p || (p = o("react")), f = p, g = f.memo, h = f.useEffect, y = f.useImperativeHandle, C = f.useRef, b = f.useState, v = r("gkx")("26258") ? "3o85xmWDYKgihhIKSA" : "SPCZpy9mSOFVRbCLsuM5xWGUgcefkuCn", S = new (r("WAPromiseCache"))(k, {
		maxCached: 6,
		maxAge: 36e4,
		shouldCache: function(t) {
			return !!(t != null && t.length);
		}
	}), R = {
		UP: "UP",
		DOWN: "DOWN",
		LEFT: "LEFT",
		RIGHT: "RIGHT"
	};
	function L(e) {
		"use no forget";
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, d), a = n.onGif, i = n.scrollGifIntoViewIfNeeded, l = n.searchText, s = n.selectedSectionId, u = r("useWAWebUnmountSignal")(), c = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), p = b([]), f = p[0], g = p[1], v = C(0), L = C(null), E = C(null), k = C(null), I = C(!1), T = C(null), x = C(!1), $ = C({}), P = r("useWAWebStableCallback")(function() {
			var e = l || s || o("WAWebGifPanelGifSections").SECTIONS.TRENDING, t = S.getOrRun(e);
			t = t.then(), T.current = t, t.then(function(e) {
				var n;
				if (!u.aborted && (e && e.length === 0 && new (o("WAWebGifSearchNoResultsWamEvent")).GifSearchNoResultsWamEvent({ gifSearchProvider: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY }).commit(), t === T.current && (T.current = null, !!e))) {
					var r = ((n = k.current) == null ? void 0 : n.clientWidth) || 0;
					r -= 2 * o("WAWebGifPanelConstants").GAP_SIZE, x.current = !0, g(D(e, r)), c(), F();
				}
			}).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
		}), N = function(t, n) {
			var e = $.current[String(t)];
			e == null || e.setShouldAnimate(n);
		}, M = r("useWAWebStableCallback")(function() {
			var e, t = L.current, r = v.current + o("WAWebGifPanelConstants").GAP_SIZE, a = (e = E.current) != null ? e : Math.round(r / (o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT + o("WAWebGifPanelConstants").GAP_SIZE)), i = f[a];
			if (i != null && i.gifs.length && i !== t) {
				var l;
				L.current = i;
				var s = (l = t == null ? void 0 : t.gifs.map(function(e) {
					return e.gifId;
				})) != null ? l : [], u = new Set(i.gifs.map(function(e) {
					return e.gifId;
				}));
				for (var c of s.filter(function(e) {
					return !u.has(e);
				})) N(c, !1);
				for (var d of u) N(d, !0);
			}
			for (var m = n.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel ? [a - 3, a + 3] : [a - 1, a + 1], p = m[0], _ = m[1], g = p; g <= _; g++) if (g !== a) {
				var h = f[g];
				if (h != null) for (var y of h.gifs) {
					var C = y.gifId;
					N(C, !1);
				}
			}
		}), w = r("useLazyRef")(function() {
			return new (o("WAShiftTimer")).ShiftTimer(P);
		}), A = r("useLazyRef")(function() {
			return new (o("WAShiftTimer")).ShiftTimer(M);
		});
		function F() {
			A.current.debounce(0);
		}
		var O = C([]), B = C({}), W = function(t, n) {
			var e = t[0], r = t[1];
			n ? ($.current[e] = n, B.current[r] = n) : (delete $.current[e], delete B.current[r]);
		}, q = r("useLazyRef")(function() {
			return new (r("WAWebSetRefCache"))(W);
		}), U = function(t) {
			new (o("WAWebGifFromProviderSentWamEvent")).GifFromProviderSentWamEvent({ gifSearchProvider: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY }).commit(), t.trending || new (o("WAWebGifSearchResultTappedWamEvent")).GifSearchResultTappedWamEvent({
				gifSearchProvider: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY,
				rank: t.rank
			}).commit(), I.current = !0, a(t.url, o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.GIPHY, t.accessibilityLabel);
		}, V = function(t) {
			k.current = t, t != null && t && x.current && (t.scrollTop = 0);
		}, H = function() {
			var e = O.current.join("_"), t = B.current[e];
			if (t) {
				var n = t.getElement();
				n && (r("WAWebFocusTracer").focus(n), i(n));
			}
		}, G = function(t) {
			t === void 0 && (t = !1), O.current = [0, 0], H();
		}, z = function(t) {
			var e = O.current, n = [
				e[0],
				e[1],
				f[Math.min(e[0], f.length - 1)].gifs.length - 1,
				f[Math.min(e[0] + 1, f.length - 1)].gifs.length - 1,
				f[Math.max(e[0] - 1, 0)].gifs.length - 1
			], r = n[0], o = n[1], a = n[2], i = n[3], l = n[4], s = o / a;
			switch (t) {
				case R.UP: {
					var u = Math.floor(l * s);
					return [Math.max(r - 1, 0), u];
				}
				case R.DOWN: {
					var c = Math.floor(i * s);
					return [r + 1, c];
				}
			}
			return [0, 0];
		}, j = function(t) {
			var e, n;
			return (e = (n = k.current) == null ? void 0 : n.contains(t)) != null ? e : !1;
		}, K = function(t) {
			t && (t.preventDefault(), t.stopPropagation());
		}, Q = function(t, n) {
			return [Math.max(0, t), Math.max(0, n)];
		}, X = function(t, n) {
			var e = [O.current[0], O.current[1]], r = e[0], o = e[1];
			switch (n) {
				case R.UP:
					if (r === 0) return;
					O.current = z(R.UP);
					break;
				case R.DOWN:
					if (r === f.length - 1) return;
					O.current = z(R.DOWN);
					break;
				case R.LEFT:
					if (o === 0 && r === 0) return;
					o === 0 ? O.current = Q(r - 1, f[r - 1].gifs.length - 1) : O.current = Q(r, o - 1);
					break;
				case R.RIGHT: f[r] ? f[r].gifs.length === o + 1 ? O.current = Q(r + 1, 0) : O.current = Q(r, o + 1) : O.current = [0, 0];
			}
			K(t), H();
		}, Y = function(t) {
			X(t, R.UP);
		}, J = function(t) {
			X(t, R.DOWN);
		}, Z = function(t) {
			X(t, R.LEFT);
		}, ee = function(t) {
			X(t, R.RIGHT);
		}, te = function(t) {
			K(t);
			var e = O.current, n = [
				e[0],
				e[1],
				e[2]
			], r = n[0], o = n[1];
			U(f[r].gifs[o]);
		}, ne = r("useWAWebStableCallback")(function() {
			w.current.debounceAndCap(200, 2e3);
		}), re = function(t) {
			v.current = t.scrollTop, E.current = null, A.current.debounce(200);
		};
		h(function() {
			var e = new AbortController(), t = e.signal;
			return o("WAPromiseLoop").promiseLoop(async function() {
				if (u.aborted) throw new (o("WAAbortError")).AbortError();
				await r("WAWebEventsWaitForBbEvent")(r("WAWebNetworkStatus"), "change:online", function() {
					return r("WAWebNetworkStatus").online;
				}, t), ne();
			}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))), P(), new (o("WAWebGifSearchSessionStartedWamEvent")).GifSearchSessionStartedWamEvent({ gifSearchProvider: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY }).commit(), function() {
				A.current.cancel(), w.current.cancel(), e.abort(), I.current || new (o("WAWebGifSearchCancelledWamEvent")).GifSearchCancelledWamEvent({ gifSearchProvider: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY }).commit();
			};
		}, []), h(function() {
			ne();
		}, [ne, l]), y(t, function() {
			return {
				contains: j,
				initSelection: G,
				animateOnScroll: re
			};
		});
		var oe = {
			up: Y,
			down: J,
			left: Z,
			right: ee,
			enter: te
		}, ae = f.map(function(e, t) {
			var n = function() {
				E.current = t, A.current.debounce(0);
			}, a = e.gifs.map(function(e, r) {
				return _.jsx(o("WAWebGifPanelGifPreview.react").GifPreview, {
					ref: q.current.getRefSetter(["" + e.gifId, t + "_" + r]),
					gif: e,
					onSend: U,
					onRowActivate: n
				}, e.gifId);
			}), i = null;
			return e.blankStr != null && (i = _.jsx("div", {
				className: (m || (m = r("stylex")))(o("WAWebGifSearchStyles").gifSearchStyles.blank),
				style: { flexBasis: e.blankStr }
			})), _.jsxs("div", babelHelpers.extends({}, (m || (m = r("stylex"))).props(o("WAWebGifSearchStyles").gifSearchStyles.row, t === f.length - 1 && o("WAWebGifSearchStyles").gifSearchStyles.lastRow), { children: [a, i] }), t);
		}), ie = n.selectedSectionId !== o("WAWebGifPanelGifSections").SECTIONS.FAVORITES && (ae.length === 0 ? _.jsx("div", babelHelpers.extends({}, (m || (m = r("stylex"))).props(o("WAWebGifSearchStyles").gifSearchStyles.noResults), { children: n.searchText ? _.jsx(o("WAWebEmptyState.react").SearchWithoutKeyword, {}) : _.jsx(o("WAWebEmptyState.react").Loading, {}) })) : _.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			className: (m || (m = r("stylex")))(o("WAWebGifSearchStyles").gifSearchStyles.section),
			handlers: oe,
			children: ae
		}));
		return _.jsx("div", babelHelpers.extends({}, (m || (m = r("stylex"))).props(o("WAWebGifSearchStyles").gifSearchStyles.searchContainer), {
			ref: V,
			children: ie
		}));
	}
	L.displayName = L.name + " [from " + i.id + "]";
	var E = g(L, function(e, t) {
		var n = t.onGif, r = t.searchText, o = t.selectedSectionId;
		return !(e.onGif !== n || e.selectedSectionId !== o || e.searchText !== r);
	});
	async function k(t) {
		var n = t === o("WAWebGifPanelGifSections").SECTIONS.TRENDING, a;
		if (n) a = r("WAWebURLUtils").build("https://api.giphy.com/v1/gifs/trending", {
			api_key: v,
			limit: 100,
			rating: "pg-13"
		});
		else {
			var i = r("WAWebL10N").getNormalizedLocale(), l = i;
			switch (i) {
				case "zh-HK":
					l = "zh-TW";
					break;
				case "pt-BR":
					l = "pt";
					break;
			}
			var s = "";
			o("WAWebGifPanelGifInfo").GIPHY_LOCALES.includes(l) && (s = l), a = r("WAWebURLUtils").build("https://api.giphy.com/v1/gifs/search", {
				q: t,
				api_key: v,
				limit: 100,
				rating: "pg-13",
				lang: s
			});
		}
		try {
			var u = await r("WAWebPonyfillsFetch")(a);
			if (!u.ok) throw r("err")(u.statusText);
			var c = await u.json();
			return T(c, n);
		} catch (t) {
			return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["gif_search:searchGiphy fetch failed with an error"]))).catching(r("getErrorSafe")(t)), null;
		}
	}
	function I(e, t) {
		if (e) {
			var n = parseInt(e.width, 10), r = parseInt(e.height, 10);
			if (n && r) return {
				width: n,
				height: r
			};
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[gif_search] getGifDimensions: invalid fullContent dims"]))).sendLogs("[gif_search] getGifDimensions: invalid fullContent dims");
		}
		if (t) {
			var a = parseInt(t.width, 10), i = parseInt(t.height, 10);
			if (a && i) return {
				width: o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT * a / i,
				height: o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT
			};
			o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[gif_search] getGifDimensions: invalid original dims"]))).sendLogs("[gif_search] getGifDimensions: invalid original dims");
		}
		return {
			width: o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT,
			height: o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT
		};
	}
	function T(e, t) {
		if (!e || !Array.isArray(e.data)) return [];
		if (!e.data.length && t) return [];
		for (var n = e.data, r = [], a = 0; a < n.length; a++) {
			var i = n[a], l = i.images;
			if (l) {
				var s = l.downsized_medium, u = l.downsized_small, d = l.original, m = l.preview, p = l.preview_gif, _ = l.preview_webp;
				if (!(!u || !s)) {
					var f = u.mp4, g = s.url;
					if (!(g == null || f == null || f === "")) {
						var h = I(u, d), y = h.height, C = h.width, b = i.alt_text != null && i.alt_text !== "" ? i.alt_text : i.title;
						r.push(new (o("WAWebGifPanelGifInfo")).GifInfo({
							accessibilityLabel: b,
							nonVideoUrl: g || (_ == null ? void 0 : _.url) || (p == null ? void 0 : p.url) || void 0,
							previewUrl: (m == null ? void 0 : m.mp4) || void 0,
							rank: r.length,
							trending: t,
							url: f,
							width: Math.round(C * o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT / y)
						}));
					}
				}
			}
		}
		return r.length === 0 && n.length > 0 && o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[gif_search] all gifs skipped, check giphy response"]))).sendLogs("[gif_search] all gifs skipped, check giphy response"), r;
	}
	function D(e, t) {
		for (var n = [], r = .9 * t, a = e, i = null, l = .05; l < 1 && a.length; l += .05) {
			a.sort(function(e, t) {
				var n = e.rank - t.rank;
				return Math.abs(n) > 8 ? n : t.width - e.width;
			});
			var s = (1 + l) * t, u = [], c = [];
			for (var d of a) {
				for (var m = !1, p = Math.min(s - d.width, r), _ = 0; !m && _ < u.length; _++) u[_] < p && (u[_] += d.width + o("WAWebGifPanelConstants").GAP_SIZE, c[_].push(d), m = !0);
				m || (u.push(d.width), c.push([d]));
			}
			if (c.length === 1) {
				a = [];
				var f = t - u[0] - o("WAWebGifPanelConstants").GAP_SIZE;
				i = {
					gifs: c[0],
					blankStr: f > 0 ? f + "px" : void 0
				};
			} else {
				a = [];
				for (var g = 0; g < c.length; g++) if (u[g] > r) n.push(c[g]);
				else {
					var h;
					(h = a).push.apply(h, c[g]);
				}
			}
		}
		n.forEach(function(e) {
			return e.sort(function(e, t) {
				return e.rank - t.rank;
			});
		}), n.sort(function(e, t) {
			return e[0].rank - t[0].rank;
		});
		var y = n.map(function(e) {
			return {
				gifs: e,
				blankStr: void 0
			};
		});
		return i && y.push(i), y;
	}
	l.GifSearch = E, l.getGifDimensions = I, l.giphyResultsToGifs = T;
}), 98);
