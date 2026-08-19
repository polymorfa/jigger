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
	"react-compiler-runtime",
	"useWAWebLogEventOnce",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState;
	function p() {
		var e = o("react-compiler-runtime").c(5), t = m(_), n = t[0], r = t[1], a, i;
		e[0] !== n ? (a = function() {
			if (n == null) {
				var e = function() {
					var e = _();
					e != null && r(e);
				};
				return o("WAWebConnModel").Conn.on("me_ready", e), o("WAWebContactCollection").ContactCollection.on("add", e), o("WAWebConnModel").Conn.meReadyTriggered && e(), (function() {
					o("WAWebConnModel").Conn.off("me_ready", e), o("WAWebContactCollection").ContactCollection.off("add", e);
				});
			}
		}, i = [n], e[0] = n, e[1] = a, e[2] = i) : (a = e[1], i = e[2]), d(a, i);
		var l;
		if (e[3] === Symbol.for("react.memo_cache_sentinel") ? (l = ["isBusiness", "verifiedLevel"], e[3] = l) : l = e[3], o("useWAWebModelValues").useOptionalModelValues(n, l), n == null || !o("WAWebContactGetters").getShowAsMetaVerified(n)) return null;
		var s;
		return e[4] === Symbol.for("react.memo_cache_sentinel") ? (s = u.jsx(f, {}), e[4] = s) : s = e[4], s;
	}
	function _() {
		var e, t = (e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) != null ? e : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
		return t != null ? o("WAWebContactCollection").ContactCollection.get(t) : null;
	}
	function f() {
		var e = o("react-compiler-runtime").c(3), t = h;
		o("useWAWebLogEventOnce").useLogEventOnce(g);
		var n, a;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = s._(
			/*BTDS*/
			""
		), a = u.jsx(r("WDSIconWdsIcVerified.react"), {
			width: 24,
			height: 24
		}), e[0] = n, e[1] = a) : (n = e[0], a = e[1]);
		var i;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "biz-tools-meta-verified",
			theme: "biz-tools",
			divider: !1,
			secondaryChildren: n,
			icon: a,
			active: !1,
			onClick: t,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[2] = i) : i = e[2], i;
	}
	function g() {
		o("WAWebMetaVerifiedUserActionLogger").logMetaVerifiedEntryPointEvents(o("WAWebWamEnumMetaVerifiedUserActionAction").META_VERIFIED_USER_ACTION_ACTION.VIEW_WEB_META_VERIFIED_BUTTON);
	}
	function h() {
		o("WAWebMetaVerifiedUserActionLogger").logMetaVerifiedEntryPointEvents(o("WAWebWamEnumMetaVerifiedUserActionAction").META_VERIFIED_USER_ACTION_ACTION.CLICK_WEB_META_VERIFIED_BUTTON), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebMetaVerifiedActiveSubscriberModal.react"), {}));
	}
	l.default = p;
}), 226);
