__d("WAWebEphemeralSettingRow.react", [
	"fbt",
	"WAWebAfterReadUtils",
	"WAWebBlockContactAction",
	"WAWebChatEphemerality",
	"WAWebChatInfoDrawerRow.react",
	"WAWebConfirmPopup.react",
	"WAWebEphemeralFbtKic",
	"WAWebEphemeralityDurations",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"WAWebNoop",
	"WDSIconWdsIcDisappearingMessages.react",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d(e) {
		var t = e.chat, n = e.groupMetadata, r = e.onClick, o = e.testid;
		return n ? u.jsx(m, {
			groupMetadata: n,
			onClick: r,
			testid: o
		}) : u.jsx(p, {
			chat: t,
			onClick: r,
			testid: o
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.onClick, n = e.testid, a = o("useWAWebModelValues").useModelValues(e.groupMetadata, [
			"ephemeralDuration",
			"participants",
			"afterReadDuration"
		]), i = function() {
			var e, t = a.afterReadDuration;
			return t != null && t > 0 && o("WAWebAfterReadUtils").isAfterReadEnabled() ? t : (e = a.ephemeralDuration) != null ? e : 0;
		}, l = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "ephemeral-setting"
				},
				onOK: o("WAWebModalManager").closeModalManager,
				okText: r("WAWebFbtCommon")("OK"),
				children: s._(
					/*BTDS*/
					""
				)
			}));
		}, c = function() {
			a.canSetEphemeralSetting() ? t() : l();
		};
		return u.jsx(_, {
			ephemeralDuration: i(),
			canChange: a.canSetEphemeralSetting(),
			onClick: c,
			testid: n
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.onClick, n = e.testid, a = o("useWAWebModelValues").useModelValues(e.chat, [
			"contact",
			"ephemeralDuration",
			"afterReadDuration"
		]), i = function() {
			var e, t = o("WAWebChatEphemerality").getAfterReadDurationForChat(a);
			return t != null ? t : (e = a.ephemeralDuration) != null ? e : 0;
		}, l = function() {
			a.contact.addPendingAction(o("WAWebBlockContactAction").unblockContact(a.contact)).then(function() {
				t(), o("WAWebModalManager").ModalManager.close();
			}).catch(r("WAWebNoop"));
		}, c = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "ephemeral-setting"
				},
				onOK: l,
				okText: r("WAWebFbtCommon")("Unblock"),
				onCancel: o("WAWebModalManager").closeModalManager,
				children: i() ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			}));
		}, d = function() {
			a.contact.isContactBlocked ? c() : t();
		};
		return u.jsx(_, {
			ephemeralDuration: i(),
			canChange: !0,
			onClick: d,
			testid: n
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.canChange, n = e.ephemeralDuration, a = e.onClick, i = e.testid, l;
		n > 0 ? t ? l = o("WAWebEphemeralityDurations").durationToLabel(n) : l = o("WAWebEphemeralFbtKic").getDisappearingMessageExplanationStringKic(n) : l = s._(
			/*BTDS*/
			""
		);
		var d = s._(
			/*BTDS*/
			""
		), m = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: d }), p = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed, {
			title: l,
			testid: "chat-dm-settings-item-value"
		}), _ = {
			iconXstyle: c.secondaryColor,
			height: 20
		}, f = u.jsx(r("WDSIconWdsIcDisappearingMessages.react"), babelHelpers.extends({ testid: "disappearing-messages-refreshed" }, _));
		return u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			icon: f,
			onClick: a,
			title: m,
			secondaryTitle: p,
			testid: i
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.EphemeralSettingRow = d, l.BaseEphemeralSettingRow = _;
}), 226);
