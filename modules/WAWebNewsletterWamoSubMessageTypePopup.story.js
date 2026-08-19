__d("WAWebNewsletterWamoSubMessageTypePopup.story", [
	"WAWebNewsletterWamoSubMessageTypePopup.react",
	"WAWebSendButtonWithCount.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useRef, d = u.useState;
	function m() {
		var e = o("react-compiler-runtime").c(8), t = c(null), n = d(null), a = n[0], i = n[1], l = p, u;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (u = function() {
			i(null);
		}, e[0] = u) : u = e[0];
		var m = u, _;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (_ = function(n) {
			n.preventDefault(), t.current && i({
				popupAnchorEl: t.current,
				handleSelect: l
			});
		}, e[1] = _) : _ = e[1];
		var f = _, g, h;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "xng8ra x1247r65" }, h = s.jsx(r("WAWebSendButtonWithCount.react"), {
			onClick: f,
			ref: t
		}), e[2] = g, e[3] = h) : (g = e[2], h = e[3]);
		var y;
		e[4] !== a ? (y = a && s.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
			handleSelect: a.handleSelect,
			popupAnchorEl: a.popupAnchorEl,
			onDismiss: m
		}), e[4] = a, e[5] = y) : y = e[5];
		var C;
		return e[6] !== y ? (C = s.jsxs("div", babelHelpers.extends({}, g, { children: [h, y] })), e[6] = y, e[7] = C) : C = e[7], C;
	}
	function p() {}
	var _ = {
		storyName: "WAWebNewsletterWamoSubMessageTypePopup",
		component: r("WAWebNewsletterWamoSubMessageTypePopup.react"),
		description: "Newsletter Wamo Sub Message Type Popup. This is a popup that allows the admin to select the type of message they want to send to a channel.",
		examples: [{
			example: function() {
				return s.jsx(m, {});
			},
			title: "NewsletterWamoSubMessageTypePopup"
		}]
	};
	l.default = _;
}), 98);
