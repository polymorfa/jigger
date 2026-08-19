__d("WAWebShowroomModule.react", [
	"CometPlaceholder.react",
	"WAWebSetupUIDocs",
	"WAWebShowroom.react",
	"WAWebShowroomMigration",
	"WDSThemes",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useState;
	function p(t) {
		var n = t.props.story, a = m(null), i = a[0], l = a[1];
		return d(function() {
			o("WAWebSetupUIDocs").setupUIDocs();
			var t = document.documentElement, n = (e || (e = r("stylex")))(o("WDSThemes").WDSLightTheme).split(" ").filter(Boolean);
			if (n.length > 0) {
				var a;
				(a = t.classList).add.apply(a, n);
			}
			return l(o("WAWebShowroomMigration").getAllShowroomStories()), function() {
				if (n.length > 0) {
					var e;
					(e = t.classList).remove.apply(e, n);
				}
			};
		}, []), i ? u.jsx("div", babelHelpers.extends({ id: "app" }, (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme), { children: u.jsx(r("CometPlaceholder.react"), {
			fallback: u.jsx("div", {}),
			name: "showroom",
			children: u.jsx(r("WAWebShowroom.react"), {
				initialStory: n,
				stories: i
			})
		}) })) : null;
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
