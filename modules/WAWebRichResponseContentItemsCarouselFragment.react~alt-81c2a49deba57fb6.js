__d("WAWebRichResponseContentItemsCarouselFragment.react", [
	"WAWebCarouselNavigationButton",
	"WAWebChevronButton.react",
	"WAWebDisplayType",
	"WAWebErrorBoundary.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebMediaLinkPreviewContainer.react",
	"WAWebVelocityTransitionGroup",
	"nullthrows",
	"react",
	"useWAWebCarouselScrollUtils"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useImperativeHandle, m = u.useRef, p = u.useState, _ = {
		carouselControlContainer: {
			width: "xh8yej3",
			position: "x1n2onr6",
			$$css: !0
		},
		botPluginCarouselControlContainer: {
			position: "x1n2onr6",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.fragment, n = e.msg, a = e.ref, i = m(null), l = m(null), u = t.contentItem.items, f = p(null), g = f[0], h = f[1], y = p(!1), C = y[0], b = y[1], v = r("useWAWebCarouselScrollUtils")(i, b, h, [n]), S = v[0], R = v[1], L = function() {
			return i.current;
		}, E = function() {
			return r("nullthrows")(l.current);
		};
		c(function() {
			var e = i.current;
			if (e) {
				var t = e.scrollWidth > e.clientWidth;
				h(t);
			}
		}, []), d(a, function() {
			return {
				getElement: L,
				getContainerElement: E
			};
		});
		var k = u.map(function(e, t) {
			return s.jsx("div", {
				className: "x1e03a83 x1gqwnh9 x1s9hi2i",
				children: s.jsx(o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer, {
					msg: n.unsafe(),
					displayType: o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN,
					theme: "bot_plugin_link",
					reelItem: e
				})
			}, t);
		}), I = C === !0 ? s.jsx(o("WAWebCarouselNavigationButton").CarouselNavigationButton, {
			buttonType: o("WAWebChevronButton.react").ButtonType.Prev,
			onButtonClick: R,
			displayType: o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel
		}) : null, T = g === !0 ? s.jsx(o("WAWebCarouselNavigationButton").CarouselNavigationButton, {
			buttonType: o("WAWebChevronButton.react").ButtonType.Next,
			onButtonClick: R,
			displayType: o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel
		}) : null;
		return s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "content-item-carousel-fragment",
			children: s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				xstyle: [_.botPluginCarouselControlContainer, u.length > 3 && _.carouselControlContainer],
				ref: l,
				tabIndex: -1,
				children: s.jsx(r("WAWebVelocityTransitionGroup"), {
					transitionName: "bot-plugin-carousel",
					children: s.jsxs("div", {
						className: "x1n2onr6",
						children: [
							I,
							s.jsx("div", babelHelpers.extends({}, {
								0: { className: "xw2csxc x10wlt62 xlrljjx x1liijdw xu342n7 xelbjmh x16pgt24" },
								1: { className: "x10wlt62 xlrljjx x1liijdw xu342n7 xelbjmh x16pgt24 x1rohswg x6ikm8r" }
							}[(u.length === 1) << 0], {
								onScroll: S,
								ref: i,
								children: s.jsx("div", {
									className: "x78zum5 x1q0g3np xozqiw3 x9xpc1z xezivpi xk8lq53",
									"data-id": n.id.id,
									children: k
								})
							})),
							T
						]
					})
				})
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
