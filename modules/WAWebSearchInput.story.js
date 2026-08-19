__d("WAWebSearchInput.story", [
	"WAWebNoop",
	"WAWebSearchInput",
	"WAWebShowroomStory.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e = ["filter"], s, u = s || (s = o("react")), c = s.useState;
	function d(t) {
		var n = o("react-compiler-runtime").c(7), a, i;
		n[0] !== t ? (a = t.filter, i = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = c(a), s = l[0], d = l[1], m;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (m = function() {
			return d(null);
		}, n[3] = m) : m = n[3];
		var p;
		return n[4] !== s || n[5] !== i ? (p = u.jsx(o("WAWebSearchInput").SearchInput, babelHelpers.extends({
			onSearch: r("WAWebNoop"),
			placeholder: "Search...",
			filter: s,
			onClearFilter: m
		}, i)), n[4] = s, n[5] = i, n[6] = p) : p = n[6], p;
	}
	var m = {
		storyName: "WAWebSearchInput",
		section: o("WAWebShowroomStory.react").StorySectionType.ATOM,
		component: o("WAWebSearchInput").SearchInput,
		description: "A input stylized for our common search UI implementations",
		examples: [
			{
				example: function() {
					return u.jsx(d, {});
				},
				title: "SearchInput",
				description: "A SearchInput with the default color scheme"
			},
			{
				example: function() {
					return u.jsx(d, { colorScheme: "darker" });
				},
				title: "SearchInput",
				description: "A SearchInput with the \"darker\" color scheme. In light mode, this is visually the same as the \"default\" theme, as we only typically use white backgrounds. In dark mode, this input has a darker foreground to contrast against slightly lighter surrounding backgrounds."
			},
			{
				example: function() {
					return u.jsx(d, { loading: !0 });
				},
				title: "SearchInput with loading spinner",
				description: "A SearchInput with loading spinner showing when you type"
			},
			{
				example: function() {
					return u.jsx(d, { filter: "Filter" });
				},
				title: "SearchInput with applied filter",
				description: "A SearchInput with an applied filter, rendered as a chip"
			},
			{
				example: function() {
					return u.jsx(d, {
						showBackButton: !0,
						filter: "Filter"
					});
				},
				title: "SearchInput with back button",
				description: "A SearchInput which shows the back button which also blurs and clears filter + text"
			}
		]
	};
	l.default = m;
}), 98);
