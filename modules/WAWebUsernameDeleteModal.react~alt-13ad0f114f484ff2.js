__d("WAWebUsernameDeleteModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebSetContactUsernameAction",
	"WAWebSetUsernameKeyAction",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUsernameCreationActionLogger",
	"WAWebUsernameErrorUtils",
	"WAWebWamEnumUsernameCreationActionName",
	"WAWebWamEnumUsernameCreationCurrentScreen",
	"WAWebWamEnumUsernameCreationFlowType",
	"WAWebWarningOutlineIcon.react",
	"WDSText.react",
	"react",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = {
		criticalColor: {
			color: "x30a034",
			$$css: !0
		},
		marginVert24: {
			marginTop: "x9u28bd",
			marginBottom: "x14mdic9",
			$$css: !0
		}
	}, m = function() {
		o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
			usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_DELETE_DIALOG,
			usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.USERNAME_DELETE_FAILURE,
			usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.CREATION
		});
	};
	function p(e) {
		var t = e.onDeleteUsername, n = c(!1), a = n[0], i = n[1], l = r("useWAWebUnmountSignal")(), p = s._(
			/*BTDS*/
			""
		), _ = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getFaqUrl(),
			children: r("WAWebFbtCommon")("Learn more")
		}), f = s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", _)]
		), g = s._(
			/*BTDS*/
			""
		), h = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: [u.jsx(o("WAWebFlex.react").FlexItem, {
				align: "center",
				marginBottom: 20,
				children: u.jsx(o("WAWebWarningOutlineIcon.react").WarningOutlineIcon, { iconXstyle: d.criticalColor })
			}), u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				textAlign: "center",
				type: "Headline2",
				children: g
			})]
		}), y = s._(
			/*BTDS*/
			""
		), C = async function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDIT,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_DELETE_USERNAME_CONFIRM,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.CREATION
			}), i(!0), await o("WAWebSetUsernameKeyAction").setMyUsernameKey(null), await o("WAWebSetContactUsernameAction").setMyUsername().then(function(e) {
				l.aborted || (e ? (o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
					usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDIT,
					usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.USERNAME_DELETE_SUCCESS,
					usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.CREATION
				}), t && t(), o("WAWebModalManager").ModalManager.close(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: y }))) : m());
			}).catch(function(e) {
				l.aborted || (m(), o("WAWebUsernameErrorUtils").handleErrorBasedOnErrorCode(e), o("WAWebModalManager").ModalManager.close());
			}).finally(function() {
				l.aborted || i(!1);
			});
		}, b = function() {
			o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log({
				usernameCreationCurrentScreen: o("WAWebWamEnumUsernameCreationCurrentScreen").USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDIT,
				usernameCreationActionName: o("WAWebWamEnumUsernameCreationActionName").USERNAME_CREATION_ACTION_NAME.CLICK_DELETE_USERNAME_CANCEL,
				usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE.CREATION
			}), o("WAWebModalManager").ModalManager.close();
		};
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "username-delete"
			},
			okButtonType: "warning",
			okDisabled: a,
			okSpinner: a,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: b,
			onOK: C,
			testid: "username-delete-modal",
			title: h,
			children: [u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				xstyle: d.marginVert24,
				children: p
			}), u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: f
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
