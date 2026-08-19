__d("WAWebBizAiHandoffSettingsDrawer.react", [
	"fbt",
	"CometRelay",
	"WALogger",
	"WAWebBizAIQueryBoundary.react",
	"WAWebBizAIRelayBoundary.react",
	"WAWebBizAISettingsNudgeAction",
	"WAWebBizAiAgentGating",
	"WAWebBizAiHandoffRemovalTimingModel",
	"WAWebBizAiHandoffSettingsDrawerQuery.graphql",
	"WAWebBizToolsDrawerBodySection.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebLabelCollection",
	"WAWebListUtils",
	"WAWebListsUtil",
	"WAWebProtobufSyncAction.pb",
	"WAWebSchemaLabel",
	"WAWebSpinner.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSBanner.react",
	"WDSBaseRadio.react",
	"WDSButton.react",
	"WDSText.react",
	"getErrorSafe",
	"react",
	"useWAWebBizAiHandoffRemovalTimingUpdate",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.Suspense, _ = m.useCallback, f = m.useEffect, g = m.useRef, h = m.useState, y = e !== void 0 ? e : e = n("WAWebBizAiHandoffSettingsDrawerQuery.graphql"), C = [{
		label: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		testid: "ai-handoff-removal-immediately",
		value: "IMMEDIATELY"
	}, {
		label: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		testid: "ai-handoff-removal-24h",
		value: "AFTER_24H_REPLY"
	}], b = {
		body: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		note: {
			paddingBottom: "x12xbjc7",
			paddingTop: "x16ovd2e",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		radioLabel: {
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		sectionDescription: {
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		disableButtonRow: {
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			flexShrink: "x2lah0s",
			$$css: !0
		}
	}, v = d.jsx("div", {
		"data-testid": "ai-handoff-settings-loading",
		className: "x6s0dn4 x78zum5 x98rzlu xl56j7k",
		children: d.jsx(o("WAWebSpinner.react").Spinner, {
			color: "default",
			size: 24,
			stroke: 3
		})
	});
	function S(e) {
		var t = e.onBack, n = h(0), o = n[0], a = n[1], i = _(function() {
			return a(function(e) {
				return e + 1;
			});
		}, []);
		return d.jsx(r("WAWebBizAIRelayBoundary.react"), {
			unavailableFallback: d.jsx(R, {
				onBack: t,
				children: v
			}),
			children: d.jsx(R, {
				onBack: t,
				children: d.jsx(r("WAWebBizAIQueryBoundary.react"), {
					boundaryName: "biz-ai-handoff-settings",
					onRetry: i,
					queryVersion: o,
					testid: "ai-handoff-settings-error",
					children: d.jsx(p, {
						fallback: v,
						children: d.jsx(L, { fetchKey: o })
					})
				})
			})
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.children, n = e.onBack, a = r("useWAWebEventTargetValue")(o("WAWebLabelCollection").LabelCollection, "add remove change:isActive", function() {
			return o("WAWebLabelCollection").LabelCollection.toArray().find(function(e) {
				return e.type === o("WAWebSchemaLabel").ListType.AI_HANDOFF;
			});
		}), i = o("WAWebListUtils").getPresetListHelperText(o("WAWebSchemaLabel").ListType.AI_HANDOFF);
		return d.jsxs(r("WAWebDrawer.react"), {
			testid: "ai-handoff-settings-drawer",
			theme: "settings",
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: n
			}), d.jsxs(r("WAWebDrawerBody.react"), {
				xstyle: b.body,
				children: [
					i != null && d.jsx("div", {
						className: "x1p57kb1 x2lah0s",
						children: d.jsx(r("WDSBanner.react"), {
							type: "tip",
							body: i,
							testid: "preset-list-helper-banner"
						})
					}),
					t,
					a != null && d.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: b.disableButtonRow,
						children: d.jsx(r("WDSButton.react"), {
							variant: "borderless",
							widthMode: "constrained",
							size: "small",
							type: "destructive",
							testid: "disable-preset-list-button",
							label: s._(
								/*BTDS*/
								""
							),
							onPress: function() {
								return o("WAWebListsUtil").openListDisableConfirmPopup(a, n);
							}
						})
					})
				]
			})]
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t, n = e.fetchKey, a = o("CometRelay").useLazyLoadQuery(y, {}, {
			fetchKey: n,
			fetchPolicy: "store-and-network"
		}), i = o("WAWebBizAiHandoffRemovalTimingModel").toHandoffRemovalTiming((t = a.xfb_meta_ai_biz_agent_wa_handoff_removal_timing) == null ? void 0 : t.timing), l = h(null), c = l[0], m = l[1], p = c != null ? c : o("WAWebBizAiAgentGating").isHandoffRemovalTimingSyncEnabled() ? i : o("WAWebBizAiHandoffRemovalTimingModel").getHandoffRemovalTiming(), v = g(null), S = r("useWAWebBizAiHandoffRemovalTimingUpdate")();
		f(function() {
			o("WAWebBizAiAgentGating").isHandoffRemovalTimingSyncEnabled() && v.current == null && o("WAWebBizAiHandoffRemovalTimingModel").applyHandoffRemovalTiming(i);
		}, [i]);
		var R = _(function(e) {
			var t = o("WAWebBizAiHandoffRemovalTimingModel").toHandoffRemovalTiming(e);
			if (!o("WAWebBizAiAgentGating").isHandoffRemovalTimingSyncEnabled()) {
				o("WAWebBizAiHandoffRemovalTimingModel").applyHandoffRemovalTiming(t), E();
				return;
			}
			m(t), v.current = t, S(t).then(function(e) {
				v.current === t && (v.current = null, e.isSuccess ? (o("WAWebBizAiHandoffRemovalTimingModel").applyHandoffRemovalTiming(t), m(null), E(), o("WAWebBizAISettingsNudgeAction").sendSettingsNudge(o("WAWebProtobufSyncAction.pb").SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory.HANDOFF_REMOVAL_TIMING)) : (m(null), k()));
			}).catch(function(e) {
				v.current === t && (v.current = null, m(null), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["biz ai handoff removal timing save failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-handoff-removal-timing-save"), k());
			});
		}, [S]);
		return d.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
			hideDivider: !0,
			theme: "biz-ai-home",
			headerText: s._(
				/*BTDS*/
				""
			),
			children: [
				d.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					xstyle: b.sectionDescription,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				d.jsx(o("WAWebFlex.react").FlexColumn, {
					role: "radiogroup",
					"aria-label": s._(
						/*BTDS*/
						""
					).toString(),
					children: C.map(function(e) {
						var t = e.value === p;
						return d.jsxs("label", {
							htmlFor: "ai-handoff-" + e.value,
							className: "x6s0dn4 x1ubxc9n xyi3aci xwf5gio x1p453bz x1suzm8a x9f619 x1ypdohk x78zum5 xbktkl8 x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xh8yej3",
							"data-testid": e.testid,
							children: [d.jsx("div", {
								className: "x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
								children: d.jsx(r("WDSBaseRadio.react"), {
									checked: t,
									id: "ai-handoff-" + e.value,
									name: "ai-handoff-removal-timing",
									onChange: R,
									testid: "wds-radio-input-" + e.value,
									value: e.value
								})
							}), d.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1",
								xstyle: b.radioLabel,
								children: e.label()
							})]
						}, e.value);
					})
				}),
				d.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					xstyle: b.note,
					children: s._(
						/*BTDS*/
						""
					)
				})
			]
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E() {
		o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function k() {
		o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	l.default = S;
}), 226);
