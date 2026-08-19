__d("WAWebCommunityAdminSelfDemotePopup.react", [
	"fbt",
	"WAWebCmd",
	"WAWebCommunityTransferOwnershipFlowLoadable.react",
	"WAWebConfirmPopup.react",
	"WAWebDrawerManager",
	"WAWebKeyboardTabUtils",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react"));
	function d(e) {
		var t = e.onCancel, n = e.onDemote, r = e.ref, a = s._(
			/*BTDS*/
			""
		), i = s._(
			/*BTDS*/
			""
		);
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			ref: r,
			title: a,
			onOK: n,
			onCancel: t,
			children: c.jsx("div", {
				className: "x1jchvi3 x1xet1wb",
				children: i
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.handleDismissModal, n = e.parentGroupChat, r = e.ref;
		if (n != null) {
			var a = function() {
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(o("WAWebCommunityTransferOwnershipFlowLoadable.react").CommunityTransferOwnershipFlowLoadable, {
					parentGroupChat: n,
					onEnd: function() {
						return o("WAWebCmd").Cmd.openCommunityTabbedInfo(n.id);
					}
				}), {
					transition: "flow-transition-drawer-push",
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
				}), t();
			};
			return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				testid: "community-owner-self-demote-modal",
				ref: r,
				onOK: a,
				okText: s._(
					/*BTDS*/
					""
				),
				onCancel: t,
				children: c.jsx("div", {
					className: "x1jchvi3 x1xet1wb",
					children: s._(
						/*BTDS*/
						""
					)
				})
			});
		}
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			ref: r,
			onOK: t,
			children: c.jsx("div", {
				className: "x1jchvi3 x1xet1wb",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(t) {
		var n = t.ref, r = babelHelpers.objectWithoutPropertiesLoose(t, e), o = r.isCommunitySuperAdmin, a = o === void 0 ? !1 : o, i = r.onCancel, l = r.onDemote, s = r.onFailure, u = r.parentGroupChat;
		return a ? c.jsx(m, {
			ref: n,
			handleDismissModal: s,
			parentGroupChat: u
		}) : c.jsx(d, {
			ref: n,
			onDemote: l,
			onCancel: i
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
