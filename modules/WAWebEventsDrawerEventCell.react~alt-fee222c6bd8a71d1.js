__d("WAWebEventsDrawerEventCell.react", [
	"fbt",
	"WAWebCastToEventCreationMsg",
	"WAWebCellV2.react",
	"WAWebEmojiText.react",
	"WAWebEventDateBlock.react",
	"WAWebEventsGatingUtils",
	"WAWebFormatEventDateString",
	"WAWebFrontendMsgGetters",
	"WAWebL10N",
	"WAWebMsgGetters",
	"WAWebProtobufsE2E.pb",
	"WAWebTag.react",
	"WAWebText.react",
	"WAWebUserPrefsMeUser",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"useWAWebEventResponses",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { marginBlock6: {
		marginTop: "x1k70j0n",
		marginBottom: "xzueoph",
		$$css: !0
	} }, d = {
		eventDetailText: {
			display: "x1rg5ohu",
			maxWidth: "x193iq5w",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			$$css: !0
		},
		statusTag: {
			fontSize: "x1nxh6w3",
			$$css: !0
		}
	};
	function m(e) {
		var t, n, a = e.chat, i = e.msg, l = e.onClick, m = e.passed, p = m === void 0 ? !1 : m, _ = o("useWAWebMsgValues").useMsgValues(i.id, r("WAWebCastToEventCreationMsg"), [
			o("WAWebMsgGetters").getEventName,
			o("WAWebMsgGetters").getEventStartTime,
			o("WAWebMsgGetters").getEventEndTime,
			o("WAWebMsgGetters").getEventLocation,
			o("WAWebMsgGetters").getIsEventCanceled,
			o("WAWebMsgGetters").getIsSentByMe
		]), f = _[0], g = _[1], h = _[2], y = _[3], C = _[4], b = _[5], v = o("useWAWebEventResponses").useEventResponses(i), S = v.find(function(e) {
			return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
		}), R = u.jsx("div", {
			className: "x2b8uid xamitd3",
			children: u.jsx(r("WAWebEventDateBlock.react"), {
				eventStartTime: g,
				passed: p
			})
		}), L = f.slice(0, (t = o("WAWebEventsGatingUtils").getEventsNameLengthLimit()) != null ? t : 100), E = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			xstyle: d.eventDetailText,
			children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: L,
				dirMismatch: o("WAWebFrontendMsgGetters").getRtl(i) !== r("WAWebL10N").isRTL(),
				direction: o("WAWebFrontendMsgGetters").getDir(i),
				inferLinesDirection: !0,
				selectable: !0,
				ellipsify: !0
			})
		}), k = null, I = null;
		C === !0 ? (k = s._(
			/*BTDS*/
			""
		), I = o("WAWebTag.react").TagTheme.Secondary) : b ? (k = s._(
			/*BTDS*/
			""
		), I = o("WAWebTag.react").TagTheme.Primary) : (S == null ? void 0 : S.eventResponse) === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING ? (k = s._(
			/*BTDS*/
			""
		), I = o("WAWebTag.react").TagTheme.Primary) : (S == null ? void 0 : S.eventResponse) === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE ? (k = s._(
			/*BTDS*/
			""
		), I = o("WAWebTag.react").TagTheme.Secondary) : (S == null ? void 0 : S.eventResponse) === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING ? (k = s._(
			/*BTDS*/
			""
		), I = o("WAWebTag.react").TagTheme.Error) : ((S == null ? void 0 : S.eventResponse) == null || (S == null ? void 0 : S.eventResponse) === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.UNKNOWN) && (k = s._(
			/*BTDS*/
			""
		), I = o("WAWebTag.react").TagTheme.Secondary);
		var T = k && I ? u.jsx(o("WAWebTag.react").Tag, {
			theme: I,
			testid: "event-tag-" + i.id.id,
			xstyle: [
				d.statusTag,
				o("WDSPaddings.stylex").wdsPaddings.paddingVer4,
				o("WDSPaddings.stylex").wdsPaddings.paddingHor8
			],
			children: s._(
				/*BTDS*/
				"",
				[s._param("eventStatusText", k)]
			)
		}) : null, D = o("WAWebFormatEventDateString").getEventDateStringFor(g, h), x = g != null ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
			xstyle: d.eventDetailText,
			children: s._(
				/*BTDS*/
				"",
				[s._param("Event-datetime-string", D)]
			)
		}) : null, $ = (n = y == null ? void 0 : y.name) != null ? n : y == null ? void 0 : y.address, P = $ != null ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
			xstyle: d.eventDetailText,
			children: s._(
				/*BTDS*/
				"",
				[s._param("event-location", $)]
			)
		}) : null;
		return u.jsx(r("WAWebCellV2.react"), {
			containerXStyle: [c.marginBlock6, o("WDSMargins.stylex").wdsMargins.marginHor4],
			detailLeft: R,
			detailTop: E,
			primary: x,
			detailRight: T,
			secondary: P,
			alignPrimary: "start",
			size: "medium",
			onClick: function() {
				return l(i, a);
			}
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
