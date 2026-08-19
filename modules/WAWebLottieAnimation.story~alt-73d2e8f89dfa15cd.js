__d("WAWebLottieAnimation.story", [
	"WAWebEmptyState.react",
	"WAWebFlex.react",
	"WAWebLottieAnimation.react",
	"WAWebLottieStoryData",
	"WAWebMinusIcon.react",
	"WAWebPlusIcon.react",
	"WAWebRound.react",
	"WAWebUseLottie.react",
	"WAWebVideoPauseIcon.react",
	"WAWebVideoPlayIcon.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useRef, d = u.useState;
	function m() {
		var e, t = c(), n = d(1), a = n[0], i = n[1], l = function() {
			var e;
			return (e = t.current) == null ? void 0 : e.pause();
		}, u = function() {
			var e;
			return (e = t.current) == null ? void 0 : e.play();
		}, m = function() {
			return i(function(e) {
				return e / 1.1;
			});
		}, p = function() {
			return i(function(e) {
				return e * 1.1;
			});
		};
		return s.jsxs(s.Fragment, { children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			children: [
				s.jsx((e = o("WAWebRound.react")).Round, {
					onClick: l,
					children: s.jsx(o("WAWebVideoPauseIcon.react").VideoPauseIcon, {})
				}),
				s.jsx(e.Round, {
					onClick: m,
					children: s.jsx(o("WAWebMinusIcon.react").MinusIcon, {})
				}),
				s.jsx(e.Round, {
					onClick: p,
					children: s.jsx(o("WAWebPlusIcon.react").PlusIcon, {})
				}),
				s.jsx(e.Round, {
					onClick: u,
					children: s.jsx(o("WAWebVideoPlayIcon.react").VideoPlayIcon, {})
				})
			]
		}), s.jsx(r("WAWebLottieAnimation.react"), {
			ref: t,
			loop: !0,
			autoplay: !0,
			speed: a,
			data: o("WAWebLottieStoryData").bird
		})] });
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		var e, t = d(1), n = t[0], r = t[1], a = function() {
			return r(function(e) {
				return e / 1.1;
			});
		}, i = function() {
			return r(function(e) {
				return e * 1.1;
			});
		}, l = o("WAWebUseLottie.react").useLottie({
			loop: !0,
			autoplay: !0,
			speed: n,
			data: o("WAWebLottieStoryData").toiletPaper
		}), u = l[0], c = l[1], m = c.pause, p = c.play;
		return s.jsxs(s.Fragment, { children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			children: [
				s.jsx((e = o("WAWebRound.react")).Round, {
					onClick: m,
					children: s.jsx(o("WAWebVideoPauseIcon.react").VideoPauseIcon, {})
				}),
				s.jsx(e.Round, {
					onClick: a,
					children: s.jsx(o("WAWebMinusIcon.react").MinusIcon, {})
				}),
				s.jsx(e.Round, {
					onClick: i,
					children: s.jsx(o("WAWebPlusIcon.react").PlusIcon, {})
				}),
				s.jsx(e.Round, {
					onClick: p,
					children: s.jsx(o("WAWebVideoPlayIcon.react").VideoPlayIcon, {})
				})
			]
		}), u] });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.autoplay, n = c(), a = d(0), i = a[0], l = a[1], u = function() {
			l(i + 1);
		}, m = function() {
			var e;
			(e = n.current) == null || e.goToAndPlay(1);
		};
		return s.jsxs(s.Fragment, { children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			children: [t !== !0 ? s.jsx(o("WAWebRound.react").Round, {
				onClick: m,
				children: s.jsx(o("WAWebVideoPlayIcon.react").VideoPlayIcon, {})
			}) : null, s.jsx("div", { children: "On complete counter: " + i })]
		}), s.jsx(r("WAWebLottieAnimation.react"), {
			ref: n,
			data: o("WAWebLottieStoryData").bird,
			autoplay: t,
			onComplete: u
		})] });
	}
	_.displayName = _.name + " [from " + i.id + "]";
	var f = {
		storyName: "WAWebLottieAnimation",
		component: r("WAWebLottieAnimation.react"),
		description: "We use this component to render Lottie animations",
		examples: [
			{
				example: function() {
					return s.jsx(r("WAWebLottieAnimation.react"), {
						loop: !0,
						autoplay: !0,
						data: o("WAWebLottieStoryData").loadingSticker
					});
				},
				title: "Simple animation",
				description: "loop = true, autoplay = true"
			},
			{
				example: function() {
					return s.jsx(r("WAWebLottieAnimation.react"), {
						loop: !0,
						autoplay: !0,
						speed: 2,
						direction: -1,
						data: o("WAWebLottieStoryData").loadingSticker
					});
				},
				title: "Changing speed and direction",
				description: "loop = true, autoplay = true, speed = 2, direction = -1"
			},
			{
				example: function() {
					return s.jsx(r("WAWebLottieAnimation.react"), {
						loop: !0,
						autoplay: !0,
						placeholder: s.jsx(o("WAWebEmptyState.react").Loading, {}),
						path: "https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json"
					});
				},
				title: "Using a placeholder",
				description: "You can use the placeholder prop to pass a component to be rendered while the animation is loading"
			},
			{
				example: function() {
					return s.jsx(r("WAWebLottieAnimation.react"), {
						loop: !0,
						autoplay: !0,
						fallback: s.jsx(o("WAWebEmptyState.react").Empty, { children: "Error" }),
						path: "https://assets10.lottiefiles.com/packages/this_does_not_exist.json"
					});
				},
				title: "Using a fallback",
				description: "You can use the fallback prop to pass a component to be rendered if there is an error loading the animation"
			},
			{
				example: function() {
					return s.jsx(m, {});
				},
				title: "Manual controls",
				description: "Using a ref, you can imperatively control the animation"
			},
			{
				example: function() {
					return s.jsx(p, {});
				},
				title: "Using useLottie hook",
				description: "You can use the useLottie hook directly in your components"
			},
			{
				example: function() {
					return s.jsx(_, {});
				},
				title: "Using Lottie onComplete",
				description: "On complete should trigger when animation has finished"
			},
			{
				example: function() {
					return s.jsx(_, { autoplay: !0 });
				},
				title: "Using Lottie onComplete when on loop",
				description: "On complete should trigger when animation has finished a loop"
			}
		]
	};
	l.default = f;
}), 98);
