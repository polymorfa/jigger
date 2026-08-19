__d("WAWebSharableEventInviteMessageComponent.react", [
	"fbt",
	"WAWebApiParse",
	"WAWebDisplayType",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebFormatEventDateString",
	"WAWebGoogleCalendarLink",
	"WAWebJoinEventCallAction",
	"WAWebMessageBubbleActions.react",
	"WAWebMessageDeeperContainer.react",
	"WAWebMessageMeta.react",
	"WAWebMessageTextBubble.react",
	"WAWebOpenSharableEventInviteNotSupportedModalAction",
	"WAWebSharableEventGatingUtils",
	"WAWebSharableEventInviteCoerceTimestampSeconds",
	"WAWebUnstyledButton.react",
	"WAWebVoipGatingUtils",
	"WDSFontTokenStyles",
	"WDSIconIcCalendarMonth.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useMemo, m = {
		deepContainer: {
			cursor: "xmper1u",
			width: "x10rsq8x",
			position: "x1n2onr6",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			$$css: !0
		},
		contentBody: {
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingInlineStart: "x12w63v0",
			paddingBottom: "xvpt6g3",
			$$css: !0
		},
		iconContainer: {
			paddingInlineEnd: "x1nzty39",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		body: {
			width: "xh8yej3",
			$$css: !0
		},
		flex: {
			display: "x78zum5",
			$$css: !0
		},
		title: {
			marginBottom: "x4vbgl9",
			$$css: !0
		},
		unstyledButton: {
			width: "xh8yej3",
			textAlign: "x1yc453h",
			$$css: !0
		},
		dateRow: {
			color: "xhslqc4",
			paddingTop: "x1gxa6cn",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.chat, a = t.displayAuthor, i = t.displayType, l = t.msg, u = t.quotedMsg, p = t.trusted, _ = l.sharableEventInviteCallLink, f = l.sharableEventInviteCaption, g = l.sharableEventInviteEndTime, h = l.sharableEventInviteIsCanceled, y = l.sharableEventInviteJpegThumbnail, C = l.sharableEventInviteStartTime, b = l.sharableEventInviteTitle, v = o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled(), S = r("WAWebSharableEventInviteCoerceTimestampSeconds")(C), R = r("WAWebSharableEventInviteCoerceTimestampSeconds")(g), L = S != null && o("WAWebSharableEventGatingUtils").isSharableEventInviteDatetimeEnabled(), E = v && L && h !== !0 && !o("WAWebSharableEventGatingUtils").isAddToCalendarHiddenByEventTime(S, R) && o("WAWebSharableEventGatingUtils").isSharableEventAddToCalendarEnabled(o("WAWebSharableEventGatingUtils").SharableEventAddToCalendarEntryPoint.MessageBubble), k = s._(
			/*BTDS*/
			""
		), I = v && L && _ != null && _ !== "" && o("WAWebVoipGatingUtils").isGroupCallingEnabled(), T = d(function() {
			var e, t;
			return !I || _ == null ? null : (e = (t = o("WAWebApiParse").parseCallLink(_)) == null ? void 0 : t.data.callType) != null ? e : null;
		}, [I, _]), D = s._(
			/*BTDS*/
			""
		), x = d(function() {
			if (y == null || y.byteLength === 0) return null;
			var e = new Blob([y], { type: "image/jpeg" });
			return URL.createObjectURL(e);
		}, [y]), $ = u ? c.jsx("div", {
			className: "x12xbjc7",
			children: u
		}) : null, P = s._(
			/*BTDS*/
			""
		);
		return c.jsxs(r("WAWebMessageTextBubble.react"), {
			testid: "sharable_event_invite_msg_bubble",
			msg: l,
			displayType: i,
			displayAuthor: a,
			hideMeta: !0,
			useFixedWidth: !o("WAWebDisplayType").isWideDisplay(i),
			children: [
				$,
				c.jsx(r("WAWebUnstyledButton.react"), {
					testid: "sharable_event_invite_bubble_button",
					disabled: h === !0,
					onClick: o("WAWebOpenSharableEventInviteNotSupportedModalAction").openSharableEventInviteNotSupportedModal,
					title: P,
					xstyle: m.unstyledButton,
					children: c.jsxs(r("WAWebMessageDeeperContainer.react"), {
						xstyle: m.deepContainer,
						outgoingMsg: l.id.fromMe,
						children: [x != null ? c.jsx("img", {
							src: x,
							alt: "",
							"data-testid": "sharable_event_invite_cover_image",
							className: "xh8yej3 x186iv6y xl1xv1r x1lliihq"
						}) : null, c.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: m.contentBody,
							align: "center",
							children: [c.jsx(o("WAWebFlex.react").FlexColumn, {
								xstyle: m.iconContainer,
								shrink: 0,
								padding: 0,
								children: c.jsx(r("WDSIconIcCalendarMonth.react"), { iconXstyle: m.icon })
							}), c.jsxs(o("WAWebFlex.react").FlexColumn, {
								xstyle: m.body,
								padding: 2,
								children: [
									c.jsx(o("WAWebEmojiText.react").EmojiText, {
										text: b,
										direction: "auto",
										selectable: !0,
										xstyle: [
											o("WDSFontTokenStyles").WDSFontTokenStyles.Body1Emphasized,
											m.flex,
											m.title
										]
									}),
									L && S != null ? c.jsx(o("WAWebFlex.react").FlexRow, {
										xstyle: m.dateRow,
										children: c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body3), {
											"data-testid": "sharable_event_invite_date_row",
											children: o("WAWebFormatEventDateString").getEventDateStringFor(S, R)
										}))
									}) : null,
									T != null ? c.jsx(o("WAWebFlex.react").FlexRow, {
										xstyle: m.dateRow,
										children: c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body3), {
											"data-testid": "sharable_event_invite_call_type_row",
											children: T === "video" ? s._(
												/*BTDS*/
												""
											) : s._(
												/*BTDS*/
												""
											)
										}))
									}) : null,
									c.jsx("div", {
										className: "x10l6tqk x9q68il x19ip775",
										children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: l })
									})
								]
							})]
						})]
					})
				}),
				f != null && f !== "" ? c.jsx("div", {
					className: "x1nzty39 x12xbjc7 x12w63v0 x1tiyuxx",
					"data-testid": "sharable_event_invite_caption",
					children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
						text: f,
						direction: "auto",
						selectable: !0,
						xstyle: [o("WDSFontTokenStyles").WDSFontTokenStyles.Body2, m.flex]
					})
				}) : null,
				c.jsx("div", {
					className: "x16ldp7u",
					children: c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
						theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.EVENT_CREATION,
						items: [I && _ != null ? {
							label: D,
							title: D,
							onClick: function() {
								o("WAWebJoinEventCallAction").joinEventCall({
									callLink: _,
									chat: n
								});
							},
							testid: "sharable_event_invite_join_call_button"
						} : {
							label: P,
							title: P,
							onClick: o("WAWebOpenSharableEventInviteNotSupportedModalAction").openSharableEventInviteNotSupportedModal,
							disabled: h === !0,
							testid: "sharable_event_invite_view_event_button"
						}].concat(E && S != null ? [{
							label: k,
							title: k,
							onClick: function() {
								o("WAWebExternalLink.react").openExternalLink(r("WAWebGoogleCalendarLink")({
									title: b,
									description: f,
									startTimeUnixSeconds: S,
									endTimeUnixSeconds: R
								}));
							},
							testid: "sharable_event_invite_add_to_calendar_button"
						}] : [])
					})
				})
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.SharableEventInvite = p;
}), 226);
