__d("WAWebDefaultIcon.story", [
	"WAWebDetailImage.react",
	"WAWebShowroomUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c() {
		for (var e = 17, t = [], n = u(1), r = n[0], a = n[1], i = function(t) {
			var e = t.currentTarget.value;
			a(parseInt(e, 10));
		}, l = 1; l <= e; l++) {
			var c = s.jsx("option", { children: l }, l);
			t.push(c);
		}
		var d = s.jsx("select", {
			onChange: i,
			children: t
		});
		return s.jsxs("div", { children: [d, s.jsx("div", {
			className: "x1anpbxc x1pju0fl x10wjd1d x10l6tqk",
			children: s.jsx(o("WAWebDetailImage.react").DefaultIcon, {
				id: o("WAWebShowroomUtils").getRandomContact().id,
				theme: o("WAWebDetailImage.react").DefaultIconThemeType.GroupChatProfilePicture,
				authorColor: r
			})
		})] });
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = {
		storyName: "WAWebDefaultIcon",
		component: o("WAWebDetailImage.react").DefaultIcon,
		description: "\n        Render placeholder for when user does not have profile picture\n    ",
		examples: [{
			example: function() {
				return s.jsx("div", { children: s.jsx("div", {
					className: "x1anpbxc x1pju0fl x10wjd1d x10l6tqk",
					children: s.jsx(o("WAWebDetailImage.react").DefaultIcon, { id: o("WAWebShowroomUtils").getRandomContact().id })
				}) });
			},
			title: "Default icon",
			description: "This is the default placeholder"
		}, {
			example: function() {
				return s.jsx(c, {});
			},
			title: "Default icon with color selection",
			description: "This is used in Group Chat Profile picture and add color"
		}]
	};
	l.default = d;
}), 98);
