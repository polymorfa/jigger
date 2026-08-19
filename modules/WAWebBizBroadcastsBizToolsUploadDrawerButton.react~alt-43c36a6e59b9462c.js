__d("WAWebBizBroadcastsBizToolsUploadDrawerButton.react", [
	"fbt",
	"WAWebBizBroadcastsManageAudiencePanelLoadable",
	"WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable",
	"WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable",
	"WAWebBizBroadcastsUploadModalLoadable.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebDrawerButton.react",
	"WAWebDrawerManager",
	"WAWebKeyboardTabUtils",
	"WAWebModalManager",
	"WAWebNux",
	"WAWebWamEnumEntryPoint",
	"WDSIconIcUpload.react",
	"react",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = { icon: {
		color: "xhd7mum",
		$$css: !0
	} }, m = 1;
	function p(e, t, n) {
		o("WAWebDrawerManager").DrawerManager.openDrawerMid(u.jsx(o("WAWebBizBroadcastsManageAudiencePanelLoadable").WAWebBizBroadcastsManageAudiencePanelLoadable, {
			entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
			importLoggingContext: n,
			validContactsData: e,
			errorList: t
		}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
	}
	function _(e, t) {
		o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(u.jsx(o("WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable").WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable, {
			audiences: e,
			entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
			importLoggingContext: t,
			onClose: function() {
				return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
			},
			onCreateAudiencesSuccess: function() {
				return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
			}
		}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
	}
	function f(e, t) {
		var n = e.length === m ? e[0] : null;
		if (n != null) {
			var r;
			p(n.contacts, (r = n.errorList) != null ? r : [], t);
			return;
		}
		_(e, t);
	}
	function g() {
		var e = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_BROADCAST_AUDIENCE_UPLOAD), t = e[0], n = e[1];
		c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceViewed(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME);
		}, []);
		var a = function() {
			t && n(), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebBizBroadcastsUploadModalLoadable.react").WAWebBizBroadcastsUploadModalLoadable, {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
				onCancel: function(t, n) {
					n === void 0 && (n = !1), o("WAWebModalManager").ModalManager.close(), n !== !0 && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME);
				},
				onUploadSuccess: function(t, n, r, a, i) {
					if (r != null) {
						o("WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable").openSmartCSVImportSetupFlowLoadable({
							contacts: t,
							context: r,
							entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
							errorList: n,
							importLoggingContext: a,
							maxContactsPerAudience: i,
							onReviewAudience: function(t, n) {
								return p(t, n, a);
							},
							onReviewAudiences: function(t) {
								return f(t, a);
							}
						});
						return;
					}
					p(t, n, a);
				},
				showModalImage: !0
			}));
		};
		return u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "biz-tools-broadcasts",
			theme: "biz-tools",
			divider: !1,
			secondaryChildren: s._(
				/*BTDS*/
				""
			),
			icon: u.jsx(r("WDSIconIcUpload.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.icon
			}),
			detail: t ? u.jsx("div", { className: "x1qe8gl4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xdk7pt xqf2s3x x1xc55vz" }) : null,
			active: !1,
			onClick: a,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
