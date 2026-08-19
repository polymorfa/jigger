__d("WAWebDocGallery.react", [
	"fbt",
	"Promise",
	"WALogger",
	"WAWebFrontendMsgGetters",
	"WAWebMediaHubEmptyGalleryEntryPoint.react",
	"WAWebMessageGallery.react",
	"WAWebMsgsCollectionFilterer",
	"WAWebThreadMsgUtils",
	"WAWebToast.react",
	"WAWebToastManager",
	"getErrorSafe",
	"react",
	"useLazyRef",
	"useWAWebListener",
	"useWAWebUiIdle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = [
		"chat",
		"docMsgs",
		"filterText",
		"isFilterEnabled",
		"threadId"
	], c, d, m = d || (d = o("react")), p = d.useEffect;
	function _(t) {
		var a = t.chat, i = t.docMsgs, l = t.filterText, d = t.isFilterEnabled, _ = d === void 0 ? !1 : d, f = t.threadId, g = babelHelpers.objectWithoutPropertiesLoose(t, u), h = r("useWAWebUiIdle")(), y = r("useLazyRef")(function() {
			return new (r("WAWebMsgsCollectionFilterer"))(function(e) {
				var t = [], n = o("WAWebFrontendMsgGetters").getText(e);
				n != null && t.push(n);
				var r = e.mediaData.filename;
				return t.push(r), t.join(" ");
			});
		}), C = [
			"add",
			"remove",
			"reset",
			"query_doc_before"
		];
		o("useWAWebListener").useListener(i, "add", function(e) {
			_ && y.current.cacheMessageTokens(e);
		}), o("useWAWebListener").useListener(i, "remove", function(e) {
			_ && y.current.removeMessageTokensFromCache(e);
		}), o("useWAWebListener").useListener(i, "reset", function() {
			_ && y.current.clearTokensCache();
		}), p(function() {
			_ && i.forEach(function(e) {
				y.current.cacheMessageTokens(e);
			});
		}, [
			i,
			y,
			_
		]);
		var b = function(n) {
			i.hasDocBefore && h(function() {
				i.queryDocs(a, n).catch(function(t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebDocGallery: failed to load older docs"]))).catching(r("getErrorSafe")(t)).sendLogs("doc-gallery-load-failed"), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				});
			});
		}, v;
		return _ ? v = function(t, n) {
			return y.current.filter({
				msgCollection: t,
				searchText: l,
				signal: n,
				threadId: f
			});
		} : f != null && (v = function(t, r) {
			return (c || (c = n("Promise"))).resolve(t.filter(function(e) {
				return o("WAWebThreadMsgUtils").isMsgInThread(e, f);
			}));
		}), m.jsx(r("WAWebMessageGallery.react"), babelHelpers.extends({
			testid: "doc-gallery",
			msgsCollection: i,
			msgsCollectionUpdateEvents: C,
			queryCollection: b,
			getHasBefore: function() {
				return i.hasDocBefore;
			},
			getQueryBefore: function() {
				return i.queryDocBefore;
			},
			emptyText: s._(
				/*BTDS*/
				""
			),
			tabName: o("WAWebMediaHubEmptyGalleryEntryPoint.react").MediaHubTabs.DOCS,
			chat: a,
			filterMessages: v,
			threadId: f != null ? f : void 0
		}, g));
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
