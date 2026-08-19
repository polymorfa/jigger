__d("WAWebContactManagerBulkAddToListAction", [
	"WALogger",
	"WAWebFindChatAction",
	"WAWebLabelCollection",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	var e;
	async function s(t, n) {
		var r = await Promise.allSettled(Array.from(t).map(function(e) {
			return o("WAWebFindChatAction").findOrCreateLatestChat(o("WAWebWidFactory").createWid(e), "contactManager").then(function(e) {
				var t = e.chat;
				return t;
			});
		})), a = [];
		for (var i of r) i.status === "fulfilled" && a.push(i.value);
		var l = r.length - a.length;
		l > 0 && o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"[customer_manager] bulkAddToList: ",
			" of ",
			" find-or-create calls failed"
		])), l, r.length).sendLogs("customer_manager_bulk_add_to_list_find_or_create_failed"), a.length !== 0 && o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels([{
			id: n,
			type: "add"
		}], a);
	}
	l.bulkAddCustomersToList = s;
}), 98);
