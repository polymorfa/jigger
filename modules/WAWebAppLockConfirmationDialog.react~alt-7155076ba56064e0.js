__d("WAWebAppLockConfirmationDialog.react", [
	"fbt",
	"$InternalEnum",
	"WAWebConfirmPopup.react",
	"WAWebDialogEventLogger",
	"WAWebFlexItem.react",
	"WAWebLockScreenResolver",
	"WAWebModalManager",
	"WAWebWamEnumDialogNameType",
	"WDSText.react",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useRef, d = n("$InternalEnum")({
		DONE: "done",
		LOCK: "lock"
	}), m = { descriptionSpace: {
		marginBottom: "x1ua1l7f",
		$$css: !0
	} };
	function p() {
		var e = c(!1), t = function() {
			e.current = !0, r("WAWebDialogEventLogger")({
				dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.APP_LOCK_ENABLED_CONFIRM,
				source: d.LOCK
			}), o("WAWebModalManager").ModalManager.close(), o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow();
		};
		return o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			e.current || r("WAWebDialogEventLogger")({
				dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.APP_LOCK_ENABLED_CONFIRM,
				source: d.DONE
			});
		}), u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "app-lock-confirmation"
			},
			title: s._(
				/*BTDS*/
				""
			),
			onOK: t,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: s._(
				/*BTDS*/
				""
			),
			testid: "app-lock-confirmation-dialog",
			children: [u.jsx(r("WAWebFlexItem.react"), {
				xstyle: m.descriptionSpace,
				children: u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
