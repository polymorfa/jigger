__d("WAWebFileSaver", [
	"WAAbortError",
	"WALogger",
	"WAPromiseDelays",
	"WAWebDataLink",
	"WAWebFileSaverDownloadData",
	"WAWebMediaGatingShouldClearDownloadedBlobs",
	"WAWebMiscBrowserUtils",
	"WAWebNoop",
	"getErrorSafe",
	"isStringNullOrEmpty"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = (function() {
		function t() {}
		var n = t.prototype;
		return n.downloadData = function(n, r, a) {
			var t = window.URL.createObjectURL(n), i = o("WAWebDataLink").createDataLink(t);
			return i.style.display = "none", i.download = "" + r + a, document.body && document.body.appendChild(i), i.click(), document.body && document.body.removeChild(i), o("WAPromiseDelays").delayMs(100).then(function() {
				window.URL.revokeObjectURL(i.href);
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[file-saver] downloadData: revokeObjectURL failed, ", ""])), t);
			}), Promise.resolve();
		}, n.downloadAsync = async function(t, n, a) {
			n === void 0 && (n = async function() {}), a === void 0 && (a = !1);
			var e = t;
			r("WAWebMiscBrowserUtils").startDownloading();
			try {
				var i, l, d, m = await o("WAWebFileSaverDownloadData").getMultiMsgDownloadData(e, a);
				if (r("isStringNullOrEmpty")(m.url) && !m.blob) {
					var p = e;
					o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed! ", ""])), Array.isArray(p) ? "download a zip file" : "download " + p.id.toString() + " type " + p.type + " with state " + (p.mediaData && p.mediaData.mediaStage)).sendLogs("download-url-creation-error");
				}
				var _ = (i = m.url) != null ? i : window.URL.createObjectURL(m.blob);
				[].concat(e).forEach(function(e) {
					if (r("WAWebMediaGatingShouldClearDownloadedBlobs")(e)) {
						var t;
						(t = e.mediaObject) == null || t.clearBlob({ reset: !0 });
					}
				});
				var f = o("WAWebDataLink").createDataLink(_);
				if (f.download = m.name, f.style.display = "none", Array.isArray(e) && e.length === 1 && (e = e[0]), !f.href) {
					var g = e;
					o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed! ", ""])), Array.isArray(g) ? "download a zip file" : "download " + g.id.toString() + " type " + g.type + " with state " + (g.mediaData && g.mediaData.mediaStage)).sendLogs("no-download-url");
				}
				await n(f.href, f.download, Array.isArray(e) ? "" : (l = (d = e.mediaData) == null ? void 0 : d.filehash) != null ? l : ""), document.body && document.body.appendChild(f), f.click(), document.body && document.body.removeChild(f), r("isStringNullOrEmpty")(m.url) && (await o("WAPromiseDelays").delayMs(100), window.URL.revokeObjectURL(f.href));
			} catch (e) {
				var h = r("getErrorSafe")(e);
				if (a && h.name === o("WAAbortError").ABORT_ERROR) throw h;
				o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Download failed, error: ", ""])), String(e));
			}
		}, n.initDownload = function(t, n) {
			n === void 0 && (n = async function() {}), this.downloadAsync(t, n).catch(r("WAWebNoop"));
		}, t;
	})(), m = new d();
	l.FileSaver = m;
}), 98);
