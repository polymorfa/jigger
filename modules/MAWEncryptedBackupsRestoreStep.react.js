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
	"react-compiler-runtime",
	"requireDeferred",
	"requireDeferredForDisplay",
	"usePushFDSMultiStepDialogEntryPointPage"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = r("deferredLoadComponent")(r("requireDeferred")("MWChatEncryptedBackupsAccessCodeInputStep.react").__setRef("MAWEncryptedBackupsRestoreStep.react")), f = r("deferredLoadComponent")(r("requireDeferredForDisplay")("MWChatEncryptedBackupsPinCodeRestoreStep.react").__setRef("MAWEncryptedBackupsRestoreStep.react")), g = r("deferredLoadComponent")(r("requireDeferred")("MWChatEncryptedBackupsKVSOnlyRestoreStep.react").__setRef("MAWEncryptedBackupsRestoreStep.react"));
	function h(e) {
		var t = o("react-compiler-runtime").c(21), n = e.offlineDevicesCount, a = e.onClose, i = e.onComplete, l = e.onForgotRC, s = e.onSkip, c = e.pushPage, d = e.shouldShowForgotButton, m = e.source, p = o("MWEBVirtualDevicesContext.react").useMWEBVirtualDevices(), f = p.virtualDeviceInfo;
		if (f.doesUserHaveOtcEligibleDevices) {
			var h = m === r("MWChatEncryptedBackupsQPLSource.enum").INBOX_INTERSTITIAL_SOFTBLOCK;
			if (h) {
				var y;
				return t[0] !== a || t[1] !== i || t[2] !== s || t[3] !== c ? (y = u.jsx(r("MWEBRestoreOTCFirstDialogStepDeferred.react"), {
					onCloseDialog: a,
					onComplete: i,
					onSkip: s,
					pushPage: c
				}), t[0] = a, t[1] = i, t[2] = s, t[3] = c, t[4] = y) : y = t[4], y;
			}
			var C;
			return t[5] !== a || t[6] !== i || t[7] !== s || t[8] !== c ? (C = u.jsx(r("MWEBOTCDialogStepDeferred.react"), {
				onClose: a,
				onComplete: i,
				onSkip: s,
				pushPage: c
			}), t[5] = a, t[6] = i, t[7] = s, t[8] = c, t[9] = C) : C = t[9], C;
		}
		if (n >= 1) {
			var b;
			return t[10] !== a || t[11] !== i || t[12] !== l || t[13] !== s || t[14] !== c || t[15] !== d ? (b = u.jsx(_, {
				onClose: a,
				onComplete: i,
				onForgotRC: l,
				onSkip: s,
				pushPage: c,
				shouldShowForgotButton: d
			}), t[10] = a, t[11] = i, t[12] = l, t[13] = s, t[14] = c, t[15] = d, t[16] = b) : b = t[16], b;
		}
		var v;
		return t[17] !== a || t[18] !== i || t[19] !== c ? (v = u.jsx(g, {
			onClose: a,
			onComplete: i,
			pushPage: c
		}), t[17] = a, t[18] = i, t[19] = c, t[20] = v) : v = t[20], v;
	}
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
