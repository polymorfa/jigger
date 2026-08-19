__d("WAWebContactMsgInfoDrawer.react", [
	"fbt",
	"WAWebAfterReadingExpiryFooter.react",
	"WAWebAgentCollection",
	"WAWebBizAgentAction",
	"WAWebChatAssignmentGatingUtils",
	"WAWebChatContactMsgInfoCell.react",
	"WAWebChatPreferenceCollection",
	"WAWebChatThemeProvider.react",
	"WAWebDisplayType",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEphemeralFbtKic",
	"WAWebFeatureFlagName",
	"WAWebFrontendMsgGetters",
	"WAWebKeepInChatIcon.react",
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
	"WAWebQplFlowWrapper",
	"WAWebSpinner.react",
	"WAWebStatusDblcheckIcon.react",
	"WAWebStatusVideoIcon.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUiActionWamEvent",
	"WAWebViewOnceViewedIcon.react",
	"WAWebWamEnumUiActionType",
	"WAWebWamGroupMetadataMetricUtils_WORKER_INCOMPATIBLE",
	"WAWebWamMsgUtils",
	"WAWebWamPrivateStatsUtils",
	"qpl",
	"react",
	"useLazyRef",
	"useWAWebForceUpdate",
	"useWAWebGetFeatureFlag",
	"useWAWebListener",
	"useWAWebMsgValues",
	"useWAWebUIM",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = {
		svg: {
			width: "x1xp8n7a",
			height: "xmix8c7",
			$$css: !0
		},
		statusBlue: {
			color: "xy5zui7",
			$$css: !0
		},
		ack: {
			color: "x1rv0e52",
			$$css: !0
		}
	}, g = r("qpl")._(701177629, "3415");
	function h(t) {
		"use no forget";
		var n, a, i, l = t.ref, u = babelHelpers.objectWithoutPropertiesLoose(t, e), d = u.msg, h = o("useWAWebMsgValues").useMsgValues(u.msg.id, [
			(i = o("WAWebMsgGetters")).getId,
			i.getStar,
			i.getType,
			i.getIsGif,
			i.getIsViewOnce,
			i.getLabels,
			i.getNumTimesForwarded,
			i.getIsFrequentlyForwarded,
			i.getAgentId,
			i.getT,
			i.getIsMdHistoryMsg,
			i.getKicSender,
			i.getKicTimestampMs,
			i.getIsKept,
			i.getLatestEditMsgKey
		]), y = h[0], C = h[1], b = h[2], v = h[3], S = h[4], R = h[5], L = h[6], E = h[7], k = h[8], I = h[9], T = h[10], D = h[11], x = h[12], $ = h[13], P = h[14], N = o("WAWebFrontendMsgGetters").getChat(d), M = r("useWAWebUIM")(), w = r("useWAWebUnmountSignal")(), A = p(null), F = p(null), O = !!((n = N.groupMetadata) != null && n.isLidAddressingMode), B = o("WAWebWamMsgUtils").msgIsLid(d, N.id, O), W = r("useLazyRef")(function() {
			return new (o("WAWebUiActionWamEvent")).UiActionWamEvent({
				uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.MSG_INFO_OPEN,
				uiActionPreloaded: !0,
				isLid: B
			});
		}), q = _(void 0), U = q[0], V = q[1], H = _(!1), G = H[0], z = H[1], j = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(U == null ? void 0 : U.played, ["add", "remove"], j), o("useWAWebListener").useListener(U == null ? void 0 : U.read, ["add", "remove"], j), o("useWAWebListener").useListener(U == null ? void 0 : U.delivery, ["add", "remove"], j), o("useWAWebListener").useListener(d, "revoked", function() {
			M == null || M.requestDismiss();
		}), o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, "remove", function(e) {
			e.id.equals(y) && (M == null || M.requestDismiss());
		}), o("useWAWebListener").useListener(d, "change:latestEditMsgKey", function() {
			return M == null ? void 0 : M.requestDismiss();
		});
		var K = r("useWAWebGetFeatureFlag")(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT).enabled;
		m(function() {
			var e;
			o("WAWebQplFlowWrapper").QPL.markerStart(g, { annotations: { bool: { is_premium_subscriber: K } } }), o("WAWebQplFlowWrapper").QPL.markerPoint(g, "datasource_start"), o("WAWebMsgInfoCollection").MsgInfoCollection.find(y).then(function(e) {
				if (o("WAWebQplFlowWrapper").QPL.markerPoint(g, "datasource_end"), w.aborted) {
					o("WAWebQplFlowWrapper").QPL.markerEnd(g, 4);
					return;
				}
				V(e), o("WAWebQplFlowWrapper").QPL.markerEnd(g, 2);
			}).catch(function() {
				o("WAWebQplFlowWrapper").QPL.markerEnd(g, 3), z(!0), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						""
					),
					id: o("WAWebToast.react").genId("msg_info_failed")
				}));
			});
			var t = (e = A.current) == null ? void 0 : e.getContainer();
			b === o("WAWebMsgType").MSG_TYPE.IMAGE && t && (t.scrollTop = t.scrollHeight);
		}, [P]), m(function() {
			var e = W.current;
			if (e) {
				var t = o("WAWebWamGroupMetadataMetricUtils_WORKER_INCOMPATIBLE").getGroupCountMetricsFromChatWid(N == null ? void 0 : N.id);
				t != null && e.set(t), e.markUiActionT(), e.commit(), W.current = void 0;
			}
			o("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents(), o("WAWebBizAgentAction").logMessageInfo(k);
		}, []);
		var Q = function(t, n) {
			var e;
			return n === void 0 && (n = !1), t === y && (n ? !0 : (e = F.current) == null ? void 0 : e.getMsgComponentRef());
		}, X = function() {
			M == null || M.requestDismiss();
		}, Y, J;
		if (U) {
			var Z = [];
			if ($ && D != null && x != null) {
				var ee = x / 1e3, te = o("WAWebEphemeralFbtKic").getKeptByString(D), ne = c.jsx("span", {
					className: "x1rg5ohu x1xp8n7a xqf2s3x xhslqc4 x2b8uid xmziwt1",
					children: c.jsx(o("WAWebKeepInChatIcon.react").KeepInChatIcon, { iconXstyle: f.svg })
				});
				Z.push(c.jsx(r("WAWebChatContactMsgInfoCell.react"), {
					title: te,
					t: ee,
					icon: ne
				}, "keep-in-chat"));
			}
			if (!T) {
				var re = o("WAWebMsgGetters").getIsAckPlayable(d);
				if (re || S) {
					J = re ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					);
					var oe = U.played.head(), ae = oe == null ? void 0 : oe.t, ie = c.jsx(o("WAWebViewOnceViewedIcon.react").ViewOnceViewedIcon, {
						xstyle: f.statusBlue,
						iconXstyle: f.svg
					});
					re && !S && (d.type === o("WAWebMsgType").MSG_TYPE.PTT ? ie = c.jsx(o("WAWebMicIcon.react").MicIcon, {
						xstyle: f.statusBlue,
						iconXstyle: f.svg
					}) : d.type === o("WAWebMsgType").MSG_TYPE.PTV && (ie = c.jsx(o("WAWebStatusVideoIcon.react").StatusVideoIcon, {
						xstyle: f.statusBlue,
						iconXstyle: f.svg
					})));
					var le = c.jsx("span", {
						className: "x1rg5ohu x1xp8n7a xqf2s3x xhslqc4 x2b8uid xmziwt1",
						children: ie
					});
					Z.push(c.jsx(r("WAWebChatContactMsgInfoCell.react"), {
						title: re && !S ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						),
						t: ae,
						icon: le
					}, "played"));
				}
				var se = U.read.head(), ue = se == null ? void 0 : se.t, ce = c.jsx("span", {
					className: "x1rg5ohu x1xp8n7a xqf2s3x xhslqc4 x2b8uid xmziwt1",
					children: c.jsx(o("WAWebStatusDblcheckIcon.react").StatusDblcheckIcon, {
						xstyle: f.ack,
						iconXstyle: f.svg
					})
				});
				J = J != null ? J : s._(
					/*BTDS*/
					""
				), Z.push(c.jsx(r("WAWebChatContactMsgInfoCell.react"), {
					title: J,
					t: ue,
					icon: ce
				}, "read"));
				var de = U.delivery.head(), me = de == null ? void 0 : de.t, pe = c.jsx("span", {
					className: "x1rg5ohu x1xp8n7a xqf2s3x xhslqc4 x2b8uid xmziwt1",
					children: c.jsx(o("WAWebStatusDblcheckIcon.react").StatusDblcheckIcon, { iconXstyle: f.svg })
				});
				Z.push(c.jsx(r("WAWebChatContactMsgInfoCell.react"), {
					title: s._(
						/*BTDS*/
						""
					),
					t: me,
					icon: pe
				}, "delivery"));
			}
			if (K && o("WAWebChatAssignmentGatingUtils").isMultiDeviceMessageAttributionEnabled() && k != null) {
				var _e, fe, ge = (_e = (fe = o("WAWebAgentCollection").AgentCollection.get(k)) == null ? void 0 : fe.name) != null ? _e : "", he = I;
				Z.push(c.jsx(r("WAWebChatContactMsgInfoCell.react"), {
					title: ge,
					t: he,
					icon: c.jsx("span", {
						className: "x1rg5ohu x1xp8n7a xqf2s3x xhslqc4 x2b8uid xmziwt1",
						children: c.jsx(o("WAWebMultiDeviceIcon.react").MultiDeviceIcon, { iconXstyle: f.svg })
					})
				}, "agent"));
			}
			Y = c.jsx(r("WAWebDrawerSection.react"), {
				theme: "padding",
				children: Z
			});
		}
		var ye;
		!U && !G && (ye = c.jsx("div", {
			className: "x78zum5 x6s0dn4 xl56j7k xvv2zd5",
			children: c.jsx(o("WAWebSpinner.react").Spinner, {
				size: 50,
				stroke: 4
			})
		}, "spinner"));
		var Ce = null;
		return R && R.length > 0 && o("WAWebListsLabelGatingUtils").canDisplayLabel() && (Ce = c.jsx(r("WAWebDrawerSection.react"), {
			theme: "padding",
			children: c.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), { labels: R })
		})), c.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			theme: "striped",
			tsNavigationData: {
				surface: "contact-msg-info",
				viewName: "contact-msg-info"
			},
			children: [
				c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: s._(
						/*BTDS*/
						""
					),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					focusBackOrCancel: !0,
					onCancel: X
				}),
				c.jsx(r("WAWebChatThemeProvider.react"), {
					chat: N,
					children: c.jsx(r("WAWebPortalThemeWrapper.react"), { children: c.jsx(r("WAWebMsgPreview.react"), {
						ref: A,
						chatPreference: (a = r("WAWebChatPreferenceCollection").get(N.id)) != null ? a : r("WAWebChatPreferenceCollection").assertGet("defaultPreference"),
						children: c.jsx(r("WAWebMessageWrapper.react"), {
							msg: d,
							ref: F,
							displayType: o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO,
							isMsgVisible: Q,
							position: o("WAWebMessagePosition").MsgPosition.END,
							onProductClick: u.onProductClick,
							errorBoundaryName: "contact-msg-info-drawer"
						})
					}) })
				}),
				c.jsxs(r("WAWebDrawerBody.react"), { children: [
					c.jsx(r("WAWebAfterReadingExpiryFooter.react"), {
						msg: d,
						placement: "contact"
					}),
					Ce,
					c.jsxs("div", {
						className: "x2lah0s x889kno x1fcywrv",
						children: [ye, Y]
					})
				] })
			]
		}, "message-info-modal");
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
