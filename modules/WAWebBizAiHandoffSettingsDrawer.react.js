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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(14), n = e.onBack, a = h(0), i = a[0], l = a[1], s;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = function() {
			return l(R);
		}, t[0] = s) : s = t[0];
		var u = s, c;
		t[1] !== n ? (c = d.jsx(L, {
			onBack: n,
			children: v
		}), t[1] = n, t[2] = c) : c = t[2];
		var m;
		t[3] !== i ? (m = d.jsx(p, {
			fallback: v,
			children: d.jsx(I, { fetchKey: i })
		}), t[3] = i, t[4] = m) : m = t[4];
		var _;
		t[5] !== i || t[6] !== m ? (_ = d.jsx(r("WAWebBizAIQueryBoundary.react"), {
			boundaryName: "biz-ai-handoff-settings",
			onRetry: u,
			queryVersion: i,
			testid: "ai-handoff-settings-error",
			children: m
		}), t[5] = i, t[6] = m, t[7] = _) : _ = t[7];
		var f;
		t[8] !== n || t[9] !== _ ? (f = d.jsx(L, {
			onBack: n,
			children: _
		}), t[8] = n, t[9] = _, t[10] = f) : f = t[10];
		var g;
		return t[11] !== c || t[12] !== f ? (g = d.jsx(r("WAWebBizAIRelayBoundary.react"), {
			unavailableFallback: c,
			children: f
		}), t[11] = c, t[12] = f, t[13] = g) : g = t[13], g;
	}
	function R(e) {
		return e + 1;
	}
	function L(e) {
		var t = o("react-compiler-runtime").c(14), n = e.children, a = e.onBack, i = r("useWAWebEventTargetValue")(o("WAWebLabelCollection").LabelCollection, "add remove change:isActive", E), l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = o("WAWebListUtils").getPresetListHelperText(o("WAWebSchemaLabel").ListType.AI_HANDOFF), t[0] = l) : l = t[0];
		var u = l, c;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[1] = c) : c = t[1];
		var m;
		t[2] !== a ? (m = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: c,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: a
		}), t[2] = a, t[3] = m) : m = t[3];
		var p;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = u != null && d.jsx("div", {
			className: "x1p57kb1 x2lah0s",
			children: d.jsx(r("WDSBanner.react"), {
				type: "tip",
				body: u,
				testid: "preset-list-helper-banner"
			})
		}), t[4] = p) : p = t[4];
		var _;
		t[5] !== i || t[6] !== a ? (_ = i != null && d.jsx(o("WAWebFlex.react").FlexRow, {
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
					return o("WAWebListsUtil").openListDisableConfirmPopup(i, a);
				}
			})
		}), t[5] = i, t[6] = a, t[7] = _) : _ = t[7];
		var f;
		t[8] !== n || t[9] !== _ ? (f = d.jsxs(r("WAWebDrawerBody.react"), {
			xstyle: b.body,
			children: [
				p,
				n,
				_
			]
		}), t[8] = n, t[9] = _, t[10] = f) : f = t[10];
		var g;
		return t[11] !== m || t[12] !== f ? (g = d.jsxs(r("WAWebDrawer.react"), {
			testid: "ai-handoff-settings-drawer",
			theme: "settings",
			children: [m, f]
		}), t[11] = m, t[12] = f, t[13] = g) : g = t[13], g;
	}
	function E() {
		return o("WAWebLabelCollection").LabelCollection.toArray().find(k);
	}
	function k(e) {
		return e.type === o("WAWebSchemaLabel").ListType.AI_HANDOFF;
	}
	function I(e) {
		var t, n = o("react-compiler-runtime").c(21), a = e.fetchKey, i = o("CometRelay").useLazyLoadQuery(y, {}, {
			fetchKey: a,
			fetchPolicy: "store-and-network"
		}), l = (t = i.xfb_meta_ai_biz_agent_wa_handoff_removal_timing) == null ? void 0 : t.timing, c;
		n[0] !== l ? (c = o("WAWebBizAiHandoffRemovalTimingModel").toHandoffRemovalTiming(l), n[0] = l, n[1] = c) : c = n[1];
		var m = c, p = h(null), _ = p[0], v = p[1], S;
		n[2] !== _ || n[3] !== m ? (S = _ != null ? _ : o("WAWebBizAiAgentGating").isHandoffRemovalTimingSyncEnabled() ? m : o("WAWebBizAiHandoffRemovalTimingModel").getHandoffRemovalTiming(), n[2] = _, n[3] = m, n[4] = S) : S = n[4];
		var R = S, L = g(null), E = r("useWAWebBizAiHandoffRemovalTimingUpdate")(), k, I;
		n[5] !== m ? (k = function() {
			o("WAWebBizAiAgentGating").isHandoffRemovalTimingSyncEnabled() && L.current == null && o("WAWebBizAiHandoffRemovalTimingModel").applyHandoffRemovalTiming(m);
		}, I = [m], n[5] = m, n[6] = k, n[7] = I) : (k = n[6], I = n[7]), f(k, I);
		var x;
		n[8] !== E ? (x = function(t) {
			var e = o("WAWebBizAiHandoffRemovalTimingModel").toHandoffRemovalTiming(t);
			if (!o("WAWebBizAiAgentGating").isHandoffRemovalTimingSyncEnabled()) {
				o("WAWebBizAiHandoffRemovalTimingModel").applyHandoffRemovalTiming(e), T();
				return;
			}
			v(e), L.current = e, E(e).then(function(t) {
				L.current === e && (L.current = null, t.isSuccess ? (o("WAWebBizAiHandoffRemovalTimingModel").applyHandoffRemovalTiming(e), v(null), T(), o("WAWebBizAISettingsNudgeAction").sendSettingsNudge(o("WAWebProtobufSyncAction.pb").SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory.HANDOFF_REMOVAL_TIMING)) : (v(null), D()));
			}).catch(function(t) {
				L.current === e && (L.current = null, v(null), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["biz ai handoff removal timing save failed"]))).catching(r("getErrorSafe")(t)).sendLogs("biz-ai-handoff-removal-timing-save"), D());
			});
		}, n[8] = E, n[9] = x) : x = n[9];
		var $ = x, P;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (P = s._(
			/*BTDS*/
			""
		), n[10] = P) : P = n[10];
		var N;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (N = d.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			xstyle: b.sectionDescription,
			children: s._(
				/*BTDS*/
				""
			)
		}), n[11] = N) : N = n[11];
		var M;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
			/*BTDS*/
			""
		).toString(), n[12] = M) : M = n[12];
		var w;
		n[13] !== $ || n[14] !== R ? (w = C.map(function(e) {
			var t = e.value === R;
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
						onChange: $,
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
		}), n[13] = $, n[14] = R, n[15] = w) : w = n[15];
		var A;
		n[16] !== w ? (A = d.jsx(o("WAWebFlex.react").FlexColumn, {
			role: "radiogroup",
			"aria-label": M,
			children: w
		}), n[16] = w, n[17] = A) : A = n[17];
		var F;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (F = d.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			xstyle: b.note,
			children: s._(
				/*BTDS*/
				""
			)
		}), n[18] = F) : F = n[18];
		var O;
		return n[19] !== A ? (O = d.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
			hideDivider: !0,
			theme: "biz-ai-home",
			headerText: P,
			children: [
				N,
				A,
				F
			]
		}), n[19] = A, n[20] = O) : O = n[20], O;
	}
	function T() {
		o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function D() {
		o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	l.default = S;
}), 226);
