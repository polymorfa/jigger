__d("WAWebGroupMsgInfoDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebAfterReadingExpiryFooter.react",
	"WAWebAgentCollection",
	"WAWebBizAgentAction",
	"WAWebChatAgentMsgInfoCell.react",
	"WAWebChatAssignmentGatingUtils",
	"WAWebChatGroupMsgInfoCell.react",
	"WAWebChatKeptByMsgInfoCell.react",
	"WAWebChatPreferenceCollection",
	"WAWebChatThemeProvider.react",
	"WAWebContactCollection",
	"WAWebDisplayType",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebElevatedPushNamesFlag",
	"WAWebFeatureFlagName",
	"WAWebFlatList.react",
	"WAWebFlatListController",
	"WAWebFrontendMsgGetters",
	"WAWebGroupMetadataCollection",
	"WAWebGroupMsgInfoSectionFooter.react",
	"WAWebGroupMsgInfoSections",
	"WAWebKeepInChatIcon.react",
	"WAWebL10N",
	"WAWebLabelsInfoDrawerLabelWell.react",
	"WAWebListsLabelGatingUtils",
	"WAWebMessagePosition",
	"WAWebMessageWrapper.react",
	"WAWebMicIcon.react",
	"WAWebMsgCollection",
	"WAWebMsgGetters",
	"WAWebMsgInfoCollection",
	"WAWebMsgPreview.react",
	"WAWebMsgType",
	"WAWebMultiDeviceIcon.react",
	"WAWebPortalThemeWrapper.react",
	"WAWebSpinner.react",
	"WAWebStatusDblcheckIcon.react",
	"WAWebStatusVideoIcon.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUiActionWamEvent",
	"WAWebUserPrefsMeUser",
	"WAWebWamAddressingModeUtils",
	"WAWebWamEnumUiActionType",
	"WAWebWamGroupMetricUtils",
	"WAWebWamMsgUtils",
	"WAWebWamPrivateStatsUtils",
	"WDSIconWdsIcViewOnce.react",
	"WDSPaddings.stylex",
	"nullthrows",
	"react",
	"stylex",
	"useLazyRef",
	"useWAWebForceUpdate",
	"useWAWebGetFeatureFlag",
	"useWAWebListener",
	"useWAWebMsgValues",
	"useWAWebUIM",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useRef, g = p.useState, h = { paddingInline10: {
		paddingInlineStart: "xe2zdcy",
		paddingInlineEnd: "x2vl965",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, y = {
		svg: {
			width: "x1xp8n7a",
			height: "xmix8c7",
			$$css: !0
		},
		statusBlue: {
			color: "xy5zui7",
			$$css: !0
		},
		contentDeemphasized: {
			color: "xhslqc4",
			$$css: !0
		},
		ack: {
			color: "x1rv0e52",
			$$css: !0
		},
		titleRefreshed: {
			display: "x78zum5",
			$$css: !0
		}
	}, C = 50, b = 50, v = o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT + 10;
	function S(e) {
		var t = e.chat, n = e.elevatedPushNamesEnabled, o = e.participant;
		return m.jsx(r("WAWebChatGroupMsgInfoCell.react"), {
			msgInfoParticipant: o,
			chat: t,
			contact: o.contact,
			elevatedPushNamesEnabled: n,
			theme: "drawer-list"
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.agentName, n = e.msg;
		return m.jsx(r("WAWebChatAgentMsgInfoCell.react"), {
			msg: n,
			agentName: t,
			theme: "drawer-list"
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		return o("WAWebContactCollection").ContactCollection.assertGet(e);
	}
	function E(e) {
		var t = e.msg, n = o("WAWebMsgGetters").getKicSender(t);
		if (n != null) {
			var a = L(n);
			return m.jsx(r("WAWebChatKeptByMsgInfoCell.react"), {
				kicTimestampMs: t.kicTimestampMs,
				contact: a,
				theme: "drawer-list"
			});
		}
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.msg, n = e.section, a, i;
		switch (n) {
			case o("WAWebGroupMsgInfoSections").Sections.PLAYED_HEADER:
				t.type === o("WAWebMsgType").MSG_TYPE.PTV ? i = m.jsx(o("WAWebStatusVideoIcon.react").StatusVideoIcon, {
					xstyle: y.statusBlue,
					iconXstyle: y.svg
				}) : i = m.jsx(o("WAWebMicIcon.react").MicIcon, {
					xstyle: y.statusBlue,
					iconXstyle: y.svg
				}), a = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebGroupMsgInfoSections").Sections.READ_HEADER:
				i = m.jsx(o("WAWebStatusDblcheckIcon.react").StatusDblcheckIcon, {
					xstyle: y.ack,
					iconXstyle: y.svg
				}), a = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebGroupMsgInfoSections").Sections.SEEN_HEADER:
				i = m.jsx(o("WAWebStatusDblcheckIcon.react").StatusDblcheckIcon, {
					xstyle: y.ack,
					iconXstyle: y.svg
				}), a = t.isViewOnce ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebGroupMsgInfoSections").Sections.DELIVERED_HEADER:
				i = m.jsx(o("WAWebStatusDblcheckIcon.react").StatusDblcheckIcon, { iconXstyle: y.svg }), a = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebGroupMsgInfoSections").Sections.VIEWED_HEADER:
				i = m.jsx(r("WDSIconWdsIcViewOnce.react"), { iconXstyle: [y.svg, y.contentDeemphasized] }), a = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebGroupMsgInfoSections").Sections.AGENT_HEADER:
				i = m.jsx(o("WAWebMultiDeviceIcon.react").MultiDeviceIcon, { iconXstyle: y.svg }), a = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebGroupMsgInfoSections").Sections.KEEP_IN_CHAT_HEADER:
				i = m.jsx(o("WAWebKeepInChatIcon.react").KeepInChatIcon, { iconXstyle: y.svg }), a = s._(
					/*BTDS*/
					""
				);
				break;
			default: return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Invalid SECTION for group message info section header"]))), null;
		}
		return m.jsxs("div", babelHelpers.extends({
			"data-testid": "msg-info-title",
			dir: r("WAWebL10N").LR()
		}, (c || (c = r("stylex"))).props(y.titleRefreshed, o("WDSPaddings.stylex").wdsPaddings.padding20, o("WDSPaddings.stylex").wdsPaddings.paddingTop0), { children: [i, m.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
			as: "span",
			xstyle: h.paddingInline10,
			textWrap: "ellipsis",
			children: a
		})] }));
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		var t = e.data, n = e.msg, a = e.msgInfo;
		if (t.kind === "contact-row") return m.jsx(S, {
			participant: t.participant,
			chat: o("WAWebFrontendMsgGetters").getChat(n),
			elevatedPushNamesEnabled: o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(o("WAWebFrontendMsgGetters").getChat(n))
		});
		if (t.kind === "agent-row") return m.jsx(R, {
			msg: n,
			agentName: t.agentName
		});
		if (t.kind === "kept-by-row") return m.jsx(E, { msg: n });
		switch (t.type) {
			case o("WAWebGroupMsgInfoSections").Sections.PLAYED_HEADER:
			case o("WAWebGroupMsgInfoSections").Sections.READ_HEADER:
			case o("WAWebGroupMsgInfoSections").Sections.SEEN_HEADER:
			case o("WAWebGroupMsgInfoSections").Sections.DELIVERED_HEADER:
			case o("WAWebGroupMsgInfoSections").Sections.VIEWED_HEADER:
			case o("WAWebGroupMsgInfoSections").Sections.AGENT_HEADER:
			case o("WAWebGroupMsgInfoSections").Sections.KEEP_IN_CHAT_HEADER: return m.jsx(k, {
				msg: n,
				section: t.type
			});
			default: return m.jsx(r("WAWebGroupMsgInfoSectionFooter.react"), {
				section: t.type,
				msgInfo: r("nullthrows")(a)
			});
		}
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(t) {
		"use no forget";
		var n, a, i, l = t.ref, u = babelHelpers.objectWithoutPropertiesLoose(t, e), c = u.msg, d = o("useWAWebMsgValues").useMsgValues(u.msg.id, [
			(i = o("WAWebMsgGetters")).getId,
			i.getStar,
			i.getType,
			i.getIsGif,
			i.getIsViewOnce,
			i.getLabels,
			i.getNumTimesForwarded,
			i.getIsFrequentlyForwarded,
			i.getAgentId,
			i.getKicSender,
			i.getKicTimestampMs,
			i.getIsKept,
			i.getLatestEditMsgKey
		]), p = d[0], h = d[1], y = d[2], S = d[3], R = d[4], L = d[5], E = d[6], k = d[7], T = d[8], D = d[9], x = d[10], $ = d[11], P = d[12], N = o("WAWebFrontendMsgGetters").getChat(c), M = !!((n = N.groupMetadata) != null && n.isLidAddressingMode), w = o("WAWebWamMsgUtils").msgIsLid(c, N.id, M), A = r("useWAWebUnmountSignal")(), F = r("useWAWebUIM")(), O = r("useLazyRef")(function() {
			return new (o("WAWebUiActionWamEvent")).UiActionWamEvent({
				uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.MSG_INFO_OPEN,
				uiActionPreloaded: !0,
				isLid: w
			});
		}), B = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), W = f(null), q = f(null), U = g(void 0), V = U[0], H = U[1], G = g(!1), z = G[0], j = G[1];
		_(function() {
			var e;
			o("WAWebMsgInfoCollection").MsgInfoCollection.find(p).then(function(e) {
				A.aborted || H(e);
			}).catch(function() {
				j(!0), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						""
					),
					id: o("WAWebToast.react").genId("msg_info_failed")
				}));
			});
			var t = (e = W.current) == null ? void 0 : e.getContainer();
			y === o("WAWebMsgType").MSG_TYPE.IMAGE && t && (t.scrollTop = t.scrollHeight);
		}, []), _(function() {
			var e = O.current;
			if (e) {
				var t = r("WAWebGroupMetadataCollection").get(N.id), n = t == null ? void 0 : t.cachedDeviceSizeBucket;
				if (n != null && (e.sizeBucket = n), t != null) {
					var a = o("WAWebWamAddressingModeUtils").getAddressingModeMetricsFromGroupMetadata(t);
					a != null && (e.localAddressingMode = a);
					var i = o("WAWebWamGroupMetricUtils").getGroupCountMetricsFromGroupMetadata(t);
					e.set(i);
				}
				e.markUiActionT(), e.commit(), O.current = void 0;
			}
			o("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents(), o("WAWebBizAgentAction").logMessageInfo(T);
		}, []);
		var K = r("useWAWebGetFeatureFlag")(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT).enabled, Q = function(t, n) {
			var e;
			return n === void 0 && (n = !1), t === p && (n ? !0 : (e = q.current) == null ? void 0 : e.getMsgComponentRef());
		}, X = function() {
			F == null || F.requestDismiss();
		}, Y = function() {
			var e = [];
			if (V && $ && D != null && (e.push({
				kind: "section",
				type: o("WAWebGroupMsgInfoSections").Sections.KEEP_IN_CHAT_HEADER,
				itemKey: o("WAWebGroupMsgInfoSections").Sections.KEEP_IN_CHAT_HEADER,
				height: b
			}), e.push({
				kind: "kept-by-row",
				itemKey: "kept-by-" + D.user,
				height: v
			})), K && o("WAWebChatAssignmentGatingUtils").isMultiDeviceMessageAttributionEnabled() && T != null) {
				var t, n, r = (t = (n = o("WAWebAgentCollection").AgentCollection.get(T)) == null ? void 0 : n.name) != null ? t : "";
				e.push({
					kind: "section",
					type: o("WAWebGroupMsgInfoSections").Sections.AGENT_HEADER,
					itemKey: o("WAWebGroupMsgInfoSections").Sections.AGENT_HEADER,
					height: b
				}), e.push({
					kind: "agent-row",
					agentName: r,
					itemKey: "agent-" + r.toString(),
					height: v
				});
			}
			var a = o("WAWebMsgGetters").getIsAckPlayable(c), i = a || R;
			if (V && i) {
				var l = a && !R ? o("WAWebGroupMsgInfoSections").Sections.PLAYED_HEADER : o("WAWebGroupMsgInfoSections").Sections.VIEWED_HEADER;
				e.push({
					kind: "section",
					type: l,
					itemKey: l,
					height: b
				}), e.push.apply(e, V.played.map(function(e) {
					return {
						participant: e,
						kind: "contact-row",
						itemKey: e.id.toString(),
						height: o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT
					};
				})), V.playedRemaining > 0 && (l = a && !R ? o("WAWebGroupMsgInfoSections").Sections.PLAYED_FOOTER : o("WAWebGroupMsgInfoSections").Sections.VIEWED_FOOTER, e.push({
					kind: "section",
					type: l,
					itemKey: l,
					height: C
				}));
			}
			return V && (V.read.length > 0 || V.playedRemaining > 0) && (e.push({
				kind: "section",
				type: i ? o("WAWebGroupMsgInfoSections").Sections.SEEN_HEADER : o("WAWebGroupMsgInfoSections").Sections.READ_HEADER,
				itemKey: o("WAWebGroupMsgInfoSections").Sections.READ_HEADER,
				height: b
			}), e.push.apply(e, V.read.map(function(e) {
				var t;
				return (t = c.invokedBotWid) != null && t.isBot() && o("WAWebUserPrefsMeUser").isMeAccount(e.id) ? null : {
					participant: e,
					kind: "contact-row",
					itemKey: e.id.toString(),
					height: o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT
				};
			}).filter(Boolean)), V.readRemaining > 0 && e.push({
				kind: "section",
				type: o("WAWebGroupMsgInfoSections").Sections.READ_FOOTER,
				itemKey: i ? o("WAWebGroupMsgInfoSections").Sections.SEEN_FOOTER : o("WAWebGroupMsgInfoSections").Sections.READ_FOOTER,
				height: C
			})), V && (V.delivery.length > 0 || V.deliveryRemaining > 0) && (e.push({
				kind: "section",
				type: o("WAWebGroupMsgInfoSections").Sections.DELIVERED_HEADER,
				itemKey: o("WAWebGroupMsgInfoSections").Sections.DELIVERED_HEADER,
				height: b
			}), e.push.apply(e, V.delivery.map(function(e) {
				var t;
				return (t = c.invokedBotWid) != null && t.isBot() && o("WAWebUserPrefsMeUser").isMeAccount(e.id) ? null : {
					participant: e,
					kind: "contact-row",
					itemKey: e.id.toString(),
					height: o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT
				};
			}).filter(Boolean)), V.deliveryRemaining > 0 && e.push({
				kind: "section",
				type: o("WAWebGroupMsgInfoSections").Sections.DELIVERED_FOOTER,
				itemKey: o("WAWebGroupMsgInfoSections").Sections.DELIVERED_FOOTER,
				height: C
			})), e;
		}, J = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(V == null ? void 0 : V.played, ["add", "remove"], J), o("useWAWebListener").useListener(V == null ? void 0 : V.read, ["add", "remove"], J), o("useWAWebListener").useListener(V == null ? void 0 : V.delivery, ["add", "remove"], J), o("useWAWebListener").useListener(c, "revoked", function() {
			F == null || F.requestDismiss();
		}), o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, "remove", function(e) {
			e.id.equals(p) && (F == null || F.requestDismiss());
		}), o("useWAWebListener").useListener(c, "change:latestEditMsgKey", function() {
			return F == null ? void 0 : F.requestDismiss();
		});
		var Z;
		!V && !z && (Z = m.jsx("div", {
			className: "x78zum5 x6s0dn4 xl56j7k xvv2zd5",
			children: m.jsx(o("WAWebSpinner.react").Spinner, {
				size: 50,
				stroke: 4
			})
		}));
		var ee = Y(), te = ee.length ? m.jsx(o("WAWebFlatList.react").FlatList, {
			flatListController: B.current,
			direction: "vertical",
			forceConsistentRenderCount: !1,
			data: ee,
			renderItem: function(t) {
				return m.jsx(I, {
					data: t,
					msg: c,
					msgInfo: V
				});
			}
		}) : null, ne = null;
		return L && L.length > 0 && o("WAWebListsLabelGatingUtils").canDisplayLabel() && (ne = m.jsx(r("WAWebDrawerSection.react"), {
			theme: "padding",
			children: m.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), { labels: L })
		})), m.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			theme: "striped",
			tsNavigationData: {
				surface: "group-msg-info",
				viewName: "group-msg-info"
			},
			children: [
				m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: s._(
						/*BTDS*/
						""
					),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onCancel: X,
					focusBackOrCancel: !0
				}),
				m.jsx(r("WAWebChatThemeProvider.react"), {
					chat: N,
					children: m.jsx(r("WAWebPortalThemeWrapper.react"), { children: m.jsx(r("WAWebMsgPreview.react"), {
						ref: W,
						chatPreference: (a = r("WAWebChatPreferenceCollection").get(N.id)) != null ? a : r("WAWebChatPreferenceCollection").assertGet("defaultPreference"),
						children: m.jsx(r("WAWebMessageWrapper.react"), {
							msg: c,
							ref: q,
							displayType: o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO,
							isMsgVisible: Q,
							position: o("WAWebMessagePosition").MsgPosition.END,
							onProductClick: u.onProductClick,
							errorBoundaryName: "group-msg-info-drawer"
						})
					}) })
				}),
				m.jsxs(r("WAWebDrawerBody.react"), {
					flatListControllers: [B.current],
					children: [
						m.jsx(r("WAWebAfterReadingExpiryFooter.react"), {
							msg: c,
							placement: "group"
						}),
						ne,
						Z,
						m.jsx("div", {
							className: "x889kno x1t4gjm",
							children: te
						})
					]
				})
			]
		});
	}
	T.displayName = T.name + " [from " + i.id + "]", l.default = T;
}), 226);
