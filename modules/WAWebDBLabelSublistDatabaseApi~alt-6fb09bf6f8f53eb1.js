__d("WAWebDBLabelSublistDatabaseApi", ["WAWebSchemaLabelSublist"], (function(t, n, r, o, a, i, l) {
	async function e(e) {
		await o("WAWebSchemaLabelSublist").getLabelSublistTable().createOrReplace(e);
	}
	async function s(e) {
		await o("WAWebSchemaLabelSublist").getLabelSublistTable().bulkRemove([e]);
	}
	async function u(e, t) {
		var n = await o("WAWebSchemaLabelSublist").getLabelSublistTable().get(o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
			predefinedId: e,
			chatJid: t
		}));
		return n != null ? n : null;
	}
	async function c() {
		return o("WAWebSchemaLabelSublist").getLabelSublistTable().all();
	}
	l.addOrEditLabelSublist = e, l.removeLabelSublist = s, l.getLabelSublistByChat = u, l.getAllLabelSublist = c;
}), 98);
