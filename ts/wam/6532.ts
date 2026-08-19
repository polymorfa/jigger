export const WamMetaAiUpsellCta = 6532 as const

export interface MetaAiUpsellCtaEvent {
  /** field 1, wire `meta_ai_upsell_cta_operation` */
  metaAiUpsellCtaOperation?: METAAIUPSELLCTAOPERATIONTYPE
  /** field 2, wire `meta_ai_upsell_cta_source` */
  metaAiUpsellCtaSource?: METAAIUPSELLCTASOURCETYPE
}