__d("WAWebForwardMessageFlow.react", [
	"fbt",
	"$InternalEnum",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebFlow",
	"useWAWebStatusPrivacySettingConfig"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useState, g = 3e3;
	function h(t) {
		return t.msgs.some(function(e) {
			return e.type === "gp2" && e.subtype === "create";
		}) ? (c || (c = n("Promise"))).resolve() : new (c || (c = (n("Promise"))))(function(n) {
			var r = function(o) {
				o.type === "gp2" && o.subtype === "create" && (t.msgs.off("add", r), window.clearTimeout(a), n());
			}, a = window.setTimeout(function() {
				t.msgs.off("add", r), o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[forward-to-new-group] context card wait timed out"]))).sendLogs("forward-to-new-group-context-card-timeout"), n();
			}, g);
			t.msgs.on("add", r);
		});
	}
	var y = n("$InternalEnum").Mirrored(["FORWARD_SELECT", "NEW_GROUP_FLOW"]), C = n("$InternalEnum").Mirrored(["Hidden", "Audience"]);
	function b(e) {
		var t = e.getAnnouncementSummary, a = e.msgs, i = e.onBack, l = e.onClose, c = e.onForward, d = f(y.FORWARD_SELECT), p = d[0], g = d[1], b = o("useWAWebStatusPrivacySettingConfig").useWAWebStatusPrivacySettingConfig(), v = b.statusPostingPrivacyConfig, S = b.updateStatusPostingPrivacyConfig, R = o("useWAWebFlow").useFlow(C.Hidden), L = R[1], E = L.pop, k = L.push, I = _(function() {
			k(C.Audience, "flow-transition-box-size-drawer-push");
		}, [k]), T = _(function() {
			E("flow-transition-box-size-drawer-pop");
		}, [E]), D = _(function() {
			g(y.NEW_GROUP_FLOW);
		}, []), x = _(function() {
			g(y.FORWARD_SELECT);
		}, []), $ = _((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield e;
				if (t != null) try {
					var n = yield o("WAWebFindChatAction").findOrCreateLatestChat(t, "forwardSelectedModals"), r = n.chat;
					yield h(r), l(), yield o("WAWebForwardMessagesToChat").forwardMessagesToChats({
						msgs: [].concat(a),
						chats: [r],
						includeCaption: !0
					}), c == null || c([].concat(a));
				} catch (e) {
					o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[forward-to-new-group] fwd msgs failed"]))).sendLogs("forward-to-new-group-error"), l();
				}
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [
			a,
			l,
			c
		]);
		return p === y.NEW_GROUP_FLOW ? m.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Tower,
			onOverlayClick: function() {
				return o("WAWebModalManager").ModalManager.closeSupportOrModal();
			},
			children: m.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
				viewType: r("WAWebDrawerViewType").MODAL,
				onCreateGroup: $,
				onEnd: x,
				participantsDrawerTitle: s._(
					/*BTDS*/
					""
				),
				groupCreateEntryPoint: o("WAWebWamEnumGroupCreateEntryPoint").GROUP_CREATE_ENTRY_POINT.FORWARD
			})
		}) : m.jsxs(m.Fragment, { children: [m.jsx(r("WAWebForwardMessageModal.react"), {
			msgs: a,
			onClose: l,
			onBack: i,
			onForward: c,
			onNewGroupClick: D,
			onEditStatusAudience: I,
			getAnnouncementSummary: t
		}), m.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: L.transition,
			children: L.step === C.Audience ? m.jsx("div", {
				"data-testid": "status_audience_overlay",
				className: "xixxii4 x13vifvy x1o0tod x5yr21d xh8yej3 xjhb59c",
				children: m.jsx(o("WAWebStatusPrivacySettingsFlowLoadable").StatusPrivacySettingsFlowLoadable, {
					statusPostingPrivacyConfig: v,
					setStatusPostingPrivacyConfig: S,
					surface: o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SURFACE.STATUS_PRIVACY_SETTINGS,
					onClose: T
				})
			}, "status-audience") : null
		})] });
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 226);
