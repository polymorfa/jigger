__d("WAWebBotInvokeUpsellRow.react", [
	"fbt",
	"WAWebBotProfileCollection",
	"WAWebDefaultUserColorIcon.react",
	"WAWebDetailImage.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(11), n = e.onMouseDown, r = e.onMouseEnter, a = e.onMouseUp, i = e.selected, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = o("WAWebBotProfileCollection").BotProfileCollection.getDefaultBot(), t[0] = l) : l = t[0];
		var c = l, d;
		t[1] !== i ? (d = {
			0: { className: "x78zum5 x1qughib x6s0dn4 x889kno xl3akx1 x1a8lsjc x11ahuha" },
			1: { className: "x78zum5 x1qughib x6s0dn4 x889kno xl3akx1 x1a8lsjc x11ahuha x1ru9bj0" }
		}[(i === !0) << 0], t[1] = i, t[2] = d) : d = t[2];
		var m, p, _;
		if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
			var f;
			m = u.jsx("div", {
				className: "xs83m0k x1c4vz4f x1sx8fc2",
				children: c != null ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
					id: c.id,
					size: 32
				}) : u.jsx(o("WAWebDefaultUserColorIcon.react").DefaultUserColorIcon, {
					width: 32,
					height: 32
				})
			}), p = u.jsx("div", {
				className: "xs83m0k x1c4vz4f x19l4sor x78zum5 x1cy8zhl x1nxh6w3 x1hm9lzh x1sa5p1d",
				children: (f = c == null ? void 0 : c.name) != null ? f : s._(
					/*BTDS*/
					""
				)
			}), _ = u.jsx("div", {
				className: "xs83m0k x1r8uery x1iyjqo2 x78zum5 x1cy8zhl xib33u6 x1pg5gke x1hm9lzh x1sa5p1d",
				children: s._(
					/*BTDS*/
					""
				)
			}), t[3] = m, t[4] = p, t[5] = _;
		} else m = t[3], p = t[4], _ = t[5];
		var g;
		return t[6] !== n || t[7] !== r || t[8] !== a || t[9] !== d ? (g = u.jsxs("div", babelHelpers.extends({}, d, {
			"data-testid": "contact-mention-list-item",
			onMouseDown: n,
			onMouseUp: a,
			onMouseEnter: r,
			children: [
				m,
				p,
				_
			]
		})), t[6] = n, t[7] = r, t[8] = a, t[9] = d, t[10] = g) : g = t[10], g;
	}
	l.default = c;
}), 226);
