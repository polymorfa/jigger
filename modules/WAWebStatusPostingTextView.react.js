__d("WAWebStatusPostingTextView.react", [
	"fbt",
	"Promise",
	"WALogger",
	"WAWebAttachMediaCollection",
	"WAWebChatPreferenceCollection",
	"WAWebCmd",
	"WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react",
	"WAWebEmojiNode",
	"WAWebFileUtils",
	"WAWebFlex.react",
	"WAWebFontLoader",
	"WAWebLogStatusPost",
	"WAWebLogStatusPosterActions",
	"WAWebMenuBar.react",
	"WAWebModalManager",
	"WAWebNewsletterMetadataCollection",
	"WAWebNewsletterSendStatusAction",
	"WAWebNewsletterStatusSelectorButton.react",
	"WAWebPrepareMessageSendingAction",
	"WAWebProtobufsE2E.pb",
	"WAWebRichTextInput.react",
	"WAWebRichTextInputPlugins.react",
	"WAWebSendButtonWithCount.react",
	"WAWebSendStatusMsgAction",
	"WAWebStatusChangePrivacyPopup.react",
	"WAWebStatusJidUtils",
	"WAWebStatusPosterActionsLogger",
	"WAWebStatusPostingMediaView.react",
	"WAWebStatusPrivacySettingButton.react",
	"WAWebTimeSpentLoggingNavigation",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsStatusType",
	"WAWebWamEnumMediaPickerOriginType",
	"WAWebWamEnumMediaType",
	"WAWebWamEnumStatusPostOrigin",
	"WAWebWamEnumStatusPostResult",
	"WDSIconIcClose.react",
	"WDSIconIcMatchCase.react",
	"WDSIconIcMood.react",
	"WDSIconIcPalette.react",
	"WDSMenuBarItem.react",
	"WDSPaddings.stylex",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebModelValues",
	"useWAWebStatusPrivacySettingConfig"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useImperativeHandle, g = p.useRef, h = p.useState, y = 700, C = 10;
	function b(e) {
		if (e != null) switch (e.setting) {
			case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList: return e.allowList.length;
			case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList: return e.denyList.length;
			default: return;
		}
	}
	var v = {
		textInputWrapper: {
			color: "x17t9dm2",
			wordWrap: "x1vvkbs",
			whiteSpace: "x126k92a",
			maxHeight: "x9hq9vl",
			flexGrow: "x1iyjqo2",
			overflowY: "x1odjw0f",
			marginTop: "xb8qb8r",
			marginInlineEnd: "x11t971q",
			marginBottom: "x14ihc8f",
			marginInlineStart: "xvc5jky",
			alignSelf: "xamitd3",
			$$css: !0
		},
		input: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		inputText: {
			width: "xh8yej3",
			fontSize: "xcg35fi",
			$$css: !0
		},
		sendWrapper: {
			backgroundColor: "x1bwewq6",
			position: "x10l6tqk",
			bottom: "x1ey2m1c",
			insetInlineStart: "x1o0tod",
			height: "x1peatla",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		fullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		font_1: {
			fontFamily: "x12n1cvc",
			$$css: !0
		},
		font_2: {
			fontFamily: "xs8eguv",
			$$css: !0
		},
		textLarge: {
			fontSize: "xvzvg7y",
			lineHeight: "x1xuplte",
			textAlign: "x2b8uid",
			$$css: !0
		},
		textMedium: {
			fontSize: "xdhfpv1",
			lineHeight: "x1swossr",
			textAlign: "x2b8uid",
			$$css: !0
		},
		textSmall: {
			fontSize: "x1jchvi3",
			lineHeight: "x3gokd0",
			textAlign: "x2b8uid",
			$$css: !0
		},
		placeholderText: {
			color: "xr3d4wh",
			$$css: !0
		},
		buttonSpacing: {
			marginInlineEnd: "xqf2s3x",
			$$css: !0
		}
	}, S = new Map([
		[o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType.SYSTEM, null],
		[o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType.SYSTEM_TEXT, v.font_1],
		[o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType.FB_SCRIPT, v.font_2]
	]), R = [
		4289080433,
		4287670337,
		4290879551,
		4286128440,
		4289628020,
		4293964592,
		4290163495,
		4291207116,
		4287326608,
		4294937228,
		4283744869,
		4294933355,
		4280730844,
		4283943423,
		4285818730,
		4286484643,
		4283864831,
		4285408638,
		4286237605,
		4280563264,
		4286747850
	], L = [
		o("WAWebFontLoader").Font.SANS_SERIF,
		o("WAWebFontLoader").Font.SERIF,
		o("WAWebFontLoader").Font.NORICAN_REGULAR
	], E = function() {
		return R[Math.floor(Math.random() * R.length)];
	}, k = function(t) {
		return t <= 60 ? v.textLarge : t <= 240 ? v.textMedium : v.textSmall;
	}, I = function(t) {
		return t <= 60 ? o("WAWebEmojiNode").EmojiSize.Large : t <= 240 ? o("WAWebEmojiNode").EmojiSize.Medium : o("WAWebEmojiNode").EmojiSize.Small;
	};
	function T(e) {
		var t = e >> 24 & 255, n = e >> 16 & 255, r = e >> 8 & 255, o = e & 255;
		return "rgba(" + n + ", " + r + ", " + o + ", " + t + ")";
	}
	function D() {
		o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
			msg: s._(
				/*BTDS*/
				"",
				[s._param("character-length", y), s._param("lines-length", C)]
			),
			id: "WA_STATUS_MAX_INPUT_EXCEEDED"
		}), o("WAWebToastManager").ToastPosition.CENTER);
	}
	function x(t) {
		var a = t.entryPoint, i = t.forwardedNewsletterMessageInfo, l = t.initialColor, d = l === void 0 ? E() : l, p = t.initialFont, R = p === void 0 ? o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType.SYSTEM : p, x = t.initialText, $ = x === void 0 ? "" : x, P = t.isNewsletterStatus, N = P === void 0 ? !1 : P, M = t.newsletterWid, w = t.ref, A = t.statusAttributions, F = t.statusPostingSessionId, O = h(M != null ? M : null), B = O[0], W = O[1], q = h(R), U = q[0], V = q[1], H = h(d), G = H[0], z = H[1], j = h(!1), K = j[0], Q = j[1], X = h($), Y = X[0], J = X[1], Z = o("useWAWebStatusPrivacySettingConfig").useWAWebStatusPrivacySettingConfig(), ee = Z.audienceTracking, te = Z.setStatusPostingPrivacyConfig, ne = Z.statusPostingPrivacyConfig, re = Z.trackAudienceSelectorClicked, oe = g(0), ae = h(function() {
			return new (o("WAWebStatusPosterActionsLogger")).StatusPosterActionsLogger(F, M);
		}), ie = ae[0], le = h(null), se = le[0], ue = le[1], ce = g(), de = g(), me = o("useWAWebModelValues").useModelValues(r("WAWebChatPreferenceCollection").getDefault(), ["spellcheck", "transformTextEmoji"]);
		_(function() {
			o("WAWebCmd").Cmd.onStatusPostingFlow(), (c || (c = n("Promise"))).all(L.map(function(e) {
				return o("WAWebFontLoader").FontLoader.load(e);
			})), ie.logStatusTextScreenImp();
		}, [ie]);
		var pe = function() {
			ie.logComposerXoutTapped(), o("WAWebModalManager").ModalManager.closeMedia();
		};
		o("WAWebTimeSpentLoggingNavigation").useTsNavigation({ surface: "status-composer-text" });
		var _e = o("WAWebStatusJidUtils").getStatusChat(), fe = function() {
			for (var e, t = S.keys(), n; (n = t.next()) && n.value !== U; n != null);
			V((e = t.next().value) != null ? e : o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType.SYSTEM), ie.logTextToolFontChanged();
		}, ge = function() {
			z(E()), ie.logBackgroundColorTap();
		}, he = function(t) {
			W(t), ie.setNewsletterWid(t != null ? t : void 0);
		}, ye = function() {
			var t = Y, n = U;
			if (ie.logPostSendTap(o("WAWebLogStatusPosterActions").STATUS_CONTENT_TYPE.TEXT), !N && (ne == null ? void 0 : ne.setting) === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList && (ne == null ? void 0 : ne.allowList.length) === 0) o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebStatusChangePrivacyPopup.react"), {
				statusPostingPrivacyConfig: ne,
				setStatusPostingPrivacyConfig: te
			}));
			else {
				o("WAWebModalManager").ModalManager.closeMedia(), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						""
					),
					id: o("WAWebToast.react").genId()
				}));
				var l = oe.current;
				oe.current += 1;
				var u = N ? B : null, c = u != null ? r("WAWebNewsletterMetadataCollection").get(u) : null, d = {
					statusPostOrigin: u != null ? o("WAWebWamEnumStatusPostOrigin").STATUS_POST_ORIGIN.CHANNEL_THREAD_SCREEN : o("WAWebWamEnumStatusPostOrigin").STATUS_POST_ORIGIN.STATUS_TAB_PEN,
					mediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.TEXT,
					hasFilters: !1,
					isNewsletterStatus: N,
					newsletterWid: u != null ? u : void 0,
					perPostStatusPrivacySetting: N || ne == null ? void 0 : ne.setting,
					retryCount: l,
					statusAudienceSelectorClicked: ee.statusAudienceSelectorClicked,
					statusAudienceSelectorUpdated: ee.statusAudienceSelectorUpdated,
					statusAudienceSize: u != null ? c == null ? void 0 : c.size : b(ne),
					statusContainsMusic: !1
				}, p = B != null ? o("WAWebNewsletterSendStatusAction").sendNewsletterStatusTextMsgAction(B, {
					text: t,
					color: G,
					font: n
				}, {
					sessionId: ie.sessionId,
					entryPoint: a
				}) : o("WAWebSendStatusMsgAction").sendStatusTextMsgAction({
					text: t,
					color: G,
					font: n,
					statusAttributions: A,
					forwardedNewsletterMessageInfo: i
				}, {
					sessionId: ie.sessionId,
					entryPoint: a
				});
				p.then(function(e) {
					var t, n;
					o("WAWebLogStatusPost").logStatusPost(babelHelpers.extends({
						statusPostResult: o("WAWebLogStatusPost").getStatusPostResult(e.messageSendResult),
						msg: e.msg,
						newsletterStatusId: u != null && (t = (n = e.msg) == null ? void 0 : n.serverId) != null ? t : void 0
					}, d));
				}).catch(function(t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Text status posting failed with error ", ""])), t).sendLogs("sendStatusMessage-failed", { sampling: .01 }), o("WAWebLogStatusPost").logStatusPost(babelHelpers.extends({ statusPostResult: o("WAWebWamEnumStatusPostResult").STATUS_POST_RESULT.ERROR_UNKNOWN }, d));
				});
			}
		}, Ce = function() {
			Q(!0);
		}, be = function(t) {
			var e = ce.current;
			e && (e.focus(), e.replaceSelection(t)), Q(!1);
		}, ve = function() {
			return de.current;
		}, Se = function() {
			return o("WAWebModalManager").ModalManager.closeMedia(), !0;
		}, Re = function(t) {
			var e = t.getFiles(), n = e.filter(function(e) {
				var t = o("WAWebFileUtils").typeFromMimetype(e.type);
				return t === o("WAWebFileUtils").FILETYPE.IMAGE || t === o("WAWebFileUtils").FILETYPE.VIDEO;
			});
			if (n.length !== 0 && !(N && B == null)) {
				_e.attachMediaContents || _e.setAttachMediaContents(new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: _e.getParticipantCount() }));
				var l = r("nullthrows")(_e.attachMediaContents, "attachMediaContents should be set before processing files"), s = function() {
					l.processAttachmentsForChat(n.map(function(e) {
						return { file: e };
					}), o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.PASTE, _e);
				};
				o("WAWebModalManager").ModalManager.openMedia(m.jsx(r("WAWebStatusPostingMediaView.react"), {
					chat: _e,
					onRender: s,
					mediaCollection: l,
					isNewsletterStatus: N,
					newsletterWid: B != null ? B : void 0,
					forwardedNewsletterMessageInfo: i,
					statusPosterActionsLogger: ie,
					entryPoint: a
				}), { transition: "status-modal" });
			}
		};
		f(w, function() {
			return {
				getElement: ve,
				handleRequestDismiss: Se
			};
		});
		var Le = K && se != null && m.jsx(o("WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react").EmojiPanelPopup, {
			anchor: se,
			onSelect: be,
			onClose: function() {
				Q(!1);
			}
		}), Ee = null;
		return N ? Ee = m.jsx(r("WAWebNewsletterStatusSelectorButton.react"), {
			readonly: M != null,
			selectedNewsletterWid: B,
			onNewsletterSelected: he,
			type: "text"
		}) : Ee = m.jsx(r("WAWebStatusPrivacySettingButton.react"), {
			onAudienceSelectorClicked: re,
			statusPostingPrivacyConfig: ne,
			setStatusPostingPrivacyConfig: te,
			type: "text"
		}), m.jsxs("div", {
			className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1larqbn xo5hfjf xbpklzw x78zum5",
			style: { backgroundColor: T(G) },
			ref: de,
			children: [
				m.jsx("div", {
					className: "x10l6tqk xomnu4r x1o0tod xsdox4t x78zum5 x6s0dn4 x13a6bvl x9f619 x1x5flf6 xh8yej3",
					children: m.jsxs(o("WAWebMenuBar.react").MenuBar, { children: [
						m.jsx("div", {
							className: "x10l6tqk xfwv6vp x1tiyuxx x1uc92m x1nbhmlj x181vq82",
							children: m.jsx(r("WDSMenuBarItem.react"), {
								buttonType: "media",
								title: s._(
									/*BTDS*/
									""
								),
								icon: r("WDSIconIcClose.react"),
								onClick: pe
							})
						}),
						m.jsx(r("WDSMenuBarItem.react"), {
							title: s._(
								/*BTDS*/
								""
							),
							buttonVariant: "borderless",
							buttonType: "media",
							ref: ue,
							icon: r("WDSIconIcMood.react"),
							testid: "emoji-button",
							onClick: Ce,
							marginInlineXstyle: v.buttonSpacing
						}, "emoji-button"),
						m.jsx(r("WDSMenuBarItem.react"), {
							title: s._(
								/*BTDS*/
								""
							),
							buttonVariant: "borderless",
							buttonType: "media",
							icon: r("WDSIconIcMatchCase.react"),
							testid: "font-button",
							onClick: fe,
							marginInlineXstyle: v.buttonSpacing
						}, "font-button"),
						m.jsx(r("WDSMenuBarItem.react"), {
							title: s._(
								/*BTDS*/
								""
							),
							buttonVariant: "borderless",
							buttonType: "media",
							icon: r("WDSIconIcPalette.react"),
							testid: "palette-button",
							onClick: ge
						}, "palette-button")
					] })
				}),
				m.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props([v.textInputWrapper, S.get(U)]), { children: m.jsx(r("WAWebRichTextInput.react"), {
					ref: ce,
					xstyle: v.input,
					textXstyle: [v.inputText, k(Y.length)],
					placeholderTextXStyle: v.placeholderText,
					placeholder: s._(
						/*BTDS*/
						""
					),
					initialText: $,
					onChange: function(t) {
						J(t.text), o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(_e);
					},
					multiline: !0,
					focusOnMount: !0,
					spellCheck: me.spellcheck,
					maxLength: y,
					maxLineCount: C,
					onMaxInputExceeded: D,
					onMaxPasteExceeded: D,
					onFiles: Re,
					children: m.jsx(r("WAWebRichTextInputPlugins.react"), {
						emojiSize: I(Y.length),
						transformTextEmoji: me.transformTextEmoji,
						textFormatEnabled: !0,
						linksEnabled: !0,
						textFormatShortcutsEnabled: !0
					})
				}) })),
				m.jsx("div", babelHelpers.extends({}, u.props([
					v.sendWrapper,
					v.fullWidth,
					o("WDSPaddings.stylex").wdsPaddings.paddingVer16
				]), { children: m.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: [v.fullWidth, o("WDSPaddings.stylex").wdsPaddings.paddingHor28],
					children: [m.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 1,
						children: Ee
					}), m.jsx(o("WAWebFlex.react").FlexItem, { children: m.jsx(r("WAWebSendButtonWithCount.react"), {
						disabled: Y.trim().length === 0 || N && B == null,
						ariaLabel: s._(
							/*BTDS*/
							""
						),
						large: !0,
						onClick: ye
					}) })]
				}) })),
				Le
			]
		});
	}
	x.displayName = x.name + " [from " + i.id + "]", l.default = x;
}), 226);
