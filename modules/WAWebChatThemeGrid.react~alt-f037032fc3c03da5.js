__d("WAWebChatThemeGrid.react", [
	"fbt",
	"WAWebChatThemeCanvas.react",
	"WAWebKeyboardHotKeys.react",
	"WDSButton.react",
	"WDSFlex.stylex",
	"WDSIconIcChevronLeft.react",
	"WDSIconIcChevronRight.react",
	"react",
	"stylex",
	"useWAWebHover",
	"useWAWebRovingGridNavigation"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState, g = { themeRow: {
		rowGap: "x1f0uite",
		columnGap: "xs2akgl",
		paddingInlineEnd: "x5s3kwk",
		paddingInlineStart: "xdylf7x",
		$$css: !0
	} };
	function h(e, t) {
		var n = _(null), r = _(null), a = f(!1), i = a[0], l = a[1], s = f(!1), u = s[0], c = s[1], d = o("useWAWebHover").useWAWebHover(r), g = m(function() {
			var e = n.current;
			if (e != null) {
				var t = getComputedStyle(e).direction === "rtl", r = t ? -e.scrollLeft : e.scrollLeft;
				l(r > 1), c(r + e.clientWidth < e.scrollWidth - 1);
			}
		}, []);
		p(function() {
			if (e === !0) {
				g();
				var t = n.current;
				if (t != null) {
					var r = new ResizeObserver(function() {
						g();
					});
					r.observe(t);
					var o = t.firstElementChild;
					return o != null && r.observe(o), function() {
						r.disconnect();
					};
				}
			}
		}, [e, g]);
		var h = _(t);
		p(function() {
			var r = h.current;
			h.current = t, r !== t && e === !0 && n.current != null && (n.current.scrollLeft = 0, g());
		}, [
			t,
			e,
			g
		]);
		var y = function(t) {
			var e = n.current;
			if (e != null) {
				var r = getComputedStyle(e).direction === "rtl", o = e.clientWidth * .8, a = t === "end" ? o : -o;
				r && (a = -a), e.scrollBy({
					left: a,
					behavior: "smooth"
				});
			}
		};
		return {
			scrollRef: n,
			wrapperRef: r,
			canScrollStart: i,
			canScrollEnd: u,
			isHovering: d,
			updateScrollState: g,
			scrollBy: y
		};
	}
	function y(t) {
		var n = t.children, a = t.compact, i = t.currentThemeId, l = t.currentWallpaperId, u = t.horizontal, d = t.onSelect, m = t.pickerItems, p = t.rowSplit, _ = t.showDoodle, f = t.solidWallpaperHex, y = t.themeMode, b = t.themes, v = t.variant, S = t.wallpaperIds, R = m != null ? m.map(function(e) {
			return e.theme;
		}) : b != null ? b : [], L = m != null ? m.map(function(e) {
			return e.wallpaperId;
		}) : S, E = h(u, a === !0 ? null : l != null ? l : i), k = E.canScrollEnd, I = E.canScrollStart, T = E.isHovering, D = E.scrollBy, x = E.scrollRef, $ = E.updateScrollState, P = E.wrapperRef, N = u === !0 ? p != null ? p : Math.ceil(R.length / 2) : R.length, M = v === "color", w = 4, A = m != null ? m.map(function(e) {
			return e.isCurrent === !0;
		}) : null, F = A != null && A.some(function(e) {
			return e;
		}), O = function(t) {
			return A != null && A[t] === !0;
		}, B = function(t) {
			return F ? O(t) : R[t] === i && (L == null || L[t] === (l != null ? l : null));
		}, W = R.findIndex(function(e, t) {
			return B(t);
		}), q = W !== -1 ? W : 0, U = u === !0 ? C(N) : o("useWAWebRovingGridNavigation").createVerticalGridMovement(M ? w : void 0), V = o("useWAWebRovingGridNavigation").useWAWebRovingGridNavigation({
			initialFocusIndex: q,
			itemCount: R.length,
			movement: U
		}), H = V.getItemProps, G = V.gridRef, z = V.handlers, j = function(t, n) {
			var e = L != null ? L[n] : void 0, o = H(n), a = O(n);
			return c.jsx(r("WAWebChatThemeCanvas.react"), {
				themeId: t,
				isSelected: B(n),
				isCurrent: a,
				themeMode: y,
				onSelect: d,
				onFocusChange: o.onFocus,
				onBlur: o.onBlur,
				tabIndex: o.tabIndex,
				variant: v,
				horizontal: u === !0,
				showDoodle: _,
				solidWallpaperHex: f,
				wallpaperId: e,
				ref: o.ref
			}, a ? "custom" : e != null ? e : t);
		};
		if (u === !0) {
			var K = R.slice(0, N), Q = R.slice(N);
			return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				handlers: z,
				role: "radiogroup",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				children: c.jsxs("div", {
					ref: P,
					"data-testid": "chat_theme_scroll_wrapper",
					className: "x1n2onr6",
					children: [
						T && I && c.jsx("div", {
							"data-testid": "chat_theme_scroll_start_btn",
							className: "x10l6tqk xwa60dl x1cb1t30 x1vjfegm x1osxwv1",
							children: c.jsx(r("WDSButton.react"), {
								variant: "tonal",
								type: "media",
								size: "small",
								Icon: r("WDSIconIcChevronLeft.react"),
								onPress: function() {
									return D("start");
								},
								"aria-label": s._(
									/*BTDS*/
									""
								)
							})
						}),
						T && k && c.jsx("div", {
							"data-testid": "chat_theme_scroll_end_btn",
							className: "x10l6tqk xwa60dl x1cb1t30 x1vjfegm x1fm9i1x",
							children: c.jsx(r("WDSButton.react"), {
								variant: "tonal",
								type: "media",
								size: "small",
								Icon: r("WDSIconIcChevronRight.react"),
								onPress: function() {
									return D("end");
								},
								"aria-label": s._(
									/*BTDS*/
									""
								)
							})
						}),
						c.jsx("div", {
							ref: x,
							onScroll: $,
							"data-testid": "chat_theme_scroll_container",
							className: "xw2csxc x10wlt62 x16ovd2e xvpt6g3",
							children: c.jsxs("div", {
								className: "xezivpi x78zum5 xdt5ytf x1f0uite xs2akgl",
								children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRow, o("WDSFlex.stylex").wdsFlex.alignStart, g.themeRow), { children: K.map(function(e, t) {
									return j(e, t);
								}) })), Q.length > 0 && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRow, o("WDSFlex.stylex").wdsFlex.alignStart, g.themeRow), { children: Q.map(function(e, t) {
									return j(e, N + t);
								}) }))]
							})
						})
					]
				})
			});
		}
		return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: z,
			role: "radiogroup",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: c.jsxs("div", babelHelpers.extends({ ref: G }, {
				0: { className: "xrvj5dj x1t59k0s xl56j7k xs2akgl x1f0uite x1h678fw xv6tirj xcldk2z x1phvje8" },
				2: { className: "xrvj5dj x125q6hc xl56j7k x13a9art x1frt3yj x1h678fw xv6tirj xcldk2z x1phvje8" },
				1: { className: "xrvj5dj x1t59k0s xl56j7k xs2akgl x1f0uite xcldk2z x1phvje8 xexx8yu x18d9i69" },
				3: { className: "xrvj5dj x125q6hc xl56j7k x13a9art x1frt3yj xcldk2z x1phvje8 xexx8yu x18d9i69" }
			}[(v === "color") << 1 | (a === !0) << 0], { children: [n, R.map(function(e, t) {
				return j(e, t);
			})] }))
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		return function(t, n, r) {
			var o = r.itemCount, a = t < e, i = a ? 0 : e, l = a ? e - 1 : o - 1, s = {
				down: function() {
					return a && t + e < o ? t + e : t;
				},
				end: function() {
					return l;
				},
				home: function() {
					return i;
				},
				left: function() {
					return t > i ? t - 1 : t;
				},
				right: function() {
					return t < l ? t + 1 : t;
				},
				up: function() {
					return !a && t - e < e ? t - e : t;
				}
			};
			return s[n]();
		};
	}
	l.default = y;
}), 226);
