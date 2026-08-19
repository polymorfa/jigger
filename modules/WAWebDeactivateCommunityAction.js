__d("WAWebDeactivateCommunityAction", [
	"fbt",
	"WAFilteredCatch",
	"WALogger",
	"WAWebActionToast.react",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebBackendErrors",
	"WAWebCmd",
	"WAWebCommunityFlowLoadable",
	"WAWebConfirmPopup.react",
	"WAWebDrawerManager",
	"WAWebFbtCommon",
	"WAWebGroupCommunityJob",
	"WAWebModalManager",
	"WAWebNavBarTypes",
	"WAWebNetworkStatus",
	"WAWebToast.react",
	"WAWebToastManager",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(e) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			if (!r("WAWebNetworkStatus").online) {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
				return;
			}
			var a = t.id, i = o("WAWebGroupCommunityJob").sendDeactivateCommunity({ parentGroupId: a }), l = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					return yield i, new (o("WAWebActionToast.react")).ActionType(s._(
						/*BTDS*/
						"",
						[s._param("community-name", t.formattedTitle)]
					));
				} catch (t) {
					o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(t) {
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Community deactivation failed"]))).sendLogs("community-deactivation-failed");
					})(t);
				}
			})(), u = new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				""
			));
			o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
				initialAction: u,
				pendingAction: l
			}));
			try {
				yield i, p();
			} catch (e) {
				o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
					e.status === 401 ? o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
						tsNavigationData: {
							surface: "unknown",
							viewName: "deactivate-community"
						},
						onOK: o("WAWebModalManager").closeModalManager,
						children: s._(
							/*BTDS*/
							""
						)
					})) : e.status === 404 ? (p(), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }))) : e.status === 500 && o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
						tsNavigationData: {
							surface: "unknown",
							viewName: "deactivate-community"
						},
						okText: r("WAWebFbtCommon")("Try again"),
						onOK: function() {
							o("WAWebModalManager").ModalManager.close(), d(t);
						},
						onCancel: o("WAWebModalManager").closeModalManager,
						children: s._(
							/*BTDS*/
							""
						)
					}));
				})(e);
			}
		}), m.apply(this, arguments);
	}
	function p() {
		o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "community_flow" } : c.jsx(o("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {}), { disableRotateFocus: !0 }), o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Communities);
	}
	l.default = d;
}), 226);
