__d("WAWebWindowsBrokenHybrid2559Modal.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebModal.react",
	"WAWebNoop",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		var e, t = u.jsx(o("WAWebButton.react").Button, {
			onClick: d,
			children: s._(
				/*BTDS*/
				""
			)
		}), n = u.jsx(o("WAWebButton.react").ButtonGroup, {
			direction: "horizontal",
			children: t
		});
		return u.jsxs(o("WAWebModal.react").Modal, {
			onOverlayClick: r("WAWebNoop"),
			title: s._(
				/*BTDS*/
				""
			),
			type: o("WAWebModal.react").ModalTheme.Small,
			actions: n,
			children: [
				u.jsx((e = o("WAWebText.react")).WAWebTextMuted, {
					marginTop: 16,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(e.WAWebTextMuted, {
					marginTop: 8,
					marginStart: 4,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(e.WAWebTextMuted, {
					marginTop: 8,
					marginStart: 4,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(e.WAWebTextMuted, {
					marginTop: 8,
					marginStart: 4,
					children: s._(
						/*BTDS*/
						""
					)
				})
			]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d() {
		window.open("ms-settings:appsfeatures");
	}
	l.default = c;
}), 226);
