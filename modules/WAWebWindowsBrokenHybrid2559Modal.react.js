__d("WAWebWindowsBrokenHybrid2559Modal.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebModal.react",
	"WAWebNoop",
	"WAWebText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(6), t;
		if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
			var n = u.jsx(o("WAWebButton.react").Button, {
				onClick: d,
				children: s._(
					/*BTDS*/
					""
				)
			});
			t = u.jsx(o("WAWebButton.react").ButtonGroup, {
				direction: "horizontal",
				children: n
			}), e[0] = t;
		} else t = e[0];
		var a = t, i;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), e[1] = i) : i = e[1];
		var l;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebText.react").WAWebTextMuted, {
			marginTop: 16,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[2] = l) : l = e[2];
		var c;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (c = u.jsx(o("WAWebText.react").WAWebTextMuted, {
			marginTop: 8,
			marginStart: 4,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[3] = c) : c = e[3];
		var m;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (m = u.jsx(o("WAWebText.react").WAWebTextMuted, {
			marginTop: 8,
			marginStart: 4,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[4] = m) : m = e[4];
		var p;
		return e[5] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsxs(o("WAWebModal.react").Modal, {
			onOverlayClick: r("WAWebNoop"),
			title: i,
			type: o("WAWebModal.react").ModalTheme.Small,
			actions: a,
			children: [
				l,
				c,
				m,
				u.jsx(o("WAWebText.react").WAWebTextMuted, {
					marginTop: 8,
					marginStart: 4,
					children: s._(
						/*BTDS*/
						""
					)
				})
			]
		}), e[5] = p) : p = e[5], p;
	}
	function d() {
		window.open("ms-settings:appsfeatures");
	}
	l.default = c;
}), 226);
