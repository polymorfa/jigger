__d("MWPAttachmentDataContext", [
	"FBLogger",
	"I64",
	"ReQL",
	"ReQLSuspense",
	"react",
	"react-compiler-runtime",
	"useAttachmentData",
	"useAttachmentDataLS",
	"useReStore",
	"vulture"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = u || (u = o("react")), d = u, m = d.createContext, p = d.useContext, _ = m({
		attachmentCTAs: [],
		attachmentItems: [],
		attachments: []
	});
	function f(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, r = e.isSecureMessage, a = e.message, i = o("useAttachmentData").useAttachmentData(a, r), l;
		return t[0] !== i || t[1] !== n ? (l = c.jsx(_.Provider, {
			value: i,
			children: n
		}), t[0] = i, t[1] = n, t[2] = l) : l = t[2], l;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(3), n = e.attachmentData, a = e.children;
		r("vulture")("Vd0ufRFeRBscxrtfZrIewlD3ht4=");
		var i;
		return t[0] !== n || t[1] !== a ? (i = c.jsx(_.Provider, {
			value: n,
			children: a
		}), t[0] = n, t[1] = a, t[2] = i) : i = t[2], i;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, r = e.message, a = o("useAttachmentDataLS").useAttachmentDataLS(r), i;
		return t[0] !== a || t[1] !== n ? (i = c.jsx(_.Provider, {
			value: a,
			children: n
		}), t[0] = a, t[1] = n, t[2] = i) : i = t[2], i;
	}
	function y(e) {
		var t = p(_).attachments, n = C(e);
		return t.length === 0 && n.length > 0 ? (r("FBLogger")("messenger_web_media", "attachment_context_missing").info("MWPAttachmentContext is not set, failed to retrieve attachments from context, instead retrieved attachments directly from LSDB"), n) : t;
	}
	function C(t) {
		var n = o("react-compiler-runtime").c(10), a = (e || (e = r("useReStore")))(), l;
		n[0] !== a.tables.attachments || n[1] !== t.messageId || n[2] !== t.threadKey ? (l = function() {
			return o("ReQL").fromTableAscending(a.tables.attachments).getKeyRange(t.threadKey, t.messageId);
		}, n[0] = a.tables.attachments, n[1] = t.messageId, n[2] = t.threadKey, n[3] = l) : l = n[3];
		var s;
		n[4] !== a || n[5] !== t.messageId || n[6] !== t.threadKey ? (s = [
			a,
			t.messageId,
			t.threadKey
		], n[4] = a, n[5] = t.messageId, n[6] = t.threadKey, n[7] = s) : s = n[7];
		var u = o("ReQLSuspense").useArray(l, s, i.id + ":102"), c;
		return n[8] !== u ? (c = u.toSorted(b), n[8] = u, n[9] = c) : c = n[9], c;
	}
	function b(e, t) {
		return (s || (s = o("I64"))).compare(e.attachmentIndex, t.attachmentIndex);
	}
	function v(e) {
		var t, n, a, i = (s || (s = o("I64"))).to_int32(e.attachmentIndex), l = (t = p(_).attachmentCTAs[i]) != null ? t : {}, u = S(e), c = (l == null ? void 0 : l.defaultCta) == null && (u == null ? void 0 : u.defaultCta) != null || (l == null ? void 0 : l.attachmentCta1) == null && (u == null ? void 0 : u.attachmentCta1) != null;
		if (u != null && (n = u.attachmentCta1) != null && (n = n.type_) != null && n.includes("poll") || l != null && (a = l.attachmentCta1) != null && (a = a.type_) != null && a.includes("poll")) {
			var d, m, f = {
				attachmentIndex: i,
				contextCta1Type: (l == null || (d = l.attachmentCta1) == null ? void 0 : d.type_) || "null",
				contextHasCta1: (l == null ? void 0 : l.attachmentCta1) != null,
				contextHasDefaultCta: (l == null ? void 0 : l.defaultCta) != null,
				lsCta1Type: (u == null || (m = u.attachmentCta1) == null ? void 0 : m.type_) || "null",
				lsHasCta1: (u == null ? void 0 : u.attachmentCta1) != null,
				lsHasDefaultCta: (u == null ? void 0 : u.defaultCta) != null,
				messageId: e.messageId || "null",
				shouldUseFallback: c
			};
			r("FBLogger")("messenger_web_media", "poll_cta_debug").info("Poll CTA debug: %s", JSON.stringify(f));
		}
		return c ? (r("FBLogger")("messenger_web_media", "attachment_context_missing").info("MWPAttachmentContext is not set, failed to retrieve attachmentCTAs from context, instead retrieved attachmentCTAs directly from LSDB"), u) : l;
	}
	function S(t) {
		var n = (e || (e = r("useReStore")))(), o = {};
		return o.defaultCta = R(n, t == null ? void 0 : t.defaultCtaId), o.attachmentCta1 = R(n, t == null ? void 0 : t.attachmentCta1Id), o.attachmentCta2 = R(n, t == null ? void 0 : t.attachmentCta2Id), o.attachmentCta3 = R(n, t == null ? void 0 : t.attachmentCta3Id), o;
	}
	function R(e, t) {
		var n = o("react-compiler-runtime").c(4), r, a;
		return n[0] !== t || n[1] !== e ? (r = function() {
			return t != null ? o("ReQL").fromTableAscending(e.tables.attachment_ctas).getKeyRange(t) : o("ReQL").empty();
		}, a = [e, t], n[0] = t, n[1] = e, n[2] = r, n[3] = a) : (r = n[2], a = n[3]), o("ReQLSuspense").useFirst(r, a, i.id + ":179");
	}
	function L(e) {
		var t, n = (t = p(_).attachmentItems) != null ? t : [], o = E(e);
		return n.length === 0 && o.length > 0 ? (r("FBLogger")("messenger_web_media", "attachment_context_missing").info("MWPAttachmentContext is not set, failed to retrieve attachmentItems from context, instead retrieved attachmentItems directly from LSDB"), o) : n;
	}
	function E(t) {
		var n = o("react-compiler-runtime").c(6), a = (e || (e = r("useReStore")))(), l;
		n[0] !== t.attachmentFbid || n[1] !== a.tables.attachment_items ? (l = function() {
			var e = t.attachmentFbid;
			return o("ReQL").fromTableAscending(a.tables.attachment_items).getKeyRange(e);
		}, n[0] = t.attachmentFbid, n[1] = a.tables.attachment_items, n[2] = l) : l = n[2];
		var s;
		return n[3] !== t || n[4] !== a ? (s = [t, a], n[3] = t, n[4] = a, n[5] = s) : s = n[5], o("ReQLSuspense").useArray(l, s, i.id + ":209");
	}
	l.MWPAttachmentDataContext = _, l.MWPAttachmentDataContextProvider = f, l.MWPAttachmentDataContextProviderMAW = g, l.MWPAttachmentDataContextProviderLS = h, l.useMWPGetAttachments = y, l.useMWPGetAttachmentCTAs = v, l.useMWPGetAttachmentItems = L;
}), 98);
