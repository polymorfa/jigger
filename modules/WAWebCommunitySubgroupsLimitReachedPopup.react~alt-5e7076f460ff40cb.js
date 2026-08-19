__d("WAWebCommunitySubgroupsLimitReachedPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.isCommunityCreation, n = t === void 0 ? !1 : t, r = e.maxSubgroups;
		return n ? u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "max-subgroup-count-creation-popup",
			onOK: o("WAWebModalManager").closeModalManager,
			children: s._(
				/*BTDS*/
				"",
				[s._plural(r - 1, "max_subgroup_count")]
			)
		}) : u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "max-subgroup-count-popup",
			onOK: o("WAWebModalManager").closeModalManager,
			children: s._(
				/*BTDS*/
				"",
				[s._plural(r - 1, "max_subgroups")]
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
