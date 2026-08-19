__d("WAWebProfileImage.story", [
	"WAWebCheckBox.react",
	"WAWebDetailImage.react",
	"WAWebProfileImage.react",
	"WAWebShowroomUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m() {
		var e = d("null"), t = e[0], n = e[1], a = d(null), i = a[0], l = a[1], u = d(!1), m = u[0], p = u[1], _ = d(!1), f = _[0], g = _[1], h = [
			"null",
			"voip",
			"voip-dimmed",
			"voip-large",
			"voip-large-dimmed"
		], y = function(t) {
			n(t.currentTarget.value);
		};
		if (c(function() {
			l([
				o("WAWebShowroomUtils").maybeGetProfilePicOfRandomContact(),
				o("WAWebShowroomUtils").maybeGetProfilePicOfRandomContact(),
				o("WAWebShowroomUtils").maybeGetProfilePicOfRandomContact()
			]);
		}, []), !i) return null;
		var C = {
			size: 138,
			theme: t === "null" ? void 0 : t,
			shape: f ? o("WAWebDetailImage.react").DetailImageShape.Square : o("WAWebDetailImage.react").DetailImageShape.Circle
		};
		return s.jsxs("div", { children: [
			s.jsxs("div", { children: ["Theme:", s.jsx("select", {
				onChange: y,
				children: h.map(function(e) {
					return s.jsx("option", {
						value: e,
						children: e != null ? e : "null"
					}, e);
				})
			})] }),
			s.jsxs("div", { children: ["Use default profile:", s.jsx(o("WAWebCheckBox.react").CheckBox, {
				checked: m,
				onChange: function() {
					return p(!m);
				}
			})] }),
			s.jsxs("div", { children: ["Square:", s.jsx(o("WAWebCheckBox.react").CheckBox, {
				checked: f,
				onChange: function() {
					return g(!f);
				}
			})] }),
			s.jsx("h2", { children: "1 image" }),
			s.jsx(r("WAWebProfileImage.react"), babelHelpers.extends({ thumbs: m ? [null] : i.slice(0, 1) }, C)),
			s.jsx("h2", { children: "2 images" }),
			s.jsx(r("WAWebProfileImage.react"), babelHelpers.extends({ thumbs: m ? [null, null] : i.slice(0, 2) }, C)),
			s.jsx("h2", { children: "3 images" }),
			s.jsx(r("WAWebProfileImage.react"), babelHelpers.extends({ thumbs: m ? [
				null,
				null,
				null
			] : i.slice(0, 3) }, C)),
			s.jsx("h2", { children: "3 images (mixed)" }),
			s.jsx(r("WAWebProfileImage.react"), babelHelpers.extends({ thumbs: [
				i[0],
				null,
				i[1]
			] }, C))
		] });
	}
	m.displayName = m.name + " [from " + i.id + "]";
	var p = {
		storyName: "WAWebProfileImage",
		component: r("WAWebProfileImage.react"),
		description: "\n        Render profile image\n    ",
		examples: [{
			example: s.jsx(m, {}),
			title: "Default"
		}]
	};
	l.default = p;
}), 98);
