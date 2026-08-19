__d("WAWebShowroomStoryExample.react", [
	"ReactDOMServer_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
	"WAWebShowroomUtils",
	"getErrorSafe",
	"react",
	"react-is"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c(e) {
		"use no forget";
		var t = e.example, n = t.example, r = o("react-is").isValidElementType(n) ? s.jsx(n, {}) : n, a = u(!1), i = a[0], l = a[1], c = d(t.example), m = function() {
			l(!i);
		}, p = t.description != null && o("WAWebShowroomUtils").formatText(t.description), _ = t.title ? s.jsx("div", {
			className: "x14ug900 x6prxxf xk50ysn xzueoph",
			children: t.title
		}) : null;
		return s.jsxs("div", {
			className: "x1od0jb8 xbrszos xea3l6g x18isctg x2q3nzr x78zum5 x6ikm8r x10wlt62 xh8yej3",
			children: [s.jsx("div", {
				className: "x9f619 x3j32gy x1iyjqo2 xs83m0k xw2csxc x1odjw0f x1p5oq8j xwxc41k x1mfogq2 xsfy40s x1n2onr6",
				style: t.templateStyle,
				children: r
			}), s.jsxs("div", {
				className: "x9f619 xz57vy1 x1iyjqo2 xs83m0k x1f6kntn x1fc57z9 xw2csxc x1odjw0f x1p5oq8j xwxc41k x1mfogq2 xsfy40s",
				style: t.templateTextStyle,
				children: [
					_,
					p,
					t.descriptionNode,
					s.jsxs("div", {
						className: "x1pg5gke x14vqqas",
						children: [s.jsx("div", {
							className: "xhslqc4",
							onClick: m,
							role: "button",
							children: i ? "Hide code" : "Show code"
						}), s.jsx("div", babelHelpers.extends({}, {
							0: { className: "x14ug900 x1s85apg x1pg5gke x14vqqas x1hx0egp x1sdyfia" },
							1: { className: "x14ug900 x1pg5gke x14vqqas x1hx0egp x1sdyfia x1lliihq xk4td0m" }
						}[!!i << 0], { children: s.jsx("code", { children: c }) }))]
					})
				]
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e;
		if (typeof e == "function") try {
			t = e();
		} catch (e) {
			t = "Cannot convert React Hooks based component or class component into code. Please use stateless function component in your example.";
		}
		var n;
		try {
			n = o("ReactDOMServer_DO_NOT_USE_OR_YOU_WILL_BE_FIRED").renderToString(t);
		} catch (e) {
			var a = r("getErrorSafe")(e);
			if (a.message.includes("Portals are not currently supported by the server renderer")) n = "Cannot convert this element to code because it uses React portals which aren't supported by ReactDomServer";
			else throw a;
		}
		return n;
	}
	l.default = c;
}), 98);
