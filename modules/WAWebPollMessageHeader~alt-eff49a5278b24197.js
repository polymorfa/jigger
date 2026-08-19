__d("WAWebPollMessageHeader", [
	"fbt",
	"WAWebEmojiText.react",
	"WAWebExpandableText.react",
	"WAWebFormatConfigurationConversation",
	"WAWebFrontendMsgGetters",
	"WAWebIcCheckCircleFilledIcon.react",
	"WAWebL10N",
	"WAWebMessageSpacerText.react",
	"WAWebMsgGetters",
	"WAWebMsgLinks",
	"WAWebMsgMentionMap",
	"WAWebMsgPhoneNumbers",
	"WAWebMultiSelectIconFilledIcon.react",
	"WAWebPollCreationUtils",
	"WAWebPollEndTimeLabel",
	"WAWebPollHideVoterNamesLabel",
	"WAWebTextSizeUtils",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = {
		pollName: {
			fontWeight: "x1s688f",
			fontSize: "x1jchvi3",
			$$css: !0
		},
		selectIcon: {
			fill: "x2u7xp1",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.isPollEnded, a = t.isSentByMe, i = t.msg, l = t.name, s = t.pollEndTime, u = t.pollHideVoterNames, m = t.pollSelectableOptionsCount, _ = t.trusted, f = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().pollQuestionTextSize, g = !0, h = m === 1, y = [];
		return m != null && !n && y.push({
			key: "selectable-options",
			render: function(t) {
				return c.jsx(p, {
					isSingleOptionPoll: h,
					pollType: i.pollType,
					trailingSeparator: t
				});
			}
		}), u && y.push({
			key: "hidden-voter-names",
			render: function(t) {
				return c.jsx(r("WAWebPollHideVoterNamesLabel"), { trailingSeparator: t });
			}
		}), s != null && y.push({
			key: "end-time",
			render: function(t) {
				return c.jsx(r("WAWebPollEndTimeLabel"), {
					isPollEnded: n,
					pollEndTime: s,
					trailingSeparator: t
				});
			}
		}), c.jsxs(c.Fragment, { children: [c.jsx(r("WAWebMessageSpacerText.react"), {
			msg: i.unsafe(),
			spacer: !1,
			"data-id": i.id,
			children: c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.padding4), { children: c.jsx(o("WAWebExpandableText.react").ExpandableText, {
				text: l,
				textLimit: o("WAWebMsgGetters").getInitialPageSize(i),
				children: function(t) {
					var e = t.textLimit, n = o("WAWebFormatConfigurationConversation").Conversation({
						mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(i),
						groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(i),
						links: o("WAWebMsgLinks").getLinksFromMsg(i.unsafe(), e),
						phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(i.unsafe(), e),
						selectable: g,
						trusted: _ === !0,
						fromMe: a,
						fromChatWid: i.id.remote,
						messageHasSpoiler: o("WAWebMsgGetters").getIsSpoiler(i.unsafe())
					});
					return c.jsx(o("WAWebEmojiText.react").EmojiText, {
						text: l,
						dirMismatch: o("WAWebFrontendMsgGetters").getRtl(i) !== r("WAWebL10N").isRTL(),
						direction: o("WAWebFrontendMsgGetters").getDir(i),
						inferLinesDirection: !0,
						formatters: n,
						selectable: g,
						textLimit: e,
						xstyle: [d.pollName, f]
					});
				}
			}) }))
		}), c.jsx("div", {
			className: "x78zum5 x6s0dn4 x1q0g3np x1a02dak",
			children: y.map(function(e, t) {
				var n = e.key, r = e.render;
				return c.jsx(c.Fragment, { children: r(t < y.length - 1) }, n);
			})
		})] });
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.isSingleOptionPoll, n = e.pollType, r = e.trailingSeparator, a;
		return n === o("WAWebPollCreationUtils").PollType.QUIZ ? a = s._(
			/*BTDS*/
			""
		) : t ? a = s._(
			/*BTDS*/
			""
		) : a = s._(
			/*BTDS*/
			""
		), c.jsxs("div", {
			className: "x78zum5 x6s0dn4 x3psx0u x1iorvi4 xjkvuk6",
			children: [t ? c.jsx(o("WAWebIcCheckCircleFilledIcon.react").IcCheckCircleFilledIcon, { innerStyles: { background: d.selectIcon } }) : c.jsx(o("WAWebMultiSelectIconFilledIcon.react").MultiSelectIconFilledIcon, { innerStyles: { background: d.selectIcon } }), c.jsxs("span", {
				className: "x1pg5gke x1d3mw78 x1bvqhpb xaso8d8",
				children: [a, r ? c.jsx("span", {
					className: "x135b78x x11lfxj5",
					children: "·"
				}) : null]
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 226);
