__d("WAWebMessageAlbumWrapperMenuContent.react", [
	"fbt",
	"WAWebEnvironment",
	"WAWebMsgActionCanDownloadMsg",
	"WAWebMsgActionCapability",
	"WDSIconIcDelete.react",
	"WDSIconIcDownload.react",
	"WDSIconIcFastForward.react",
	"WDSIconIcGrade.react",
	"WDSIconWdsIcGradeSlash.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"cr:7565",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo;
	function d(e) {
		return c(function() {
			var t = e.every(function(e) {
				return o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(e.unsafe(), !0);
			}), a = e.every(function(e) {
				return o("WAWebMsgActionCapability").canDeleteMsg(e.unsafe());
			}), i = e.every(function(e) {
				return o("WAWebMsgActionCapability").canForwardMsg(e.unsafe());
			}), l = e.every(function(e) {
				return o("WAWebMsgActionCapability").canStarMsg(e.unsafe());
			}), s = e.every(function(e) {
				return e.star;
			}), u = r("WAWebEnvironment").isWindows && n("cr:7565") != null && n("cr:7565").supportsBulkMediaSaving();
			return {
				canAllDownload: t,
				canAllDelete: a,
				canForwardAll: i,
				canAllStar: l,
				allMessagesHasStar: s,
				canSaveAllFilesDirectly: u
			};
		}, [e]);
	}
	function m(e) {
		var t = e.handleDownload, n = e.handleOpenDeleteFlow, o = e.handleOpenForwardFlow, a = e.handleSaveAll, i = e.handleStar, l = e.handleUnstar, c = e.msgs, m = d(c), p = [];
		return m.canAllDownload && !m.canSaveAllFilesDirectly && p.push(u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcDownload.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: t,
			testid: "mi-msg-download"
		}, "download")), m.canForwardAll && p.push(u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcFastForward.react"),
			iconDirectional: !0,
			title: s._(
				/*BTDS*/
				""
			),
			onPress: function() {
				o(!0);
			},
			testid: "mi-msg-forward"
		}, "forward")), m.canAllStar && (m.allMessagesHasStar ? p.push(u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconWdsIcGradeSlash.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: l,
			testid: "mi-msg-unstar"
		}, "star")) : p.push(u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcGrade.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: i,
			testid: "mi-msg-star"
		}, "star"))), m.canAllDownload && m.canSaveAllFilesDirectly && p.push(u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcDownload.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: a,
			testid: "mi-msg-save"
		}, "save")), m.canAllDelete && p.push(u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcDelete.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: function() {
				n(!0);
			},
			testid: "mi-msg-delete",
			destructive: !0
		}, "delete")), u.jsx(r("WDSMenu.react"), {
			useMaxWidth: !1,
			children: p
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.WAWebMessageAlbumWrapperMenuContent = m;
}), 226);
