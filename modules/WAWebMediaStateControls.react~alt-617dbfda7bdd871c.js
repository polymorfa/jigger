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
		var n = t.cancelable, a = t.ref, i = !!n, l = m();
		return d(a, function() {
			return { getElement: function() {
				return l.current;
			} };
		}), u.jsx("div", babelHelpers.extends({ ref: l }, (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls), {
			"data-testid": "media-state-pending",
			children: u.jsxs("div", babelHelpers.extends({}, e.props(p.icon, i && r("WAWebMediaStateControlSharedStyles").cursorPointer), { children: [u.jsx("div", {
				className: "x1o0tod x10l6tqk x13vifvy",
				children: u.jsx(o("WAWebSpinner.react").Spinner, {
					size: 50,
					stroke: 3,
					color: "white"
				})
			}), i ? u.jsx("div", {
				className: "x1jeu2jp x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x12k1wp2 x1k847yn x1j67448 xzkvk7n x1c9tyrk xeusxvb x1pahc9y x1ertn4p x14obwa1 xn3w4p2 xccywas x7phf20 x7r5mf7 x10l6tqk x1pdr0v7 x187nhsf xy01wc4 x12sjv16 x9femuk x1jjcuvn xnvurfn x1v3rft4 x1opv7go x1rovbrg x180ha0m x147fd2z xlogyij xq2yz4j xn4w8fp x17issv1 xxslzl9 xwjlxly x10tli2e xf8oath xdz3mh0 x1hmns74 x1r60q8r x1y59no3",
				children: u.jsx(o("WAWebMediaCancelIcon.react").MediaCancelIcon, {})
			}) : null] }))
		}));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(t) {
		var n = t.filesize, a = n === void 0 ? 0 : n, i = t.ref, l = m();
		return d(i, function() {
			return { getElement: function() {
				return l.current;
			} };
		}), a > 0 ? u.jsx("div", babelHelpers.extends({ ref: l }, (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls), {
			"data-testid": "media-state-upload",
			children: u.jsxs("button", babelHelpers.extends({}, e.props(r("WAWebMediaStateControlSharedStyles").btnMeta, r("WAWebMediaStateControlSharedStyles").cursorPointer), { children: [u.jsx(o("WAWebMediaUploadIcon.react").MediaUploadIcon, { xstyle: r("WAWebMediaStateControlSharedStyles").iconMeta }), u.jsx("span", { children: o("WAWebL10nFilesize").getL10nFilesize(a) })] }))
		})) : u.jsx("div", babelHelpers.extends({ ref: l }, (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls), {
			"data-testid": "media-state-upload",
			children: u.jsx("div", babelHelpers.extends({}, e.props(r("WAWebMediaStateControlSharedStyles").button), { children: u.jsx(o("WAWebMediaUploadIcon.react").MediaUploadIcon, {}) }))
		}));
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n = t.ref, a = m();
		return d(n, function() {
			return { getElement: function() {
				return a.current;
			} };
		}), u.jsx("div", babelHelpers.extends({ ref: a }, (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls), { children: u.jsx("div", babelHelpers.extends({}, e.props(r("WAWebMediaStateControlSharedStyles").button), { children: u.jsx(o("WAWebMediaPlayIcon.react").MediaPlayIcon, { xstyle: p.play }) })) }));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(t) {
		var n = t.onClick;
		return u.jsx(o("WAWebClickable.react").Clickable, {
			className: (e || (e = r("stylex")))(r("WAWebMediaStateControlSharedStyles").controls),
			onClick: n,
			dataTestId: "media-state-gif-icon",
			children: u.jsx("div", babelHelpers.extends({}, e.props(r("WAWebMediaStateControlSharedStyles").button), { children: u.jsx(o("WAWebMediaGifIcon.react").MediaGifIcon, {}) }))
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.Pending = _, l.Upload = f, l.Play = g, l.GifIcon = h;
}), 98);
