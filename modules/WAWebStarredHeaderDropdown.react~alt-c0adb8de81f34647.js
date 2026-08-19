__d("WAWebStarredHeaderDropdown.react", [
	"fbt",
	"WAWebModalManager",
	"WAWebStarredMsgsUtils",
	"WAWebThreadMsgUtils",
	"WAWebUnstarAllPopup.react",
	"WAWebUnstarRefreshedIcon.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat, n = e.msgs, a = e.threadId, i;
		n.length > 0 ? i = n : i = t != null ? o("WAWebStarredMsgsUtils").getStarredMsgs(t).toArray() : [], a != null && (i = i.filter(function(e) {
			return o("WAWebThreadMsgUtils").isMsgInThread(e, a);
		}));
		var l = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebUnstarAllPopup.react"), {
				msgs: i,
				chat: t
			}));
		};
		return u.jsx(r("WDSMenu.react"), { children: u.jsx(r("WDSMenuItem.react"), {
			Icon: o("WAWebUnstarRefreshedIcon.react").UnstarRefreshedIcon,
			testid: "mi-unstar-all menu-item",
			onPress: l,
			disabled: i.length === 0,
			title: s._(
				/*BTDS*/
				""
			)
		}) });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
