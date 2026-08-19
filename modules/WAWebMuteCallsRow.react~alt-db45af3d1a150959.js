__d("WAWebMuteCallsRow.react", [
	"fbt",
	"WAWebChatGetters",
	"WAWebChatInfoDrawerRow.react",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebMuteGetters",
	"WAWebMutePopup.react",
	"WAWebStateUtils",
	"WDSIconIcCall.react",
	"WDSSwitch.react",
	"react",
	"useWAWebChatValues",
	"useWAWebMuteValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = 0;
	function d(e) {
		var t = e.chat, n = e.containerXstyle, a = e.mute, i = e.showIcon, l = i === void 0 ? !0 : i, d = o("useWAWebChatValues").useChatValues(t.id, [o("WAWebChatGetters").getIsGroup]), m = d[0], p = o("useWAWebMuteValues").useMuteValues(a.id, [o("WAWebMuteGetters").getIsCallMuted]), _ = p[0], f = function() {
			o("WAWebStateUtils").unproxy(a).muteCall(c), o("WAWebModalManager").ModalManager.close();
		}, g = function() {
			var e = m ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: f,
				okText: s._(
					/*BTDS*/
					""
				),
				onCancel: o("WAWebModalManager").closeModalManager,
				cancelText: s._(
					/*BTDS*/
					""
				),
				tsNavigationData: {
					surface: "unknown",
					viewName: "unmute-calls-chat"
				},
				children: e
			}));
		}, h = function() {
			var e = s._(
				/*BTDS*/
				""
			), t = m ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebMutePopup.react"), {
				title: e,
				mute: a,
				onMute: function(t) {
					o("WAWebStateUtils").unproxy(a).muteCall(t);
				},
				children: t
			}), { transition: "modal" });
		}, y = _ ? g : h, C = s._(
			/*BTDS*/
			""
		), b = "", v = u.jsx(r("WDSSwitch.react"), {
			tabIndex: -1,
			"aria-label": b,
			value: _
		}), S = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: C }), R = u.jsx(r("WDSIconIcCall.react"), {});
		return u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			icon: l ? R : null,
			testid: "block-mute-calls",
			side: v,
			onClick: y,
			title: S,
			containerXstyle: n
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
