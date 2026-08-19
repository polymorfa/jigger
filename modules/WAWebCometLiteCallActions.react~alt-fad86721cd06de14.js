__d("WAWebCometLiteCallActions.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebVoipStartCall",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"WDSButton.react",
	"WDSIconIcCall.react",
	"WDSIconIcVideocam.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		callActions: {
			columnGap: "xrdqr27",
			$$css: !0
		},
		callAction: {
			rowGap: "x8a3fw1",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.wid, n = function(n) {
			o("WAWebVoipStartCall").startWAWebVoipCall(t, n, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CONTACT_INFO, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED);
		};
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			xstyle: c.callActions,
			children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: c.callAction,
				children: [u.jsx(r("WDSButton.react"), {
					size: "large",
					variant: "outline",
					type: "media",
					Icon: r("WDSIconIcCall.react"),
					onPress: function() {
						return n(!1);
					},
					testid: "wa-web-lite-contact-detail-voice",
					"aria-label": s._(
						/*BTDS*/
						""
					)
				}), u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					selectable: !1,
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: c.callAction,
				children: [u.jsx(r("WDSButton.react"), {
					size: "large",
					variant: "outline",
					type: "media",
					Icon: r("WDSIconIcVideocam.react"),
					onPress: function() {
						return n(!0);
					},
					testid: "wa-web-lite-contact-detail-video",
					"aria-label": s._(
						/*BTDS*/
						""
					)
				}), u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					selectable: !1,
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
