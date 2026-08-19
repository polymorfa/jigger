__d("WAWebGroupHistoryPostJoinSendFlow", [
	"fbt",
	"WALogger",
	"WAWebChatCollection",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebGroupHistoryGating",
	"WAWebGroupHistoryParticipantAvatarRow.react",
	"WAWebGroupHistoryPostJoinConfirmPopup.react",
	"WAWebGroupHistoryPostJoinEligibilityFull",
	"WAWebGroupHistoryRestrictionHelper",
	"WAWebGroupHistorySendMessagesModal.react",
	"WAWebGroupHistorySenderUserJourneyLogger",
	"WAWebGroupMetadataCollection",
	"WAWebModalManager",
	"WAWebSendHistoryBundleAction",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumTsSurface",
	"WAWebWidFactory",
	"WAWebWidToJid",
	"WDSTextualLink.react",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p = m || (m = o("react")), _ = 64, f = { titleHeader: {
		rowGap: "x8a3fw1",
		alignItems: "x1qjc9v5",
		$$css: !0
	} }, g = 100;
	async function h(t, n, a, i, l) {
		if (l === void 0 && (l = o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT), n.length !== 0) {
			var s = o("WAWebWidFactory").asGroupWidOrThrow(t), u = r("WAWebGroupMetadataCollection").get(s);
			if (u == null) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[group-history] post-join: missing groupMetadata ", ""])), s.toString()).sendLogs("group-history-post-join-missing-group");
				return;
			}
			if (n.length === 1) {
				await y(t, s, u, n[0], a, i, l);
				return;
			}
			await C(t, s, u, n, a, i, l);
		}
	}
	async function y(e, t, n, a, i, l, u) {
		var c, d = (c = a.joinTime) != null ? c : i;
		if (d != null) {
			var m;
			try {
				m = await o("WAWebGroupHistoryPostJoinEligibilityFull").isEligibleForPostJoinHistoryFull({
					groupMetadata: n,
					groupWid: t,
					joinTimeFallback: i,
					participant: a
				});
			} catch (e) {
				R(e), L();
				return;
			}
			if (!m.eligible) {
				l != null && o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.sendIneligibleAtCtaClick({
					ineligibleReason: o("WAWebGroupHistorySenderUserJourneyLogger").mapEligibilityResultToIneligibleReason(m.reason),
					uiSurface: u
				}), L();
				return;
			}
			var g = o("WAWebFrontendContactGetters").getFormattedShortName(a.contact), h = async function(s, c) {
				var r;
				try {
					r = await o("WAWebGroupHistoryPostJoinEligibilityFull").isEligibleForPostJoinHistoryFull({
						groupMetadata: n,
						groupWid: t,
						joinTimeFallback: i,
						participant: a
					});
				} catch (e) {
					c(), R(e), L();
					return;
				}
				if (c(), !r.eligible) {
					l != null && o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.sendIneligibleAtSendClick({
						ineligibleReason: o("WAWebGroupHistorySenderUserJourneyLogger").mapEligibilityResultToIneligibleReason(r.reason),
						uiSurface: u
					}), L();
					return;
				}
				x(e, a.contact.id, d, g, s, l, u);
			}, y = m.messageCount;
			l != null && o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.selectableMessagesLoaded({
				groupHistoryMessagesCount: y,
				uiSurface: u
			});
			var C = function() {
				v({
					bundleSendSource: l,
					groupOnlyWid: t,
					onDone: function(t) {
						h(t, function() {
							o("WAWebModalManager").ModalManager.closeSupportModal(), o("WAWebModalManager").ModalManager.close();
						});
					},
					totalMessages: y,
					uiSurface: u
				});
			};
			o("WAWebModalManager").ModalManager.openSupportModal(p.jsx(r("WAWebGroupHistoryPostJoinConfirmPopup.react"), {
				title: p.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: f.titleHeader,
					children: [p.jsx("div", {
						className: "x78zum5 xl56j7k",
						"data-testid": "group-history-post-join-modal-avatar",
						children: p.jsx(o("WAWebDetailImage.react").DetailImage, {
							id: a.contact.id,
							size: _,
							onClick: function() {
								return S(t);
							}
						})
					}), s._(
						/*BTDS*/
						"",
						[s._param("contactName", g)]
					)]
				}),
				okText: s._(
					/*BTDS*/
					""
				),
				onCancel: o("WAWebModalManager").closeModalManager,
				onConfirm: function() {
					return h(null, o("WAWebModalManager").closeModalManager);
				},
				children: s._(
					/*BTDS*/
					"",
					[s._param("contactName", g), s._param("recentMessagesLink", b(C))]
				)
			}));
		}
	}
	async function C(e, t, n, a, i, l, u) {
		var c;
		try {
			c = await o("WAWebGroupHistoryPostJoinEligibilityFull").isEligibleForPostJoinHistoryFullMulti({
				groupMetadata: n,
				groupWid: t,
				joinTimeFallback: i,
				participants: a
			});
		} catch (e) {
			R(e), L();
			return;
		}
		if (c.eligible.length === 0) {
			if (l != null) {
				var d;
				o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.sendIneligibleAtCtaClick({
					ineligibleReason: o("WAWebGroupHistorySenderUserJourneyLogger").mapEligibilityResultToIneligibleReason((d = c.ineligible[0]) == null ? void 0 : d.reason),
					uiSurface: u
				});
			}
			E(c.ineligible);
			return;
		}
		var m = o("WAWebFrontendContactGetters").getFormattedShortName(a[0].contact), _ = a.length - 1, g = async function(s, c) {
			var r;
			try {
				r = await o("WAWebGroupHistoryPostJoinEligibilityFull").isEligibleForPostJoinHistoryFullMulti({
					groupMetadata: n,
					groupWid: t,
					joinTimeFallback: i,
					participants: a
				});
			} catch (e) {
				c(), R(e), L();
				return;
			}
			if (c(), r.eligible.length === 0) {
				if (l != null) {
					var d;
					o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.sendIneligibleAtSendClick({
						ineligibleReason: o("WAWebGroupHistorySenderUserJourneyLogger").mapEligibilityResultToIneligibleReason((d = r.ineligible[0]) == null ? void 0 : d.reason),
						uiSurface: u
					});
				}
				E(r.ineligible);
				return;
			}
			$(e, r.eligible, i, s, l, u), k(r.ineligible);
		}, h = c.messageCount;
		l != null && o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.selectableMessagesLoaded({
			groupHistoryMessagesCount: h,
			uiSurface: u
		});
		var y = function() {
			v({
				bundleSendSource: l,
				groupOnlyWid: t,
				onDone: function(t) {
					g(t, function() {
						o("WAWebModalManager").ModalManager.closeSupportModal(), o("WAWebModalManager").ModalManager.close();
					});
				},
				totalMessages: h,
				uiSurface: u
			});
		};
		o("WAWebModalManager").ModalManager.openSupportModal(p.jsx(r("WAWebGroupHistoryPostJoinConfirmPopup.react"), {
			title: p.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: f.titleHeader,
				children: [p.jsx(r("WAWebGroupHistoryParticipantAvatarRow.react"), {
					participants: a,
					onAvatarClick: function() {
						return S(t);
					}
				}), s._(
					/*BTDS*/
					"",
					[s._plural(_, "number of other recipients"), s._param("firstPersonName", m)]
				)]
			}),
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			onConfirm: function() {
				return g(null, o("WAWebModalManager").closeModalManager);
			},
			children: s._(
				/*BTDS*/
				"",
				[s._param("recentMessagesLink", b(y))]
			)
		}));
	}
	function b(e) {
		return p.jsx(r("WDSTextualLink.react"), {
			onClick: e,
			testid: "group-history-post-join-recent-messages-link",
			textConfig: "Body2",
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.bundleSendSource, n = e.groupOnlyWid, a = e.onDone, i = e.totalMessages, l = e.uiSurface;
		t != null && o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.countChangeEntryPointClicked({
			groupHistoryMessagesCount: i,
			uiSurface: l
		});
		var u = Math.min(g, i);
		o("WAWebModalManager").ModalManager.openSupportModal(p.jsx(r("WAWebGroupHistorySendMessagesModal.react"), {
			currentMessageCount: i,
			selectedMessageCount: u,
			showPinDisclaimer: o("WAWebGroupHistoryGating").isOutOfWindowPinSenderEnabled(n),
			primaryButtonLabel: s._(
				/*BTDS*/
				""
			),
			onDone: a,
			onCountChanged: function(n) {
				t != null && o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.countChanged({
					groupHistoryMessagesCount: n,
					uiSurface: l
				});
			},
			onCancel: function() {
				return o("WAWebModalManager").ModalManager.closeSupportModal();
			}
		}));
	}
	function S(e) {
		var t = o("WAWebChatCollection").ChatCollection.get(e);
		t != null && (o("WAWebModalManager").ModalManager.close(), o("WAWebCmd").Cmd.chatInfoDrawer(t, { scrollToParticipantList: !0 }));
	}
	function R(e) {
		o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[group-history] post-join eligibility probe failed"]))).catching(r("getErrorSafe")(e)).sendLogs("group-history-post-join-eligibility-failed");
	}
	function L() {
		o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function E(e) {
		var t = I(e);
		if (t.length > 0 && t.length === e.length) {
			T(t);
			return;
		}
		L();
	}
	function k(e) {
		var t = I(e);
		t.length > 0 && T(t);
	}
	function I(e) {
		return e.filter(function(e) {
			return e.reason === "already_received";
		}).map(function(e) {
			return e.participant;
		});
	}
	function T(e) {
		if (e.length !== 0) {
			var t = o("WAWebFrontendContactGetters").getFormattedShortName(e[0].contact), n = e.length - 1;
			o("WAWebModalManager").ModalManager.openSupportModal(p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "group-history-post-join-ineligible"
				},
				onOK: function() {
					return o("WAWebModalManager").ModalManager.closeSupportOrModal();
				},
				okText: s._(
					/*BTDS*/
					""
				),
				children: D(t, n)
			}));
		}
	}
	function D(e, t) {
		return t === 0 ? s._(
			/*BTDS*/
			"",
			[s._param("memberName", e)]
		) : s._(
			/*BTDS*/
			"",
			[s._plural(t, "number of other members"), s._param("firstMemberName", e)]
		);
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e, t, n, r, a, i, l) {
		var u = o("WAWebGroupHistoryRestrictionHelper").filterParticipants([t]), d = u.historyReceivers, m = u.nonHistoryReceivers;
		if (d.length !== 0) {
			i != null && (o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.bundleMessageSent({
				bundleSendSource: i,
				groupHistoryMessagesCount: a,
				recipientCount: d.length,
				uiSurface: l
			}), o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.noticeMessageSent({
				bundleSendSource: i,
				recipientCount: d.length,
				uiSurface: l
			}));
			var _ = o("WAWebWidToJid").widToGroupJid(e);
			o("WAWebSendHistoryBundleAction").sendHistoryBundleAction(_, d, m, a, n).then(function() {
				o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					"",
					[s._param("contactName", r)]
				) }));
			}).catch(function(e) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[group-history] failed to send post-join history bundle: ", ""])), e).sendLogs("group-history-post-join-send-failed");
			});
		}
	}
	function $(e, t, n, r, a, i) {
		var l = n != null ? n : t[0].joinTime;
		if (l != null) {
			var u = o("WAWebGroupHistoryRestrictionHelper").filterParticipants(t.map(function(e) {
				return e.contact.id;
			})), c = u.historyReceivers, m = u.nonHistoryReceivers;
			if (c.length !== 0) {
				a != null && (o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.bundleMessageSent({
					bundleSendSource: a,
					groupHistoryMessagesCount: r,
					recipientCount: c.length,
					uiSurface: i
				}), o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.noticeMessageSent({
					bundleSendSource: a,
					recipientCount: c.length,
					uiSurface: i
				}));
				var _ = o("WAWebFrontendContactGetters").getFormattedShortName(t[0].contact), f = t.length - 1, g = o("WAWebWidToJid").widToGroupJid(e);
				o("WAWebSendHistoryBundleAction").sendHistoryBundleAction(g, c, m, r, l).then(function() {
					o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						"",
						[s._plural(f, "number of other recipients"), s._param("firstPersonName", _)]
					) }));
				}).catch(function(e) {
					o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[group-history] post-join multi send failed: ", ""])), e).sendLogs("group-history-post-join-send-multi-failed");
				});
			}
		}
	}
	l.startPostJoinSendFlow = h;
}), 226);
