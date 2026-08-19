__d("useWAWebGdprDownload", [
	"fbt",
	"WALogger",
	"WAWebChannelDyiWamEvent",
	"WAWebDyiReportDownloadWamEvent",
	"WAWebFileSaver",
	"WAWebFileSaverTypes",
	"WAWebGdprConstants",
	"WAWebGdprDownloadMedia",
	"WAWebWamEnumChannelDyiEventType",
	"WAWebWamEnumDyiReportTypeCode",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = (u || (u = o("react"))).useState;
	function d() {
		var t = c(!1), n = t[0], a = t[1];
		return [n, function(t, n) {
			n === o("WAWebGdprConstants").ReportType.Newsletters && new (o("WAWebChannelDyiWamEvent")).ChannelDyiWamEvent({ channelDyiEventType: o("WAWebWamEnumChannelDyiEventType").CHANNEL_DYI_EVENT_TYPE.CHANNEL_REPORT_DOWNLOAD }).commit();
			var i = !0, l = n === o("WAWebGdprConstants").ReportType.Newsletters ? o("WAWebWamEnumDyiReportTypeCode").DYI_REPORT_TYPE_CODE.CHANNEL : o("WAWebWamEnumDyiReportTypeCode").DYI_REPORT_TYPE_CODE.ACCOUNT;
			a(!0), o("WAWebGdprDownloadMedia").gdprDownloadMedia(t).then(function(e) {
				return o("WAWebFileSaver").FileSaver.downloadData(e, String(s._(
					/*BTDS*/
					""
				)), o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP);
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["GDPR download failed: ", ""])), r("getErrorSafe")(t)), i = !1;
			}).finally(function() {
				a(!1), new (o("WAWebDyiReportDownloadWamEvent")).DyiReportDownloadWamEvent({
					dyiDownloadSucceeded: i,
					dyiReportType: l
				}).commit();
			});
		}];
	}
	l.useGdprDownload = d;
}), 226);
