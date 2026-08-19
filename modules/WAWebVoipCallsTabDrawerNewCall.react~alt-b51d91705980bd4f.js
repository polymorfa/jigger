__d("WAWebVoipCallsTabDrawerNewCall.react", [
	"fbt",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebNoop",
	"WAWebSelectGroupParticipantsDrawer.react",
	"WAWebVoipStartCall",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"WDSButton.react",
	"WDSIconIcCallFilled.react",
	"WDSIconIcVideocamFilled.react",
	"react",
	"useWAWebABPropConfigValue"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState, d = {
		cancelBtnContainer: {
			display: "x1jfb8zj x1eww196",
			$$css: !0
		},
		callButtonsContainer: {
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xx42vgk",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			$$css: !0
		},
		buttonRow: {
			rowGap: "x1qvou4u",
			columnGap: "x1s70e7g",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.onBack, n = e.ref, a = o("useWAWebABPropConfigValue").useABPropConfigValue("group_call_max_participants") - 1, i = c([]), l = i[0], m = i[1], p = u.jsxs(o("WAWebFlex.react").FlexRow, {
			wrap: "wrap",
			justify: "center",
			xstyle: d.buttonRow,
			children: [u.jsx(r("WAWebFlexItem.react"), {
				xstyle: d.cancelBtnContainer,
				children: u.jsx(r("WDSButton.react"), {
					label: r("WAWebFbtCommon")("Cancel"),
					variant: "borderless",
					onPress: t
				})
			}), u.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: d.buttonRow,
				children: [u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcCallFilled.react"),
					label: s._(
						/*BTDS*/
						""
					),
					variant: "filled",
					onPress: function() {
						(async function() {
							await o("WAWebVoipStartCall").startWAWebVoipGroupCallFromContacts(l, !1, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALLS_TAB_NEW_CALL, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED), t == null || t();
						})();
					}
				}) }), u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcVideocamFilled.react"),
					label: s._(
						/*BTDS*/
						""
					),
					variant: "filled",
					onPress: function() {
						(async function() {
							await o("WAWebVoipStartCall").startWAWebVoipGroupCallFromContacts(l, !0, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALLS_TAB_NEW_CALL, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED), t == null || t();
						})();
					}
				}) })]
			})]
		});
		return u.jsx(r("WAWebSelectGroupParticipantsDrawer.react"), {
			ref: n,
			testid: "new-call-drawer",
			header: s._(
				/*BTDS*/
				""
			),
			selectionSizeLimit: a,
			participants: l,
			errorToastOnAddParticipantLimit: s._(
				/*BTDS*/
				"",
				[s._param("max-participants-in-call", a, [0, a])]
			),
			nextBtn: p,
			nextBtnContainerXstyle: d.callButtonsContainer,
			onChange: m,
			onKeyboardEnter: r("WAWebNoop"),
			onBack: t,
			onCancel: t
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
