__d("WAWebUsernameKeyDeleteModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebDrawerManager",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebSetUsernameKeyAction",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUsernameCreationActionLogger",
	"WAWebUsernameManagementDrawer.react",
	"WAWebWamEnumUsernameCreationActionName",
	"WAWebWamEnumUsernameCreationCurrentScreen",
	"WAWebWamEnumUsernameCreationFlowType",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = {
		marginTop18: {
			marginTop: "xhrpt6u",
			$$css: !0
		},
		marginInlineStart18: {
			marginInlineStart: "xnkmj2t",
			$$css: !0
		}
	}, _ = function() {
		o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
			usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_DELETE_DIALOG,
			usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_DELETE_PIN_CANCEL,
			usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
		}), o("WAWebModalManager").ModalManager.close();
	};
	function f(e) {
		var t = e.contactId, a = e.onSuccessNavigate, i = e.username, l = m(!1), c = l[0], f = l[1], g = r("useWAWebUnmountSignal")();
		d(function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logView(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_DELETE_DIALOG, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT);
		}, []);
		var h = r("WAWebFbtCommon")("Cancel"), y = s._(
			/*BTDS*/
			""
		), C = s._(
			/*BTDS*/
			""
		), b = u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }), v = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
					usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_DELETE_DIALOG,
					usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_DELETE_PIN_CONFIRM,
					usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
				}), f(!0), yield o("WAWebSetUsernameKeyAction").setMyUsernameKey(null).then(function(e) {
					g.aborted || e && (a != null ? a() : o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebUsernameManagementDrawer.react"), {
						contactId: t,
						username: i
					})), o("WAWebModalManager").ModalManager.close(), o("WAWebToastManager").ToastManager.open(b), o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
						usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_MANAGE,
						usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.USERNAME_PIN_DELETE_SUCCESS,
						usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
					}));
				}).catch(function() {
					g.aborted || (o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
						usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_MANAGE,
						usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.USERNAME_PIN_DELETE_FAILURE,
						usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
					}), o("WAWebModalManager").ModalManager.close(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
						msg: s._(
							/*BTDS*/
							""
						),
						action: {
							actionText: r("WAWebFbtCommon")("Try again"),
							onAction: function() {
								v();
							}
						}
					})));
				}).finally(function() {
					g.aborted || f(!1);
				});
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okText: y,
			okSpinner: c,
			okDisabled: c,
			onOK: v,
			cancelText: h,
			onCancel: _,
			okButtonType: "warning",
			children: u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					xstyle: [p.marginTop18, p.marginInlineStart18],
					children: C
				})
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
