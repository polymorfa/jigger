__d("WAWebDrawerStickyCtaButton.react", [
	"WAWebButton.react",
	"WAWebDrawerSection.react",
	"react",
	"react-compiler-runtime",
	"useWAWebIntersection"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState, m = { ctaContainerSticky: {
		position: "xet78yd",
		bottom: "x1ey2m1c",
		left: "xu96u03",
		insetInlineStart: null,
		insetInlineEnd: null,
		boxShadow: "x1906y37",
		$$css: !0
	} };
	function p(e) {
		var t = o("react-compiler-runtime").c(14), n = d(), a = n[0], i = n[1], l = d(), s = l[0], u = l[1], m = a != null ? "-" + a.offsetHeight + "px" : void 0, p;
		t[0] !== e || t[1] !== m ? (p = {
			root: e,
			rootMargin: m
		}, t[0] = e, t[1] = m, t[2] = p) : p = t[2];
		var _ = r("useWAWebIntersection")(p), f = _[0], g = _[1], h = g.isIntersecting, y;
		t[3] !== f ? (y = function(t) {
			f(t), u(t);
		}, t[3] = f, t[4] = y) : y = t[4];
		var C = y, b, v;
		t[5] !== s || t[6] !== a || t[7] !== h || t[8] !== e ? (b = function() {
			if (e != null && a != null && s != null) {
				if (h) a.style.removeProperty("right");
				else {
					var t = e.offsetWidth - (e.clientWidth + e.clientLeft * 2);
					a.style.setProperty("right", t + "px");
				}
				s.style.setProperty("min-height", a.offsetHeight + "px");
			}
		}, v = [
			h,
			e,
			a,
			s
		], t[5] = s, t[6] = a, t[7] = h, t[8] = e, t[9] = b, t[10] = v) : (b = t[9], v = t[10]), c(b, v);
		var S;
		return t[11] !== h || t[12] !== C ? (S = [
			h,
			C,
			i
		], t[11] = h, t[12] = C, t[13] = S) : S = t[13], S;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(12), n = e.children, a = e.disabled, i = e.onClick, l = e.rootRef, u = p(l), c = u[0], d = u[1], _ = u[2], f;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = { className: "xyorhqc" }, t[0] = f) : f = t[0];
		var g = c ? null : m.ctaContainerSticky, h;
		t[1] !== n || t[2] !== a || t[3] !== i ? (h = s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: i,
			disabled: a,
			stretch: !0,
			children: n
		}), t[1] = n, t[2] = a, t[3] = i, t[4] = h) : h = t[4];
		var y;
		t[5] !== _ || t[6] !== g || t[7] !== h ? (y = s.jsx(r("WAWebDrawerSection.react"), {
			ref: _,
			xstyle: g,
			theme: "sticky-button-section",
			children: h
		}), t[5] = _, t[6] = g, t[7] = h, t[8] = y) : y = t[8];
		var C;
		return t[9] !== d || t[10] !== y ? (C = s.jsx("div", babelHelpers.extends({ ref: d }, f, { children: y })), t[9] = d, t[10] = y, t[11] = C) : C = t[11], C;
	}
	l.default = _;
}), 98);
