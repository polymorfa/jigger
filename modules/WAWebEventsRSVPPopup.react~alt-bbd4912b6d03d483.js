__d("WAWebEventsRSVPPopup.react", [
	"fbt",
	"WAWebProtobufsE2E.pb",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useImperativeHandle;
	function d(e) {
		var t = e.controlPopupRef, n = e.currentResponse, a = n === void 0 ? o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.UNKNOWN : n, i = e.onClick, l = e.onClose, d = e.triggerRef;
		function m(e) {
			e !== a && i(e);
		}
		var p = u.jsxs(r("WDSMenu.react"), { children: [
			u.jsx(r("WDSMenuItem.react"), {
				testid: "event_rsvp_going",
				title: s._(
					/*BTDS*/
					""
				),
				isToggleable: !0,
				toggled: a === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING,
				onPress: function() {
					return m(o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING);
				}
			}),
			u.jsx(r("WDSMenuItem.react"), {
				testid: "event_rsvp_maybe",
				title: s._(
					/*BTDS*/
					""
				),
				isToggleable: !0,
				toggled: a === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE,
				onPress: function() {
					return m(o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE);
				}
			}),
			u.jsx(r("WDSMenuItem.react"), {
				testid: "event_rsvp_not_going",
				title: s._(
					/*BTDS*/
					""
				),
				isToggleable: !0,
				toggled: a === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING,
				onPress: function() {
					return m(o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING);
				}
			})
		] }), _ = r("useWDSMenu")({
			targetRef: d,
			menu: p,
			position: "below",
			align: "middle",
			onClose: l
		}), f = _.closeMenu, g = _.menuPortal, h = _.openMenu;
		return c(t, function() {
			return {
				open: function(t) {
					return h();
				},
				close: f
			};
		}), u.jsx(u.Fragment, { children: g });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
