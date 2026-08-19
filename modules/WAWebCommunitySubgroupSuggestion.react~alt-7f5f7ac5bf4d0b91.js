__d("WAWebCommunitySubgroupSuggestion.react", [
	"fbt",
	"WAWebCellRequest.react",
	"WAWebCellRequestState",
	"WAWebChatEntryPoint",
	"WAWebClock",
	"WAWebDetailImage.react",
	"WAWebDropdownItem.react",
	"WAWebEmojiText.react",
	"WAWebFrontendContactGetters",
	"WAWebOpenChatWithContactAction",
	"WAWebPeopleIcon.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUserPrefsMeUser",
	"WDSIconIcVisibilityOff.react",
	"react",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = {
		text: {
			maxWidth: "x193iq5w",
			whiteSpace: "xuxw1ft",
			textOverflow: "xlyipyv",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		dropdownText: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.isAdmin, n = e.onSubgroupSuggestionAction, a = e.subgroupSuggestion, i = r("useWAWebEventTargetValue")(a, ["change:currentState", "change:error"], function() {
			return [a.currentState, a.error];
		}), l = i[0], m = i[1], p = c(), _ = p[0], f = p[1], g = o("WAWebUserPrefsMeUser").isMeAccount(a.owner), h = function(t) {
			var e = a.ownerContact.id, n = s._(
				/*BTDS*/
				"",
				[s._param("name", o("WAWebFrontendContactGetters").getFormattedShortName(a.ownerContact))]
			), r = function() {
				o("WAWebOpenChatWithContactAction").openChatWithContact(e, "communitySubgroupSuggestions", o("WAWebChatEntryPoint").ChatEntryPoint.CommunitiesTab);
			};
			f({
				contactId: e,
				menu: [u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "message-suggestion-owner",
					action: r,
					ariaLabel: n,
					addSpacing: !0,
					children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
						text: n,
						xstyle: d.dropdownText
					})
				}, "message-suggestion-owner")],
				anchor: t.target
			});
		}, y = function(t, r) {
			t.stopPropagation(), n(a, r);
		}, C = function(t) {
			t.stopPropagation(), m != null && o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: m }));
		}, b = o("WAWebFrontendContactGetters").getFormattedName(a.ownerContact), v = t ? u.jsx("span", { children: s._(
			/*BTDS*/
			"",
			[s._param("user-name", u.jsx(o("WAWebEmojiText.react").EmojiText, { text: b }))]
		) }) : u.jsx("span", { children: o("WAWebClock").Clock.suggestedOnDateStr(a.t) }), S = a.desc != null ? {
			title: s._(
				/*BTDS*/
				""
			),
			content: a.desc
		} : void 0, R = a.participantCount != null ? {
			text: s._(
				/*BTDS*/
				"",
				[s._plural(a.participantCount, "participant-count")]
			),
			Icon: o("WAWebPeopleIcon.react").PeopleIcon
		} : void 0, L = a.hiddenSubgroup === !0 ? {
			text: s._(
				/*BTDS*/
				""
			),
			Icon: r("WDSIconIcVisibilityOff.react")
		} : void 0, E;
		return _ && (E = u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "SubgroupSuggestionContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: function() {
				f(null);
			},
			children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: _ })
		})), u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebCellRequest.react"), babelHelpers.extends({
			image: u.jsx(o("WAWebDetailImage.react").DetailImage, {
				size: o("WAWebDetailImage.react").DetailImageSize.Small,
				id: a.groupId
			}),
			primary: u.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: a.subject,
				xstyle: d.text
			}),
			secondary: v,
			secondaryTestId: "suggestion-subtitle",
			signals: {
				description: S,
				customSignals: [R, L].filter(Boolean)
			},
			state: l,
			onApprove: t ? function(e) {
				y(e, o("WAWebCellRequestState").State.Approved);
			} : void 0,
			onReject: function(n) {
				t ? y(n, o("WAWebCellRequestState").State.Rejected) : y(n, o("WAWebCellRequestState").State.Canceled);
			},
			onError: C
		}, !g && {
			onClick: h,
			hoverEnabled: !0
		})), E] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
