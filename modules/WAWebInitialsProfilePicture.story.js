__d("WAWebInitialsProfilePicture.story", [
	"WAWebContactCollection",
	"WAWebFrontendContactGetters",
	"WAWebInitialsFromNameUtils",
	"WAWebInitialsProfilePicture.react",
	"WAWebPerformantSelect.react",
	"WAWebShowroomUtils",
	"react",
	"react-compiler-runtime",
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
		var e = o("react-compiler-runtime").c(20), t = d(null), n = t[0], r = t[1], a = d(null), i = a[0], l = a[1], u, c;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (u = Array.from({ length: 17 }, f), c = { defaultSelectedIndex: 0 }, e[0] = u, e[1] = c) : (u = e[0], c = e[1]);
		var m = o("useWAWebSelect").useSelect("Select color by number", u, c), p = m[0], g = m[1], h = p != null ? p : 1, y, C;
		if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
			var b = o("WAWebShowroomUtils").getFilteredContacts();
			y = function(t) {
				var e = o("WAWebContactCollection").ContactCollection.get(t);
				r(e), l(t);
			}, C = b.map(_), e[2] = y, e[3] = C;
		} else y = e[2], C = e[3];
		var v = C, S;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (S = {
			firstInitial: null,
			secondInitial: null
		}, e[4] = S) : S = e[4];
		var R = S;
		if (n != null) {
			var L;
			e[5] !== n ? (L = o("WAWebInitialsFromNameUtils").getInitialsFromContact(n), e[5] = n, e[6] = L) : L = e[6], R = L;
		}
		var E;
		e[7] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "x1vd4hg5" }, e[7] = E) : E = e[7];
		var k;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (k = { className: "x1anpbxc" }, e[8] = k) : k = e[8];
		var I;
		e[9] === Symbol.for("react.memo_cache_sentinel") ? (I = function(t) {
			return y(t);
		}, e[9] = I) : I = e[9];
		var T;
		e[10] !== i ? (T = s.jsx("div", babelHelpers.extends({}, k, { children: s.jsx(o("WAWebPerformantSelect.react").Select, {
			items: v,
			initialSelection: i,
			defaultLabel: "Select a contact",
			onChange: I,
			menuMaxHeight: 400
		}) })), e[10] = i, e[11] = T) : T = e[11];
		var D;
		e[12] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x1pju0fl x10wjd1d x10l6tqk x1anpbxc" }, e[12] = D) : D = e[12];
		var x;
		e[13] !== h || e[14] !== R ? (x = s.jsx("div", babelHelpers.extends({}, D, { children: s.jsx(o("WAWebInitialsProfilePicture.react").InitialsProfilePicture, {
			initialsData: R,
			backgroundColorId: h
		}) })), e[13] = h, e[14] = R, e[15] = x) : x = e[15];
		var $;
		return e[16] !== g || e[17] !== T || e[18] !== x ? ($ = s.jsxs("div", babelHelpers.extends({}, E, { children: [
			g,
			T,
			x
		] })), e[16] = g, e[17] = T, e[18] = x, e[19] = $) : $ = e[19], $;
	}
	function _(e) {
		return {
			itemKey: e.id.toString(),
			height: 40,
			menuItem: {
				optionId: e.id.toString(),
				primary: o("WAWebFrontendContactGetters").getDisplayName(e)
			}
		};
	}
	function f(e, t) {
		return t + 1;
	}
	function g() {
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
	g.displayName = g.name + " [from " + i.id + "]";
	function h() {
		var e = o("react-compiler-runtime").c(24), t = d(""), n = t[0], r = t[1], a = d(""), i = a[0], l = a[1], u = n + " " + i, c;
		e[0] !== n || e[1] !== u ? (c = o("WAWebInitialsFromNameUtils").getInitialsFromNames({
			shortName: n,
			name: u,
			pushname: null
		}), e[0] = n, e[1] = u, e[2] = c) : c = e[2];
		var m = c, p, _, f, g;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "x1vd4hg5" }, _ = { className: "x1anpbxc" }, f = { className: "x1anpbxc" }, g = s.jsx("span", { children: " First Name " }), e[3] = p, e[4] = _, e[5] = f, e[6] = g) : (p = e[3], _ = e[4], f = e[5], g = e[6]);
		var h;
		e[7] === Symbol.for("react.memo_cache_sentinel") ? (h = function(t) {
			r(t.currentTarget.value);
		}, e[7] = h) : h = e[7];
		var y;
		e[8] !== n ? (y = s.jsxs("div", babelHelpers.extends({}, f, { children: [g, s.jsx("input", {
			type: "text",
			value: n,
			onChange: h
		})] })), e[8] = n, e[9] = y) : y = e[9];
		var C, b;
		e[10] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x1anpbxc" }, b = s.jsx("span", { children: " Last Name " }), e[10] = C, e[11] = b) : (C = e[10], b = e[11]);
		var v;
		e[12] === Symbol.for("react.memo_cache_sentinel") ? (v = function(t) {
			l(t.currentTarget.value);
		}, e[12] = v) : v = e[12];
		var S;
		e[13] !== i ? (S = s.jsxs("div", babelHelpers.extends({}, C, { children: [b, s.jsx("input", {
			type: "text",
			value: i,
			onChange: v
		})] })), e[13] = i, e[14] = S) : S = e[14];
		var R;
		e[15] !== S || e[16] !== y ? (R = s.jsxs("div", babelHelpers.extends({}, _, { children: [y, S] })), e[15] = S, e[16] = y, e[17] = R) : R = e[17];
		var L;
		e[18] === Symbol.for("react.memo_cache_sentinel") ? (L = { className: "x1pju0fl x10wjd1d x10l6tqk x1anpbxc" }, e[18] = L) : L = e[18];
		var E;
		e[19] !== m ? (E = s.jsx("div", babelHelpers.extends({}, L, { children: s.jsx(o("WAWebInitialsProfilePicture.react").InitialsProfilePicture, {
			initialsData: m,
			backgroundColorId: 1
		}) })), e[19] = m, e[20] = E) : E = e[20];
		var k;
		return e[21] !== R || e[22] !== E ? (k = s.jsxs("div", babelHelpers.extends({}, p, { children: [R, E] })), e[21] = R, e[22] = E, e[23] = k) : k = e[23], k;
	}
	var y = {
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
					return s.jsx(g, {});
				},
				title: "Initials from different characters alphabets",
				description: "Show intials for first name and last name from different languages/alphabets"
			},
			{
				example: function() {
					return s.jsx(h, {});
				},
				title: "Check initials based on input",
				description: "Show intials for input from First and last name value"
			}
		]
	};
	l.default = y;
}), 98);
