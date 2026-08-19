__d("WAWebShowroomModule.react", [
	"CometPlaceholder.react",
	"WAWebSetupUIDocs",
	"WAWebShowroom.react",
	"WAWebShowroomMigration",
	"WDSThemes",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useState;
	function p(t) {
		var n = o("react-compiler-runtime").c(5), a = t.props.story, i = m(null), l = i[0], s = i[1], c, p;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (c = function() {
			o("WAWebSetupUIDocs").setupUIDocs();
			var t = document.documentElement, n = (e || (e = r("stylex")))(o("WDSThemes").WDSLightTheme).split(" ").filter(Boolean);
			if (n.length > 0) {
				var a;
				(a = t.classList).add.apply(a, n);
			}
			return s(o("WAWebShowroomMigration").getAllShowroomStories()), (function() {
				if (n.length > 0) {
					var e;
					(e = t.classList).remove.apply(e, n);
				}
			});
		}, p = [], n[0] = c, n[1] = p) : (c = n[0], p = n[1]), d(c, p);
		var _;
		return n[2] !== l || n[3] !== a ? (_ = l ? u.jsx("div", babelHelpers.extends({ id: "app" }, (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme), { children: u.jsx(r("CometPlaceholder.react"), {
			fallback: u.jsx("div", {}),
			name: "showroom",
			children: u.jsx(r("WAWebShowroom.react"), {
				initialStory: a,
				stories: l
			})
		}) })) : null, n[2] = l, n[3] = a, n[4] = _) : _ = n[4], _;
	}
	l.default = p;
}), 98);
