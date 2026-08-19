__d("WAWebTextStatusSection", [
	"fbt",
	"WATimeUtils",
	"WAWebAboutPrompts",
	"WAWebAboutWamLogger",
	"WAWebClock",
	"WAWebContactCollection",
	"WAWebDrawerSection.react",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"WAWebPencilRefreshedIcon.react",
	"WAWebText.react",
	"WAWebTextStatusEditModalLoadable",
	"WAWebTextStatusGatingUtils",
	"WAWebTextStatusUtils",
	"WAWebUserPrefsMeUser",
	"WDSButton.react",
	"WDSIconIcMood.react",
	"WDSMargins.stylex",
	"react",
	"stylex",
	"useWAWebContactValues",
	"useWAWebTextStatus"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = { marginInlineStart30: {
		marginInlineStart: "xymharo",
		$$css: !0
	} }, p = { moodIcon: {
		color: "x1v5yvga",
		$$css: !0
	} };
	function _(t) {
		var n = t.promptKey, a = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), i = o("WAWebContactCollection").ContactCollection.assertGet(a);
		r("useWAWebTextStatus")({ contact: i });
		var l = o("WAWebTextStatusGatingUtils").sendTextStatusEnabled(), u = d(function() {
			return o("WAWebAboutPrompts").getRandomAboutPromptKey();
		}), _ = u[0], f = n != null ? n : _, g = o("WAWebAboutPrompts").getAboutPromptText(f), h, y, C = o("useWAWebContactValues").useContactValues(i.id, [
			o("WAWebFrontendContactGetters").getTextStatusString,
			o("WAWebFrontendContactGetters").getTextStatusEmoji,
			o("WAWebFrontendContactGetters").getTextStatusLastUpdateTime,
			o("WAWebFrontendContactGetters").getTextStatusExpiryTs,
			o("WAWebFrontendContactGetters").getTextStatusEphemeralDuration
		]), b = C[0], v = C[1], S = C[2], R = C[3], L = C[4], E = o("WAWebTextStatusUtils").hasTextStatusSet({
			textStatusEmoji: v,
			textStatusEphemeralDuration: L,
			textStatusExpiryTs: R,
			textStatusLastUpdateTime: S,
			textStatusString: b
		});
		if (!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() || !i || !o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() && !E) return null;
		if (o("WAWebTextStatusUtils").isTextStatusNotFetched(S)) y = c.jsx("div", {
			className: "x1gabggj",
			children: s._(
				/*BTDS*/
				""
			)
		});
		else if (!E) h = c.jsx("div", {
			className: "x2vl965",
			children: c.jsx(r("WDSIconIcMood.react"), { xstyle: p.moodIcon })
		}), y = c.jsx("div", {
			className: "x1gabggj",
			children: l ? g : s._(
				/*BTDS*/
				""
			)
		});
		else {
			if (v != null) {
				var k = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(v);
				k != null && (h = c.jsx("div", {
					className: "x1bjonze",
					children: c.jsx(r("WAWebEmoji.react"), {
						emoji: k,
						size: "small"
					}, "low-res")
				}));
			}
			b && (y = c.jsx("div", {
				className: "x1gabggj",
				children: b
			}));
		}
		var I = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [h, y]
		}), T = s._(
			/*BTDS*/
			""
		), D = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebTextStatusEditModalLoadable").TextStatusEditModalLoadable, {
				entrypoint: o("WAWebAboutWamLogger").ABOUT_ENTRYPOINT_TYPE.SETTINGS,
				promptKey: E ? null : f
			}));
		}, x = s._(
			/*BTDS*/
			""
		), $ = o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() && !o("WAWebTextStatusUtils").isTextStatusNotFetched(S) ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStartAuto), { children: c.jsx(r("WDSButton.react"), {
			testid: "edit_text_status",
			Icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
			variant: "borderless",
			onPress: D,
			"aria-label": x
		}) })) : null;
		return c.jsxs("div", { children: [c.jsx(r("WAWebDrawerSection.react"), {
			title: T,
			animation: !1,
			theme: "padding",
			children: c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				children: [c.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					children: I
				}), $]
			})
		}), c.jsxs("div", babelHelpers.extends({ "data-testid": "text-status-ephemeral" }, (e || (e = r("stylex"))).props(m.marginInlineStart30, o("WDSMargins.stylex").wdsMargins.marginTop4, o("WDSMargins.stylex").wdsMargins.marginBottom28, o("WDSMargins.stylex").wdsMargins.marginEnd20), { children: [L !== o("WAWebTextStatusUtils").TEXT_STATUS_DURATION_INFINITE && R != null && c.jsx(o("WAWebText.react").WAWebTextMuted, {
			as: "span",
			children: o("WAWebClock").Clock.textStatusExpiryStr(o("WATimeUtils").castToUnixTime(R))
		}), L === o("WAWebTextStatusUtils").TEXT_STATUS_DURATION_INFINITE && c.jsx(o("WAWebText.react").WAWebTextMuted, {
			as: "span",
			children: s._(
				/*BTDS*/
				""
			)
		})] }))] });
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
