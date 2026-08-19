__d("WAWebImgWithFallback.react", [
	"$InternalEnum",
	"WAWebAvatarSpinner.react",
	"WAWebDetailImage.react",
	"WAWebImg.react",
	"isEmptyObject",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = {
		SMALL: "SMALL",
		MEDIUM: "MEDIUM",
		LARGE: "LARGE",
		AUTO: "AUTO",
		NONE: "NONE"
	}, d = n("$InternalEnum").Mirrored(["Default", "Transparent"]);
	function m(e) {
		switch (e) {
			case c.SMALL: return 49;
			case c.MEDIUM: return 100;
			case c.LARGE: return 200;
			case c.NONE: return;
			default: return e;
		}
	}
	function p(e) {
		var t = e.size, n = t === void 0 ? c.SMALL : t, a = e.fallbackSVG, i = e.className, l = e.loader, p = l === void 0 ? !1 : l, _ = e.wrapOptions, f = _ === void 0 ? {} : _, g = e.transition, h = e.imgProps, y = e.theme, C = e.shape, b = C === void 0 ? o("WAWebDetailImage.react").DetailImageShape.Circle : C, v = u(!1), S = v[0], R = v[1], L = function() {
			R(!0);
		}, E = h.alt, k = h.crossOrigin, I = h.draggable, T = h.src, D = f.centerWrapperChild, x = f.wrapperClassName, $ = b === o("WAWebDetailImage.react").DetailImageShape.Squircle, P = {
			0: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xlshs6z xg01cxk",
			4: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xnpuxes x1hc1fzr",
			2: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xlshs6z xg01cxk x19991ni xx6bhzk x9lcvmn",
			6: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xnpuxes x1hc1fzr x19991ni xx6bhzk x9lcvmn",
			1: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xlshs6z xg01cxk x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
			5: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xnpuxes x1hc1fzr x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
			3: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xlshs6z xg01cxk x19991ni xx6bhzk x9lcvmn x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
			7: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xnpuxes x1hc1fzr x19991ni xx6bhzk x9lcvmn x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j"
		}[!!S << 2 | (g === !0) << 1 | !!$ << 0], N = {
			height: m(n),
			width: m(n)
		}, M;
		p && !S && (M = s.jsx(r("WAWebAvatarSpinner.react"), {}));
		var w = s.jsx(r("WAWebImg.react"), {
			src: T,
			className: P,
			onLoad: L,
			alt: E,
			crossOrigin: k,
			draggable: I
		}), A = f != null && !r("isEmptyObject")(f) ? s.jsx("div", {
			className: "" + {
				0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 xupqr0c xlshs6z xg01cxk",
				4: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 xupqr0c xlshs6z xg01cxk x78zum5 x6s0dn4 xl56j7k",
				2: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 xupqr0c xnpuxes x1hc1fzr",
				6: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 xupqr0c x78zum5 x6s0dn4 xl56j7k xnpuxes x1hc1fzr",
				1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xupqr0c xlshs6z xg01cxk xjbqb8w",
				5: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xupqr0c xlshs6z xg01cxk x78zum5 x6s0dn4 xl56j7k xjbqb8w",
				3: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xupqr0c xnpuxes x1hc1fzr xjbqb8w",
				7: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xupqr0c x78zum5 x6s0dn4 xl56j7k xnpuxes x1hc1fzr xjbqb8w"
			}[!!D << 2 | !!S << 1 | (y === d.Transparent) << 0] + (x ? " " + x : ""),
			children: w
		}) : w, F = T !== "" ? s.jsxs(s.Fragment, { children: [M, A] }) : null;
		return s.jsxs("div", {
			className: "" + {
				0: "x1n2onr6 x6ikm8r x10wlt62 x15e7hw7",
				4: "x1n2onr6 x6ikm8r x10wlt62 x15e7hw7 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
				2: "x1n2onr6 x6ikm8r x10wlt62 xjbqb8w",
				6: "x1n2onr6 x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xjbqb8w",
				1: "x1n2onr6 x6ikm8r x10wlt62 x15e7hw7 x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
				5: "x1n2onr6 x6ikm8r x10wlt62 x15e7hw7 x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
				3: "x1n2onr6 x6ikm8r x10wlt62 xjbqb8w x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
				7: "x1n2onr6 x6ikm8r x10wlt62 xjbqb8w x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j"
			}[(b === o("WAWebDetailImage.react").DetailImageShape.Circle) << 2 | (y === d.Transparent) << 1 | !!$ << 0] + (i != null ? " " + i : ""),
			style: N,
			children: [F, !S && s.jsx("div", {
				className: "" + {
					0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7",
					4: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 x78zum5 x6s0dn4 xl56j7k",
					2: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 x19991ni xx6bhzk x9lcvmn",
					6: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 x78zum5 x6s0dn4 xl56j7k x19991ni xx6bhzk x9lcvmn",
					1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xjbqb8w",
					5: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k xjbqb8w",
					3: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x19991ni xx6bhzk x9lcvmn xjbqb8w",
					7: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k x19991ni xx6bhzk x9lcvmn xjbqb8w"
				}[!!D << 2 | (g === !0) << 1 | (y === d.Transparent) << 0] + (x ? " " + x : ""),
				children: a
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.Theme = d, l.ImgWithFallback = p;
}), 98);
