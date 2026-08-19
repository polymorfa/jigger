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
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react"));
	function c(e) {
		var t, n, a, i = e.onABProps, l = e.onDebugCommands, s = e.onGroupABProps, c = e.onMetaConfig, d = e.onNuxManager, E = e.onQuickPromotionsManager, k = e.onSimulateNativeANR, I = e.onTeeDebugInspector, T = e.onVoipUiDebug, D = e.onVoipWasmSamples, x = e.onWasaHatchDebug;
		return u.jsxs(o("WAWebMenu.react").WAWebMenu, {
			size: "medium",
			colorScheme: "default",
			material: !0,
			children: [
				u.jsx((t = o("WAWebMenuItems.react")).MenuHeading, { children: "Common" }),
				u.jsx(t.ActionMenuItem, {
					optionId: "ab-props",
					testid: "li-abprops",
					detailLeft: u.jsx((n = o("WAWebDeveloperMenuDeveloperMenuIcons.react")).ABPropsIcon, {}),
					onSelect: i,
					primary: "ABProps",
					searchCriteria: "ABProps"
				}),
				u.jsx(t.ActionMenuItem, {
					optionId: "group-ab-props",
					testid: "li-group-abprops",
					detailLeft: u.jsx(n.ABPropsIcon, {}),
					onSelect: s,
					primary: "Group ABProps",
					searchCriteria: "Group ABProps"
				}),
				u.jsx(t.ActionMenuItem, {
					optionId: "meta-config",
					testid: "li-meta-config",
					detailLeft: u.jsx(n.ABPropsIcon, {}),
					onSelect: c,
					primary: "MetaConfig",
					searchCriteria: "MetaConfig"
				}),
				u.jsx((a = o("WAWebDeveloperMenuPromotedDebugCommands.react")).DebugCommands, {}),
				u.jsx(t.ActionMenuItem, {
					optionId: "debug-drawer",
					testid: "li-debug-drawer",
					detailLeft: u.jsx(r("WDSIconIcDomain.react"), {}),
					onSelect: l,
					primary: "Debug Commands Explorer",
					searchCriteria: "Debug Commands Explorer"
				}),
				u.jsx(t.ActionMenuItem, {
					optionId: "design-templates",
					testid: "li-design-templates",
					detailLeft: u.jsx(r("WDSIconIcCampaignMegaphone.react"), {}),
					onSelect: C,
					primary: "Design Templates",
					searchCriteria: "Design Templates"
				}),
				u.jsx(a.ErrorToast, {}),
				u.jsx(a.ShowHiddenBotChats, {}),
				u.jsx(a.E2EDebugMode, {}),
				u.jsx(a.TriggerQpEmergencyForceFetch, {}),
				u.jsx(a.VPVOverlay, {}),
				u.jsx(t.ActionMenuItem, {
					optionId: "nux-manager",
					testid: "li-nux-manager",
					detailLeft: u.jsx(n.NUXManagerIcon, {}),
					onSelect: d,
					primary: "NUX Manager",
					searchCriteria: "NUX Manager"
				}),
				u.jsx(t.ActionMenuItem, {
					optionId: "quick-promotions-manager",
					testid: "li-quick-promotions-manager",
					detailLeft: u.jsx(r("WDSIconIcCampaignMegaphone.react"), {}),
					onSelect: E,
					primary: "Quick Promotions Manager",
					searchCriteria: "Quick Promotions Manager"
				}),
				u.jsx(t.ActionMenuItem, {
					optionId: "svg-components",
					testid: "li-svg-components",
					detailLeft: u.jsx(o("WAWebImageIcon.react").ImageIcon, {
						height: 24,
						width: 24
					}),
					onSelect: h,
					primary: "SVG Components",
					searchCriteria: "SVG Components"
				}),
				u.jsx(t.ActionMenuItem, {
					optionId: "showroom",
					testid: "li-showroom",
					detailLeft: u.jsx(r("WDSIconIcStore.react"), {}),
					onSelect: y,
					primary: "UI Showroom",
					searchCriteria: "UI Showroom"
				}),
				u.jsx(t.ActionMenuItem, {
					optionId: "message-bubble-showroom",
					testid: "li-message-bubble-showroom",
					detailLeft: u.jsx(r("WDSIconWdsIcChat.react"), {}),
					onSelect: b,
					primary: "Message Bubble Showroom",
					searchCriteria: "Message Bubble Showroom"
				}),
				u.jsx(t.ActionMenuItem, {
					optionId: "wasa-hatch-debug",
					testid: "li-wasa-hatch-debug",
					detailLeft: u.jsx(o("WAWebE2EStatusIcon.react").E2EStatusIcon, {}),
					onSelect: x,
					primary: "WASA · Hatch Debug",
					searchCriteria: "WASA Hatch Debug"
				}),
				u.jsx(t.ActionMenuItem, {
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
				}),
				u.jsx(t.MenuHeading, { children: "Infra" }),
				u.jsx(t.ActionMenuItem, {
					optionId: "md-debug",
					testid: "li-debug",
					detailLeft: u.jsx(o("WAWebSettingsIcon.react").SettingsIcon, {}),
					onSelect: v,
					primary: "Infra Settings",
					searchCriteria: "Infra Settings"
				}),
				u.jsx(t.ActionMenuItem, {
					optionId: "mex-playground",
					testid: "mex-playground-drawer-button",
					detailLeft: u.jsx(o("WAWebE2EStatusIcon.react").E2EStatusIcon, {}),
					onSelect: g,
					primary: "MEX Playground"
				}),
				u.jsx(t.ActionMenuItem, {
					optionId: "tee-playground",
					testid: "li-tee-playground",
					detailLeft: u.jsx(o("WAWebE2EStatusIcon.react").E2EStatusIcon, {}),
					onSelect: I,
					primary: "TEE Playground",
					searchCriteria: "TEE Playground"
				}),
				u.jsx(t.ActionMenuItem, {
					optionId: "trace-log",
					testid: "li-trace-log",
					detailLeft: u.jsx(r("WDSIconIcDescription.react"), {}),
					onSelect: R,
					primary: "Trace Log",
					searchCriteria: "Trace Log"
				}),
				u.jsx(t.ActionMenuItem, {
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
				}),
				u.jsx(t.MenuHeading, { children: "Localization" }),
				u.jsx(a.RTL, {}),
				u.jsx(t.MenuHeading, { children: "Performance" }),
				u.jsx(t.ActionMenuItem, {
					optionId: "wds-icon-benchmark",
					testid: "li-wds-icon-benchmark",
					detailLeft: u.jsx(o("WAWebImageIcon.react").ImageIcon, {
						height: 24,
						width: 24
					}),
					onSelect: _,
					primary: "WDS Icon Benchmark",
					searchCriteria: "WDS Icon Benchmark"
				}),
				u.jsx(t.ActionMenuItem, {
					optionId: "web-icon-benchmark",
					testid: "li-web-icon-benchmark",
					detailLeft: u.jsx(o("WAWebImageIcon.react").ImageIcon, {
						height: 24,
						width: 24
					}),
					onSelect: p,
					primary: "Web Icon Benchmark",
					searchCriteria: "Web Icon Benchmark"
				}),
				u.jsx(t.ActionMenuItem, {
					optionId: "msg-wrapper-benchmark",
					testid: "li-msg-wrapper-benchmark",
					detailLeft: u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {}),
					onSelect: f,
					primary: "Msg Wrapper Benchmark",
					searchCriteria: "Msg Wrapper Benchmark"
				}),
				u.jsx(t.ActionMenuItem, {
					optionId: "stats",
					testid: "li-stats",
					detailLeft: u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {}),
					onSelect: m,
					primary: "Model Stats",
					searchCriteria: "Model Stats"
				}),
				o("WAWebVoipGatingUtils").isCallingEnabled() ? u.jsxs(u.Fragment, { children: [
					u.jsx(o("WAWebMenuItems.react").MenuHeading, { children: "VoIP" }),
					u.jsx(o("WAWebDeveloperMenuPromotedDebugCommands.react").CpuPressureSlider, {}),
					u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
						optionId: "simulateNativeANR",
						testid: "li-simulateNativeANR",
						detailLeft: u.jsx(o("WAWebRecalledIcon.react").RecalledIcon, {}),
						onSelect: k,
						primary: "Simulate Native ANR",
						searchCriteria: "Simulate Native ANR"
					}),
					u.jsx(o("WAWebDeveloperMenuPromotedDebugCommands.react").SimulateWebAnr, {}),
					u.jsx(o("WAWebDeveloperMenuPromotedDebugCommands.react").VoipDebugInfo, {}),
					u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
						optionId: "voipUiDebug",
						testid: "li-voipUiDebug",
						detailLeft: u.jsx(r("WDSIconIcAddCall.react"), {}),
						onSelect: T,
						primary: "VoIP UI Debug",
						searchCriteria: "VoIP UI Debug"
					}),
					u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
						optionId: "voipWasm",
						testid: "li-voipWasm",
						detailLeft: u.jsx(r("WDSIconIcAddCall.react"), {}),
						onSelect: D,
						primary: "VoIP WASM Samples",
						searchCriteria: "VoIP WASM Samples"
					})
				] }) : null
			]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onABProps, l = a.onBack, s = a.onCancel, d = a.onDebugCommands, m = a.onGroupABProps, p = a.onMetaConfig, _ = a.onNuxManager, f = a.onQuickPromotionsManager, g = a.onSimulateNativeANR, h = a.onTeeDebugInspector, y = a.onVoipUiDebug, C = a.onVoipWasmSamples, b = a.onWasaHatchDebug;
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "settings",
			testid: "developer-settings-drawer",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: "Developer",
				onBack: l,
				onCancel: s,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(c, {
				onABProps: i,
				onGroupABProps: m,
				onMetaConfig: p,
				onNuxManager: _,
				onQuickPromotionsManager: f,
				onDebugCommands: d,
				onTeeDebugInspector: h,
				onVoipUiDebug: y,
				onVoipWasmSamples: C,
				onSimulateNativeANR: g,
				onWasaHatchDebug: b
			}) })]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
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
