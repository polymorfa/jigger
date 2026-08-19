__d("WAWebShowroom.react", [
	"WAWebModalManager",
	"WAWebShowroomComponentList.react",
	"WAWebShowroomStory.react",
	"WAWebUnstyledButton.react",
	"WAWebXIcon.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useMemo, d = u.useState, m = { closeButton: {
		position: "x10l6tqk",
		top: "x1eu8d0j",
		insetInlineEnd: "xo2ifbc",
		left: null,
		right: null,
		$$css: !0
	} }, p = [
		o("WAWebShowroomStory.react").StorySectionType.ATOM,
		o("WAWebShowroomStory.react").StorySectionType.MOLECULE,
		o("WAWebShowroomStory.react").StorySectionType.UTIL,
		o("WAWebShowroomStory.react").StorySectionType.OTHER
	], _ = p.reduce(function(e, t, n) {
		return e[t] = n, e;
	}, {}), f = function(t) {
		return t.map(function(e) {
			return e.section == null && (e.section = o("WAWebShowroomStory.react").StorySectionType.OTHER), e;
		}).sort(function(e, t) {
			var n = e.storyName, r = t.storyName;
			return n.localeCompare(r, "en");
		}).sort(function(e, t) {
			var n, r, a = _[(n = e.section) != null ? n : o("WAWebShowroomStory.react").StorySectionType.OTHER], i = _[(r = t.section) != null ? r : o("WAWebShowroomStory.react").StorySectionType.OTHER];
			return a - i;
		});
	};
	function g(e) {
		var t = e.initialStory, n = e.stories, a = c(function() {
			return f(n);
		}, [n]), i = c(function() {
			if (t != null && t.length > 0) {
				var e = a.find(function(e) {
					return e.storyName === t;
				});
				if (e) return e;
			}
			return a[0];
		}, [a, t]), l = d(i), u = l[0], p = l[1];
		return a.length <= 0 ? s.jsx("div", {
			className: "xtsfpqs x78zum5 x1w9wu52 x1hx0egp x1280gxy x1cnzs8 x1xnnf8n xx6bls6 x106a9eq",
			children: "No stories found"
		}) : s.jsxs("div", {
			className: "x9f619 x5yr21d xu96u03 xixxii4 x13vifvy xh8yej3 xtsfpqs x78zum5 x1w9wu52 x1hx0egp x1280gxy",
			"data-testid": "ui-showroom",
			children: [
				s.jsx("div", {
					className: "x2lah0s x1c4vz4f xcnqf8e x1280gxy",
					children: s.jsxs("div", {
						className: "x78zum5 xdt5ytf x5yr21d",
						children: [s.jsx("div", {
							className: "x2lah0s x1c4vz4f xdl72j9 xrlqpzj x1xnnf8n x1g2khh7 x106a9eq",
							children: s.jsx("div", {
								className: "x14ug900 x1c3i2sq xk50ysn x1j7pf75 xod5an3",
								children: "WA Web Components"
							})
						}), s.jsx("div", {
							className: "xs83m0k x1iyjqo2 xdl72j9 xm7lytj x1ykpatu x1c1uobl xyri2b x1odjw0f xxsgkw5",
							children: s.jsx(r("WAWebShowroomComponentList.react"), {
								active: u,
								list: a,
								onSelectStory: p
							})
						})]
					})
				}),
				s.jsx("div", {
					className: "xs83m0k x1iyjqo2 xdl72j9 x6ikm8r x10wlt62",
					children: s.jsx(o("WAWebShowroomStory.react").Story, { story: u })
				}),
				s.jsx(r("WAWebUnstyledButton.react"), {
					xstyle: m.closeButton,
					onClick: h,
					children: s.jsx(o("WAWebXIcon.react").XIcon, {})
				})
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h() {
		o("WAWebModalManager").ModalManager.close();
	}
	l.default = g;
}), 98);
