__d("MWPComposerDraftMessages", [
	"FBLogger",
	"I64",
	"LSMessagingThreadTypeUtil",
	"MAWFindFirstUrl",
	"MWHasLinksUtil",
	"cr:5710",
	"uuidv4"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = new Map(), u = void 0;
	function c() {
		return Array.from(s.values()).some(function(e) {
			return e.messageText.trim() !== "";
		});
	}
	function d(e, t) {
		return s.get(y(e, t));
	}
	function m() {
		n("cr:5710") == null || u != null || (u = n("cr:5710").onBeforeUnload(function() {
			if (c()) return "You have pending messages. Please wait for them to be sent before closing the window.";
		}));
	}
	function p(e) {
		var t = e.deleteLinkPreviewXMATableData, n = e.fetchAndWriteLinkPreviewXMA, a = e.message, i = e.subthreadParentMessageId, l = e.threadKey, c = e.threadType;
		if (a == null) {
			if (s.delete(y(l, i)), s.size === 0) {
				var d;
				(d = u) == null || d.remove(), u = void 0;
			}
			return;
		}
		if (s.has(y(l, i))) _(l, a, i);
		else {
			var p = r("uuidv4")();
			s.set(y(l, i), {
				id: p,
				linkPreviewAbortToken: null,
				linkPreviewURL: null,
				messageText: a
			});
		}
		var g = c != null && o("LSMessagingThreadTypeUtil").isArmadilloSecure(c);
		g && f(l, a, n, t, i), m();
	}
	function _(e, t, n) {
		var o = d(e, n);
		if (o == null) {
			r("FBLogger")("messenger_web").mustfix("currentDraft was null in updateDraftMessageText");
			return;
		}
		s.set(y(e, n), babelHelpers.extends({}, o, { messageText: t }));
	}
	function f(e, t, n, a, i) {
		var l, s, u, c = d(e, i);
		if (c == null) {
			r("FBLogger")("messenger_web_sharing").mustfix("currentDraft was null in updateDraftMessageURL");
			return;
		}
		var m = c == null ? void 0 : c.linkPreviewURL, p = c == null ? void 0 : c.linkPreviewAbortToken, _ = (l = o("MAWFindFirstUrl").findFirstUrl(t)) != null ? l : [], f = o("MWHasLinksUtil").getHasLinks(t), y = f && (s = (u = _[0]) == null ? void 0 : u.entity.url) != null ? s : null;
		if (m !== y) {
			if (y == null) {
				a && a({ draftId: c.id }), p == null || p.abort(), g({
					linkPreviewURL: null,
					subthreadParentMessageId: i,
					threadKey: e
				}), h({
					linkPreviewAbortToken: null,
					subthreadParentMessageId: i,
					threadKey: e
				});
				return;
			}
			g({
				linkPreviewURL: y,
				subthreadParentMessageId: i,
				threadKey: e
			});
			var C = n && n({
				draftId: c.id,
				urls: _
			}) || null;
			h({
				linkPreviewAbortToken: C,
				subthreadParentMessageId: i,
				threadKey: e
			});
		}
	}
	function g(e) {
		var t = e.linkPreviewURL, n = e.subthreadParentMessageId, o = e.threadKey, a = d(o, n);
		if (a == null) {
			r("FBLogger")("messenger_web").mustfix("currentDraft was null in setDraftMessageURL");
			return;
		}
		s.set(y(o, n), babelHelpers.extends({}, a, { linkPreviewURL: t }));
	}
	function h(e) {
		var t = e.linkPreviewAbortToken, n = e.subthreadParentMessageId, o = e.threadKey, a = d(o, n);
		if (a == null) {
			r("FBLogger")("messenger_web").mustfix("currentDraft was null in setDraftMessageURL");
			return;
		}
		s.set(y(o, n), babelHelpers.extends({}, a, { linkPreviewAbortToken: t }));
	}
	function y(t, n) {
		return n != null && n !== "" ? n : (e || (e = o("I64"))).to_string(t);
	}
	l.getDraftMessage = d, l.updateDraftMessage = p, l.getNonEmptyDraftMessageKey = y;
}), 98);
