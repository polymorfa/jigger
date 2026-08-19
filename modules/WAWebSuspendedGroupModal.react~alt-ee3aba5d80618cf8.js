__d("WAWebSuspendedGroupModal.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebModal.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.children, n = e.onDismissClicked, r = e.onSupportClicked, a = e.showSupportBtn, i = e.title, l = function(t) {
			t.stopPropagation(), t.preventDefault(), r == null || r();
		}, c = function(t) {
			t.stopPropagation(), t.preventDefault(), n == null || n();
		}, d = u.jsx(o("WAWebButton.react").Button, {
			testid: "popup-controls-support",
			type: "secondary",
			onClick: l,
			children: s._(
				/*BTDS*/
				""
			)
		}), m = u.jsx(o("WAWebButton.react").Button, {
			testid: "popup-controls-dismiss",
			type: "primary",
			onClick: c,
			children: s._(
				/*BTDS*/
				""
			)
		}), p = { escape: c }, _ = u.jsxs(u.Fragment, { children: [a && d, m] });
		return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: p,
			children: u.jsx(o("WAWebModal.react").Modal, {
				actions: _,
				children: t,
				title: i
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
