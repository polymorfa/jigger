__d("WAWebMetaVerifiedListItem.react", [
	"fbt",
	"WAWebConnModel",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebDrawerButton.react",
	"WAWebMetaVerifiedActiveSubscriberModal.react",
	"WAWebMetaVerifiedUserActionLogger",
	"WAWebModalManager",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumMetaVerifiedUserActionAction",
	"WDSIconWdsIcVerified.react",
	"react",
	"useWAWebLogEventOnce",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState;
	function p() {
		var e = m(_), t = e[0], n = e[1];
		return d(function() {
			if (t == null) {
				var e = function() {
					var e = _();
					e != null && n(e);
				};
				return o("WAWebConnModel").Conn.on("me_ready", e), o("WAWebContactCollection").ContactCollection.on("add", e), o("WAWebConnModel").Conn.meReadyTriggered && e(), function() {
					o("WAWebConnModel").Conn.off("me_ready", e), o("WAWebContactCollection").ContactCollection.off("add", e);
				};
			}
		}, [t]), o("useWAWebModelValues").useOptionalModelValues(t, ["isBusiness", "verifiedLevel"]), t == null || !o("WAWebContactGetters").getShowAsMetaVerified(t) ? null : u.jsx(f, {});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		var e, t = (e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) != null ? e : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
		return t != null ? o("WAWebContactCollection").ContactCollection.get(t) : null;
	}
	function f() {
		var e = function() {
			o("WAWebMetaVerifiedUserActionLogger").logMetaVerifiedEntryPointEvents(o("WAWebWamEnumMetaVerifiedUserActionAction").META_VERIFIED_USER_ACTION_ACTION.CLICK_WEB_META_VERIFIED_BUTTON), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebMetaVerifiedActiveSubscriberModal.react"), {}));
		};
		return o("useWAWebLogEventOnce").useLogEventOnce(function() {
			o("WAWebMetaVerifiedUserActionLogger").logMetaVerifiedEntryPointEvents(o("WAWebWamEnumMetaVerifiedUserActionAction").META_VERIFIED_USER_ACTION_ACTION.VIEW_WEB_META_VERIFIED_BUTTON);
		}), u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "biz-tools-meta-verified",
			theme: "biz-tools",
			divider: !1,
			secondaryChildren: s._(
				/*BTDS*/
				""
			),
			icon: u.jsx(r("WDSIconWdsIcVerified.react"), {
				width: 24,
				height: 24
			}),
			active: !1,
			onClick: e,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = p;
}), 226);
