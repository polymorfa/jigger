__d("WAWebPollsMessageComponentView", [
	"fbt",
	"WAWebBizSuspiciousLabel.react",
	"WAWebCastToPollCreationMsg",
	"WAWebClock",
	"WAWebDrawerManager",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebKeyboardTabUtils",
	"WAWebMessageBubbleActions.react",
	"WAWebMessageBubbleHiddenText.react",
	"WAWebMessageMeta.react",
	"WAWebMessageTextBubble.react",
	"WAWebMsgGetters",
	"WAWebMsgModelUtils",
	"WAWebMsgType",
	"WAWebNewsletterExtendedGatingUtils",
	"WAWebNoop",
	"WAWebPollCreationUtils",
	"WAWebPollMessageHeader",
	"WAWebPollOptionsRenderUtils",
	"WAWebPollsDetailsFlow",
	"WAWebPollsExpandedPhotoDrawer",
	"WAWebPollsOptions",
	"WAWebPollsUseResults",
	"WDSIconIcWarning.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebMsgValues",
	"useWAWebPollEndTime",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["msg"], u = ["msg"], c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useMemo, g = { paddingInlineStart14: {
		paddingInlineStart: "x1onr9mi",
		$$css: !0
	} }, h = 500, y = {
		invalidPollWarning: {
			alignItems: "x6s0dn4",
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			$$css: !0
		},
		invalidPollWarningBorderReceiver: {
			borderTopColor: "xzd3fmn",
			borderInlineEndColor: "x47save",
			borderBottomColor: "x1ie97uy",
			borderInlineStartColor: "xhfwe17",
			$$css: !0
		},
		invalidPollWarningBorderSender: {
			borderTopColor: "x89hfnh",
			borderInlineEndColor: "xfhc3ru",
			borderBottomColor: "x1vv3rcg",
			borderInlineStartColor: "x1yriv23",
			$$css: !0
		},
		spanText: {
			fontSize: "x1pg5gke",
			lineHeight: "x1d3mw78",
			$$css: !0
		},
		warningIcon: {
			color: "x1kt8ij1",
			$$css: !0
		}
	};
	function C(t) {
		var n, a = t.msg, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.associatedMessages, s = i.optionsToResults, u = o("useWAWebMsgValues").useMsgValues(a.id, r("WAWebCastToPollCreationMsg"), [
			(n = o("WAWebMsgGetters")).getPollInvalidated,
			n.getPollSelectableOptionsCount,
			n.getIsNewsletterMsg,
			n.getPollHideVoterNames
		]), c = u[0], d = u[1], p = u[2], _ = u[3], g = o("useWAWebPollEndTime").useWAWebPollEndTime(a), h = g.isPollEnded, y = g.pollEndTime, C = r("useWAWebUIM")(), b = f(function() {
			return o("WAWebPollOptionsRenderUtils").getVotedForOptions(s);
		}, [s]), S = !p || o("WAWebNewsletterExtendedGatingUtils").isNewsletterPollsVotersEnabledForChat(o("WAWebFrontendMsgGetters").getChat(a.unsafe())), R = function(t) {
			o("WAWebPollOptionsRenderUtils").toggleOption({
				optionLocalId: t,
				votedForOptions: b,
				selectableOptionsCount: E,
				msg: a
			});
		}, L = function() {
			o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), self.setTimeout(function() {
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(m.jsx(r("WAWebPollsDetailsFlow"), {
					msg: a,
					associatedMessages: l
				}, a.id.toString()), {
					transition: "slide-left",
					uim: C,
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
					noFocus: !0
				});
			}, 150);
		}, E = a.pollSelectableOptionsCount === 0 ? a.pollOptions.length : a.pollSelectableOptionsCount;
		return m.jsx(v, babelHelpers.extends({}, i, {
			msg: a,
			onOptionToggle: h ? r("WAWebNoop") : R,
			onViewVotesAction: L,
			isPollInvalid: c,
			isPollEnded: h,
			pollEndTime: y,
			pollHideVoterNames: _ === !0,
			pollSelectableOptionsCount: a.pollType !== o("WAWebPollCreationUtils").PollType.QUIZ || !o("WAWebMsgGetters").getIsSentByMe(a) ? d : null,
			votedForOptions: b,
			showViewVotesButton: S,
			selectableOptionsCount: E,
			testid: "poll-bubble",
			readonly: h
		}));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.msg, n = babelHelpers.objectWithoutPropertiesLoose(e, u);
		return m.jsx(v, babelHelpers.extends({}, n, {
			msg: t,
			onOptionToggle: r("WAWebNoop"),
			onViewVotesAction: r("WAWebNoop"),
			isPollInvalid: !1,
			isPollEnded: !1,
			pollEndTime: null,
			pollHideVoterNames: !1,
			pollSelectableOptionsCount: null,
			votedForOptions: new Set(),
			showViewVotesButton: !1,
			selectableOptionsCount: t.pollVotesSnapshot.pollVotes.length,
			testid: "poll-snapshot-bubble",
			readonly: !0
		}));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t, n = e.associatedMessages, a = e.displayAuthor, i = e.displayType, l = e.isPollEnded, u = e.isPollInvalid, d = e.msg, p = e.onOptionToggle, C = e.onViewVotesAction, b = e.optionsToResults, v = e.pollEndTime, S = e.pollHideVoterNames, R = e.pollSelectableOptionsCount, L = e.quotedMsg, E = e.readonly, I = e.selectableOptionsCount, T = e.showViewVotesButton, D = e.testid, x = e.trusted, $ = e.votedForOptions, P = o("useWAWebMsgValues").useMsgValues(d.id, [
			(t = o("WAWebMsgGetters")).getPollName,
			t.getT,
			t.getIsSentByMe,
			t.getForwardedNewsletterMessageInfo,
			t.getPollCorrectOptionIndex,
			t.getPollType
		]), N = P[0], M = P[1], w = P[2], A = P[3], F = P[4], O = P[5], B = d.pollType === o("WAWebPollCreationUtils").PollType.QUIZ ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), W = f(function() {
			return b.values().every(function(e) {
				return e.count === 0;
			});
		}, [b]), q = N.slice(0, h), U = f(function() {
			return o("WAWebPollsUseResults").getOptionWithCount(b);
		}, [b]), V = f(function() {
			return {
				trusted: x,
				isPollEnded: l,
				isPollInvalid: u,
				onDetailImageClick: C,
				readonly: E,
				associatedMessages: n,
				correctOptionIndex: F
			};
		}, [
			x,
			l,
			u,
			C,
			E,
			n,
			F
		]), H = _(function() {
			if (d.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
				var e, t;
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(m.jsx(r("WAWebPollsExpandedPhotoDrawer"), babelHelpers.extends({
					msg: d,
					chatName: (e = (t = o("WAWebFrontendMsgGetters").getChat(d.unsafe())) == null ? void 0 : t.name) != null ? e : "",
					isSentByMe: w,
					selectableOptionsCount: I,
					pollName: q,
					pollEndTime: v,
					pollHideVoterNames: S
				}, V)), { transition: "slide-left" });
			}
		}, [
			w,
			d,
			q,
			V,
			v,
			S,
			I
		]);
		return m.jsx(r("WAWebMessageTextBubble.react"), {
			msg: d,
			displayType: i,
			displayAuthor: a,
			authorRole: "button",
			hideMeta: !0,
			ariaLabel: k({
				authorDisplayName: o("WAWebMsgModelUtils").getMsgDisplayName(d.unsafe()),
				commaSeparatedOptionsAndResults: U,
				isPollEnded: l,
				isSentByMe: w,
				pollEndTime: v,
				pollHideVoterNames: S,
				pollName: q,
				t: M
			}),
			useFixedWidth: d.isDynamicReplyButtonsMsg,
			testid: D,
			children: m.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
				contact: d.senderObj,
				msg: d.unsafe(),
				children: [
					!d.ctwaContext && m.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
						msg: d.unsafe(),
						displayType: i
					}),
					L,
					m.jsx(r("WAWebPollMessageHeader"), {
						isPollEnded: l,
						pollSelectableOptionsCount: R,
						pollEndTime: v,
						pollHideVoterNames: S,
						name: q,
						msg: d,
						isSentByMe: w,
						trusted: x
					}),
					m.jsxs("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.padding4), { children: [
						m.jsx(r("WAWebPollsOptions"), babelHelpers.extends({
							msg: d,
							options: b,
							checkedOptionLocalIds: $,
							onOptionToggle: p,
							selectableOptionsCount: I,
							onPhotoThumbClick: H,
							view: "message"
						}, V)),
						u && m.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: [
								y.invalidPollWarning,
								w ? y.invalidPollWarningBorderSender : y.invalidPollWarningBorderReceiver,
								o("WDSMargins.stylex").wdsMargins.marginBottom4,
								o("WDSPaddings.stylex").wdsPaddings.paddingVer8,
								g.paddingInlineStart14,
								o("WDSPaddings.stylex").wdsPaddings.paddingEnd12
							],
							children: [m.jsx(r("WDSIconIcWarning.react"), { iconXstyle: y.warningIcon }), m.jsx("span", babelHelpers.extends({}, (c || (c = r("stylex"))).props(y.spanText, o("WDSMargins.stylex").wdsMargins.marginStart8), {
								"data-testid": "invalid-poll-bubble-warning",
								children: s._(
									/*BTDS*/
									""
								)
							}))]
						}),
						A != null && m.jsx(o("WAWebFlex.react").FlexRow, {
							xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop8, o("WDSPaddings.stylex").wdsPaddings.paddingBottom12],
							children: m.jsx("span", {
								className: "x1pg5gke x1d3mw78 xhslqc4",
								"data-testid": "see-votes-in-channel",
								children: O === o("WAWebPollCreationUtils").PollType.QUIZ ? s._(
									/*BTDS*/
									""
								) : s._(
									/*BTDS*/
									""
								)
							})
						}),
						m.jsx(o("WAWebFlex.react").FlexRow, {
							justify: "end",
							children: m.jsx(o("WAWebMessageMeta.react").Meta, {
								msg: d,
								associatedMessages: n
							})
						})
					] })),
					T && m.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
						theme: w ? o("WAWebMessageBubbleActions.react").BubbleActionsTheme.POLL_SENDER : o("WAWebMessageBubbleActions.react").BubbleActionsTheme.POLL_RECEIVER,
						items: [{
							label: B,
							title: B,
							onClick: C,
							disabled: W,
							testid: "poll-view-votes"
						}]
					})
				]
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	var S = 1e3, R = 3600, L = 24 * R;
	function E(e, t) {
		if (t == null) return "";
		if (e) return s._(
			/*BTDS*/
			""
		);
		var n = t - o("WAWebClock").Clock.getServerTimeMs(), r = Math.max(0, Math.ceil(n / S));
		if (r < R) return s._(
			/*BTDS*/
			""
		);
		if (r < L) {
			var a = Math.floor(r / R);
			return s._(
				/*BTDS*/
				"",
				[s._param("hours", a)]
			);
		}
		var i = Math.floor(r / L);
		return s._(
			/*BTDS*/
			"",
			[s._plural(i), s._param("days", i)]
		);
	}
	function k(e) {
		var t = e.authorDisplayName, n = e.commaSeparatedOptionsAndResults, r = e.isPollEnded, a = e.isSentByMe, i = e.pollEndTime, l = e.pollHideVoterNames, u = e.pollName, c = e.t, d = l ? s._(
			/*BTDS*/
			""
		) : "", m = E(r, i);
		return a ? s._(
			/*BTDS*/
			"",
			[
				s._param("time", o("WAWebClock").Clock.timestampStr(c)),
				s._param("poll-name", u),
				s._param("hidden-voter-names", d),
				s._param("end-time", m),
				s._param("poll-results", n)
			]
		) : s._(
			/*BTDS*/
			"",
			[
				s._param("poll-author-name-not-you", t),
				s._param("time", o("WAWebClock").Clock.timestampStr(c)),
				s._param("poll-name", u),
				s._param("hidden-voter-names", d),
				s._param("end-time", m),
				s._param("poll-results", n)
			]
		);
	}
	k.displayName = k.name + " [from " + i.id + "]", l.PollCreationMessageComponent = C, l.PollSnapshotMessageComponent = b;
}), 226);
