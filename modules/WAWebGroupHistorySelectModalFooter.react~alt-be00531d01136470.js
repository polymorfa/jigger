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
	"asyncToGeneratorRuntime",
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
		var t = e.memberCount, a = e.onChange, i = e.value, l = d(r("WAWebAddGroupParticipantGroupHistoryContext.react")), c = l.groupWid, f = l.messageCountPromise, g = l.selectedMessageCount, h = l.setSelectedMessageCount, y = _(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield f;
			e != null && o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.footerDisplayed({
				groupHistoryMessagesCount: e,
				isGroupHistoryToggledOn: i
			});
		}));
		p(function() {
			y();
		}, []);
		var C = m(function(e, t) {
			a(e), e ? o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.groupHistoryToggleOn({ groupHistoryMessagesCount: t }) : o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.groupHistoryToggleOff({ groupHistoryMessagesCount: t });
		}, [a]), b = m(function(e) {
			var t = g != null ? g : e;
			o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.countChangeEntryPointClicked({ groupHistoryMessagesCount: t }), o("WAWebModalManager").ModalManager.openSupportModal(u.jsx(r("WAWebGroupHistorySendMessagesModal.react"), {
				currentMessageCount: e,
				selectedMessageCount: t,
				showPinDisclaimer: o("WAWebGroupHistoryGating").isOutOfWindowPinSenderEnabled(c),
				onDone: function(t) {
					h(t), C(!0, t), o("WAWebModalManager").ModalManager.closeSupportModal();
				},
				onCancel: function() {
					o("WAWebModalManager").ModalManager.closeSupportModal();
				}
			}));
		}, [
			c,
			C,
			g,
			h
		]);
		if (f == null) return null;
		var v = d(f);
		if (v === 0) return null;
		var S = g != null ? g : v, R = s._(
			/*BTDS*/
			""
		), L = u.jsx(r("WDSTextualLink.react"), {
			onClick: function() {
				return b(v);
			},
			testid: "group-history-message-count-link",
			textConfig: "Body2",
			children: R
		}), E = s._(
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
				s._param("message_count_link", L)
			]
		);
		return u.jsxs("div", {
			className: "x78zum5 x1qughib x6s0dn4 xvpt6g3",
			children: [u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body2",
				children: E
			}), u.jsx(r("WDSSwitch.react"), {
				testid: "group-history-send-toggle",
				value: i,
				onChange: function(t) {
					C(t, S);
				}
			})]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = g;
}), 226);
