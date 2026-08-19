__d("WASmaxOutMessagePublishSingleSelectOrProductListMixinGroup", [
	"WASmaxMixinGroupExhaustiveError",
	"WASmaxOutMessagePublishProductListMixin",
	"WASmaxOutMessagePublishSingleSelectListMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		if (t.singleSelectList) return o("WASmaxOutMessagePublishSingleSelectListMixin").mergeSingleSelectListMixin(e, t.singleSelectList);
		if (t.isProductList) return o("WASmaxOutMessagePublishProductListMixin").mergeProductListMixin(e);
		throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError();
	}
	l.mergeSingleSelectOrProductListMixinGroup = e;
}), 98);
