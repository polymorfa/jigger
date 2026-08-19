__d("WAWebForwardMessageFlow.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WAWebDrawerViewType",
	"WAWebFindChatAction",
	"WAWebForwardMessageModal.react",
	"WAWebForwardMessagesToChat",
	"WAWebLogStatusPrivacySettings",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebNewGroupFlowLoadable",
	"WAWebStatusPrivacySettingsFlowLoadable",
	"WAWebVelocityTransitionGroup",
	"WAWebWamEnumGroupCreateEntryPoint",
	"react",
	"useWAWebFlow",
	"useWAWebStatusPrivacySettingConfig"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useState, f = 3e3;
	function g(t) {
		return t.msgs.some(function(e) {
			return e.type === "gp2" && e.subtype === "create";
		}) ? Promise.resolve() : new Promise(function(n) {
			var r = function(o) {
				o.type === "gp2" && o.subtype === "create" && (t.msgs.off("add", r), window.clearTimeout(a), n());
			}, a = window.setTimeout(function() {
				t.msgs.off("add", r), o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[forward-to-new-group] context card wait timed out"]))).sendLogs("forward-to-new-group-context-card-timeout"), n();
			}, f);
			t.msgs.on("add", r);
		});
	}
	var h = n("$InternalEnum").Mirrored(["FORWARD_SELECT", "NEW_GROUP_FLOW"]), y = n("$InternalEnum").Mirrored(["Hidden", "Audience"]);
	function C(e) {
		var t = e.getAnnouncementSummary, n = e.msgs, a = e.onBack, i = e.onClose, l = e.onForward, c = _(h.FORWARD_SELECT), m = c[0], f = c[1], C = o("useWAWebStatusPrivacySettingConfig").useWAWebStatusPrivacySettingConfig(), b = C.statusPostingPrivacyConfig, v = C.updateStatusPostingPrivacyConfig, S = o("useWAWebFlow").useFlow(y.Hidden), R = S[1], L = R.pop, E = R.push, k = p(function() {
			E(y.Audience, "flow-transition-box-size-drawer-push");
		}, [E]), I = p(function() {
			L("flow-transition-box-size-drawer-pop");
		}, [L]), T = p(function() {
			f(h.NEW_GROUP_FLOW);
		}, []), D = p(function() {
			f(h.FORWARD_SELECT);
		}, []), x = p(async function(e) {
			var t = await e;
			if (t != null) try {
				var r = await o("WAWebFindChatAction").findOrCreateLatestChat(t, "forwardSelectedModals"), a = r.chat;
				await g(a), i(), await o("WAWebForwardMessagesToChat").forwardMessagesToChats({
					msgs: [].concat(n),
					chats: [a],
					includeCaption: !0
				}), l == null || l([].concat(n));
			} catch (e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[forward-to-new-group] fwd msgs failed"]))).sendLogs("forward-to-new-group-error"), i();
			}
		}, [
			n,
			i,
			l
		]);
		return m === h.NEW_GROUP_FLOW ? d.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Tower,
			onOverlayClick: function() {
				return o("WAWebModalManager").ModalManager.closeSupportOrModal();
			},
			children: d.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
				viewType: r("WAWebDrawerViewType").MODAL,
				onCreateGroup: x,
				onEnd: D,
				participantsDrawerTitle: s._(
					/*BTDS*/
					""
				),
				groupCreateEntryPoint: o("WAWebWamEnumGroupCreateEntryPoint").GROUP_CREATE_ENTRY_POINT.FORWARD
			})
		}) : d.jsxs(d.Fragment, { children: [d.jsx(r("WAWebForwardMessageModal.react"), {
			msgs: n,
			onClose: i,
			onBack: a,
			onForward: l,
			onNewGroupClick: T,
			onEditStatusAudience: k,
			getAnnouncementSummary: t
		}), d.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: R.transition,
			children: R.step === y.Audience ? d.jsx("div", {
				"data-testid": "status_audience_overlay",
				className: "xixxii4 x13vifvy x1o0tod x5yr21d xh8yej3 xjhb59c",
				children: d.jsx(o("WAWebStatusPrivacySettingsFlowLoadable").StatusPrivacySettingsFlowLoadable, {
					statusPostingPrivacyConfig: b,
					setStatusPostingPrivacyConfig: v,
					surface: o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SURFACE.STATUS_PRIVACY_SETTINGS,
					onClose: I
				})
			}, "status-audience") : null
		})] });
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
