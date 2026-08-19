__d("WAWebFileSaverDownloadData", [
	"WAAbortError",
	"WALogger",
	"WAWebFilenameManager",
	"WAWebMediaInMemoryBlobCache",
	"WAWebMediaOpaqueData",
	"WAWebMessageAssociationUIUtils",
	"WAWebMsgType",
	"WAWebWamEnumWebcRmrReasonCode",
	"WAWebZipUtils",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s;
	async function u(t, n) {
		n === void 0 && (n = !1);
		var a = Array.isArray(t) ? t : [t];
		try {
			var i = await Promise.all(a.map(function(e) {
				return d(e, n);
			}));
			if (i.length > 1) {
				var l = await o("WAWebZipUtils").zipFiles(i);
				return {
					blob: l,
					name: o("WAWebFilenameManager").getDefaultName({
						t: Math.round(Date.now() / 1e3),
						type: "unknown",
						mimetype: "application/zip",
						isVcardOverMmsDocument: !1,
						filename: "",
						vcardList: []
					})
				};
			}
			return i[0];
		} catch (t) {
			var s = r("getErrorSafe")(t);
			throw s.name !== o("WAAbortError").ABORT_ERROR && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to get msg download data"]))).catching(s).sendLogs("msg-download-data-failed"), s;
		}
	}
	function c(e) {
		if (e.mediaData == null) return !1;
		var t = e.mediaData, n = t.filehash, a = t.mediaBlob;
		return a instanceof r("WAWebMediaOpaqueData") ? !0 : n == null ? !1 : o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(n) != null;
	}
	async function d(e, t) {
		t === void 0 && (t = !1);
		var n = "text/vcard";
		if (e.type === o("WAWebMsgType").MSG_TYPE.VCARD) return {
			name: o("WAWebFilenameManager").getDefaultName(e),
			blob: new Blob([e.body], { type: n })
		};
		if (e.type === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD) return {
			name: o("WAWebFilenameManager").getDefaultName(e),
			blob: new Blob([e.vcardList.map(function(e) {
				return e.vcard;
			}).join(`
`)], { type: n })
		};
		if (e.type === o("WAWebMsgType").MSG_TYPE.ALBUM) {
			var a = o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(e.id);
			if (a.length > 0) {
				var i = await Promise.all(a.map(function(e) {
					return d(e, t);
				}));
				if (i.length === 1) return i[0];
				var l = await o("WAWebZipUtils").zipFiles(i);
				return {
					blob: l,
					name: o("WAWebFilenameManager").getDefaultName({
						t: Math.round(Date.now() / 1e3),
						type: "unknown",
						mimetype: "application/zip",
						isVcardOverMmsDocument: !1,
						filename: "",
						vcardList: []
					})
				};
			}
			throw o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[debug] getMsgDownloadData Album message has no associated child messages"]))).sendLogs("msg-download-data-almum-no-children"), r("err")("Album message has no associated child messages");
		}
		var u = m(e);
		if (u) return u;
		await e.downloadMedia({
			downloadEvenIfExpensive: !0,
			rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.DOCUMENT_DOWNLOAD,
			isUserInitiated: !0,
			shouldThrowAbortError: t
		});
		var c = m(e);
		if (c) return c;
		throw r("err")("Unable to download because blob cannot be found");
	}
	function m(e) {
		if (e.mediaData == null) return null;
		var t = e.mediaData, n = t.filehash, a = t.mediaBlob, i = t.renderableUrl;
		if (a instanceof r("WAWebMediaOpaqueData")) return {
			name: o("WAWebFilenameManager").getDefaultName(e),
			url: i,
			blob: a.forceToBlob()
		};
		var l = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(n);
		return l ? {
			blob: l,
			name: o("WAWebFilenameManager").getDefaultName(e),
			url: o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.getOrCreateURL(n)
		} : null;
	}
	l.getMultiMsgDownloadData = u, l.isMsgMediaAvailableLocally = c, l.getMsgDownloadData = d;
}), 98);
