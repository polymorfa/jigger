__d("WAWebInitialsProfilePicture.story", [
	"WAWebContactCollection",
	"WAWebFrontendContactGetters",
	"WAWebInitialsFromNameUtils",
	"WAWebInitialsProfilePicture.react",
	"WAWebPerformantSelect.react",
	"WAWebShowroomUtils",
	"react",
	"useWAWebSelect"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState, m = [
		{
			shortName: "गोर्की",
			name: "गोर्की बक्शी",
			pushname: "बक्शी"
		},
		{
			shortName: "ตรี",
			name: "ตรี ดรุณพันธ์",
			pushname: "बक्शी"
		},
		{
			shortName: "Leo",
			name: "Leo Vincente",
			pushname: "Leo Vin"
		},
		{
			shortName: "محمد",
			name: "محمدعثمان",
			pushname: "محمد"
		},
		{
			shortName: "דנה",
			name: "דנה כהן",
			pushname: "דנה"
		},
		{
			shortName: "ઋષભ",
			name: "ઋષભ શાહ",
			pushname: "ઋષભ"
		},
		{
			shortName: "Énaël",
			name: "Énaël Èmilie",
			pushname: "Énaël"
		},
		{
			shortName: "Ирина",
			name: "Ирина Людмила",
			pushname: "Ирина"
		},
		{
			shortName: "চৈতালি",
			name: "চৈতালি মজুমদার",
			pushname: "চৈতালি"
		},
		{
			shortName: "磊磊",
			name: "欧阳磊磊",
			pushname: "磊磊"
		},
		{
			shortName: "Leo",
			name: "Leo गोर्की",
			pushname: "Ирина"
		},
		{
			shortName: "דנה",
			name: "דנה Leo",
			pushname: "Ирина"
		},
		{
			shortName: "Leo",
			name: "Leo דנה",
			pushname: "Ирина"
		},
		{
			shortName: "",
			name: "",
			pushname: "Empty since name is empty string"
		},
		{
			shortName: null,
			name: null,
			pushname: "דנה"
		}
	];
	function p() {
		var e = 17, t = d(null), n = t[0], r = t[1], a = d(null), i = a[0], l = a[1], u = o("useWAWebSelect").useSelect("Select color by number", Array.from({ length: e }, function(e, t) {
			return t + 1;
		}), { defaultSelectedIndex: 0 }), c = u[0], m = u[1], p = c != null ? c : 1, _ = o("WAWebShowroomUtils").getFilteredContacts(), f = function(t) {
			var e = o("WAWebContactCollection").ContactCollection.get(t);
			r(e), l(t);
		}, g = _.map(function(e) {
			return {
				itemKey: e.id.toString(),
				height: 40,
				menuItem: {
					optionId: e.id.toString(),
					primary: o("WAWebFrontendContactGetters").getDisplayName(e)
				}
			};
		}), h = {
			firstInitial: null,
			secondInitial: null
		};
		return n != null && (h = o("WAWebInitialsFromNameUtils").getInitialsFromContact(n)), s.jsxs("div", {
			className: "x1vd4hg5",
			children: [
				m,
				s.jsx("div", {
					className: "x1anpbxc",
					children: s.jsx(o("WAWebPerformantSelect.react").Select, {
						items: g,
						initialSelection: i,
						defaultLabel: "Select a contact",
						onChange: function(t) {
							return f(t);
						},
						menuMaxHeight: 400
					})
				}),
				s.jsx("div", {
					className: "x1pju0fl x10wjd1d x10l6tqk x1anpbxc",
					children: s.jsx(o("WAWebInitialsProfilePicture.react").InitialsProfilePicture, {
						initialsData: h,
						backgroundColorId: p
					})
				})
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		var e = {
			firstInitial: null,
			secondInitial: null
		}, t = d(null), n = t[0], r = t[1], a = [], i = new Map(), l = function(t) {
			r(t);
		};
		if (c(function() {
			if (a.length > 0) {
				var e = a[0];
				l(e.itemKey);
			}
		}, []), m.forEach(function(e) {
			var t = e.name, n = e.pushname, r = e.shortName, o = t != null && t !== "" ? t : "~ " + n;
			i.set(o, {
				name: t,
				shortName: r,
				pushname: n
			}), a.push({
				itemKey: o,
				height: 40,
				menuItem: {
					optionId: o,
					primary: o
				}
			});
		}), n != null) {
			var u = i.get(n);
			u != null && (e = o("WAWebInitialsFromNameUtils").getInitialsFromNames(u));
		}
		return s.jsxs("div", {
			className: "x1vd4hg5",
			children: [s.jsx("div", {
				className: "x1anpbxc",
				children: s.jsx(o("WAWebPerformantSelect.react").Select, {
					includeSearchInput: !0,
					items: a,
					initialSelection: n,
					defaultLabel: "Select a contact",
					onChange: function(t) {
						return l(t);
					},
					menuMaxHeight: 400
				})
			}), s.jsx("div", {
				className: "x1pju0fl x10wjd1d x10l6tqk x1anpbxc",
				children: s.jsx(o("WAWebInitialsProfilePicture.react").InitialsProfilePicture, {
					initialsData: e,
					backgroundColorId: 1
				})
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		var e = d(""), t = e[0], n = e[1], r = d(""), a = r[0], i = r[1], l = o("WAWebInitialsFromNameUtils").getInitialsFromNames({
			shortName: t,
			name: t + " " + a,
			pushname: null
		});
		return s.jsxs("div", {
			className: "x1vd4hg5",
			children: [s.jsxs("div", {
				className: "x1anpbxc",
				children: [s.jsxs("div", {
					className: "x1anpbxc",
					children: [s.jsx("span", { children: " First Name " }), s.jsx("input", {
						type: "text",
						value: t,
						onChange: function(t) {
							n(t.currentTarget.value);
						}
					})]
				}), s.jsxs("div", {
					className: "x1anpbxc",
					children: [s.jsx("span", { children: " Last Name " }), s.jsx("input", {
						type: "text",
						value: a,
						onChange: function(t) {
							i(t.currentTarget.value);
						}
					})]
				})]
			}), s.jsx("div", {
				className: "x1pju0fl x10wjd1d x10l6tqk x1anpbxc",
				children: s.jsx(o("WAWebInitialsProfilePicture.react").InitialsProfilePicture, {
					initialsData: l,
					backgroundColorId: 1
				})
			})]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = {
		storyName: "WAWebInitialsProfilePicture",
		component: o("WAWebInitialsProfilePicture.react").InitialsProfilePicture,
		description: "\n          Renders initials from name maximum two initials.\n          It will show as blank circle if initials are not supported.\n          Example of not supported initials are symbols, numbers, emojis, etc..\n      ",
		examples: [
			{
				example: function() {
					return s.jsx(p, {});
				},
				title: "Initials based on saved contant",
				description: "Using saved contacts to display how initials component should behave"
			},
			{
				example: function() {
					return s.jsx(_, {});
				},
				title: "Initials from different characters alphabets",
				description: "Show intials for first name and last name from different languages/alphabets"
			},
			{
				example: function() {
					return s.jsx(f, {});
				},
				title: "Check initials based on input",
				description: "Show intials for input from First and last name value"
			}
		]
	};
	l.default = g;
}), 98);
