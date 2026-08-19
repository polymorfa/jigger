__d("WAWebBlockedParticipantWarningDialog.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebConfirmPopup.react",
	"WAWebDrawerManager",
	"WAWebFbtCommon",
	"WAWebName.react",
	"WAWebSettingsConst",
	"WAWebSettingsFlowLoadable",
	"WAWebText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(3), n = e.blockedContacts;
		if (n.length === 1) {
			var r;
			if (t[0] !== n[0]) {
				var a = u.jsx(o("WAWebName.react").Name, {
					contact: n[0],
					breakWord: !0
				});
				r = s._(
					/*BTDS*/
					"",
					[s._param("contact name", a)]
				), t[0] = n[0], t[1] = r;
			} else r = t[1];
			return r;
		}
		var i;
		return t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[2] = i) : i = t[2], i;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(3), n = e.blockedContacts;
		if (n.length === 1) {
			var r;
			if (t[0] !== n[0]) {
				var a = u.jsx(o("WAWebName.react").Name, {
					contact: n[0],
					breakWord: !0
				});
				r = s._(
					/*BTDS*/
					"",
					[s._param("contact name", a)]
				), t[0] = n[0], t[1] = r;
			} else r = t[1];
			return r;
		}
		var i;
		return t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[2] = i) : i = t[2], i;
	}
	function m(e) {
		var t = e.blockedContacts, n = e.onClose, a = e.onExitGroup, i = e.onViewChat, l = function() {
			n(), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "settings",
				initialStep: o("WAWebSettingsConst").SettingsSteps.Blocked
			} : u.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
				onEnd: o("WAWebDrawerManager").closeDrawerLeft,
				initialStep: o("WAWebSettingsConst").SettingsSteps.Blocked
			}));
		}, m = u.jsx(c, { blockedContacts: t }), p = u.jsx(d, { blockedContacts: t }), _ = a != null ? {
			text: r("WAWebFbtCommon")("Exit Group"),
			onClick: a
		} : void 0;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "blocked_participant_warning_dialog",
			tsNavigationData: {
				surface: "chat",
				viewName: "blocked-participant-warning"
			},
			title: m,
			onOK: i,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: n,
			cancelText: s._(
				/*BTDS*/
				""
			),
			extraButtonProps: _,
			splitLayout: _ != null,
			children: u.jsxs(o("WAWebText.react").WAWebTextMuted, { children: [
				p,
				" ",
				u.jsx(o("WAWebText.react").WAWebClickableText, {
					onClick: l,
					color: "teal",
					children: s._(
						/*BTDS*/
						""
					)
				})
			] })
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
