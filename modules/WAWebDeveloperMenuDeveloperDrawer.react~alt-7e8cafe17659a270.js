__d("WAWebDeveloperMenuDeveloperDrawer.react", [
	"JSResourceForInteraction",
	"WAJids",
	"WAWebConfirmPopup.react",
	"WAWebDebugWWWSettings.react",
	"WAWebDeveloperMenuDeveloperMenuIcons.react",
	"WAWebDeveloperMenuPromotedDebugCommands.react",
	"WAWebDeveloperMenuSVG.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebE2EStatusIcon.react",
	"WAWebExternalLink.react",
	"WAWebGlobals",
	"WAWebImageIcon.react",
	"WAWebInfoAltIcon.react",
	"WAWebMdDebugSetting.react",
	"WAWebMenu.react",
	"WAWebMenuItems.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebModelStatsModal.react",
	"WAWebRecalledIcon.react",
	"WAWebSettingsIcon.react",
	"WAWebVoipGatingUtils",
	"WDSIconIcAddCall.react",
	"WDSIconIcCampaignMegaphone.react",
	"WDSIconIcDescription.react",
	"WDSIconIcDomain.react",
	"WDSIconIcStore.react",
	"WDSIconWdsIcChat.react",
	"WDSText.react",
	"WDSVars.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(62), n = e.onABProps, a = e.onDebugCommands, i = e.onGroupABProps, l = e.onMetaConfig, s = e.onNuxManager, c = e.onQuickPromotionsManager, d = e.onSimulateNativeANR, E = e.onTeeDebugInspector, k = e.onVoipUiDebug, I = e.onVoipWasmSamples, T = e.onWasaHatchDebug, D;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (D = u.jsx(o("WAWebMenuItems.react").MenuHeading, { children: "Common" }), t[0] = D) : D = t[0];
		var x;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (x = u.jsx(o("WAWebDeveloperMenuDeveloperMenuIcons.react").ABPropsIcon, {}), t[1] = x) : x = t[1];
		var $;
		t[2] !== n ? ($ = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "ab-props",
			testid: "li-abprops",
			detailLeft: x,
			onSelect: n,
			primary: "ABProps",
			searchCriteria: "ABProps"
		}), t[2] = n, t[3] = $) : $ = t[3];
		var P;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (P = u.jsx(o("WAWebDeveloperMenuDeveloperMenuIcons.react").ABPropsIcon, {}), t[4] = P) : P = t[4];
		var N;
		t[5] !== i ? (N = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "group-ab-props",
			testid: "li-group-abprops",
			detailLeft: P,
			onSelect: i,
			primary: "Group ABProps",
			searchCriteria: "Group ABProps"
		}), t[5] = i, t[6] = N) : N = t[6];
		var M;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (M = u.jsx(o("WAWebDeveloperMenuDeveloperMenuIcons.react").ABPropsIcon, {}), t[7] = M) : M = t[7];
		var w;
		t[8] !== l ? (w = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "meta-config",
			testid: "li-meta-config",
			detailLeft: M,
			onSelect: l,
			primary: "MetaConfig",
			searchCriteria: "MetaConfig"
		}), t[8] = l, t[9] = w) : w = t[9];
		var A;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (A = u.jsx(o("WAWebDeveloperMenuPromotedDebugCommands.react").DebugCommands, {}), t[10] = A) : A = t[10];
		var F;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (F = u.jsx(r("WDSIconIcDomain.react"), {}), t[11] = F) : F = t[11];
		var O;
		t[12] !== a ? (O = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "debug-drawer",
			testid: "li-debug-drawer",
			detailLeft: F,
			onSelect: a,
			primary: "Debug Commands Explorer",
			searchCriteria: "Debug Commands Explorer"
		}), t[12] = a, t[13] = O) : O = t[13];
		var B, W, q, U, V, H;
		if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
			var G;
			B = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
				optionId: "design-templates",
				testid: "li-design-templates",
				detailLeft: u.jsx(r("WDSIconIcCampaignMegaphone.react"), {}),
				onSelect: C,
				primary: "Design Templates",
				searchCriteria: "Design Templates"
			}), W = u.jsx((G = o("WAWebDeveloperMenuPromotedDebugCommands.react")).ErrorToast, {}), q = u.jsx(G.ShowHiddenBotChats, {}), U = u.jsx(G.E2EDebugMode, {}), V = u.jsx(G.TriggerQpEmergencyForceFetch, {}), H = u.jsx(G.VPVOverlay, {}), t[14] = B, t[15] = W, t[16] = q, t[17] = U, t[18] = V, t[19] = H;
		} else B = t[14], W = t[15], q = t[16], U = t[17], V = t[18], H = t[19];
		var z;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (z = u.jsx(o("WAWebDeveloperMenuDeveloperMenuIcons.react").NUXManagerIcon, {}), t[20] = z) : z = t[20];
		var j;
		t[21] !== s ? (j = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "nux-manager",
			testid: "li-nux-manager",
			detailLeft: z,
			onSelect: s,
			primary: "NUX Manager",
			searchCriteria: "NUX Manager"
		}), t[21] = s, t[22] = j) : j = t[22];
		var K;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (K = u.jsx(r("WDSIconIcCampaignMegaphone.react"), {}), t[23] = K) : K = t[23];
		var Q;
		t[24] !== c ? (Q = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "quick-promotions-manager",
			testid: "li-quick-promotions-manager",
			detailLeft: K,
			onSelect: c,
			primary: "Quick Promotions Manager",
			searchCriteria: "Quick Promotions Manager"
		}), t[24] = c, t[25] = Q) : Q = t[25];
		var X;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (X = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "svg-components",
			testid: "li-svg-components",
			detailLeft: u.jsx(o("WAWebImageIcon.react").ImageIcon, {
				height: 24,
				width: 24
			}),
			onSelect: h,
			primary: "SVG Components",
			searchCriteria: "SVG Components"
		}), t[26] = X) : X = t[26];
		var Y;
		t[27] === Symbol.for("react.memo_cache_sentinel") ? (Y = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "showroom",
			testid: "li-showroom",
			detailLeft: u.jsx(r("WDSIconIcStore.react"), {}),
			onSelect: y,
			primary: "UI Showroom",
			searchCriteria: "UI Showroom"
		}), t[27] = Y) : Y = t[27];
		var J;
		t[28] === Symbol.for("react.memo_cache_sentinel") ? (J = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "message-bubble-showroom",
			testid: "li-message-bubble-showroom",
			detailLeft: u.jsx(r("WDSIconWdsIcChat.react"), {}),
			onSelect: b,
			primary: "Message Bubble Showroom",
			searchCriteria: "Message Bubble Showroom"
		}), t[28] = J) : J = t[28];
		var Z;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (Z = u.jsx(o("WAWebE2EStatusIcon.react").E2EStatusIcon, {}), t[29] = Z) : Z = t[29];
		var ee;
		t[30] !== T ? (ee = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "wasa-hatch-debug",
			testid: "li-wasa-hatch-debug",
			detailLeft: Z,
			onSelect: T,
			primary: "WASA · Hatch Debug",
			searchCriteria: "WASA Hatch Debug"
		}), t[30] = T, t[31] = ee) : ee = t[31];
		var te, ne;
		t[32] === Symbol.for("react.memo_cache_sentinel") ? (te = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "work-contact-sync",
			testid: "li-work-contact-sync",
			detailLeft: u.jsx(r("WDSText.react"), {
				type: "Headline2",
				colorName: "contentDefault",
				children: "👤"
			}),
			onSelect: S,
			primary: "Work Contact Sync",
			searchCriteria: "Work Contact Sync"
		}), ne = u.jsx(o("WAWebMenuItems.react").MenuHeading, { children: "Infra" }), t[32] = te, t[33] = ne) : (te = t[32], ne = t[33]);
		var re;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (re = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "md-debug",
			testid: "li-debug",
			detailLeft: u.jsx(o("WAWebSettingsIcon.react").SettingsIcon, {}),
			onSelect: v,
			primary: "Infra Settings",
			searchCriteria: "Infra Settings"
		}), t[34] = re) : re = t[34];
		var oe;
		t[35] === Symbol.for("react.memo_cache_sentinel") ? (oe = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "mex-playground",
			testid: "mex-playground-drawer-button",
			detailLeft: u.jsx(o("WAWebE2EStatusIcon.react").E2EStatusIcon, {}),
			onSelect: g,
			primary: "MEX Playground"
		}), t[35] = oe) : oe = t[35];
		var ae;
		t[36] === Symbol.for("react.memo_cache_sentinel") ? (ae = u.jsx(o("WAWebE2EStatusIcon.react").E2EStatusIcon, {}), t[36] = ae) : ae = t[36];
		var ie;
		t[37] !== E ? (ie = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "tee-playground",
			testid: "li-tee-playground",
			detailLeft: ae,
			onSelect: E,
			primary: "TEE Playground",
			searchCriteria: "TEE Playground"
		}), t[37] = E, t[38] = ie) : ie = t[38];
		var le;
		t[39] === Symbol.for("react.memo_cache_sentinel") ? (le = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "trace-log",
			testid: "li-trace-log",
			detailLeft: u.jsx(r("WDSIconIcDescription.react"), {}),
			onSelect: R,
			primary: "Trace Log",
			searchCriteria: "Trace Log"
		}), t[39] = le) : le = t[39];
		var se, ue, ce, de;
		t[40] === Symbol.for("react.memo_cache_sentinel") ? (se = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "www-settings",
			testid: "www-settings",
			detailLeft: u.jsx(r("WDSText.react"), {
				type: "Headline2",
				colorName: "contentDefault",
				children: "🚀"
			}),
			onSelect: L,
			primary: "Canonical",
			searchCriteria: "Canonical"
		}), ue = u.jsx(o("WAWebMenuItems.react").MenuHeading, { children: "Localization" }), ce = u.jsx(o("WAWebDeveloperMenuPromotedDebugCommands.react").RTL, {}), de = u.jsx(o("WAWebMenuItems.react").MenuHeading, { children: "Performance" }), t[40] = se, t[41] = ue, t[42] = ce, t[43] = de) : (se = t[40], ue = t[41], ce = t[42], de = t[43]);
		var me;
		t[44] === Symbol.for("react.memo_cache_sentinel") ? (me = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "wds-icon-benchmark",
			testid: "li-wds-icon-benchmark",
			detailLeft: u.jsx(o("WAWebImageIcon.react").ImageIcon, {
				height: 24,
				width: 24
			}),
			onSelect: _,
			primary: "WDS Icon Benchmark",
			searchCriteria: "WDS Icon Benchmark"
		}), t[44] = me) : me = t[44];
		var pe;
		t[45] === Symbol.for("react.memo_cache_sentinel") ? (pe = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "web-icon-benchmark",
			testid: "li-web-icon-benchmark",
			detailLeft: u.jsx(o("WAWebImageIcon.react").ImageIcon, {
				height: 24,
				width: 24
			}),
			onSelect: p,
			primary: "Web Icon Benchmark",
			searchCriteria: "Web Icon Benchmark"
		}), t[45] = pe) : pe = t[45];
		var _e;
		t[46] === Symbol.for("react.memo_cache_sentinel") ? (_e = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "msg-wrapper-benchmark",
			testid: "li-msg-wrapper-benchmark",
			detailLeft: u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {}),
			onSelect: f,
			primary: "Msg Wrapper Benchmark",
			searchCriteria: "Msg Wrapper Benchmark"
		}), t[46] = _e) : _e = t[46];
		var fe;
		t[47] === Symbol.for("react.memo_cache_sentinel") ? (fe = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "stats",
			testid: "li-stats",
			detailLeft: u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {}),
			onSelect: m,
			primary: "Model Stats",
			searchCriteria: "Model Stats"
		}), t[47] = fe) : fe = t[47];
		var ge;
		t[48] !== d || t[49] !== k || t[50] !== I ? (ge = o("WAWebVoipGatingUtils").isCallingEnabled() ? u.jsxs(u.Fragment, { children: [
			u.jsx(o("WAWebMenuItems.react").MenuHeading, { children: "VoIP" }),
			u.jsx(o("WAWebDeveloperMenuPromotedDebugCommands.react").CpuPressureSlider, {}),
			u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
				optionId: "simulateNativeANR",
				testid: "li-simulateNativeANR",
				detailLeft: u.jsx(o("WAWebRecalledIcon.react").RecalledIcon, {}),
				onSelect: d,
				primary: "Simulate Native ANR",
				searchCriteria: "Simulate Native ANR"
			}),
			u.jsx(o("WAWebDeveloperMenuPromotedDebugCommands.react").SimulateWebAnr, {}),
			u.jsx(o("WAWebDeveloperMenuPromotedDebugCommands.react").VoipDebugInfo, {}),
			u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
				optionId: "voipUiDebug",
				testid: "li-voipUiDebug",
				detailLeft: u.jsx(r("WDSIconIcAddCall.react"), {}),
				onSelect: k,
				primary: "VoIP UI Debug",
				searchCriteria: "VoIP UI Debug"
			}),
			u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
				optionId: "voipWasm",
				testid: "li-voipWasm",
				detailLeft: u.jsx(r("WDSIconIcAddCall.react"), {}),
				onSelect: I,
				primary: "VoIP WASM Samples",
				searchCriteria: "VoIP WASM Samples"
			})
		] }) : null, t[48] = d, t[49] = k, t[50] = I, t[51] = ge) : ge = t[51];
		var he;
		return t[52] !== O || t[53] !== j || t[54] !== Q || t[55] !== ee || t[56] !== $ || t[57] !== ie || t[58] !== ge || t[59] !== N || t[60] !== w ? (he = u.jsxs(o("WAWebMenu.react").WAWebMenu, {
			size: "medium",
			colorScheme: "default",
			material: !0,
			children: [
				D,
				$,
				N,
				w,
				A,
				O,
				B,
				W,
				q,
				U,
				V,
				H,
				j,
				Q,
				X,
				Y,
				J,
				ee,
				te,
				ne,
				re,
				oe,
				ie,
				le,
				se,
				ue,
				ce,
				de,
				me,
				pe,
				_e,
				fe,
				ge
			]
		}), t[52] = O, t[53] = j, t[54] = Q, t[55] = ee, t[56] = $, t[57] = ie, t[58] = ge, t[59] = N, t[60] = w, t[61] = he) : he = t[61], he;
	}
	function d(t) {
		var n = o("react-compiler-runtime").c(22), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.onABProps, d = l.onBack, m = l.onCancel, p = l.onDebugCommands, _ = l.onGroupABProps, f = l.onMetaConfig, g = l.onNuxManager, h = l.onQuickPromotionsManager, y = l.onSimulateNativeANR, C = l.onTeeDebugInspector, b = l.onVoipUiDebug, v = l.onVoipWasmSamples, S = l.onWasaHatchDebug, R;
		n[3] !== d || n[4] !== m ? (R = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: "Developer",
			onBack: d,
			onCancel: m,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0
		}), n[3] = d, n[4] = m, n[5] = R) : R = n[5];
		var L;
		n[6] !== s || n[7] !== p || n[8] !== _ || n[9] !== f || n[10] !== g || n[11] !== h || n[12] !== y || n[13] !== C || n[14] !== b || n[15] !== v || n[16] !== S ? (L = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(c, {
			onABProps: s,
			onGroupABProps: _,
			onMetaConfig: f,
			onNuxManager: g,
			onQuickPromotionsManager: h,
			onDebugCommands: p,
			onTeeDebugInspector: C,
			onVoipUiDebug: b,
			onVoipWasmSamples: v,
			onSimulateNativeANR: y,
			onWasaHatchDebug: S
		}) }), n[6] = s, n[7] = p, n[8] = _, n[9] = f, n[10] = g, n[11] = h, n[12] = y, n[13] = C, n[14] = b, n[15] = v, n[16] = S, n[17] = L) : L = n[17];
		var E;
		return n[18] !== i || n[19] !== R || n[20] !== L ? (E = u.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "settings",
			testid: "developer-settings-drawer",
			children: [R, L]
		}), n[18] = i, n[19] = R, n[20] = L, n[21] = E) : E = n[21], E;
	}
	function m() {
		o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebModelStatsModal.react"), {}));
	}
	async function p() {
		var e = await r("JSResourceForInteraction")("WAWebIconBenchmark.react").__setRef("WAWebDeveloperMenuDeveloperDrawer.react").load();
		o("WAWebModalManager").ModalManager.open(u.jsx(e, {}));
	}
	async function _() {
		var e = await r("JSResourceForInteraction")("WAWebWDSIconBenchmark.react").__setRef("WAWebDeveloperMenuDeveloperDrawer.react").load();
		o("WAWebModalManager").ModalManager.open(u.jsx(e, {}));
	}
	async function f() {
		var e = await r("JSResourceForInteraction")("WAWebMessageWrapperBenchmark.react").__setRef("WAWebDeveloperMenuDeveloperDrawer.react").load();
		o("WAWebModalManager").ModalManager.open(u.jsx(e, {}));
	}
	async function g() {
		var e = await r("JSResourceForInteraction")("WAWebMexPlaygroundModal").__setRef("WAWebDeveloperMenuDeveloperDrawer.react").load(), t = e;
		t != null && o("WAWebModalManager").ModalManager.open(u.jsx(t, { onClose: o("WAWebModalManager").closeModalManager }));
	}
	function h() {
		o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebDeveloperMenuSVG.react"), {}));
	}
	async function y() {
		var e = await r("JSResourceForInteraction")("WAWebShowroomModal.react").__setRef("WAWebDeveloperMenuDeveloperDrawer.react").load(), t = e.openShowroom;
		t();
	}
	async function C() {
		var e = await r("JSResourceForInteraction")("WAWebDeveloperMenuDesignTemplatesDrawer.react").__setRef("WAWebDeveloperMenuDeveloperDrawer.react").load();
		o("WAWebModalManager").ModalManager.open(u.jsx(e, {}));
	}
	async function b() {
		var e = await r("JSResourceForInteraction")("WAWebMessageBubbleShowroom.react").__setRef("WAWebDeveloperMenuDeveloperDrawer.react").load();
		o("WAWebModalManager").ModalManager.open(u.jsx(e, {}));
	}
	function v() {
		o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebMdDebugSetting.react"), {}));
	}
	function S() {
		var e = window.location.hostname, t = e.match(/(?:dev-web|web)\.(.+?)\.whatsapp\.com$/), n;
		t && t[1] ? n = t[1] + ".internalfb.com" : n = "www.internalfb.com";
		var a = encodeURIComponent(window.location.href), i = "https://" + n + "/intern/whatsapp/work_contact_sync/?return_url=" + a;
		o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "developer-menu"
			},
			type: o("WAWebModal.react").ModalTheme.Flex,
			children: u.jsxs("div", {
				style: {
					minWidth: "450px",
					paddingTop: o("WDSVars.stylex").WDSVars.spacingDoublePlus,
					paddingInline: o("WDSVars.stylex").WDSVars.spacingDoublePlus,
					paddingBottom: o("WDSVars.stylex").WDSVars.spacingDoublePlus
				},
				children: [u.jsx("h1", {
					style: {
						fontSize: "18px",
						marginBottom: o("WDSVars.stylex").WDSVars.spacingSinglePlus
					},
					children: "Redirecting..."
				}), u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDefault",
					children: "Please wait while we redirect you to the Work Contact Sync page."
				})]
			})
		})), window.setTimeout(function() {
			o("WAWebExternalLink.react").openExternalLink(i, { target: o("WAWebExternalLink.react").ExternalLinkTarget.CURRENT_TAB });
		}, 500);
	}
	function R() {
		var e = o("WAJids").extractDeviceIDParts(o("WAWebGlobals").getMyDeviceJid()), t = e.deviceID, n = e.userId;
		o("WAWebExternalLink.react").openExternalLink("https://www.internalfb.com/intern/whatsapp/admin/trace_log?phone=" + n + "%3A" + t.toString() + "&start=-10s&end=follow");
	}
	function L() {
		o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebDebugWWWSettings.react"), {}));
	}
	l.default = d;
}), 98);
