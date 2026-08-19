__d("WAWebVoipCallBlockedModals", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebCoreActionsODS",
	"WAWebMiscBrowserUtils",
	"WAWebModalManager",
	"WAWebVoipBackendLoadable",
	"WAWebVoipGatingUtils",
	"WAWebVoipInitEventEmitter",
	"asyncToGeneratorRuntime",
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
	function d() {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (!o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getDidVoipInitError()) return !1;
			var e = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend(), t = e.WAWebVoipInit;
			return (yield t.retryWAWebVoipInitAfterFailure()) ? !1 : (p(), !0);
		}), m.apply(this, arguments);
	}
	function p() {
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
	function _() {
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
	function f() {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			return c() ? !0 : d();
		}), g.apply(this, arguments);
	}
	l.showCouldNotPlaceCallModal = p, l.showVoipInitUnavailableModal = _, l.showCallBlockedModalIfNeeded = f;
}), 226);
