__d("WAWebLinkSubgroupsAction", [
	"fbt",
	"VultureJSDeadComponent.react",
	"WAFilteredCatch",
	"WALogger",
	"WAWebActionToast.react",
	"WAWebBackendErrors",
	"WAWebGroupCommunityJob",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebToastManager",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(e, t) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
			var i = o("WAWebGroupCommunityJob").sendLinkSubgroups({
				parentGroupId: t,
				subgroupIds: a
			}), l = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var t = yield i;
					if (t.failedGroups.length > 0) {
						var n = t.failedGroups.reduce(function(e, t) {
							return e && t.error === 406;
						}, !0);
						return n ? new (o("WAWebActionToast.react")).ActionType(s._(
							/*BTDS*/
							"",
							[s._plural(t.failedGroups.length)]
						)) : new (o("WAWebActionToast.react")).ActionType(s._(
							/*BTDS*/
							"",
							[s._plural(t.failedGroups.length)]
						));
					}
					return t.failedParticipantJids.length > 0 && o("WAWebModalManager").ModalManager.open(c.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebCommunityGeneralChatFailedParticipantsModal" })), new (o("WAWebActionToast.react")).ActionType(s._(
						/*BTDS*/
						"",
						[s._plural(a.length)]
					));
				} catch (t) {
					return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Subgroup linking failed"]))).verbose().sendLogs("subgroup-linking-failed"), new (o("WAWebActionToast.react")).ActionType(s._(
						/*BTDS*/
						""
					));
				}
			})(), u = new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				"",
				[s._plural(a.length)]
			));
			o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
				initialAction: u,
				pendingAction: l
			}));
			try {
				yield i;
			} catch (e) {
				o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, r("WAWebNoop"))(e);
			}
		}), m.apply(this, arguments);
	}
	l.default = d;
}), 226);
