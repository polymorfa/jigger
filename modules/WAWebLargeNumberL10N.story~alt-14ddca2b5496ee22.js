__d("WAWebLargeNumberL10N.story", [
	"WAWebCommonNewsletterStrings",
	"WAWebL10N",
	"WAWebMsgType",
	"WAWebMsgViewCount",
	"WAWebRollerCounter.react",
	"WAWebShowroomStory.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = function() {};
	function c(e) {
		var t = e.n;
		return s.jsxs("tr", { children: [
			s.jsx("td", {
				className: "xaso8d8 x1gabggj",
				children: s.jsx("code", { children: t })
			}),
			s.jsx("td", {
				className: "xaso8d8 x1gabggj",
				children: o("WAWebCommonNewsletterStrings").getNewsletterFollowersText(t)
			}),
			s.jsx("td", {
				className: "xaso8d8 x1gabggj",
				children: o("WAWebMsgViewCount").formatViewCount(t, o("WAWebMsgType").MSG_TYPE.CHAT)
			}),
			s.jsx("td", {
				className: "xaso8d8 x1gabggj",
				children: s.jsx(r("WAWebRollerCounter.react"), {
					counter: t,
					shouldAnimate: !1
				})
			})
		] });
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = {
		storyName: "WAWebLargeNumberL10N",
		section: o("WAWebShowroomStory.react").StorySectionType.UTIL,
		component: u,
		description: "",
		examples: [{
			example: s.jsxs("table", { children: [s.jsx("thead", { children: s.jsxs("tr", { children: [
				s.jsx("th", {
					className: "xaso8d8 x1gabggj",
					children: "Count"
				}),
				s.jsx("th", {
					className: "xaso8d8 x1gabggj",
					children: "Follower Text"
				}),
				s.jsx("th", {
					className: "xaso8d8 x1gabggj",
					children: "View Text"
				}),
				s.jsx("th", {
					className: "xaso8d8 x1gabggj",
					children: "Reaction Text"
				})
			] }) }), s.jsx("tbody", { children: [
				0,
				1,
				10,
				Math.pow(10, 2),
				123,
				Math.pow(10, 3),
				1234,
				Math.pow(10, 4),
				12345,
				Math.pow(10, 5),
				123456,
				Math.pow(10, 6),
				1234567,
				Math.pow(10, 7),
				12345678,
				Math.pow(10, 8),
				Math.pow(10, 9)
			].map(function(e) {
				return s.jsx(c, { n: e }, e);
			}) })] }),
			title: "" + r("WAWebL10N").getFullLocale()
		}]
	};
	l.default = d;
}), 98);
