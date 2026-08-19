__d("WAWebManagedAccountBanner.react", [
	"fbt",
	"WAWebBizCoexGatingUtils",
	"WAWebManagedAccountModalLoadable",
	"WAWebModalManager",
	"WAWebUseBusinessProfile.react",
	"WAWebUserPrefsMeUser",
	"WDSIconIcInfo.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback, d = { icon: {
		color: "xhslqc4",
		flexShrink: "x2lah0s",
		$$css: !0
	} };
	function m() {
		var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), t = o("WAWebUseBusinessProfile.react").useBusinessProfile(e, ["isAuthorizedAgent", "parentCompanyName"]), n = t == null ? void 0 : t.parentCompanyName, a = c(function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebManagedAccountModalLoadable").WAWebManagedAccountModalLoadable, { parentCompanyName: n }), { transition: "modal" });
		}, [n]);
		return !o("WAWebBizCoexGatingUtils").authAgentFeatureControlEnabled() || (t == null ? void 0 : t.isAuthorizedAgent) !== !0 ? null : u.jsxs("div", {
			className: "x6s0dn4 x78zum5 x1qvou4u x1s70e7g x1xrf6ya xscbp6u x1phvje8 xcldk2z",
			children: [u.jsx(r("WDSIconIcInfo.react"), {
				width: 20,
				height: 20,
				iconXstyle: d.icon
			}), u.jsxs("span", {
				className: "x14ug900",
				children: [
					s._(
						/*BTDS*/
						""
					),
					" ",
					u.jsx("button", {
						type: "button",
						onClick: a,
						className: "x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1r8hjv8 x1ypdohk x1qlqyl8 xexx8yu xyri2b x18d9i69 x1c1uobl",
						children: s._(
							/*BTDS*/
							""
						)
					})
				]
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
