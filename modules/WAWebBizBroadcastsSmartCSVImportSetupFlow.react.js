__d("WAWebBizBroadcastsSmartCSVImportSetupFlow.react", [
	"WAWebBizBroadcastsImportLoggingUtils",
	"WAWebBizBroadcastsRecipientUtils",
	"WAWebBizBroadcastsSegmentDetection",
	"WAWebBizBroadcastsSmartCSVImportConfirmColumnsScreen.react",
	"WAWebBizBroadcastsSmartCSVImportContactUtils",
	"WAWebBizBroadcastsSmartCSVImportSegmentAudienceScreen.react",
	"WAWebBizBroadcastsSmartCSVImportTypes",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebModalManager",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = babelHelpers.extends({}, e, { context: c(e.context, e.contacts) });
		if (t.context.columnSelectionSource === "user") {
			m(t, !1);
			return;
		}
		d(t);
	}
	function c(e, t) {
		return "segmentDetection" in e ? e : o("WAWebBizBroadcastsSmartCSVImportTypes").buildSmartCSVImportContext(e, t);
	}
	function d(e) {
		o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebBizBroadcastsSmartCSVImportConfirmColumnsScreen.react"), {
			contacts: e.contacts,
			context: e.context,
			onClose: function() {
				_(e, o("WAWebBizBroadcastsImportLoggingUtils").ImportAudienceCancelPhase.COLUMN_SELECTION), o("WAWebModalManager").closeModalManager();
			},
			onContinue: function(n) {
				var t = h(e, n);
				t != null && m(t, !0);
			}
		}));
	}
	function m(e, t) {
		var n, r = (n = e.maxContactsPerAudience) != null ? n : o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit(), a = e.context.segmentDetection.best != null || g(e) > r;
		if (a) {
			t && o("WAWebModalManager").ModalManager.close(), p(e, r);
			return;
		}
		t && o("WAWebModalManager").ModalManager.close(), e.onReviewAudience(e.contacts, e.errorList);
	}
	function p(e, t) {
		o("WAWebModalManager").ModalManager.open(s.jsx(f, {
			config: e,
			maxContactsPerAudience: t,
			onBack: function() {
				_(e, o("WAWebBizBroadcastsImportLoggingUtils").ImportAudienceCancelPhase.SEGMENTATION), d(e);
			}
		}));
	}
	function _(e, t) {
		e.entryPoint != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardCancelClicked(e.entryPoint, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceCancelLoggingExtraAttributes(t, e.importLoggingContext));
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(12), n = e.config, a = e.maxContactsPerAudience, i = e.onBack, l;
		t[0] !== n ? (l = function(t) {
			t.length !== 0 && (o("WAWebModalManager").ModalManager.close(), n.onReviewAudiences(t));
		}, t[0] = n, t[1] = l) : l = t[1];
		var u = l, c;
		t[2] !== n ? (c = function() {
			o("WAWebModalManager").ModalManager.close(), n.onReviewAudience(n.contacts, n.errorList);
		}, t[2] = n, t[3] = c) : c = t[3];
		var d;
		return t[4] !== n.contacts || t[5] !== n.context || t[6] !== n.errorList || t[7] !== u || t[8] !== a || t[9] !== i || t[10] !== c ? (d = s.jsx(r("WAWebBizBroadcastsSmartCSVImportSegmentAudienceScreen.react"), {
			contacts: n.contacts,
			context: n.context,
			errorList: n.errorList,
			maxContactsPerAudience: a,
			onBack: i,
			onContinue: u,
			onSkip: c
		}), t[4] = n.contacts, t[5] = n.context, t[6] = n.errorList, t[7] = u, t[8] = a, t[9] = i, t[10] = c, t[11] = d) : d = t[11], d;
	}
	function g(e) {
		var t, n;
		return (t = (n = e.context.rawRows) == null ? void 0 : n.length) != null ? t : e.contacts.length + e.errorList.length;
	}
	function h(e, t) {
		var n = y(e.context, t, e.contacts);
		if (n == null) return null;
		var r = C(e.contacts, e.context, t);
		return r == null ? null : babelHelpers.extends({}, e, {
			contacts: r,
			context: n
		});
	}
	function y(e, t, n) {
		var r = b(e, t.phoneHeader);
		if (r == null) return null;
		var a = b(e, t.nameHeader), i = [];
		return v(i, r), v(i, a), babelHelpers.extends({}, e, {
			detection: babelHelpers.extends({}, e.detection, {
				firstNameColumn: null,
				fullNameColumn: t.nameHeader == null || a == null ? null : {
					columnIndex: a,
					confidence: "high",
					header: t.nameHeader,
					matchedBy: "header"
				},
				lastNameColumn: null,
				phoneColumn: {
					columnIndex: r,
					confidence: "high",
					header: t.phoneHeader,
					matchedBy: "header"
				}
			}),
			segmentDetection: o("WAWebBizBroadcastsSegmentDetection").detectSegmentColumn(e.headerRow, e.rawRows != null ? o("WAWebBizBroadcastsSmartCSVImportTypes").buildSegmentRowsFromRawRows(e.headerRow, e.rawRows) : o("WAWebBizBroadcastsSmartCSVImportTypes").buildSegmentRows(e.headerRow, n), i)
		});
	}
	function C(e, t, n) {
		var r = [];
		for (var a of e) {
			var i = o("WAWebBizBroadcastsSmartCSVImportContactUtils").getValidSmartCSVImportPhoneValue(a, t, n.phoneHeader);
			if (i == null) return null;
			if (n.nameHeader == null) {
				r.push(babelHelpers.extends({}, a, { phone: i }));
				continue;
			}
			var l = o("WAWebBizBroadcastsSmartCSVImportContactUtils").readSmartCSVImportColumnValue(a, t, n.nameHeader);
			if (l == null) {
				r.push(babelHelpers.extends({}, a, { phone: i }));
				continue;
			}
			var s = S(l), u = s.firstName, c = s.lastName;
			r.push(babelHelpers.extends({}, a, {
				firstName: u,
				lastName: c,
				phone: i
			}));
		}
		return r;
	}
	function b(e, t) {
		if (t == null) return null;
		var n = e.headerRow.indexOf(t);
		return n === -1 ? null : n;
	}
	function v(e, t) {
		t == null || e.includes(t) || e.push(t);
	}
	function S(e) {
		var t, n = e.trim().split(/\s+/);
		return {
			firstName: (t = n[0]) != null ? t : "",
			lastName: n.slice(1).join(" ")
		};
	}
	l.openSmartCSVImportSetupFlow = u;
}), 98);
