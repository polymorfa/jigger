__d("WAWebAttachVcardsFlow.react", [
	"fbt",
	"$InternalEnum",
	"WAWebABProps",
	"WAWebBizBotTosUtils",
	"WAWebSelectModal.react",
	"WAWebSendContactsAction",
	"WAWebVcardConfirmModal.react",
	"react",
	"useWAWebFilteredContacts",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useRef, d = n("$InternalEnum").Mirrored(["Select", "Confirm"]);
	function m(e) {
		var t = o("useWAWebFlow").useFlow(d.Select), n = t[0], a = t[1], i = c([]), l = r("useWAWebFilteredContacts")();
		if (a.step == null) return null;
		var m;
		switch (a.step) {
			case d.Select: {
				var p = function(t) {
					var e = t.selectedItems;
					a.push(d.Confirm), i.current = e;
				}, _ = function() {
					return i.current;
				}, f = o("WAWebABProps").getABPropConfigValue("group_size_limit");
				m = u.jsx(o("WAWebSelectModal.react").SelectModal, {
					title: s._(
						/*BTDS*/
						""
					),
					onCancel: function() {
						e.onCancel(), a.pop();
					},
					contacts: l,
					onConfirm: p,
					getInitialItems: _,
					listType: o("WAWebSelectModal.react").ListType.ContactSelectModal,
					maxItems: f,
					includeYouSection: !0,
					allowBlockedContacts: !0,
					allowUnknownContactSearch: !1,
					tsNavigationData: {
						surface: "unknown",
						viewName: "attach-vcards"
					}
				});
				break;
			}
			case d.Confirm: {
				var g = async function(n, i) {
					var t;
					a.end();
					var l = e.chat;
					await o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(l);
					var s = l.composeQuotedMsg;
					l.composeQuotedMsg = null;
					var u = ((t = l.getComposeContents()) == null ? void 0 : t.ctwaContext) || void 0;
					r("WAWebSendContactsAction")({
						chat: l,
						contacts: n,
						ctwaContext: u,
						options: i,
						quotedMsg: s
					}), e.onContactsSent();
				};
				m = u.jsx(r("WAWebVcardConfirmModal.react"), {
					contactList: i.current,
					onSend: function(t) {
						return void g(i.current, t);
					},
					onBack: function() {
						a.pop();
					},
					chat: e.chat
				});
				break;
			}
		}
		return u.jsx(n, {
			flow: a,
			children: m
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
