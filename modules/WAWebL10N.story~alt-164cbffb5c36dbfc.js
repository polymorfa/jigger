__d("WAWebL10N.story", [
	"WAWebL10N",
	"WAWebShowroomStory.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = function() {};
	function c(e) {
		var t = e.n;
		return s.jsxs("tr", { children: [s.jsx("td", { children: s.jsx("code", { children: t }) }), s.jsxs("td", { children: ["→ ", r("WAWebL10N").d(t)] })] });
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = {
		storyName: "WAWebL10N",
		section: o("WAWebShowroomStory.react").StorySectionType.UTIL,
		component: u,
		description: "",
		examples: [{
			example: s.jsx("table", { children: s.jsx("tbody", { children: [
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
			}) }) }),
			title: "" + r("WAWebL10N").getFullLocale()
		}]
	};
	l.default = d;
}), 98);
