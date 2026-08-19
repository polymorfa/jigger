__d("MAWSecureAttachmentGroupingUtils", [
	"I64",
	"LSIntEnum",
	"MAWSendFileMsgTypes",
	"MessagingAttachmentType",
	"uuidv4"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t) {
		var n = t.reduce(function(t, n) {
			return (e || (e = o("I64"))).equal(n.attachmentType, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE)) ? t.mediaStagingsImage.push(n) : t.mediaStagingsOther.push(n), t;
		}, {
			mediaStagingsImage: [],
			mediaStagingsOther: []
		}), a = n.mediaStagingsImage, i = n.mediaStagingsOther;
		return [].concat(a, i);
	}
	function c(t) {
		var n = new Map(), a = t.filter(function(t) {
			return (e || (e = o("I64"))).equal(t.attachmentType, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE));
		}), i = a.length;
		if (i > 1) {
			var l = r("uuidv4")();
			a.forEach(function(e, t) {
				n.set(o("MAWSendFileMsgTypes").toOfflineAttachmentIDFromString(e.offlineAttachmentId), {
					groupId: l,
					groupIndex: t,
					groupSize: i
				});
			});
		}
		return n;
	}
	function d(e) {
		var t = new Map(), n = e.length;
		if (n > 1) {
			var o = r("uuidv4")();
			e.forEach(function(e, r) {
				t.set(e, {
					groupId: o,
					groupIndex: r,
					groupSize: n
				});
			});
		}
		return t;
	}
	l.orderMediaStagingsForGrouping = u, l.generateMediaGroupMetadataForMediaStagings = c, l.generateMediaGroupMetadataForMessageIds = d;
}), 98);
