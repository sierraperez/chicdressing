!function(e){var o={};function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=o,c.d=function(e,o,n){c.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,o){if(1&o&&(e=c(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)c.d(n,t,function(o){return e[o]}.bind(null,t));return n},c.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(o,"a",o),o},c.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},c.p="",c(c.s=11)}({11:function(e,o){jQuery(document).ready((function(e){function o(o){e(".product-sync-field").each((function(){var c=e(this);e(this).hasClass("wc-enhanced-select")&&(c=e(this).next("span.select2-container")),o?c.css("pointer-events","all").css("opacity","1.0"):c.css("pointer-events","none").css("opacity","0.4")}))}e(".woocommerce-help-tip").tipTip({attribute:"data-tip",fadeIn:50,fadeOut:50,delay:200}),e("form.wc-facebook-settings").hasClass("disconnected")&&o(!1),e("input#wc_facebook_enable_product_sync").on("change",(function(c){e("form.wc-facebook-settings").hasClass("disconnected")?e(this).css("pointer-events","none").css("opacity","0.4"):o(e(this).is(":checked"))})).trigger("change");var c=!1;function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t(e),window.syncStatusInterval||(window.syncStatusInterval=setInterval(r,1e4))}function t(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;o(!1),e('input#wc_facebook_enable_product_sync, input[name="save_product_sync_settings"]').css("pointer-events","none").css("opacity","0.4");var n=facebook_for_woocommerce_settings_sync.i18n.sync_in_progress;c&&(n=(n+=c>1?facebook_for_woocommerce_settings_sync.i18n.sync_remaining_items_plural:facebook_for_woocommerce_settings_sync.i18n.sync_remaining_items_singular).replace("{count}",c)),e("#sync_progress").show().html(n).css("color","inherit"),facebook_for_woocommerce_settings_sync.sync_in_progress=!0}function s(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";facebook_for_woocommerce_settings_sync.sync_in_progress=!1,clearInterval(window.syncStatusInterval),window.syncStatusInterval=null,o(!0),e('input#wc_facebook_enable_product_sync, input[name="save_product_sync_settings"]').css("pointer-events","all").css("opacity","1"),c?e("#sync_progress").show().html(c).css("color","#DC3232"):e("#sync_progress").hide()}function r(){facebook_for_woocommerce_settings_sync.sync_in_progress&&e.post(facebook_for_woocommerce_settings_sync.ajax_url,{action:"wc_facebook_get_sync_status",nonce:facebook_for_woocommerce_settings_sync.sync_status_nonce},(function(e){console.log(e),e.success&&(e.data>0?n(e.data):s())}))}e('input[name="save_product_sync_settings"]').on("click",(function(o){if(c)return!0;o.preventDefault();var n,t,s,r,_=e(this),i=(s=e("#wc_facebook_excluded_product_category_ids").val(),r=[],window.facebook_for_woocommerce_settings_sync&&window.facebook_for_woocommerce_settings_sync.excluded_category_ids&&(r=window.facebook_for_woocommerce_settings_sync.excluded_category_ids),e(s).not(r).get()),a=(n=e("#wc_facebook_excluded_product_tag_ids").val(),t=[],window.facebook_for_woocommerce_settings_sync&&window.facebook_for_woocommerce_settings_sync.excluded_tag_ids&&(t=window.facebook_for_woocommerce_settings_sync.excluded_tag_ids),e(n).not(t).get());i.length>0||a.length>0?e.post(facebook_for_woocommerce_settings_sync.ajax_url,{action:"facebook_for_woocommerce_set_excluded_terms_prompt",security:facebook_for_woocommerce_settings_sync.set_excluded_terms_prompt_nonce,categories:i,tags:a},(function(o){o&&!o.success?(e("#wc-backbone-modal-dialog .modal-close").trigger("click"),new e.WCBackboneModal.View({target:"facebook-for-woocommerce-modal",string:o.data}),e(".facebook-for-woocommerce-confirm-settings-change").on("click",(function(){blockModal(),c=!0,_.trigger("click")}))):(c=!0,_.trigger("click"))})):(c=!0,_.trigger("click"))})),facebook_for_woocommerce_settings_sync.sync_in_progress&&n(),e("#woocommerce-facebook-settings-sync-products").click((function(o){if(o.preventDefault(),confirm(facebook_for_woocommerce_settings_sync.i18n.confirm_sync)){t();var c=Date.now();e.post(facebook_for_woocommerce_settings_sync.ajax_url,{action:"wc_facebook_sync_products",nonce:facebook_for_woocommerce_settings_sync.sync_products_nonce},(function(e){if(console.log(e),e.success)setTimeout(r,Math.max(0,1e4-(Date.now()-c)));else{var o=facebook_for_woocommerce_settings_sync.i18n.general_error;e.data&&e.data.length>0&&(o=e.data),s(o)}})).fail((function(){s(facebook_for_woocommerce_settings_sync.i18n.general_error)}))}}))}))}});