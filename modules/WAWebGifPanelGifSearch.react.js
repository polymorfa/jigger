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
	"asyncToGeneratorRuntime",
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
		var t = e.ref, a = babelHelpers.objectWithoutPropertiesLoose(e, d), i = a.onGif, l = a.scrollGifIntoViewIfNeeded, s = a.searchText, u = a.selectedSectionId, c = r("useWAWebUnmountSignal")(), p = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), f = b([]), g = f[0], v = f[1], L = C(0), E = C(null), k = C(null), I = C(null), T = C(!1), D = C(null), $ = C(!1), P = C({}), N = r("useWAWebStableCallback")(function() {
			var e = s || u || o("WAWebGifPanelGifSections").SECTIONS.TRENDING, t = S.getOrRun(e);
			t = t.then(), D.current = t, t.then(function(e) {
				var n;
				if (!c.aborted && (e && e.length === 0 && new (o("WAWebGifSearchNoResultsWamEvent")).GifSearchNoResultsWamEvent({ gifSearchProvider: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY }).commit(), t === D.current && (D.current = null, !!e))) {
					var r = ((n = I.current) == null ? void 0 : n.clientWidth) || 0;
					r -= 2 * o("WAWebGifPanelConstants").GAP_SIZE, $.current = !0, v(x(e, r)), p(), O();
				}
			}).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
		}), M = function(t, n) {
			var e = P.current[String(t)];
			e == null || e.setShouldAnimate(n);
		}, w = r("useWAWebStableCallback")(function() {
			var e, t = E.current, n = L.current + o("WAWebGifPanelConstants").GAP_SIZE, r = (e = k.current) != null ? e : Math.round(n / (o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT + o("WAWebGifPanelConstants").GAP_SIZE)), i = g[r];
			if (i != null && i.gifs.length && i !== t) {
				var l;
				E.current = i;
				var s = (l = t == null ? void 0 : t.gifs.map(function(e) {
					return e.gifId;
				})) != null ? l : [], u = new Set(i.gifs.map(function(e) {
					return e.gifId;
				}));
				for (var c of s.filter(function(e) {
					return !u.has(e);
				})) M(c, !1);
				for (var d of u) M(d, !0);
			}
			for (var m = a.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel ? [r - 3, r + 3] : [r - 1, r + 1], p = m[0], _ = m[1], f = p; f <= _; f++) if (f !== r) {
				var h = g[f];
				if (h != null) for (var y of h.gifs) {
					var C = y.gifId;
					M(C, !1);
				}
			}
		}), A = r("useLazyRef")(function() {
			return new (o("WAShiftTimer")).ShiftTimer(N);
		}), F = r("useLazyRef")(function() {
			return new (o("WAShiftTimer")).ShiftTimer(w);
		});
		function O() {
			F.current.debounce(0);
		}
		var B = C([]), W = C({}), q = function(t, n) {
			var e = t[0], r = t[1];
			n ? (P.current[e] = n, W.current[r] = n) : (delete P.current[e], delete W.current[r]);
		}, U = r("useLazyRef")(function() {
			return new (r("WAWebSetRefCache"))(q);
		}), V = function(t) {
			new (o("WAWebGifFromProviderSentWamEvent")).GifFromProviderSentWamEvent({ gifSearchProvider: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY }).commit(), t.trending || new (o("WAWebGifSearchResultTappedWamEvent")).GifSearchResultTappedWamEvent({
				gifSearchProvider: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY,
				rank: t.rank
			}).commit(), T.current = !0, i(t.url, o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.GIPHY, t.accessibilityLabel);
		}, H = function(t) {
			I.current = t, t != null && t && $.current && (t.scrollTop = 0);
		}, G = function() {
			var e = B.current.join("_"), t = W.current[e];
			if (t) {
				var n = t.getElement();
				n && (r("WAWebFocusTracer").focus(n), l(n));
			}
		}, z = function(t) {
			t === void 0 && (t = !1), B.current = [0, 0], G();
		}, j = function(t) {
			var e = B.current, n = [
				e[0],
				e[1],
				g[Math.min(e[0], g.length - 1)].gifs.length - 1,
				g[Math.min(e[0] + 1, g.length - 1)].gifs.length - 1,
				g[Math.max(e[0] - 1, 0)].gifs.length - 1
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
		}, K = function(t) {
			var e, n;
			return (e = (n = I.current) == null ? void 0 : n.contains(t)) != null ? e : !1;
		}, Q = function(t) {
			t && (t.preventDefault(), t.stopPropagation());
		}, X = function(t, n) {
			return [Math.max(0, t), Math.max(0, n)];
		}, Y = function(t, n) {
			var e = [B.current[0], B.current[1]], r = e[0], o = e[1];
			switch (n) {
				case R.UP:
					if (r === 0) return;
					B.current = j(R.UP);
					break;
				case R.DOWN:
					if (r === g.length - 1) return;
					B.current = j(R.DOWN);
					break;
				case R.LEFT:
					if (o === 0 && r === 0) return;
					o === 0 ? B.current = X(r - 1, g[r - 1].gifs.length - 1) : B.current = X(r, o - 1);
					break;
				case R.RIGHT: g[r] ? g[r].gifs.length === o + 1 ? B.current = X(r + 1, 0) : B.current = X(r, o + 1) : B.current = [0, 0];
			}
			Q(t), G();
		}, J = function(t) {
			Y(t, R.UP);
		}, Z = function(t) {
			Y(t, R.DOWN);
		}, ee = function(t) {
			Y(t, R.LEFT);
		}, te = function(t) {
			Y(t, R.RIGHT);
		}, ne = function(t) {
			Q(t);
			var e = B.current, n = [
				e[0],
				e[1],
				e[2]
			], r = n[0], o = n[1];
			V(g[r].gifs[o]);
		}, re = r("useWAWebStableCallback")(function() {
			A.current.debounceAndCap(200, 2e3);
		}), oe = function(t) {
			L.current = t.scrollTop, k.current = null, F.current.debounce(200);
		};
		h(function() {
			var e = new AbortController(), t = e.signal;
			return o("WAPromiseLoop").promiseLoop(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (c.aborted) throw new (o("WAAbortError")).AbortError();
				yield r("WAWebEventsWaitForBbEvent")(r("WAWebNetworkStatus"), "change:online", function() {
					return r("WAWebNetworkStatus").online;
				}, t), re();
			})).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))), N(), new (o("WAWebGifSearchSessionStartedWamEvent")).GifSearchSessionStartedWamEvent({ gifSearchProvider: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY }).commit(), function() {
				F.current.cancel(), A.current.cancel(), e.abort(), T.current || new (o("WAWebGifSearchCancelledWamEvent")).GifSearchCancelledWamEvent({ gifSearchProvider: o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY }).commit();
			};
		}, []), h(function() {
			re();
		}, [re, s]), y(t, function() {
			return {
				contains: K,
				initSelection: z,
				animateOnScroll: oe
			};
		});
		var ae = {
			up: J,
			down: Z,
			left: ee,
			right: te,
			enter: ne
		}, ie = g.map(function(e, t) {
			var n = function() {
				k.current = t, F.current.debounce(0);
			}, a = e.gifs.map(function(e, r) {
				return _.jsx(o("WAWebGifPanelGifPreview.react").GifPreview, {
					ref: U.current.getRefSetter(["" + e.gifId, t + "_" + r]),
					gif: e,
					onSend: V,
					onRowActivate: n
				}, e.gifId);
			}), i = null;
			return e.blankStr != null && (i = _.jsx("div", {
				className: (m || (m = r("stylex")))(o("WAWebGifSearchStyles").gifSearchStyles.blank),
				style: { flexBasis: e.blankStr }
			})), _.jsxs("div", babelHelpers.extends({}, (m || (m = r("stylex"))).props(o("WAWebGifSearchStyles").gifSearchStyles.row, t === g.length - 1 && o("WAWebGifSearchStyles").gifSearchStyles.lastRow), { children: [a, i] }), t);
		}), le = a.selectedSectionId !== o("WAWebGifPanelGifSections").SECTIONS.FAVORITES && (ie.length === 0 ? _.jsx("div", babelHelpers.extends({}, (m || (m = r("stylex"))).props(o("WAWebGifSearchStyles").gifSearchStyles.noResults), { children: a.searchText ? _.jsx(o("WAWebEmptyState.react").SearchWithoutKeyword, {}) : _.jsx(o("WAWebEmptyState.react").Loading, {}) })) : _.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			className: (m || (m = r("stylex")))(o("WAWebGifSearchStyles").gifSearchStyles.section),
			handlers: ae,
			children: ie
		}));
		return _.jsx("div", babelHelpers.extends({}, (m || (m = r("stylex"))).props(o("WAWebGifSearchStyles").gifSearchStyles.searchContainer), {
			ref: H,
			children: le
		}));
	}
	L.displayName = L.name + " [from " + i.id + "]";
	var E = g(L, function(e, t) {
		var n = t.onGif, r = t.searchText, o = t.selectedSectionId;
		return !(e.onGif !== n || e.selectedSectionId !== o || e.searchText !== r);
	});
	function k(e) {
		return I.apply(this, arguments);
	}
	function I() {
		return I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e === o("WAWebGifPanelGifSections").SECTIONS.TRENDING, n;
			if (t) n = r("WAWebURLUtils").build("https://api.giphy.com/v1/gifs/trending", {
				api_key: v,
				limit: 100,
				rating: "pg-13"
			});
			else {
				var a = r("WAWebL10N").getNormalizedLocale(), i = a;
				switch (a) {
					case "zh-HK":
						i = "zh-TW";
						break;
					case "pt-BR":
						i = "pt";
						break;
				}
				var l = "";
				o("WAWebGifPanelGifInfo").GIPHY_LOCALES.includes(i) && (l = i), n = r("WAWebURLUtils").build("https://api.giphy.com/v1/gifs/search", {
					q: e,
					api_key: v,
					limit: 100,
					rating: "pg-13",
					lang: l
				});
			}
			try {
				var s = yield r("WAWebPonyfillsFetch")(n);
				if (!s.ok) throw r("err")(s.statusText);
				var u = yield s.json();
				return D(u, t);
			} catch (e) {
				return o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["gif_search:searchGiphy fetch failed with an error"]))).catching(r("getErrorSafe")(e)), null;
			}
		}), I.apply(this, arguments);
	}
	function T(t, n) {
		if (t) {
			var r = parseInt(t.width, 10), a = parseInt(t.height, 10);
			if (r && a) return {
				width: r,
				height: a
			};
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[gif_search] getGifDimensions: invalid fullContent dims"]))).sendLogs("[gif_search] getGifDimensions: invalid fullContent dims");
		}
		if (n) {
			var i = parseInt(n.width, 10), l = parseInt(n.height, 10);
			if (i && l) return {
				width: o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT * i / l,
				height: o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT
			};
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[gif_search] getGifDimensions: invalid original dims"]))).sendLogs("[gif_search] getGifDimensions: invalid original dims");
		}
		return {
			width: o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT,
			height: o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT
		};
	}
	function D(e, t) {
		if (!e || !Array.isArray(e.data)) return [];
		if (!e.data.length && t) return [];
		for (var n = e.data, r = [], a = 0; a < n.length; a++) {
			var i = n[a], l = i.images;
			if (l) {
				var s = l.downsized_medium, c = l.downsized_small, d = l.original, m = l.preview, p = l.preview_gif, _ = l.preview_webp;
				if (!(!c || !s)) {
					var f = c.mp4, g = s.url;
					if (!(g == null || f == null || f === "")) {
						var h = T(c, d), y = h.height, C = h.width, b = i.alt_text != null && i.alt_text !== "" ? i.alt_text : i.title;
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
		return r.length === 0 && n.length > 0 && o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[gif_search] all gifs skipped, check giphy response"]))).sendLogs("[gif_search] all gifs skipped, check giphy response"), r;
	}
	function x(e, t) {
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
	l.GifSearch = E, l.getGifDimensions = T, l.giphyResultsToGifs = D;
}), 98);
