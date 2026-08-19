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
	"react-compiler-runtime",
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
		var e = o("react-compiler-runtime").c(12), t = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_BROADCAST_AUDIENCE_UPLOAD), n = t[0], a = t[1], i;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [], e[0] = i) : i = e[0], c(C, i);
		var l;
		e[1] !== a || e[2] !== n ? (l = function() {
			n && a(), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebBizBroadcastsUploadModalLoadable.react").WAWebBizBroadcastsUploadModalLoadable, {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
				onCancel: y,
				onUploadSuccess: h,
				showModalImage: !0
			}));
		}, e[1] = a, e[2] = n, e[3] = l) : l = e[3];
		var m = l, p, _;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), _ = u.jsx(r("WDSIconIcUpload.react"), {
			width: 24,
			height: 24,
			iconXstyle: d.icon
		}), e[4] = p, e[5] = _) : (p = e[4], _ = e[5]);
		var f;
		e[6] !== n ? (f = n ? u.jsx("div", { className: "x1qe8gl4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xdk7pt xqf2s3x x1xc55vz" }) : null, e[6] = n, e[7] = f) : f = e[7];
		var g;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), e[8] = g) : g = e[8];
		var b;
		return e[9] !== m || e[10] !== f ? (b = u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "biz-tools-broadcasts",
			theme: "biz-tools",
			divider: !1,
			secondaryChildren: p,
			icon: _,
			detail: f,
			active: !1,
			onClick: m,
			children: g
		}), e[9] = m, e[10] = f, e[11] = b) : b = e[11], b;
	}
	function h(e, t, n, r, a) {
		if (n != null) {
			o("WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable").openSmartCSVImportSetupFlowLoadable({
				contacts: e,
				context: n,
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
				errorList: t,
				importLoggingContext: r,
				maxContactsPerAudience: a,
				onReviewAudience: function(t, n) {
					return p(t, n, r);
				},
				onReviewAudiences: function(t) {
					return f(t, r);
				}
			});
			return;
		}
		p(e, t, r);
	}
	function y(e, t) {
		var n = t === void 0 ? !1 : t;
		o("WAWebModalManager").ModalManager.close(), n !== !0 && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME);
	}
	function C() {
		o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceViewed(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME);
	}
	l.default = g;
}), 226);
