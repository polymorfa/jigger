__d("WAWebMentionsPluginResult.react", [
	"fbt",
	"WALogger",
	"WAWebBotFrontendUtils",
	"WAWebBotUtils",
	"WAWebChatContactUtils",
	"WAWebConfirmPopup.react",
	"WAWebContactGetters",
	"WAWebDefaultGroupRefreshedIcon.react",
	"WAWebDetailImage.react",
	"WAWebElevatedPushNamesFlag",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFormatConfiguration",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"WAWebModifyParticipantsGroupAction",
	"WAWebTeeLockBadge.react",
	"WAWebText.react",
	"WAWebTextStatusGatingUtils",
	"WAWebTextStatusUtils",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameTypes",
	"WDSButton.react",
	"WDSPaddings.stylex",
	"WDSText.react",
	"react",
	"stylex",
	"useWAWebContactValues",
	"useWAWebModelValues",
	"useWAWebTextStatus"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useState, f = { paddingBlock10: {
		paddingTop: "x889kno",
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, g = {
		emojiScale: {
			transform: "x1nrvvgt",
			verticalAlign: "xxymvpz",
			$$css: !0
		},
		mentionsResult: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			fontSize: "x1nxh6w3",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		mentionsResultSelected: {
			color: "x14ug900",
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		disabledCTA: {
			lineHeight: "xo5v014",
			$$css: !0
		},
		circleIconRefreshed: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		profilePictureOutlineRefreshed: {
			outline: "x4u6w88",
			outlineOffset: "x1g40iwv",
			$$css: !0
		}
	}, h = 45;
	function y(e) {
		var t = e.contact, n = e.disabled, a = n === void 0 ? !1 : n, i = e.disabledCTA, l = i === void 0 ? null : i, c = e.elevatedPushNamesEnabled, m = c === void 0 ? !1 : c, p = e.selected, _ = e.term, y = o("useWAWebContactValues").useContactValues(t.id, [
			o("WAWebContactGetters").getId,
			o("WAWebFrontendContactGetters").getFormattedName,
			o("WAWebFrontendContactGetters").getIsMyContact,
			o("WAWebContactGetters").getNotifyName,
			o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone,
			o("WAWebFrontendContactGetters").getTextStatusString,
			o("WAWebFrontendContactGetters").getTextStatusEmoji,
			o("WAWebFrontendContactGetters").getTextStatusLastUpdateTime,
			o("WAWebFrontendContactGetters").getTextStatusExpiryTs,
			o("WAWebFrontendContactGetters").getTextStatusEphemeralDuration,
			o("WAWebFrontendContactGetters").getUsername,
			o("WAWebContactGetters").getPushname
		]), C = y[0], b = y[1], v = y[2], S = y[3], R = y[4], L = y[5], E = y[6], k = y[7], I = y[8], T = y[9], D = y[10], x = y[11], $ = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(C), P = $ ? o("WAWebBotFrontendUtils").getMetaAiTEEBotDisplayName() : b, N = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(), M = o("WAWebUsernameTypes").isPresentUsername(D) && N, w = M && !v, A = o("WAWebTextStatusUtils").shouldDisplayTextStatus(L, E, k, I, T);
		r("useWAWebTextStatus")({ contact: t });
		var F = o("WAWebFormatConfiguration").SearchName({ terms: _ ? [_] : [] }), O = null, B;
		if (E != null) {
			var W = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(E);
			W != null && (B = d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingEnd2), { children: d.jsx(r("WAWebEmoji.react"), {
				xstyle: g.emojiScale,
				emoji: W,
				size: "small"
			}, "low-res") })));
		}
		var q = A && d.jsx(o("WAWebFlex.react").FlexColumn, { children: d.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [B, !!L && d.jsx("div", { children: d.jsx(o("WAWebText.react").WAWebTextSmall, {
				as: "div",
				color: "secondaryEmphasized",
				paddingEnd: 2,
				children: L
			}) })]
		}) }), U = d.jsx("div", babelHelpers.extends({}, {
			0: { className: "xc8qplx xp4054r xhslqc4" },
			1: { className: "x78zum5 xeuugli" }
		}[!!w << 0], {
			"data-testid": "mention-secondary",
			dir: "auto",
			children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
				formatters: F,
				text: x != null ? x : R
			})
		})), V = d.jsxs(d.Fragment, { children: [
			d.jsx("div", {
				className: "x78zum5 xeuugli",
				"data-testid": "mention-primary",
				dir: "auto",
				children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
					ariaLabel: o("WAWebChatContactUtils").getAccessibleNotifyName(S),
					formatters: F,
					text: o("WAWebChatContactUtils").getFormattedNotifyName(S)
				})
			}),
			"\xA0",
			U
		] }), H = P.length > h ? P.slice(0, h) + "..." : P, G = function() {
			return a && !$ ? s._(
				/*BTDS*/
				"",
				[s._param("formatted_name", H)]
			) : H;
		}, z = d.jsxs(d.Fragment, { children: [d.jsx("div", {
			className: "x78zum5 xeuugli",
			"data-testid": "mention-primary",
			dir: "auto",
			children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
				formatters: F,
				text: G()
			})
		}), d.jsx("div", {
			className: "xc8qplx x10co9cg xp4054r",
			"data-testid": "mention-secondary",
			dir: "auto",
			children: !v && P === R && S != null ? d.jsx(o("WAWebEmojiText.react").EmojiText, {
				ellipsify: !0,
				formatters: F,
				text: "~" + S
			}) : null
		})] }), j = !v && o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(t) && m, K = j ? V : z;
		w && (K = U);
		var Q = d.jsxs(d.Fragment, { children: [
			K,
			a && l != null && d.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: g.disabledCTA,
				children: l
			}),
			O
		] }), X = d.jsx("div", {
			className: "x17pgkn5 x1sa5p1d",
			children: $ ? d.jsx(r("WAWebTeeLockBadge.react"), {
				size: "small",
				children: d.jsx("div", babelHelpers.extends({}, {
					0: {},
					1: { className: "xvpkmg4" }
				}[!!a << 0], { children: d.jsx(o("WAWebDetailImage.react").DetailImage, {
					id: C,
					size: 32
				}) }))
			}) : d.jsx("div", babelHelpers.extends({}, {
				0: {},
				1: { className: "xvpkmg4" }
			}[!!a << 0], { children: d.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: C,
				size: 32
			}) }))
		}), Y = o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled() ? d.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [d.jsx(o("WAWebFlex.react").FlexItem, { children: X }), d.jsxs(o("WAWebFlex.react").FlexColumn, { children: [d.jsx(o("WAWebFlex.react").FlexRow, { children: Q }), q != null && q !== !1 && d.jsx(o("WAWebFlex.react").FlexItem, { children: q })] })]
		}) : d.jsxs(d.Fragment, { children: [X, d.jsx("div", { children: Q })] });
		return d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(g.mentionsResult, f.paddingBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingHor8, p === !0 && g.mentionsResultSelected), {
			"data-testid": "contact-mention-list-item",
			children: Y
		}));
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.groupMetadata, n = e.selected, a = e.term, i = o("useWAWebModelValues").useModelValues(t, ["id", "subject"]), l = i.id, s = i.subject, c = o("WAWebFormatConfiguration").Search({
			terms: a ? [a] : [],
			boundary: !0
		});
		return d.jsxs("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(g.mentionsResult, f.paddingBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingHor8, n === !0 && g.mentionsResultSelected), {
			"data-testid": "contact-mention-list-item",
			children: [d.jsx("div", {
				className: "x17pgkn5 x1sa5p1d",
				children: d.jsx(o("WAWebDetailImage.react").DetailImage, {
					id: l,
					size: 32
				})
			}), d.jsx("div", {
				className: "x78zum5 xeuugli",
				dir: "auto",
				children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
					ellipsify: !0,
					formatters: c,
					text: s
				})
			})]
		}));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.selected;
		return d.jsxs("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(g.mentionsResult, f.paddingBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingHor8, t === !0 && g.mentionsResultSelected), {
			"data-testid": "mention-all-list-item",
			children: [d.jsx("div", {
				className: "x17pgkn5 x1sa5p1d",
				children: d.jsx(o("WAWebDefaultGroupRefreshedIcon.react").DefaultGroupRefreshedIcon, {
					"aria-hidden": !0,
					iconXstyle: [g.circleIconRefreshed, g.profilePictureOutlineRefreshed],
					width: 32
				})
			}), d.jsxs(o("WAWebFlex.react").FlexColumn, {
				rowGap: 0,
				children: [d.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				}), d.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body3",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})]
		}));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(t) {
		var n = t.chat, a = t.contact, i = t.elevatedPushNamesEnabled, l = i === void 0 ? !1 : i, c = t.onAddCancelled, m = t.onAddConfirmed, y = t.onAddDialogShown, C = t.selected, b = t.term, v = _(!1), S = v[0], R = v[1], L = _(!1), E = L[0], k = L[1], I = o("useWAWebContactValues").useContactValues(a.id, [
			o("WAWebContactGetters").getId,
			o("WAWebFrontendContactGetters").getFormattedName,
			o("WAWebFrontendContactGetters").getIsMyContact,
			o("WAWebContactGetters").getNotifyName,
			o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone,
			o("WAWebFrontendContactGetters").getUsername,
			o("WAWebContactGetters").getPushname
		]), T = I[0], D = I[1], x = I[2], $ = I[3], P = I[4], N = I[5], M = I[6], w = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(), A = o("WAWebUsernameTypes").isPresentUsername(N) && w, F = A && !x, O = o("WAWebFormatConfiguration").SearchName({ terms: b ? [b] : [] }), B = p(function(t) {
			t.stopPropagation(), !(S || E) && (async function() {
				y == null || y();
				var t = n.contact.name, r = d.jsx(o("WAWebEmojiText.react").EmojiText, { text: s._(
					/*BTDS*/
					"",
					[s._param("participant", D), s._param("subject", t)]
				) }), i = await o("WAWebConfirmPopup.react").waitForConfirmPopup({
					children: r,
					okText: s._(
						/*BTDS*/
						""
					),
					cancelText: s._(
						/*BTDS*/
						""
					)
				});
				i ? (R(!0), o("WAWebModifyParticipantsGroupAction").addParticipants(n, [a]).then(function(e) {
					var t = e.participants.some(function(e) {
						return e.code === "403";
					});
					if (t) {
						var n = function() {
							o("WAWebModalManager").ModalManager.existsAsync().then(function(e) {
								e || c == null || c();
							});
						};
						o("WAWebModalManager").ModalManager.once("close_modal", n);
						return;
					}
					k(!0), m == null || m(a);
				}).catch(function(t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to add participant to group: ", ""])), t), o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), c == null || c();
				}).finally(function() {
					R(!1);
				})) : c == null || c();
			})();
		}, [
			n,
			a,
			D,
			S,
			E,
			c,
			m,
			y
		]), W = d.jsx("div", babelHelpers.extends({}, {
			0: { className: "xc8qplx xp4054r xhslqc4" },
			1: { className: "x78zum5 xeuugli" }
		}[!!F << 0], {
			dir: "auto",
			"data-testid": "mention-secondary",
			children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: M != null ? M : P,
				formatters: O
			})
		})), q = d.jsxs(d.Fragment, { children: [
			d.jsx("div", {
				className: "x78zum5 xeuugli",
				dir: "auto",
				"data-testid": "mention-primary",
				children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: o("WAWebChatContactUtils").getFormattedNotifyName($),
					ariaLabel: o("WAWebChatContactUtils").getAccessibleNotifyName($),
					formatters: O
				})
			}),
			"\xA0",
			W
		] }), U = D.length > h ? D.slice(0, h) + "..." : D, V = d.jsxs(d.Fragment, { children: [d.jsx("div", {
			className: "x78zum5 xeuugli",
			dir: "auto",
			"data-testid": "mention-primary",
			children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: U,
				formatters: O
			})
		}), d.jsx("div", {
			className: "xc8qplx x10co9cg xp4054r",
			dir: "auto",
			"data-testid": "mention-secondary",
			children: !x && D === P && $ != null ? d.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: "~" + $,
				formatters: O,
				ellipsify: !0
			}) : null
		})] }), H = !x && o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(a) && l, G = H ? q : V;
		F && (G = W);
		var z = d.jsx(d.Fragment, { children: G }), j = d.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body3",
			children: s._(
				/*BTDS*/
				""
			)
		}), K = o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled() ? d.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [d.jsx(o("WAWebFlex.react").FlexItem, { children: d.jsx("div", {
				className: "x17pgkn5 x1sa5p1d",
				children: d.jsx(o("WAWebDetailImage.react").DetailImage, {
					id: T,
					size: 32
				})
			}) }), d.jsxs(o("WAWebFlex.react").FlexColumn, { children: [d.jsx(o("WAWebFlex.react").FlexRow, { children: z }), d.jsx(o("WAWebFlex.react").FlexItem, { children: j })] })]
		}) : d.jsxs(d.Fragment, { children: [d.jsx("div", {
			className: "x17pgkn5 x1sa5p1d",
			children: d.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: T,
				size: 32
			})
		}), d.jsxs(o("WAWebFlex.react").FlexColumn, { children: [d.jsx("div", { children: z }), j] })] }), Q = E ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return d.jsxs("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(g.mentionsResult, f.paddingBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingHor8, C === !0 && g.mentionsResultSelected), {
			role: "button",
			tabIndex: 0,
			onClick: B,
			onKeyDown: function(t) {
				(t.key === "Enter" || t.key === " ") && B(t);
			},
			"data-testid": "non-participant-mention-list-item",
			children: [K, d.jsx("div", {
				className: "xvc5jky x78zum5 x6s0dn4 x1j8ymqv",
				children: d.jsx(r("WDSButton.react"), {
					variant: "borderless",
					type: "default",
					size: "small",
					label: Q,
					onPress: B,
					loading: S,
					disabled: E
				})
			})]
		}));
	}
	v.displayName = v.name + " [from " + i.id + "]", l.UserResult = y, l.GroupResult = C, l.MentionAllResult = b, l.NonParticipantUserResult = v;
}), 226);
