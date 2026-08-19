__d("WAWebClearChatDialogV2.react", [
	"fbt",
	"WAWebBoolFunc",
	"WAWebChatFlowTypes",
	"WAWebChatGetters",
	"WAWebFrontendChatGetters",
	"WAWebSendClearChatAction",
	"WAWebWamChatPSALogger",
	"WDSConfirmDialog.react",
	"WDSDialogBridge",
	"react",
	"useWAWebChatValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useState, p = 5, _ = 14;
	function f(e) {
		var t = e.chat, n = o("useWAWebChatValues").useChatValues(t.id, [o("WAWebFrontendChatGetters").getKind, o("WAWebChatGetters").getIsPSA]), a = n[0], i = n[1], l = m(o("WAWebBoolFunc").returnFalse), c = l[0], f = l[1], h = function() {
			if (t.pendingAction++, i) {
				var e = t.msgs.last();
				o("WAWebWamChatPSALogger").logChatPSARemove(e, p, _);
			}
			o("WAWebSendClearChatAction").sendClear(t, c).finally(function() {
				t.pendingAction--;
			}), o("WDSDialogBridge").closeWDSDialog();
		}, y = d(function() {
			return g(a);
		}, [a]);
		if (y == null) return null;
		var C = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSConfirmDialog.react"), {
			title: y,
			description: C,
			conditional: {
				title: s._(
					/*BTDS*/
					""
				),
				checked: c,
				onChange: function(t) {
					return f(t);
				}
			},
			confirmLabel: s._(
				/*BTDS*/
				""
			),
			destructive: !0,
			onConfirm: h,
			onDismiss: o("WDSDialogBridge").closeWDSDialog,
			open: !0
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		return e == null ? null : e === o("WAWebChatFlowTypes").ChatKindType.Group ? s._(
			/*BTDS*/
			""
		) : e === o("WAWebChatFlowTypes").ChatKindType.Chat ? s._(
			/*BTDS*/
			""
		) : e === o("WAWebChatFlowTypes").ChatKindType.Broadcast ? s._(
			/*BTDS*/
			""
		) : e === o("WAWebChatFlowTypes").ChatKindType.Newsletter || e === o("WAWebChatFlowTypes").ChatKindType.Community ? null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	l.default = f;
}), 226);
