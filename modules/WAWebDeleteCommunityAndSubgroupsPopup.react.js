__d("WAWebDeleteCommunityAndSubgroupsPopup.react", [
	"fbt",
	"WAWebActionToast.react",
	"WAWebChatCollection",
	"WAWebConfirmPopup.react",
	"WAWebDBCommunity",
	"WAWebExitCommunityAction",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"WAWebSendSpamChatAction",
	"WAWebToast.react",
	"WAWebToastManager",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t, a, i = e.chat, l = e.onExitAndDeleteSuccess, d = e.shouldReport, m = e.spamFlow, p = c(!1), _ = p[0], f = p[1], g = (t = (a = i.groupMetadata) == null ? void 0 : a.joinedSubgroups.length) != null ? t : 0, h = function() {
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, y = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var e;
					f(!0);
					var t = (yield o("WAWebDBCommunity").getJoinedSubgroupsMetadata(i.id)).map(function(e) {
						var t = e.id;
						return o("WAWebChatCollection").ChatCollection.assertGet(t);
					});
					yield o("WAWebExitCommunityAction").sendExitCommunity(i), d && m != null && o("WAWebSendSpamChatAction").sendReport({
						chat: i,
						spamFlow: m
					}), (e = i.groupMetadata) == null || e.trigger("exitParentGroup"), l == null || l();
					var n = o("WAWebExitCommunityAction").deleteCommunityAndSubgroups(t), r = new (o("WAWebActionToast.react")).ActionType(s._(
						/*BTDS*/
						"",
						[s._plural(g, "number_of_groups")]
					)), a = n.then(function(e) {
						var t = s._(
							/*BTDS*/
							""
						);
						return new (o("WAWebActionToast.react")).ActionType(t);
					});
					o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebActionToast.react").ActionToast, {
						initialAction: r,
						pendingAction: a
					})), yield n;
				} catch (e) {
					h();
				} finally {
					f(!1), o("WAWebModalManager").ModalManager.close();
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				"",
				[s._plural(g, "number_of_groups")]
			),
			onOverlayClick: o("WAWebModalManager").closeModalManager,
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: r("WAWebFbtCommon")("Cancel"),
			okDisabled: _,
			cancelDisabled: _,
			okText: s._(
				/*BTDS*/
				""
			),
			okButtonType: "solid-warning",
			onOK: y,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
