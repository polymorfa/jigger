__d("WAWebNewsletterWamoSubMessageTypePopup.story", [
	"WAWebNewsletterWamoSubMessageTypePopup.react",
	"WAWebSendButtonWithCount.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useRef, d = u.useState;
	function m() {
		var e = c(null), t = d(null), n = t[0], o = t[1], a = function() {}, i = function() {
			o(null);
		}, l = function(n) {
			n.preventDefault(), e.current && o({
				popupAnchorEl: e.current,
				handleSelect: a
			});
		};
		return s.jsxs("div", {
			className: "xng8ra x1247r65",
			children: [s.jsx(r("WAWebSendButtonWithCount.react"), {
				onClick: l,
				ref: e
			}), n && s.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
				handleSelect: n.handleSelect,
				popupAnchorEl: n.popupAnchorEl,
				onDismiss: i
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	var p = {
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
	l.default = p;
}), 98);
