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
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t, n, a = e.chat, i = e.onExitAndDeleteSuccess, l = e.shouldReport, d = e.spamFlow, m = c(!1), p = m[0], _ = m[1], f = (t = (n = a.groupMetadata) == null ? void 0 : n.joinedSubgroups.length) != null ? t : 0, g = function() {
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, h = async function() {
			try {
				var e;
				_(!0);
				var t = (await o("WAWebDBCommunity").getJoinedSubgroupsMetadata(a.id)).map(function(e) {
					var t = e.id;
					return o("WAWebChatCollection").ChatCollection.assertGet(t);
				});
				await o("WAWebExitCommunityAction").sendExitCommunity(a), l && d != null && o("WAWebSendSpamChatAction").sendReport({
					chat: a,
					spamFlow: d
				}), (e = a.groupMetadata) == null || e.trigger("exitParentGroup"), i == null || i();
				var n = o("WAWebExitCommunityAction").deleteCommunityAndSubgroups(t), r = new (o("WAWebActionToast.react")).ActionType(s._(
					/*BTDS*/
					"",
					[s._plural(f, "number_of_groups")]
				)), c = n.then(function(e) {
					var t = s._(
						/*BTDS*/
						""
					);
					return new (o("WAWebActionToast.react")).ActionType(t);
				});
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebActionToast.react").ActionToast, {
					initialAction: r,
					pendingAction: c
				})), await n;
			} catch (e) {
				g();
			} finally {
				_(!1), o("WAWebModalManager").ModalManager.close();
			}
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				"",
				[s._plural(f, "number_of_groups")]
			),
			onOverlayClick: o("WAWebModalManager").closeModalManager,
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: r("WAWebFbtCommon")("Cancel"),
			okDisabled: p,
			cancelDisabled: p,
			okText: s._(
				/*BTDS*/
				""
			),
			okButtonType: "solid-warning",
			onOK: h,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
