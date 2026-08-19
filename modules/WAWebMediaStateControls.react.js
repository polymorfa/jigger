__d("WAWebMediaStateControls.react", [
	"WAWebClickable.react",
	"WAWebL10nFilesize",
	"WAWebMediaCancelIcon.react",
	"WAWebMediaGifIcon.react",
	"WAWebMediaPlayIcon.react",
	"WAWebMediaStateControlSharedStyles",
	"WAWebMediaUploadIcon.react",
	"WAWebSpinner.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useImperativeHandle, m = c.useRef, p = {
		icon: {
			display: "x1rg5ohu",
			height: "x10wjd1d",
			position: "x1n2onr6",
			width: "x1pju0fl",
			$$css: !0
		},
		play: {
			marginInlineStart: "xwklpps",
			$$css: !0
		}
	};
	function _(t) {
		var n = o("react-compiler-runtime").c(10), a = t.cancelable, i = t.ref, l = !!a, s = m(), c;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (c = function() {
			return { getElement: function() {
				return s.current;
			} };
		}, n[0] = c) : c = n[0], d(i, c);
		var _;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (_ = (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls), n[1] = _) : _ = n[1];
		var f;
		n[2] !== l ? (f = (e || (e = r("stylex"))).props(p.icon, l && r("WAWebMediaStateControlSharedStyles").cursorPointer), n[2] = l, n[3] = f) : f = n[3];
		var g;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx("div", {
			className: "x1o0tod x10l6tqk x13vifvy",
			children: u.jsx(o("WAWebSpinner.react").Spinner, {
				size: 50,
				stroke: 3,
				color: "white"
			})
		}), n[4] = g) : g = n[4];
		var h;
		n[5] !== l ? (h = l ? u.jsx("div", {
			className: "x1jeu2jp x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x12k1wp2 x1k847yn x1j67448 xzkvk7n x1c9tyrk xeusxvb x1pahc9y x1ertn4p x14obwa1 xn3w4p2 xccywas x7phf20 x7r5mf7 x10l6tqk x1pdr0v7 x187nhsf xy01wc4 x12sjv16 x9femuk x1jjcuvn xnvurfn x1v3rft4 x1opv7go x1rovbrg x180ha0m x147fd2z xlogyij xq2yz4j xn4w8fp x17issv1 xxslzl9 xwjlxly x10tli2e xf8oath xdz3mh0 x1hmns74 x1r60q8r x1y59no3",
			children: u.jsx(o("WAWebMediaCancelIcon.react").MediaCancelIcon, {})
		}) : null, n[5] = l, n[6] = h) : h = n[6];
		var y;
		return n[7] !== f || n[8] !== h ? (y = u.jsx("div", babelHelpers.extends({ ref: s }, _, {
			"data-testid": "media-state-pending",
			children: u.jsxs("div", babelHelpers.extends({}, f, { children: [g, h] }))
		})), n[7] = f, n[8] = h, n[9] = y) : y = n[9], y;
	}
	function f(t) {
		var n = o("react-compiler-runtime").c(10), a = t.filesize, i = t.ref, l = a === void 0 ? 0 : a, s = m(), c;
		if (n[0] === Symbol.for("react.memo_cache_sentinel") ? (c = function() {
			return { getElement: function() {
				return s.current;
			} };
		}, n[0] = c) : c = n[0], d(i, c), l > 0) {
			var p;
			n[1] === Symbol.for("react.memo_cache_sentinel") ? (p = (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls), n[1] = p) : p = n[1];
			var _, f;
			n[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").btnMeta, r("WAWebMediaStateControlSharedStyles").cursorPointer), f = u.jsx(o("WAWebMediaUploadIcon.react").MediaUploadIcon, { xstyle: r("WAWebMediaStateControlSharedStyles").iconMeta }), n[2] = _, n[3] = f) : (_ = n[2], f = n[3]);
			var g;
			n[4] !== l ? (g = o("WAWebL10nFilesize").getL10nFilesize(l), n[4] = l, n[5] = g) : g = n[5];
			var h;
			return n[6] !== g ? (h = u.jsx("div", babelHelpers.extends({ ref: s }, p, {
				"data-testid": "media-state-upload",
				children: u.jsxs("button", babelHelpers.extends({}, _, { children: [f, u.jsx("span", { children: g })] }))
			})), n[6] = g, n[7] = h) : h = n[7], h;
		}
		var y;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (y = (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls), n[8] = y) : y = n[8];
		var C;
		return n[9] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx("div", babelHelpers.extends({ ref: s }, y, {
			"data-testid": "media-state-upload",
			children: u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").button), { children: u.jsx(o("WAWebMediaUploadIcon.react").MediaUploadIcon, {}) }))
		})), n[9] = C) : C = n[9], C;
	}
	function g(t) {
		var n = o("react-compiler-runtime").c(2), a = t.ref, i = m(), l;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (l = function() {
			return { getElement: function() {
				return i.current;
			} };
		}, n[0] = l) : l = n[0], d(a, l);
		var s;
		return n[1] === Symbol.for("react.memo_cache_sentinel") ? (s = u.jsx("div", babelHelpers.extends({ ref: i }, (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls), { children: u.jsx("div", babelHelpers.extends({}, e.props(r("WAWebMediaStateControlSharedStyles").button), { children: u.jsx(o("WAWebMediaPlayIcon.react").MediaPlayIcon, { xstyle: p.play }) })) })), n[1] = s) : s = n[1], s;
	}
	function h(t) {
		var n = o("react-compiler-runtime").c(4), a = t.onClick, i;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (i = (e || (e = r("stylex")))(r("WAWebMediaStateControlSharedStyles").controls), n[0] = i) : i = n[0];
		var l;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").button), { children: u.jsx(o("WAWebMediaGifIcon.react").MediaGifIcon, {}) })), n[1] = l) : l = n[1];
		var s;
		return n[2] !== a ? (s = u.jsx(o("WAWebClickable.react").Clickable, {
			className: i,
			onClick: a,
			dataTestId: "media-state-gif-icon",
			children: l
		}), n[2] = a, n[3] = s) : s = n[3], s;
	}
	l.Pending = _, l.Upload = f, l.Play = g, l.GifIcon = h;
}), 98);
