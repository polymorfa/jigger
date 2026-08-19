__d("WAWebEmojiPanelContentSectionScrollList.react", [
	"fbt",
	"Promise",
	"WAMemoizeOne",
	"WAPromiseDelays",
	"WAWebEmojiPanelContentEmojiRow.react",
	"WAWebEmojiPanelContentSectionScrollList.stylex",
	"WAWebEmojiPanelEmojiCategories",
	"WAWebEmojiPanelEmojiSections",
	"WAWebFlatList.react",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebNoop",
	"WAWebPanelsDisplayLocation",
	"WAWebVelocityAnimate",
	"WDSText.react",
	"chunkArray",
	"compactMap",
	"cr:12433",
	"err",
	"gkx",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useLazyRef"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useEffect, g = _.useImperativeHandle, h = _.useRef, y = n("cr:12433") == null ? void 0 : n("cr:12433").EmojiSearchEmpty, C = n("cr:12433") == null ? void 0 : n("cr:12433").EmojiSearchEmptyType, b = 62, v = 38, S = (u = {}, u[o("WAWebEmojiPanelEmojiSections").SECTIONS.SEARCH_RESULT] = function() {
		throw r("err")("Search results should not be shown with a title.");
	}, u[o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT] = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, u[o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT_REACTIONS] = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, u[r("WAWebEmojiPanelEmojiCategories").SMILEYS_PEOPLE] = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, u[r("WAWebEmojiPanelEmojiCategories").ANIMALS_NATURE] = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, u[r("WAWebEmojiPanelEmojiCategories").FOOD_DRINK] = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, u[r("WAWebEmojiPanelEmojiCategories").ACTIVITY] = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, u[r("WAWebEmojiPanelEmojiCategories").TRAVEL_PLACES] = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, u[r("WAWebEmojiPanelEmojiCategories").OBJECTS] = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, u[r("WAWebEmojiPanelEmojiCategories").SYMBOLS] = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, u[r("WAWebEmojiPanelEmojiCategories").FLAGS] = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, u), R = 6, L = 3;
	function E(e) {
		var t = o("react-compiler-runtime").c(13), n = e.displayLocation, a = e.focusAbove, i = e.focusBelow, l = e.numColumns, s = e.onEmoji, u = e.onEmojiFocus, c = e.onRef, d = e.row;
		switch (d.kind) {
			case "title": {
				var m;
				t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x1xrf6ya x12xbjc7 xdx6fka xvtqlqk" }, t[0] = m) : m = t[0];
				var _;
				return t[1] !== d.title ? (_ = p.jsx("div", babelHelpers.extends({}, m, { children: p.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDeemphasized",
					children: d.title
				}) })), t[1] = d.title, t[2] = _) : _ = t[2], _;
			}
			case "emojis": {
				var f = d.sectionId !== o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT, g;
				return t[3] !== n || t[4] !== a || t[5] !== i || t[6] !== l || t[7] !== s || t[8] !== u || t[9] !== c || t[10] !== d.emojis || t[11] !== f ? (g = p.jsx(o("WAWebEmojiPanelContentEmojiRow.react").EmojiRow, {
					emojis: d.emojis,
					focusAbove: a,
					focusBelow: i,
					numColumns: l,
					onEmoji: s,
					onEmojiFocus: u,
					ref: c,
					allowVariantPrompt: f,
					displayLocation: n
				}), t[3] = n, t[4] = a, t[5] = i, t[6] = l, t[7] = s, t[8] = u, t[9] = c, t[10] = d.emojis, t[11] = f, t[12] = g) : g = t[12], g;
			}
			default: throw r("err")("Invalid row kind: " + d.kind);
		}
	}
	function k(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.data, s = i.displayLocation, u = i.initialScrollTop, m = i.onEmoji, _ = i.onEmojiFocus, R = i.onFocusUp, k = i.onScroll, I = i.onSection, x = i.searchInputVisible, $ = i.showTitles, P = i.targetWindow, N = i.width, M = r("useLazyRef")(function() {
			return new Map();
		}), w = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), A = h(null), F = h(null), O = h(null), B = function(t) {
			var e = O.current;
			e && _(t, e);
		}, W = function() {
			return D(N);
		}, q = r("WAMemoizeOne")(function(e) {
			var t = b, n = {}, a = [];
			return e.data.forEach(function(i, u) {
				var c = i.emojis, d = i.sectionId, m = 0, p = t;
				if (c.length !== 0) {
					e.showTitles && (a.push({
						kind: "title",
						itemKey: "section_" + d + "_title",
						index: a.length,
						title: S[d](),
						sectionId: d,
						height: v,
						offsetTop: t
					}), m += v, t += v);
					var _ = r("chunkArray")(c, e.numColumns), f = u === l.length - 1;
					_.forEach(function(e, n) {
						var r = n === _.length - 1, i = r && !f ? o("WAWebEmojiPanelContentEmojiRow.react").EMOJI_HEIGHT + 12 : o("WAWebEmojiPanelContentEmojiRow.react").EMOJI_HEIGHT;
						s === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions && (i += 6), a.push({
							kind: "emojis",
							itemKey: "section_" + d + "_emoji_" + n,
							index: a.length,
							emojis: e,
							sectionId: d,
							height: i,
							offsetTop: t
						}), m += i, t += i;
					}), n[d] = {
						height: m,
						offsetTop: p
					};
				}
			}), {
				rows: a,
				sectionData: n
			};
		}), U = function() {
			return q({
				numColumns: W(),
				data: l,
				showTitles: $
			});
		}, V = function(t) {
			var e = U(), n = e.rows;
			return r("compactMap")(n, function(e) {
				return e.kind === "emojis" ? e : null;
			}).find(function(e) {
				return e.offsetTop + e.height > t;
			});
		}, H = function() {
			return x ? b : 0;
		}, G = function(t) {
			var e = V(t + H());
			if (e) return e.sectionId;
		}, z = function() {
			if (F.current = null, !!O.current) {
				var e = O.current.scrollTop;
				k == null || k(e);
				var t = G(e);
				t && (I == null || I(t));
			}
		}, j = function(t) {
			F.current || (F.current = (P != null ? P : window).requestAnimationFrame(z));
		}, K = function(t) {
			var e = t.columnIndex, n = t.referenceRowIndex, r = t.verticalOffset, o = U(), a = o.rows, i = T({
				offset: r,
				rows: a,
				startingIndex: n
			});
			if (i) {
				var l = M.current.get(i.itemKey);
				l && l.focusEmojiAt(e);
			}
		}, Q = function(t) {
			if (O.current) {
				var e = O.current.scrollTop + t, n = V(e);
				if (n) {
					var r = M.current.get(n.itemKey);
					return r;
				}
			}
		}, X = function(t) {
			var e = Q(t || 0);
			e && e.focusEmojiAt(0);
		}, Y = function(t, a) {
			var e = a || 0, i = O.current;
			if (!i) return (d || (d = n("Promise"))).resolve();
			var l = U(), s = l.sectionData, u = s[t];
			if (!u) return (d || (d = n("Promise"))).resolve();
			var c = u.offsetTop;
			if (i.scrollTop === c) return (d || (d = n("Promise"))).resolve();
			if (A.current) {
				if (A.current.sectionId === t) return A.current.promise;
				r("WAWebVelocityAnimate")(A.current.scrollTarget, "stop");
			}
			if (i.scrollTop === c) return (d || (d = n("Promise"))).resolve();
			var m = document.createElement("div");
			m.style.position = "absolute", m.style.top = c + e + "px", m.style.left = "0px", i.appendChild(m);
			var p = r("WAWebVelocityAnimate")(m, "scroll", {
				container: i,
				duration: 300,
				easing: [
					.99,
					.13,
					.13,
					.99
				]
			}).then(r("WAWebNoop")).then(function() {
				return o("WAPromiseDelays").delayMs(100);
			});
			return A.current = {
				promise: p,
				sectionId: t,
				scrollTarget: m
			}, p.finally(function() {
				var e;
				i.removeChild(m), ((e = A.current) == null ? void 0 : e.promise) === p && (A.current = null);
			}), p;
		}, J = function() {
			O.current && (O.current.scrollTop = 0);
		}, Z = function(t) {
			var e = Q(t || 0);
			e && e.selectFirstEmoji();
		};
		g(a, function() {
			return {
				focusFirstVisibleEmoji: X,
				scrollToSection: Y,
				scrollToTop: J,
				selectFirstVisibleEmoji: Z
			};
		}), f(function() {
			O.current && O.current.scrollTop !== u && (O.current.scrollTop = u), U();
		}, []);
		var ee = U(), te = ee.rows, ne = Math.min(te.length, L);
		if (r("gkx")("16539") && te.length === 0 && y != null && C != null) {
			var re = s === o("WAWebPanelsDisplayLocation").DisplayLocation.ComposeBox ? C.SHORTCUT_TIP : C.DEFAULT;
			return p.jsx("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(o("WAWebEmojiPanelContentSectionScrollList.stylex").styles.container), { children: p.jsx(y, { emojiSearchEmptyType: re }) }));
		}
		var oe;
		return (i.onScroll || i.onSection) && (oe = j), p.jsx(r("WAWebFlatListContainer.react"), {
			onScroll: oe,
			className: (c || (c = r("stylex")))(o("WAWebEmojiPanelContentSectionScrollList.stylex").styles.container),
			ref: O,
			flatListControllers: [w.current],
			children: p.jsx(o("WAWebFlatList.react").FlatList, {
				data: te,
				reorderAnimationsEnabled: !1,
				forceConsistentRenderCount: !1,
				flatListController: w.current,
				direction: "vertical",
				extraItems: ne,
				initialScrollFromStart: i.initialScrollTop,
				targetWindow: P,
				renderItem: function(t) {
					return p.jsx(E, {
						row: t,
						focusAbove: function(n) {
							($ && t.index === 1 || !$ && t.index === 0) && (R == null || R()), K({
								columnIndex: n,
								referenceRowIndex: t.index,
								verticalOffset: -1
							});
						},
						focusBelow: function(n) {
							K({
								columnIndex: n,
								referenceRowIndex: t.index,
								verticalOffset: 1
							});
						},
						onRef: function(n) {
							n ? M.current.set(t.itemKey, n) : M.current.delete(t.itemKey);
						},
						numColumns: W(),
						onEmoji: m,
						onEmojiFocus: B,
						displayLocation: s
					});
				}
			})
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	var I = k;
	function T(e) {
		for (var t = e.offset, n = e.rows, r = e.startingIndex, o = t < 0 ? -1 : 1, a = r + t; a >= 0 && a < n.length;) {
			var i = n[a];
			if (i.kind === "emojis") return i;
			a += o;
		}
	}
	function D(e) {
		var t = e - o("WAWebEmojiPanelContentEmojiRow.react").SIDE_MARGIN * 2 - R;
		return Math.floor(t / o("WAWebEmojiPanelContentEmojiRow.react").EMOJI_WIDTH);
	}
	l.TOTAL_SEARCH_HEIGHT = b, l.EmojiSectionScrollList = I;
}), 226);
