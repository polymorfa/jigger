__d("WAWebEventPreviewBlock.react", [
	"fbt",
	"WAWebEmojiText.react",
	"WAWebEventDateBlock.react",
	"WAWebEventsGatingUtils",
	"WAWebFlex.react",
	"WAWebFormatEventDateString",
	"WAWebFrontendMsgGetters",
	"WAWebL10N",
	"WAWebMsgGetters",
	"WAWebProtobufsE2E.pb",
	"WAWebTag.react",
	"WAWebTextSizeUtils",
	"WAWebUnstyledButton.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"useWAWebEventMyRSVPStatus",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		eventPreviewBlock: {
			display: "x1rg5ohu",
			$$css: !0
		},
		container: {
			boxSizing: "x9f619",
			height: "xlo07zb",
			width: "xtlo18s",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			fontSize: "x1f6kntn",
			fontWeight: "x1iikomf",
			$$css: !0
		},
		containerFullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		eventDetailColumn: {
			textAlign: "x1yc453h",
			$$css: !0
		},
		eventNameContainer: {
			maxWidth: "x193iq5w",
			$$css: !0
		},
		eventNameText: {
			fontWeight: "x1s688f",
			fontSize: "x1jchvi3",
			$$css: !0
		},
		tag: {
			alignSelf: "xamitd3",
			$$css: !0
		}
	};
	function d(e) {
		var t, n, a = e.eventMsg, i = e.fullWidth, l = i === void 0 ? !1 : i, d = e.onClick, m = o("useWAWebMsgValues").useMsgValues(a.id, [
			o("WAWebMsgGetters").getEventName,
			o("WAWebMsgGetters").getEventStartTime,
			o("WAWebMsgGetters").getEventEndTime,
			o("WAWebMsgGetters").getEventLocation,
			o("WAWebMsgGetters").getIsSentByMe
		]), p = m[0], _ = m[1], f = m[2], g = m[3], h = m[4], y = o("useWAWebEventMyRSVPStatus").useEventMyRSVPStatus(a), C = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().pollQuestionTextSize, b = p.slice(0, (t = o("WAWebEventsGatingUtils").getEventsNameLengthLimit()) != null ? t : 100), v = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [c.eventNameContainer, o("WDSPaddings.stylex").wdsPaddings.paddingVer2],
			grow: 0,
			children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: b,
				dirMismatch: o("WAWebFrontendMsgGetters").getRtl(a) !== r("WAWebL10N").isRTL(),
				direction: o("WAWebFrontendMsgGetters").getDir(a),
				inferLinesDirection: !0,
				selectable: !0,
				xstyle: [c.eventNameText, C],
				ellipsify: !0
			})
		}), S = o("WAWebFormatEventDateString").getEventDateStringFor(_, f), R = _ != null ? u.jsx("div", {
			className: "x1rg5ohu x193iq5w xhslqc4 x6ikm8r x10wlt62 xlyipyv xvijh9v x1ty9z65",
			children: s._(
				/*BTDS*/
				"",
				[s._param("Event-starttime-string", S)]
			)
		}) : null, L, E = (n = g == null ? void 0 : g.name) != null ? n : g == null ? void 0 : g.address;
		E != null && (L = u.jsx("div", {
			className: "x1rg5ohu x193iq5w xhslqc4 x6ikm8r x10wlt62 xlyipyv xvijh9v x1ty9z65",
			children: s._(
				/*BTDS*/
				"",
				[s._param("event-location", E)]
			)
		}));
		var k = null;
		return h ? k = u.jsx(o("WAWebTag.react").Tag, {
			theme: o("WAWebTag.react").TagTheme.Primary,
			xstyle: [c.tag, o("WDSMargins.stylex").wdsMargins.marginStartAuto],
			testid: "event-creator-label",
			children: s._(
				/*BTDS*/
				""
			)
		}) : y === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING ? k = u.jsx(o("WAWebTag.react").Tag, {
			theme: o("WAWebTag.react").TagTheme.Primary,
			xstyle: [c.tag, o("WDSMargins.stylex").wdsMargins.marginStartAuto],
			testid: "event-attending-label",
			children: s._(
				/*BTDS*/
				""
			)
		}) : y === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE && (k = u.jsx(o("WAWebTag.react").Tag, {
			theme: o("WAWebTag.react").TagTheme.Secondary,
			xstyle: [c.tag, o("WDSMargins.stylex").wdsMargins.marginStartAuto],
			testid: "event-maybe-label",
			children: s._(
				/*BTDS*/
				""
			)
		})), u.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: [c.eventPreviewBlock].concat(l ? [c.containerFullWidth] : [o("WDSMargins.stylex").wdsMargins.margin2, o("WDSMargins.stylex").wdsMargins.marginEnd12]),
			onClick: d,
			tabIndex: 0,
			children: u.jsxs(o("WAWebFlex.react").FlexContainer, {
				xstyle: [c.container].concat(l ? [c.containerFullWidth] : []),
				direction: "horizontal",
				padding: 12,
				children: [
					u.jsx(o("WAWebFlex.react").FlexColumn, {
						align: "center",
						justify: "center",
						padding: 2,
						shrink: 0,
						children: u.jsx(r("WAWebEventDateBlock.react"), { eventStartTime: _ })
					}),
					u.jsxs(o("WAWebFlex.react").FlexColumn, {
						xstyle: [c.eventDetailColumn, o("WDSPaddings.stylex").wdsPaddings.paddingStart8],
						padding: 2,
						children: [
							v,
							R,
							L
						]
					}),
					k
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
