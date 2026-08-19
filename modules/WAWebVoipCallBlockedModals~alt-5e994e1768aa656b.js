__d("WAWebVoipCallBlockedModals", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebCoreActionsODS",
	"WAWebMiscBrowserUtils",
	"WAWebModalManager",
	"WAWebVoipBackendLoadable",
	"WAWebVoipGatingUtils",
	"WAWebVoipInitEventEmitter",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("WAWebVoipGatingUtils").getUnsupportedBrowserReason();
		if (e == null) return !1;
		var t = o("WAWebVoipGatingUtils").getCrossOriginIsolatedState();
		e: {
			if (e === "missing_shared_array_buffer") {
				o("WAWebCoreActionsODS").logCallBrowserUnsupportedMissingSAB(), o("WAWebCoreActionsODS").logCallBrowserCapabilityMissingSAB(t);
				break e;
			}
			if (e === "missing_atomics") {
				o("WAWebCoreActionsODS").logCallBrowserUnsupportedMissingAtomics(), o("WAWebCoreActionsODS").logCallBrowserCapabilityMissingAtomics(t);
				break e;
			}
			if (e === "missing_rtc_peer_connection") {
				o("WAWebCoreActionsODS").logCallBrowserUnsupportedMissingRTC(), o("WAWebCoreActionsODS").logCallBrowserCapabilityMissingRTC(t);
				break e;
			}
			if (e === "broken_voip_wasm") {
				o("WAWebCoreActionsODS").logCallBrowserUnsupportedBrokenWasm(), o("WAWebCoreActionsODS").logCallBrowserCapabilityBrokenWasm(t);
				break e;
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		}
		return o("WAWebModalManager").ModalManager.open(e === "broken_voip_wasm" ? u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "voip-start-call"
			},
			onOK: o("WAWebModalManager").closeModalManager,
			title: s._(
				/*BTDS*/
				""
			),
			children: s._(
				/*BTDS*/
				""
			)
		}) : u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "voip-start-call"
			},
			onOK: o("WAWebModalManager").closeModalManager,
			title: s._(
				/*BTDS*/
				""
			),
			children: s._(
				/*BTDS*/
				""
			)
		})), !0;
	}
	async function d() {
		if (!o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getDidVoipInitError()) return !1;
		var e = await o("WAWebVoipBackendLoadable").requireVoipJsBackend(), t = e.WAWebVoipInit;
		return await t.retryWAWebVoipInitAfterFailure() ? !1 : (m(), !0);
	}
	function m() {
		o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "voip-start-call"
			},
			onOK: o("WAWebModalManager").closeModalManager,
			title: s._(
				/*BTDS*/
				""
			),
			children: s._(
				/*BTDS*/
				""
			)
		}));
	}
	function p() {
		o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "voip_init_unavailable_reload_modal",
			tsNavigationData: {
				surface: "unknown",
				viewName: "voip-start-call"
			},
			cancelText: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			onOK: function() {
				o("WAWebModalManager").closeModalManager(), r("WAWebMiscBrowserUtils").hardRefresh();
			},
			onOverlayClick: o("WAWebModalManager").closeModalManager,
			title: s._(
				/*BTDS*/
				""
			),
			children: s._(
				/*BTDS*/
				""
			)
		}));
	}
	async function _() {
		return c() ? !0 : d();
	}
	l.showCouldNotPlaceCallModal = m, l.showVoipInitUnavailableModal = p, l.showCallBlockedModalIfNeeded = _;
}), 226);
