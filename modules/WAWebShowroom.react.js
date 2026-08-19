__d("WAWebShowroom.react", [
	"WAWebModalManager",
	"WAWebShowroomComponentList.react",
	"WAWebShowroomStory.react",
	"WAWebUnstyledButton.react",
	"WAWebXIcon.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(23), n = e.initialStory, a = e.stories, i;
		t[0] !== a ? (i = f(a), t[0] = a, t[1] = i) : i = t[1];
		var l = i, u;
		e: {
			if (n != null && n.length > 0) {
				var c;
				if (t[2] !== l || t[3] !== n) {
					var p;
					t[5] !== n ? (p = function(t) {
						return t.storyName === n;
					}, t[5] = n, t[6] = p) : p = t[6], c = l.find(p), t[2] = l, t[3] = n, t[4] = c;
				} else c = t[4];
				var _ = c;
				if (_) {
					u = _;
					break e;
				}
			}
			u = l[0];
		}
		var g = u, y = d(g), C = y[0], b = y[1];
		if (l.length <= 0) {
			var v;
			return t[7] === Symbol.for("react.memo_cache_sentinel") ? (v = s.jsx("div", {
				className: "xtsfpqs x78zum5 x1w9wu52 x1hx0egp x1280gxy x1cnzs8 x1xnnf8n xx6bls6 x106a9eq",
				children: "No stories found"
			}), t[7] = v) : v = t[7], v;
		}
		var S;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (S = { className: "x9f619 x5yr21d xu96u03 xixxii4 x13vifvy xh8yej3 xtsfpqs x78zum5 x1w9wu52 x1hx0egp x1280gxy" }, t[8] = S) : S = t[8];
		var R, L, E, k;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x2lah0s x1c4vz4f xcnqf8e x1280gxy" }, L = { className: "x78zum5 xdt5ytf x5yr21d" }, E = s.jsx("div", {
			className: "x2lah0s x1c4vz4f xdl72j9 xrlqpzj x1xnnf8n x1g2khh7 x106a9eq",
			children: s.jsx("div", {
				className: "x14ug900 x1c3i2sq xk50ysn x1j7pf75 xod5an3",
				children: "WA Web Components"
			})
		}), k = { className: "xs83m0k x1iyjqo2 xdl72j9 xm7lytj x1ykpatu x1c1uobl xyri2b x1odjw0f xxsgkw5" }, t[9] = R, t[10] = L, t[11] = E, t[12] = k) : (R = t[9], L = t[10], E = t[11], k = t[12]);
		var I;
		t[13] !== C || t[14] !== l ? (I = s.jsx("div", babelHelpers.extends({}, R, { children: s.jsxs("div", babelHelpers.extends({}, L, { children: [E, s.jsx("div", babelHelpers.extends({}, k, { children: s.jsx(r("WAWebShowroomComponentList.react"), {
			active: C,
			list: l,
			onSelectStory: b
		}) }))] })) })), t[13] = C, t[14] = l, t[15] = I) : I = t[15];
		var T;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (T = { className: "xs83m0k x1iyjqo2 xdl72j9 x6ikm8r x10wlt62" }, t[16] = T) : T = t[16];
		var D;
		t[17] !== C ? (D = s.jsx("div", babelHelpers.extends({}, T, { children: s.jsx(o("WAWebShowroomStory.react").Story, { story: C }) })), t[17] = C, t[18] = D) : D = t[18];
		var x;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (x = s.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: m.closeButton,
			onClick: h,
			children: s.jsx(o("WAWebXIcon.react").XIcon, {})
		}), t[19] = x) : x = t[19];
		var $;
		return t[20] !== D || t[21] !== I ? ($ = s.jsxs("div", babelHelpers.extends({}, S, {
			"data-testid": "ui-showroom",
			children: [
				I,
				D,
				x
			]
		})), t[20] = D, t[21] = I, t[22] = $) : $ = t[22], $;
	}
	function h() {
		o("WAWebModalManager").ModalManager.close();
	}
	l.default = g;
}), 98);
