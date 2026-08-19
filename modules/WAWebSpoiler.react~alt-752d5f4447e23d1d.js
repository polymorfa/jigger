__d("WAWebSpoiler.react", [
	"fbt",
	"WAWebSpoilerParticlesCanvas.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState;
	function p(e) {
		var t = e.children, n = e.interactive, o = n === void 0 ? !0 : n, a = m(!1), i = a[0], l = a[1], c = m(null), p = c[0], _ = c[1], f = d(function(e) {
			e.preventDefault(), e.stopPropagation(), _({
				clientX: e.clientX,
				clientY: e.clientY
			}), l(!0);
		}, []), g = d(function(e) {
			e.target === e.currentTarget && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), e.stopPropagation(), l(!0));
		}, []), h = u.jsxs(u.Fragment, { children: [u.jsx("span", babelHelpers.extends({}, {
			0: { className: "xg01cxk x47corl x5h36tt x1fbs3r x19991ni x9lcvmn" },
			1: { className: "x5h36tt x1fbs3r x19991ni x9lcvmn x1hc1fzr x67bb7w" }
		}[!!i << 0], { children: t })), u.jsx(r("WAWebSpoilerParticlesCanvas.react"), {
			revealed: i,
			dismissCoords: p
		})] });
		return i ? u.jsx("span", {
			"data-spoiler": "revealed",
			"data-testid": "spoiler",
			className: "xbrszos xea3l6g x2q3nzr x18isctg xexx8yu x1j8ymqv x18d9i69 x4tra6z x1n2onr6 xjbqb8w x1heor9g xt0e3qv x1kxipp6",
			children: h
		}) : o ? u.jsx("span", {
			"data-spoiler": "true",
			"data-testid": "spoiler",
			role: "button",
			tabIndex: 0,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onClickCapture: f,
			onKeyDown: g,
			className: "xjbqb8w xbrszos xea3l6g x2q3nzr x18isctg x19co3pv x1ypdohk xexx8yu x1j8ymqv x18d9i69 x4tra6z x1n2onr6 x87ps6o",
			children: h
		}) : u.jsx("span", {
			"data-spoiler": "true",
			"data-testid": "spoiler",
			role: "img",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			className: "xjbqb8w xbrszos xea3l6g x2q3nzr x18isctg x19co3pv xexx8yu x1j8ymqv x18d9i69 x4tra6z x1n2onr6 x87ps6o xt0e3qv",
			children: h
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
