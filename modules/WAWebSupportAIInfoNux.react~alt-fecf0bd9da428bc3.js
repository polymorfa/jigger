__d("WAWebSupportAIInfoNux.react", [
	"WAWebModalManager",
	"WAWebSupportAINux.react",
	"WAWebSupportAiSessionWamEvent",
	"WAWebWamEnumSupportAiEventType",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(r("WAWebSupportAINux.react"), { onOK: c }), e[0] = t) : t = e[0], t;
	}
	async function c() {
		o("WAWebModalManager").ModalManager.close(), new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.SUPPORT_AI_SCREEN_OK_CLICKED }).commit();
	}
	l.default = u;
}), 98);
