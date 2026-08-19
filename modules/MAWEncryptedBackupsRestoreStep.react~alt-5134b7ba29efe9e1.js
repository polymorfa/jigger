__d("MAWEncryptedBackupsRestoreStep.react", [
	"MWChatEncryptedBackupResetContext",
	"MWChatEncryptedBackupsQPLEvents",
	"MWChatEncryptedBackupsQPLSource.enum",
	"MWEBOTCDialogStepDeferred.react",
	"MWEBPinCodeUpsellDialog.entrypoint",
	"MWEBRestoreOTCFirstDialogStepDeferred.react",
	"MWEBVestaUserInfoContext.react",
	"MWEBVirtualDevicesContext.react",
	"QuickPerformanceLogger",
	"deferredLoadComponent",
	"react",
	"requireDeferred",
	"requireDeferredForDisplay",
	"usePushFDSMultiStepDialogEntryPointPage"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = r("deferredLoadComponent")(r("requireDeferred")("MWChatEncryptedBackupsAccessCodeInputStep.react").__setRef("MAWEncryptedBackupsRestoreStep.react")), f = r("deferredLoadComponent")(r("requireDeferredForDisplay")("MWChatEncryptedBackupsPinCodeRestoreStep.react").__setRef("MAWEncryptedBackupsRestoreStep.react")), g = r("deferredLoadComponent")(r("requireDeferred")("MWChatEncryptedBackupsKVSOnlyRestoreStep.react").__setRef("MAWEncryptedBackupsRestoreStep.react"));
	function h(e) {
		var t = e.offlineDevicesCount, n = e.onClose, a = e.onComplete, i = e.onForgotRC, l = e.onSkip, s = e.pushPage, c = e.shouldShowForgotButton, d = e.source, m = o("MWEBVirtualDevicesContext.react").useMWEBVirtualDevices(), p = m.virtualDeviceInfo;
		if (p.doesUserHaveOtcEligibleDevices) {
			var f = d === r("MWChatEncryptedBackupsQPLSource.enum").INBOX_INTERSTITIAL_SOFTBLOCK;
			return f ? u.jsx(r("MWEBRestoreOTCFirstDialogStepDeferred.react"), {
				onCloseDialog: n,
				onComplete: a,
				onSkip: l,
				pushPage: s
			}) : u.jsx(r("MWEBOTCDialogStepDeferred.react"), {
				onClose: n,
				onComplete: a,
				onSkip: l,
				pushPage: s
			});
		}
		return t >= 1 ? u.jsx(_, {
			onClose: n,
			onComplete: a,
			onForgotRC: i,
			onSkip: l,
			pushPage: s,
			shouldShowForgotButton: c
		}) : u.jsx(g, {
			onClose: n,
			onComplete: a,
			pushPage: s
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = t.clientID, a = t.isInactiveEBRestoreFlow, i = t.offlineDevicesCount, l = t.onClose, s = t.onComplete, c = t.onForgotRC, _ = t.onSkip, g = t.pushPage, y = t.shouldShowForgotButton, C = t.source, b = o("MWEBVestaUserInfoContext.react").useMWEBIsCooldownOrLockOutState();
		p(function() {
			b && (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(o("MWChatEncryptedBackupsQPLEvents").restoreQplEvent, { bool: { is_pin_locked_blocked: !0 } });
		}, [b]);
		var v = r("usePushFDSMultiStepDialogEntryPointPage")(r("MWEBPinCodeUpsellDialog.entrypoint"), {}), S = v[0], R = v[1], L = m(r("MWChatEncryptedBackupResetContext")), E = d(function() {
			var e;
			if (((e = L.isEncryptedBackupResetStartedRef) == null ? void 0 : e.current) === !0) {
				s();
				return;
			}
			R({
				onClose: _,
				onComplete: s
			}, { withoutBackButton: !0 });
		}, [
			L,
			s,
			_,
			R
		]);
		return b || n != null ? u.jsx(f, {
			isInactiveEBRestoreFlow: a,
			onClose: l,
			onComplete: s,
			onSkip: _,
			pushPage: g,
			shouldShowForgotButton: y
		}) : u.jsx(h, {
			offlineDevicesCount: i,
			onClose: l,
			onComplete: E,
			onForgotRC: c,
			onSkip: _,
			pushPage: g,
			shouldShowForgotButton: y,
			source: C
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 98);
