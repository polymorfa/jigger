__d("WAWebBizAiSaveUtils", [
	"fbt",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebToast.react",
	"WAWebToastManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function d() {
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function m() {
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function p() {
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function _() {
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function f() {
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function g() {
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function h() {
		return !navigator.onLine;
	}
	function y(e, t) {
		if (h()) {
			o("WAWebBizAILargeScreensLogEvents").logApiSaveRuleResult(!1), c(), t.onError();
			return;
		}
		var n;
		try {
			n = e();
		} catch (e) {
			o("WAWebBizAILargeScreensLogEvents").logApiSaveRuleResult(!1), c(), t.onError();
			return;
		}
		n.then(function(e) {
			o("WAWebBizAILargeScreensLogEvents").logApiSaveRuleResult(e.isSuccess), e.isSuccess ? (g(), t.onSuccess()) : (c(), t.onError());
		}).catch(function() {
			o("WAWebBizAILargeScreensLogEvents").logApiSaveRuleResult(!1), c(), t.onError();
		});
	}
	l.showErrorToast = c, l.showDeletedToast = d, l.showDeletedFileToast = m, l.showDeletedAIKnowledgeToast = p, l.showDeletedProductInfoToast = _, l.showDeletedExampleResponseToast = f, l.showUpdatedToast = g, l.saveBizAISetting = y;
}), 226);
