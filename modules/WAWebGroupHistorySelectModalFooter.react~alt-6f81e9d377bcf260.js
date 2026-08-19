__d("WAWebGroupHistorySelectModalFooter.react", [
	"fbt",
	"CometPlaceholder.react",
	"WAWebAddGroupParticipantGroupHistoryContext.react",
	"WAWebGroupHistoryGating",
	"WAWebGroupHistoryRestrictionHelper",
	"WAWebGroupHistorySendMessagesModal.react",
	"WAWebGroupMemberAddingUserJourneyLogger",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSSwitch.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.use, m = c.useCallback, p = c.useEffect, _ = c.useEffectEvent, f = { disclaimer: {
		paddingTop: "x1p57kb1",
		$$css: !0
	} };
	function g(e) {
		var t = e.actionLabel, n = e.disclaimer, a = e.memberCount, i = e.onActionPress, l = e.ref, s = e.selectedContacts, c = d(r("WAWebAddGroupParticipantGroupHistoryContext.react")), m = c.canShareGroupHistory, p = c.setShouldSendGroupHistory, _ = c.shouldSendGroupHistory, g = m && o("WAWebGroupHistoryRestrictionHelper").hasUnrestrictedParticipants(s);
		return u.jsxs("div", {
			ref: l,
			className: "x1n2onr6 x78zum5 xdt5ytf x1p57kb1 xyo0t3i xvg22vi xb0esv5 x1ccr1t9 xpx74rz",
			children: [
				g && u.jsx(r("CometPlaceholder.react"), {
					name: "group-history-message-count",
					fallback: null,
					children: u.jsx(h, {
						memberCount: a,
						onChange: p,
						value: _
					})
				}),
				u.jsx(r("WDSButton.react"), {
					testid: "group-history-add-member-button",
					onPress: i,
					label: t,
					widthMode: "flexible"
				}),
				u.jsx(r("WDSText.react"), {
					xstyle: f.disclaimer,
					colorName: "contentDeemphasized",
					type: "Body3",
					children: n
				})
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.memberCount, n = e.onChange, a = e.value, i = d(r("WAWebAddGroupParticipantGroupHistoryContext.react")), l = i.groupWid, c = i.messageCountPromise, f = i.selectedMessageCount, g = i.setSelectedMessageCount, h = _(async function() {
			var e = await c;
			e != null && o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.footerDisplayed({
				groupHistoryMessagesCount: e,
				isGroupHistoryToggledOn: a
			});
		});
		p(function() {
			h();
		}, []);
		var y = m(function(e, t) {
			n(e), e ? o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.groupHistoryToggleOn({ groupHistoryMessagesCount: t }) : o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.groupHistoryToggleOff({ groupHistoryMessagesCount: t });
		}, [n]), C = m(function(e) {
			var t = f != null ? f : e;
			o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.countChangeEntryPointClicked({ groupHistoryMessagesCount: t }), o("WAWebModalManager").ModalManager.openSupportModal(u.jsx(r("WAWebGroupHistorySendMessagesModal.react"), {
				currentMessageCount: e,
				selectedMessageCount: t,
				showPinDisclaimer: o("WAWebGroupHistoryGating").isOutOfWindowPinSenderEnabled(l),
				onDone: function(t) {
					g(t), y(!0, t), o("WAWebModalManager").ModalManager.closeSupportModal();
				},
				onCancel: function() {
					o("WAWebModalManager").ModalManager.closeSupportModal();
				}
			}));
		}, [
			l,
			y,
			f,
			g
		]);
		if (c == null) return null;
		var b = d(c);
		if (b === 0) return null;
		var v = f != null ? f : b, S = s._(
			/*BTDS*/
			""
		), R = u.jsx(r("WDSTextualLink.react"), {
			onClick: function() {
				return C(b);
			},
			testid: "group-history-message-count-link",
			textConfig: "Body2",
			children: S
		}), L = s._(
			/*BTDS*/
			"",
			[
				s._plural(t),
				s._param("message_history_label", u.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body2Emphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})),
				s._param("message_count_link", R)
			]
		);
		return u.jsxs("div", {
			className: "x78zum5 x1qughib x6s0dn4 xvpt6g3",
			children: [u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body2",
				children: L
			}), u.jsx(r("WDSSwitch.react"), {
				testid: "group-history-send-toggle",
				value: a,
				onChange: function(t) {
					y(t, v);
				}
			})]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = g;
}), 226);
