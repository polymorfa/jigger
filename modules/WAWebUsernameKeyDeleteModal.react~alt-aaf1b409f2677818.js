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
		var t = e.contactId, n = e.onSuccessNavigate, a = e.username, i = m(!1), l = i[0], c = i[1], f = r("useWAWebUnmountSignal")();
		d(function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.logView(o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_DELETE_DIALOG, o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT);
		}, []);
		var g = r("WAWebFbtCommon")("Cancel"), h = s._(
			/*BTDS*/
			""
		), y = s._(
			/*BTDS*/
			""
		), C = u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }), b = async function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_DELETE_DIALOG,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_DELETE_PIN_CONFIRM,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
			}), c(!0), await o("WAWebSetUsernameKeyAction").setMyUsernameKey(null).then(function(e) {
				f.aborted || e && (n != null ? n() : o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebUsernameManagementDrawer.react"), {
					contactId: t,
					username: a
				})), o("WAWebModalManager").ModalManager.close(), o("WAWebToastManager").ToastManager.open(C), o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
					usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_MANAGE,
					usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.USERNAME_PIN_DELETE_SUCCESS,
					usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.MANAGEMENT
				}));
			}).catch(function() {
				f.aborted || (o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
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
							b();
						}
					}
				})));
			}).finally(function() {
				f.aborted || c(!1);
			});
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okText: h,
			okSpinner: l,
			okDisabled: l,
			onOK: b,
			cancelText: g,
			onCancel: _,
			okButtonType: "warning",
			children: u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					xstyle: [p.marginTop18, p.marginInlineStart18],
					children: y
				})
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
